import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img2 from "../Assets/HomeAssets/Img2.png";
import Img3 from "../Assets/HomeAssets/Img3.jpg";

const AboutAreaFive = () => {
  return (
    <>
      {/* =============== About Area Five End ===============*/}
      <div className="about-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner">

                <img className="main-img" src={Img3} alt="img" />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 ps-xl-5">
                <h6 className="sub-title-sky-blue">ABOUT COMPANY</h6>
                <h2 className="title">
                Revolutionizing SEO through Artificial Intelligence is Our Mission.
                </h2>
                <p className="content mb-4">
                With a decade of experience in the search industry, we understand the challenges of crafting impactful SEO content. Our goal is to eliminate that struggle by leveraging advanced technologies and innovative solutions..
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li className="d-flex">
                       
                          <FaCheckCircle className="sky" /> Technical Expertise
                      </li>
                      <li className="d-flex">
                        <FaCheckCircle className="sky" /> Product Quality and Innovation
                      
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li className="d-flex">
                        <FaCheckCircle className="sky" /> Customer-Centric Approach
                      </li>
                      <li className="d-flex">
                        <FaCheckCircle className="sky" /> Agile Development and Adaptability
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  className="btn btn-base-color border-radius-5"
                  to="/about"
                >
                  Know more <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Five End ===============*/}
    </>
  );
};

export default AboutAreaFive;
