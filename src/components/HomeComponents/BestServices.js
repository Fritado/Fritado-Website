import React from "react";
import { Link } from "react-router-dom";
import Img4 from "../Assets/HomeAssets/Img4.png"

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className='service-area bg-gray bg-relative pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h6 className='sub-title-sky-blue'>Key Features</h6>
                <h2 className='title'>
                Cutting-edge SEO strategies to boost your brand visibility and drive online revenue growth.
                </h2>
              </div>
            </div>
          </div>
          <div className='row custom-no-gutter'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-left'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/7.svg' alt='img' className="inner-image"/>
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details'>Advanced AI and Machine Learning</Link>
                  </h5>
                  <p className='mb-0'>
                  Harness the power of AI and machine learning to automate and enhance your SEO strategies, ensuring precision, efficiency, and exceptional results.

                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/8.svg' alt='img' className="inner-image"/>
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details'>Innovative SEO Solutions</Link>
                  </h5>
                  <p className='mb-0'>
                  Implement groundbreaking SEO solutions tailored to elevate your brand visibility, drive traffic, and boost online revenue through cutting-edge automation technologies.
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left mb-0'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/9.svg' alt='img' className="inner-image"/>
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details'>Superior Content Automation</Link>
                  </h5>
                  <p className='mb-0'>
                  Streamline content planning, creation, and management for consistent, impactful, and strategic content delivery with minimal manual intervention.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 bg-blue-right d-lg-inline-block d-none'>
              <div className='service-thumb service-middle-section align-self-end'>
                <img src={Img4} alt='img' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-right'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/10.svg' alt='img' className="inner-image"/>
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details'>Data-Driven Insights and Analytics</Link>
                  </h5>
                  <p className='mb-0'>
                  Leverage sophisticated analytics tools to gain deep insights into your website’s performance and optimize strategies based on actionable data.
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-right'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/11.svg' alt='img' className="inner-image" />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details'>Comprehensive Keyword Optimization</Link>
                  </h5>
                  <p className='mb-0'>
                  Utilize AI-driven keyword research to identify and target the most relevant and high-performing keywords, making your content stand out in search engine rankings.
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-right mb-0'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/12.svg' alt='img' className="inner-image"/>
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details'>24/7 Dedicated Support</Link>
                  </h5>
                  <p className='mb-0'>
                  Our team is available around the clock to provide you with the assistance you need, ensuring a seamless and productive experience with Fritado AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;
