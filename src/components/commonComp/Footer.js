import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollUp from "./ScrollUp";

const FooterFour = () => {
  return (
    <>
      {/* ================== Footer Four Start ==================*/}
      <footer
        className="footer-area bg-cover mt-20 pd-top-100"
        //style={{ backgroundImage: 'url("assets/img/bg/14.png")' }}
      >
        <div className="footer-subscribe">
          {/* <div className="container">
            <div className="footer-subscribe-inner box-shadow style-2 bg-white p-0 bg-cover">
              <div className="media bg-base-2">
                <div className="media-left me-3 align-self-xl-center">
                  <img src="assets/img/icon/40.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h6 className="text-white">+(91)-974-1156-389</h6>
                  <p className="mb-0 text-white">Call 24HR / 7Days</p>
                </div>
              </div>
              <div className="row align-self-center">
                <div className="col-lg-4">
                  <div className="border-1">
                    <input type="text" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="border-1">
                    <input type="text" placeholder="Your Email" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <Link
                    className="btn w-100 btn-black sky border-radius-0"
                    href="#"
                  >
                    Submit now
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="my-3">
                  <img src={"assets/img/logo-white.png"} style={{width:"180px"}}/>
                </div>
              <div className="widget widget-recent-post">
                <div className="widget widget_contact">
                  <ul className="details">
                    <li className="d-flex position-relative">
                      <FaMapMarkerAlt size={35} className="sky" />
                      No. 8, CMH Road, 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560 038
                    </li>
                    <li className="mt-3 d-flex position-relative">
                      <FaPhoneAlt className="sky" /> +(91)-974-1156-389
                    </li>
                    <li className="mt-2 d-flex position-relative">
                      <FaEnvelope className="sky" /> support@fritado.com
                    </li>
                  </ul>
                  <ul className="social-media mt-4">
                    <li>
                      <a
                        href="https://www.facebook.com/fritado"
                        className="sky"
                      >
                        <FaFacebookF />
                      </a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/" className="sky">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/fritado-com/?viewAsMember=true"
                        className="sky"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul className="">
                  <li className="sky ">
                    <Link to="/">
                      <span className="d-flex">
                        <FaChevronRight /> Home
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/about">
                      <span className="d-flex">
                        <FaChevronRight /> About
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/solutions">
                      <span className="d-flex">
                        <FaChevronRight />Solutions
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/pricing">
                      <span className="d-flex">
                      <FaChevronRight />Pricing

                      </span>
                    </Link>
                  </li>

                  <li className="sky">
                    <Link to="/Research-and-development">
                      <span className="d-flex">
                      <FaChevronRight />R&D Center

                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/blog">
                      <span className="d-flex">
                        <FaChevronRight /> Blog
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/demo">
                      <span className="d-flex">
                        <FaChevronRight /> Demo
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/support">
                      <span className="d-flex">
                        <FaChevronRight /> Contact Us
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Others</h4>
                <ul>
                  <li className="sky">
                    <Link to="/terms-and-condition">
                      <span> Terms & Conditions</span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/privacy-policy">
                      <span>Privacy Policy</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Recent Blog</h4>
                <ul>
                  <li className="sky">
                    <div className="media">
                      <div className="media-body align-self-center">
                        <div className="post-info  mb-2">
                          <FaRegCalendarAlt className="sky" />
                          <span>April 10, 2024</span>
                        </div>
                        <h6 className=" title-footer sky mb-0">
                          <Link to="https://seo.ai/blog/simplified-alternatives">
                            Simplified Alternatives: Your Ultimate Guide
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="sky">
                    <div className="media">
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaRegCalendarAlt className="sky" />
                          <span>April 8, 2024</span>
                        </div>
                        <h6 className="title-footer sky mb-0">
                          <Link to="https://seo.ai/blog/se-ranking-alternatives">
                            SE Ranking Alternatives 2024: Explore the Top Picks
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ScrollUp />
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© copyright 2024 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                {/*<a href="#">Trams &amp; Condition</a>
                <a href="#">Privacy Policy</a>
                <a href='#'>Contact Us</a>*/}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterFour;
