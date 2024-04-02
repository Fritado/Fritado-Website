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
    <form onSubmit={sendMessage} className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-6 lg:flex-row">
        {/*firstname */}
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label
            htmlFor="firstname"
            className="text-[16px] text-stone-900 text-justify font-semibold"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={handleOnChange}
            placeholder="Enter First Name"
            style={{
              boxShadow:
                " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
            className="p-3 text-[16px] mb-2
           leading-[20px] placeholder:text-richblack-400 "
          />
        </div>

        {/*lastname */}
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label
            htmlFor="lastname"
            className="text-[16px]text-stone-900  text-justify font-semibold"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={handleOnChange}
            placeholder="Enter Last Name"
            style={{
              boxShadow:
                " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
            className=" p-3 text-[16px] mb-2
           leading-[20px] placeholder:text-richblack-400 "
          />
        </div>
      </div>

      {/*email */}
      <div className="flex flex-col gap-2 ">
        <label
          htmlFor="email"
          className="text-[16px]  text-gray-800 text-justify font-semibold"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter Email here"
          style={{
            boxShadow:
              " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
          className="p-3 text-[16px] mb-2
        leading-[20px] placeholder:text-richblack-400 "
        />
      </div>
      {/*phone no */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="phonenumber"
          className="text-[16px] text-stone-800 text-justify font-semibold"
        >
          Phone Number
        </label>
        <div className="flex gap-3">
          <div className=" flex w-[63px] flex-col">
            {/*dropdown */}
            <select
              name="dropdown"
              id="dropdown"
              className="py-3 text-[16px] mb-2
              placeholder:text-richblack-400"
              style={{
                boxShadow:
                  " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
            >
              {CountryCode.map((element, index) => {
                return (
                  <option key={index} value={element.code}>
                    {element.code} - {element.country}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="phoneno"
              id="phonenumber"
              value={phoneno}
              onChange={handleOnChange}
              placeholder="12345 67890"
              style={{
                boxShadow:
                  " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
              className="p-3 text-[16px] mb-2
              leading-[20px] placeholder:text-richblack-400"
              // {...register("phoneNo", {
              //   required: {
              //     value: true,
              //     message: "Please enter your Phone Number",
              //   },
              //   maxLength: { value: 10, message: "Invalid Phone Number" },
              //   minLnegth: { value: 8, message: "Invalid Phone Number" },
              // })}
            />
          </div>
        </div>
      </div>

      {/*message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[16px] text-stone-800 text-justify font-semibold"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="3"
          value={message}
          onChange={handleOnChange}
          placeholder="Enter Your message here"
          style={{
            boxShadow:
              " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
          className="p-3 text-[16px] mb-2
        leading-[20px] placeholder:text-richblack-400 "
        />
      </div>

      {/*button */}
      <div className="mt-2 self-start">
        <button
          className="btn btn-base-color border-radius-5 d-flex align-items-center"
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
