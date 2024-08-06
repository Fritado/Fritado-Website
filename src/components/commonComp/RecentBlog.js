import React from "react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import Img14 from "../Assets/HomeAssets/Img14.png";

import IMG16 from "../Assets/HomeAssets/IMG16.jpg";
import IMG17 from "../Assets/HomeAssets/IMG17.jpg";
import IMG18 from "../Assets/HomeAssets/IMG18.jpg";
import IMG19 from "../Assets/HomeAssets/IMG19.jpg";
import IMG20 from "../Assets/HomeAssets/IMG20.jpg";
import IMG21 from "../Assets/HomeAssets/IMG21.jpg";
import IMG22 from "../Assets/HomeAssets/IMG22.jpg";
import Img23 from "../Assets/HomeAssets/Img23.jpg";

const BlogAreaFive = () => {
  return (
    <>
      {/*===================== Blog Area Three start =====================*/}
      <div className="blog-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="heading">
                  Discover a World of Sustainable Alternatives
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* {blogPosts.map(post => (
                          <div key={post.id} className="col-lg-4 col-md-6">
                              <div className="single-blog-list style-3">
                                  <div className="thumb">
                                      <img src={post.imgSrc} alt={post.title} />
                                  </div>
                                  <div className="details">
                                      <ul className="blog-meta">
                                          <li>{post.author}</li>
                                          <li><FaCalendarAlt /> {post.date}</li>
                                      </ul>
                                      <h5 className="mb-3">
                                          <Link to={post.link}>
                                              {post.title}
                                          </Link>
                                      </h5>
                                      <p>{post.content}</p>
                                      <div className="btn-wrap text-end pe-2">
                                          <Link className="read-more-text" to={post.linkTo}>
                                              Read More <FaPlus />
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))}*/}

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list style-3">
                <div className="thumb">
                  <img src={Img23} alt="img" />
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      {/* <span>
                            <img src='assets/img/testimonial/1.png' alt='img' />
                          </span>{" "}*/}
                      Fritado AI
                    </li>
                    <li>
                      <FaCalendarAlt /> 10 April 2024
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/blog-details">
                      Transforming businesses, one pixel at a time
                    </Link>
                  </h5>
                  <p>
                    AI is revolutionizing content creation by automating complex
                    processes and enhancing creativity.
                  </p>
                  <div className="btn-wrap text-end pe-2">
                    <Link className="read-more-text" to="/blog-details">
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list style-3">
                <div className="thumb">
                  <img src={Img14} alt="img" />
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      {/*<span>
                            <img src='assets/img/testimonial/1.png' alt='img' />
                          </span>{" "}*/}
                      Fritado AI
                    </li>
                    <li>
                      <FaCalendarAlt /> 04 April 2024
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/NewBlog1">
                      The Importance of a Strong Digital for Strategy
                    </Link>
                  </h5>
                  <p>
                    A comprehensive digital strategy ensures consistent brand
                    presence across all online platforms.
                  </p>
                  <div className="btn-wrap text-end pe-2">
                    <Link className="read-more-text" to="/NewBlog1">
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list style-3">
                <div className="thumb">
                  <img src={IMG21} alt="img" />
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      {/*<span>
                            <img src='assets/img/testimonial/1.png' alt='img' />
                          </span>{" "}*/}
                      Fritado AI
                    </li>
                    <li>
                      <FaCalendarAlt /> 26 March 2024
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/NewBlog2">
                      Transforming Businesses, One Pixel at a Time: How AI is
                      Shaping the Future of Digital Media
                    </Link>
                  </h5>
                  <p>
                    In the digital age, content is more than just king it the
                    currency of engagement and interaction online.
                  </p>
                  <div className="btn-wrap text-end pe-2">
                    <Link className="read-more-text" to="/NewBlog2">
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list style-3">
                <div className="thumb">
                  <img src={IMG17} alt="AI and Entertainment Recommendations" />
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      {/*<span>
                            <img src='assets/img/testimonial/1.png' alt='img' />
                          </span>{" "}*/}
                      Fritado AI
                    </li>
                    <li>
                      <FaCalendarAlt /> 4 March 2024
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/NewBlog3">
                      AI-Powered Personalized Recommendations: Transforming the
                      Entertainment Industry
                    </Link>
                  </h5>
                  <p>
                    Discover how AI algorithms are revolutionizing the
                    entertainment industry by providing personalized
                    recommendations tailored to each user's preferences and
                    behaviors...
                  </p>
                  <div className="btn-wrap text-end pe-2">
                    <Link className="read-more-text" to="/NewBlog3">
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list style-3">
                <div className="thumb">
                  <img src={IMG22} alt="AI and Virtual Personal Shoppers" />
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      {/*<span>
                            <img src='assets/img/testimonial/1.png' alt='img' />
                          </span>{" "}*/}
                      Fritado AI
                    </li>
                    <li>
                      <FaCalendarAlt /> 20 February 2024
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/NewBlog4">
                      Virtual Personal Shoppers: Revolutionizing Sales with
                      AI-Powered Assistance
                    </Link>
                  </h5>
                  <p>
                    Explore how virtual personal shoppers powered by AI are
                    transforming the sales experience by providing personalized
                    product recommendations and guidance to customers...
                  </p>
                  <div className="btn-wrap text-end pe-2">
                    <Link className="read-more-text" to="/NewBlog4">
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list style-3">
                <div className="thumb">
                  <img src={IMG16} alt="AI and Content Creation" />
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      {/*<span>
                            <img src='assets/img/testimonial/1.png' alt='img' />
                          </span>{" "}*/}
                      Fritado AI
                    </li>
                    <li>
                      <FaCalendarAlt /> 12 February 2024
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/NewBlog5">
                      AI-Driven Content Creation: Redefining Creativity in the
                      Entertainment Industry
                    </Link>
                  </h5>
                  <p>
                    Learn about the impact of AI-driven content creation tools
                    on the entertainment industry, from generating art and music
                    to streamlining production processes...
                  </p>
                  <div className="btn-wrap text-end pe-2">
                    <Link className="read-more-text" to="/NewBlog5">
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list style-3">
                <div className="thumb">
                  <img src={IMG20} alt="AI and Content Creation" />
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      {/*<span>
                            <img src='assets/img/testimonial/1.png' alt='img' />
                          </span>{" "}*/}
                      Fritado AI
                    </li>
                    <li>
                      <FaCalendarAlt /> 3 February 2024
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/NewBlog6">
                      Explore the role of AI-powered chatbots in revolutionizing
                      customer support
                    </Link>
                  </h5>
                  <p>
                    Discuss the benefits of using chatbots for customer support,
                    such as 24/7 availability, quick response times, and
                    personalized interactions.
                  </p>
                  <div className="btn-wrap text-end pe-2">
                    <Link className="read-more-text" to="/NewBlog6">
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list style-3">
                <div className="thumb">
                  <img src={IMG19} alt="AI and Virtual Personal Shoppers" />
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      {/*<span>
                            <img src='assets/img/testimonial/1.png' alt='img' />
                          </span>{" "}*/}
                      Fritado AI
                    </li>
                    <li>
                      <FaCalendarAlt /> 18 January 2024
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/NewBlog7">
                      Dive into the world of AI-driven gaming
                    </Link>
                  </h5>
                  <p>
                    discover how artificial intelligence is shaping the future
                    of interactive entertainment. From intelligent NPCs and
                    procedural content generation to adaptive difficulty
                    systems,...
                  </p>
                  <div className="btn-wrap text-end pe-2">
                    <Link className="read-more-text" to="/NewBlog7">
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list style-3">
                <div className="thumb">
                  <img src={IMG18} alt="AI and Virtual Personal Shoppers" />
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      {/*<span>
                            <img src='assets/img/testimonial/1.png' alt='img' />
                          </span>{" "}*/}
                      Fritado AI
                    </li>
                    <li>
                      <FaCalendarAlt /> 4 January 2024
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/NewBlog8">
                      Revolutionizing content personalization strategies for
                      marketing purposes
                    </Link>
                  </h5>
                  <p>
                    Explore the role of artificial intelligence in
                    revolutionizing content personalization strategies for
                    marketing purposes...
                  </p>
                  <div className="btn-wrap text-end pe-2">
                    <Link className="read-more-text" to="/NewBlog8">
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
