import ContactDetails from "../components/ContactUs/ContactDetails";
import ContactUsForm from "../components/ContactUs/ContactUsForm";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";
import Breadcrumb from "../components/commonComp/Breadcrumb";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <Breadcrumb title={"Contact"} />

      <div className="section-title text-center mt-8">
        <h6 className="sub-title-sky-blue"> Let's discuss</h6>
        <h2 className="title">
          Whatever question you have, please feel free to ask.
        </h2>
      </div>

      <div className="mx-auto w-11/12 max-w-maxContent flex flex-col justify-between gap-10 lg:flex-row mt-14 mb-20 ">
        {/**contact form */}
        <div className="lg:w-[57%]">
          <div className="text-richblack-300  lg:p-10 flex flex-col gap-2 ">
            <h3 className="text-3xl leading-6 font-semibold text-richblack-5 text-left">
              Write US
            </h3>

            <div className="mt-7 ">
              <ContactUsForm />
            </div>
          </div>
        </div>

        {/**contact details */}
        <div className="lg:w-[43%]" style={{marginTop:"8rem"}}>
          <ContactDetails />
        </div>
      </div>
      {/**Addrrss part */}
      {/*<div className="contact-page-list">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/13.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h5>Contacts us</h5>
                  <h6>88 01234 2345 12</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/14.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h5>Your Email</h5>
                  <h6>Comism@mail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/15.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h5>Location</h5>
                  <h6>99 united,America</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>*/}

      {/*<!-- Start Map Area -->*/}

      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.17719124099!2d77.58668581113459!3d12.914331543311858!2m3!1f0!2f0!3f0!
      3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1504b9c7cf71%3A0x282db70bdaa95a8a!2sFritado%20Technologies%20Private%20
      Limited!5e0!3m2!1sen!2sin!4v1703828458866!5m2!1sen!2sin"
          className="w-full h-[450px]"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
