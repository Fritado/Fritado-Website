import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Footer from "../components/commonComp/Footer";
import CreativeServices from "../components/FeaturesComp/CreativeServices";
import Header from "../components/commonComp/Header";

const Features= () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Navigation Bar */}
      <Breadcrumb title={"Features"} />

      {/* Service Area One */}
      <CreativeServices />
      
      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Features;
