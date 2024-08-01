import React from "react";
import AboutCompany from "../components/HomeComponents/AboutCompany";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import Footer from "../components/commonComp/Footer";
import Navbar from "../components/HomeComponents/Navbar";
import BestServices from "../components/HomeComponents/BestServices";
import Pricing from "../components/HomeComponents/Pricing";
import Clients from "../components/HomeComponents/Clients";
import Partner from "../components/HomeComponents/Partner";

const HomeFive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Banner Five */}
      <HomeBanner />

      {/*Partner logo */}
      <Partner />
      {/* About Area Five */}
      <AboutCompany />

      {/* Service Area Five */}
      <BestServices />

      {/**Pricing plan */}
      <Pricing />

      {/* clients */}
      <Clients />

      {/* Footer Four */}
      <Footer />
    </>
  );
};

export default HomeFive;
