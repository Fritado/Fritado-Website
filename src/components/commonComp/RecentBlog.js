import React from "react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img13 from "../Assets/HomeAssets/Img13.png"
import Img14 from "../Assets/HomeAssets/Img14.png"
import Img15 from "../Assets/HomeAssets/Img15.png"


const BlogAreaFive = () => {
  return (
    <>
      {/*===================== Blog Area Three start =====================*/}
      <div className='blog-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center'>
                <h6 className='sub-title-sky-blue'>RECENT BLOG</h6>
                <h2 className='title'>
                  Discover a World of Sustainable Alternatives
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list style-3'>
                <div className='thumb'>
                  <img src={Img13} alt='img' />
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li>
                      <span>
                        <img src='assets/img/testimonial/1.png' alt='img' />
                      </span>{" "}
                      Admin
                    </li>
                    <li>
                      <FaCalendarAlt /> Category
                    </li>
                  </ul>
                  <h5 className='mb-3'>
                    <Link to='/blog-details'>
                      Transforming businesses, one pixel at a time
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                    aliquam
                  </p>
                  <div className='btn-wrap text-end pe-2'>
                    <Link className='read-more-text' to='/blog-details'>
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list style-3'>
                <div className='thumb'>
                  <img src={Img14} alt='img' />
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li>
                      <span>
                        <img src='assets/img/testimonial/1.png' alt='img' />
                      </span>{" "}
                      Admin
                    </li>
                    <li>
                      <FaCalendarAlt /> Category
                    </li>
                  </ul>
                  <h5 className='mb-3'>
                    <Link to='/blog-details'>
                      The Importance of a Strong Digital for Strategy
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                    aliquam
                  </p>
                  <div className='btn-wrap text-end pe-2'>
                    <Link className='read-more-text' to='/blog-details'>
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list style-3'>
                <div className='thumb'>
                  <img src={Img15} alt='img' />
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li>
                      <span>
                        <img src='assets/img/testimonial/1.png' alt='img' />
                      </span>{" "}
                      Admin
                    </li>
                    <li>
                      <FaCalendarAlt /> Category
                    </li>
                  </ul>
                  <h5 className='mb-3'>
                    <Link to='/blog-details'>
                      Creating Engaging Content: A Guide for Digital
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                    aliquam
                  </p>
                  <div className='btn-wrap text-end pe-2'>
                    <Link className='read-more-text' to='/blog-details'>
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>

                      </div>
                      <div className='col-lg-4 col-md-6'>
                          <div className='single-blog-list style-3'>
                              <div className='thumb'>
                                  <img src={Img15} alt='AI and Entertainment Recommendations' />
                              </div>
                              <div className='details'>
                                  <ul className='blog-meta'>
                                      <li>
                                          <span>
                                              <img src='assets/img/testimonial/1.png' alt='Admin' />
                                          </span>{" "}
                                          Admin
                                      </li>
                                      <li>
                                          <FaCalendarAlt /> Entertainment, AI
                                      </li>
                                  </ul>
                                  <h5 className='mb-3'>
                                      <Link to='/blog-details'>
                                          AI-Powered Personalized Recommendations: Transforming the Entertainment Industry
                                      </Link>
                                  </h5>
                                  <p>
                                      Discover how AI algorithms are revolutionizing the entertainment industry by providing personalized recommendations tailored to each user's preferences and behaviors...
                                  </p>
                                  <div className='btn-wrap text-end pe-2'>
                                      <Link className='read-more-text' to='/blog-details'>
                                          Read More <FaPlus />
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className='col-lg-4 col-md-6'>
                          <div className='single-blog-list style-3'>
                              <div className='thumb'>
                                  <img src={Img14} alt='AI and Virtual Personal Shoppers' />
                              </div>
                              <div className='details'>
                                  <ul className='blog-meta'>
                                      <li>
                                          <span>
                                              <img src='assets/img/testimonial/1.png' alt='Admin' />
                                          </span>{" "}
                                          Admin
                                      </li>
                                      <li>
                                          <FaCalendarAlt /> Sales, AI
                                      </li>
                                  </ul>
                                  <h5 className='mb-3'>
                                      <Link to='/blog-details'>
                                          Virtual Personal Shoppers: Revolutionizing Sales with AI-Powered Assistance
                                      </Link>
                                  </h5>
                                  <p>
                                      Explore how virtual personal shoppers powered by AI are transforming the sales experience by providing personalized product recommendations and guidance to customers...
                                  </p>
                                  <div className='btn-wrap text-end pe-2'>
                                      <Link className='read-more-text' to='/blog-details'>
                                          Read More <FaPlus />
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className='col-lg-4 col-md-6'>
                          <div className='single-blog-list style-3'>
                              <div className='thumb'>
                                  <img src={Img13} alt='AI and Content Creation' />
                              </div>
                              <div className='details'>
                                  <ul className='blog-meta'>
                                      <li>
                                          <span>
                                              <img src='assets/img/testimonial/1.png' alt='Admin' />
                                          </span>{" "}
                                          Admin
                                      </li>
                                      <li>
                                          <FaCalendarAlt /> Entertainment, AI
                                      </li>
                                  </ul>
                                  <h5 className='mb-3'>
                                      <Link to='/blog-details'>
                                          AI-Driven Content Creation: Redefining Creativity in the Entertainment Industry
                                      </Link>
                                  </h5>
                                  <p>
                                      Learn about the impact of AI-driven content creation tools on the entertainment industry, from generating art and music to streamlining production processes...
                                  </p>
                                  <div className='btn-wrap text-end pe-2'>
                                      <Link className='read-more-text' to='/blog-details'>
                                          Read More <FaPlus />
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>


                      <div className='col-lg-4 col-md-6'>
                          <div className='single-blog-list style-3'>
                              <div className='thumb'>
                                  <img src={Img13} alt='AI and Content Creation' />
                              </div>
                              <div className='details'>
                                  <ul className='blog-meta'>
                                      <li>
                                          <span>
                                              <img src='assets/img/testimonial/1.png' alt='Admin' />
                                          </span>{" "}
                                          Admin
                                      </li>
                                      <li>
                                          <FaCalendarAlt /> Sales, AI
                                      </li>
                                  </ul>
                                  <h5 className='mb-3'>
                                      <Link to='/blog-details'>
                                          Explore the role of AI-powered chatbots in revolutionizing customer support 
                                      </Link>
                                  </h5>
                                  <p>
                                      Discuss the benefits of using chatbots for customer support, such as 24/7 availability, quick response times, and personalized interactions.
                                  </p>
                                  <div className='btn-wrap text-end pe-2'>
                                      <Link className='read-more-text' to='/blog-details'>
                                          Read More <FaPlus />
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className='col-lg-4 col-md-6'>
                          <div className='single-blog-list style-3'>
                              <div className='thumb'>
                                  <img src={Img14} alt='AI and Virtual Personal Shoppers' />
                              </div>
                              <div className='details'>
                                  <ul className='blog-meta'>
                                      <li>
                                          <span>
                                              <img src='assets/img/testimonial/1.png' alt='Admin' />
                                          </span>{" "}
                                          Admin
                                      </li>
                                      <li>
                                          <FaCalendarAlt /> Entertainment, AI
                                      </li>
                                  </ul>
                                  <h5 className='mb-3'>
                                      <Link to='/blog-details'>
                                          Dive into the world of AI-driven gaming
                                      </Link>
                                  </h5>
                                  <p>
                                      discover how artificial intelligence is shaping the future of interactive entertainment. From intelligent NPCs and procedural content generation to adaptive difficulty systems,...
                                  </p>
                                  <div className='btn-wrap text-end pe-2'>
                                      <Link className='read-more-text' to='/blog-details'>
                                          Read More <FaPlus />
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>


                      <div className='col-lg-4 col-md-6'>
                          <div className='single-blog-list style-3'>
                              <div className='thumb'>
                                  <img src={Img14} alt='AI and Virtual Personal Shoppers' />
                              </div>
                              <div className='details'>
                                  <ul className='blog-meta'>
                                      <li>
                                          <span>
                                              <img src='assets/img/testimonial/1.png' alt='Admin' />
                                          </span>{" "}
                                          Admin
                                      </li>
                                      <li>
                                          <FaCalendarAlt /> Marketing, AI
                                      </li>
                                  </ul>
                                  <h5 className='mb-3'>
                                      <Link to='/blog-details'>
                                          Revolutionizing content personalization strategies for marketing purposes
                                      </Link>
                                  </h5>
                                  <p>
                                      Explore the role of artificial intelligence in revolutionizing content personalization strategies for marketing purposes...   
                                  </p>
                                  <div className='btn-wrap text-end pe-2'>
                                      <Link className='read-more-text' to='/blog-details'>
                                          Read More <FaPlus />
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
          </div>
        </div>
      </div>

      {/* ===================== BlogAreaFive End =====================*/}
    </>
  );
};

export default BlogAreaFive;
