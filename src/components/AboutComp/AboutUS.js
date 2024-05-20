import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='about-thumb-inner pe-xl-5 me-xl-5 '
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
              
                <img
                  className='main-img'
                  src='assets/img/about/1.jpg'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                Our Journey: <span> Pioneering SEO </span> with AI
                </h2>
                <p className='content mb-4 mb-xl-5'>
                Test-We're not just another team; we're a passionate collective of seasoned SEO experts and forward-thinking entrepreneurs. Since 2014, we've delved deep into the realm of search engine optimization, providing invaluable guidance to numerous businesses along the way.</p>
                <p className='content mb-4 mb-xl-5'>
                Despite the rapid advancements in technology, we've observed a stubborn reliance on outdated manual techniques for content generation, particularly in the realm of Google rankings. It's high time to break free from the status quo and unleash the full potential of modern AI.</p>
                <p className='content mb-4 mb-xl-5'>
                Introducing fritado.ai – our brainchild conceived with a mission to transform the approach businesses take towards SEO. As specialists in this field, we've deliberately chosen to hone our expertise solely in search engine optimization. We firmly believe that specialization is not just advantageous, but imperative in navigating the complexities of modern SEO.
                </p>
                <p className='content mb-4 mb-xl-5'>
                With fritado.ai, say goodbye to the headaches of keyword analysis, technical setups, and keeping pace with Google's ever-evolving algorithms. We take care of everything from start to finish, ensuring not only time savings but also delivering unparalleled results. </p>

            
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
