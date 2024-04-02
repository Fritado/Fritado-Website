import React from "react";
import AboutCompany from "../components/HomeComponents/AboutCompany";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import RecentBlog from "../components/commonComp/RecentBlog";
import WorkGallary from "../components/HomeComponents/WorkGallary";
import Footer from "../components/commonComp/Footer";
import Navbar from "../components/HomeComponents/Navbar";
import BestServices from "../components/HomeComponents/BestServices";
import Pricing from "../components/HomeComponents/Pricing";
import WorkProcess from "../components/HomeComponents/WorkProcess";

const HomeFive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Banner Five */}
      <HomeBanner />

      {/* About Area Five */}
      <AboutCompany />

      {/* Service Area Five */}
      <BestServices />

      {/**Pricing plan */}
      <Pricing />

      {/* Case Study Area Two */}
      <WorkGallary />

      {/* Work Process Four */}
      <WorkProcess />

      {/* Blog Area Five */}
      <RecentBlog />

      {/* Footer Four */}
      <Footer />
    </>
  );
};

export default HomeFive;
