import React from "react";
import ShowHide from "./ShowHide";

const FaqAreaOne = () => {

    const data = [
      {
        heading: "Innovation",
        para: "Embedded in our core is a commitment to innovation, drivingus to render old, outdated methods obsolete and fully harness the potential of today's technology to deliver superior outcomes for our clients.",
      },
      {
        heading: "Boldness",
        para: " Our mission isn't about incremental improvements; it's aboutredefining the landscape of SEO for content creation. Thisdemands venturing onto uncharted paths and making daringdecisions.",
      },
      {
        heading: "Transparency",
        para: "We firmly believe that transparency surrounding artificial intelligence is paramount. It's crucial to demonstrate that AI operates as intended and upholds ethical standards. While skepticism persists, openness is key to dispelling doubts.",
      },
      {
        heading: "Passion",
        para: "Achieving excellence demands unwavering dedication and fervor. We are deeply passionate about our field and relish the fusion of state-of-the-art technology, craftsmanship, and expertise.",
      },
    ];
  
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className="faq-area faq-area-margin-top bg-cover pd-top-90 pd-bottom-110"
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className="container">
          <div className="row pd-top-120">
            <div
              className="col-xl-5 col-lg-6 col-md-8 order-lg-last"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner pt-lg-3">
                <img
                  className="main-img"
                  src="assets/img/about/4.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 mt-4 mt-lg-0">
                <h6 className="sub-title">
                  The values that drive everything we do
                </h6>
                <h2 className="title">
                  Some <span> fundamental principles </span> guide us every day.
                </h2>
                <p className="content">
                  It is a long established fact that a reader will be distr
                  acted bioiiy the end gail designa readable content of a page
                  when looking.
                </p>
              </div>
             <div>
              {
                data.map(item=>(
                  <ShowHide 
                  key={item.id}
                  heading={item.heading}
                  para={item.para} />
                ))
              }
             </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaOne;
