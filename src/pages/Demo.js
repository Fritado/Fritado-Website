import React from "react";
import Footer from "../components/commonComp/Footer";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Header from "../components/commonComp/Header";

const Demo = () => {
  return (
    <div>
      <Header />

      <Breadcrumb title={"One automation platform, boundless opportunities."} 
       para={"Revolutionizing SEO through Artificial Intelligence is Our Mission."} />
 
      <div className="">
     <div className="d-flex justify-content-center ">
        <iframe width="660" height="415" src="https://www.youtube.com/embed/4RVv5o-ctic?si=TbM0KiN59JZJ3ptp&amp;start=24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
          </div> 
      </div>

       <Footer />
    </div>
  );
};

export default Demo;
