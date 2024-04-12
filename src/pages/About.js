import React from "react";
import AboutUS from "../components/AboutComp/AboutUS";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Counter from "../components/AboutComp/Counter";
import Faq from "../components/AboutComp/Faq";
import Footer from "../components/commonComp/Footer"
import Teams from "../components/AboutComp/Teams";
import Header from "../components/commonComp/Header";
//import RecentBlog from "../components/commonComp/RecentBlog";


const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Navigation Bar */}
      <Breadcrumb title={"About Us"} />

      {/* About Area One */}
      <AboutUS />

      {/* FAQ Area One */}
      <Faq />

      {/* Team Area One */}
      <Teams />

      {/* Counter Area One */}
      <Counter />

      {/*Blog Area */}
      {/*<RecentBlog />*/}

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default About;
