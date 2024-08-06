import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "./CountryCode.json";
import axios from "axios";
import { toast } from "react-hot-toast";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    message: "",
  });

  const { firstname, lastname, email, phoneno, message } = formData;
  const handleOnChange = async (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/fritado/support/contact";
      const { formData: res } = await axios.post(url, formData);
      toast.success(
        "Thank you for reaching out to us. We'll review your message and respond within 24 hours. In the meantime, feel free to visit our website and explore our blog."
      );
    } catch (error) {
      console.error(error);
      toast.error("This is an error!");
    }
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phoneno: "",
      message: "",
    });
  };

  return (
    <form onSubmit={sendMessage} className="w-full flex flex-col gap-6">
    <div className="flex flex-col lg:flex-row gap-6">
      {/* First Name */}
      <div className="flex flex-col lg:w-1/2">
       
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={handleOnChange}
          placeholder="Enter First Name"
          className="p-3 border rounded shadow-sm"
        />
      </div>

      {/* Last Name */}
      <div className="flex flex-col lg:w-1/2">
        
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={handleOnChange}
          placeholder="Enter Last Name"
          className="p-3 border rounded shadow-sm"
        />
      </div>
    </div>

    {/* Email */}
    <div className="flex flex-col">
      
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleOnChange}
        placeholder="Enter Email"
        className="p-3 border rounded shadow-sm"
      />
    </div>

    {/* Phone Number */}
    <div className="flex flex-col">       
        <div className="flex gap-3">
          <select
            name="dropdown"
            id="dropdown"
            className="p-3 border rounded shadow-sm w-24"
          >
            {CountryCode.map((element, index) => (
              <option key={index} value={element.code}>
                {element.code} - {element.country}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="phoneno"
            id="phoneno"
            value={phoneno}
            onChange={handleOnChange}
            placeholder="12345 67890"
            className="p-3 border rounded shadow-sm flex-grow"
          />
        </div>
      </div>
    {/* Message */}
    <div className="flex flex-col">
     
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="5"
        value={message}
        onChange={handleOnChange}
        placeholder="Enter Your message here"
        className="p-3 border rounded shadow-sm"
      />
    </div>

    {/* Submit Button */}
    <div className="self-start">
      <button
        className="text-white py-3 px-6 rounded shadow hover:bg-blue-700 transition"
        type="submit"
        style={{ background: "rgba(47, 130, 162, 0.8588235294" }}
      >
        Send Message
      </button>
    </div>
  </form>
);
};

export default ContactUsForm;
