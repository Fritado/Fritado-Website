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
                    <Link to='/service-details'>SEO Automation</Link>
                  </h5>
                  <p className='mb-0'>
                  SEO automation involves leveraging software tools and technology to optimize and streamline the management of search engine optimization tasks and processes.

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
                    <Link to='/service-details'>Automated Content Strategy</Link>
                  </h5>
                  <p className='mb-0'>
                  Streamlining the planning, creation, and management of content, our automated approach ensures efficiency and consistency in delivering impactful and strategic content solutions.
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
                    <Link to='/service-details'>AI-Driven Keyword Research Automation</Link>
                  </h5>
                  <p className='mb-0'>
                  In the realm of SEO, automated keyword research entails utilizing tools and software, such as Fritado, to discover and analyze relevant keywords and phrases for a website or business.
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
                    <Link to='/service-details'>Automated Competitor Research</Link>
                  </h5>
                  <p className='mb-0'>
                  Fritado, an SEO automation software for ecommerce, employs machine learning to analyze vast datasets including search engine, competitor, and ecommerce data.
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
                    <Link to='/service-details'>Analytics</Link>
                  </h5>
                  <p className='mb-0'>
                  Fritado's automated app enables tracking and analyzing your business traffic, optimizing the utilization of the Fritado application.
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
                    <Link to='/service-details'>24/7 Client Support</Link>
                  </h5>
                  <p className='mb-0'>
                  Rely on our 24/7 client support team to assist you whenever you require help. Reach out to us today and discover firsthand the impact of our dedicated support services!
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
