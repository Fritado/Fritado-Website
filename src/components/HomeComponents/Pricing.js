import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingAreaOne = () => {
  return (
    <>
      {/* Pricing Area One start */}
      <div className='pricing-area bg-gray pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 class="sub-title-sky-blue">Pricing plan</h6>
            
            <h2 className='title'>
              Best plan to get our <span>Services</span>
            </h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner style-3'>
                <h2 className='mb-3'>
                  $49.99 <sub>/mo</sub>
                </h2>
                <h5>Standard</h5>
                <ul>
                  <li>
                    <FaCheck /><span>Website Auditing</span>
                  </li>
                  <li>
                    <FaCheck />
                    Unlimited code changes
                  </li>
                  <li>
                    <FaCheck />
                    15 blog post per Month
                  </li>
                  <li>
                    <FaCheck />
                    Keyword optimization
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Reports &amp; Analytics
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    24/7 Client Support{" "}
                  </li>
                </ul>
                <a
                  className='btn btn-black border-radius border-radius-0 w-100'
                                  href='https://portal.fritado.com/' target="_"
                >
                  Register now
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner style-3 price-active'>
                <h2 className='mb-3'>
                  $79.99 <sub>/mo</sub>
                </h2>
                <h5>Premium</h5>
                <ul>
                  <li>
                    <FaCheck />
                                      Website Auditing
                  </li>
                  <li>
                    <FaCheck />
                                      Unlimited code changes
                  </li>
                  <li>
                    <FaCheck />
                                      30 blog post per Month
                  </li>
                  <li>
                    <FaCheck />
                                      Keyword optimization
                  </li>
                  <li className='hide'>
                    <FaCheck />
                                      Reports &amp; Analytics
                  </li>
                  <li className='hide'>
                    <FaCheck />
                                      24/7 Client Support{" "}
                  </li>
                </ul>
                <a
                  className='btn btn-black border-radius border-radius-0 w-100'
                                  href='https://portal.fritado.com/' target="_"
                >
                  Register now
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner style-3'>
                <h2 className='mb-3'>
                  Intended for established businesses and agencies {/*<sub>/mo</sub>*/}
                </h2>
                <h5>Enterprises</h5>
                <ul>
                                  <li style={{ display: 'inline-block' }}>
                                      <FaCheck />
                                      Dedicated Account Rep.
                                  </li>
                  <li>
                    <FaCheck />
                                      Automated backlinks
                  </li>
                  <li>
                    <FaCheck />
                                      Advanced website analytics
                  </li>
                  <li>
                    <FaCheck />
                                      Internal/external links
                  </li>
                  <li className='hide'>
                    <FaCheck />
                                      Unlimited optimized pages
                  </li>
                  <li className='hide'>
                    <FaCheck />
                                      Custom blog post formats
                  </li>
                </ul>
                <a
                  className='btn btn-black border-radius border-radius-0 w-100'
                  href='/support'
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Area One start */}
    </>
  );
};

export default PricingAreaOne;
