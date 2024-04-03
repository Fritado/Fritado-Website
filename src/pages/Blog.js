import React, { useEffect, useState } from "react";
import BlogGroup from "../components/BlogComponents/BlogGroup";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL

const Blog = () => {
 
  
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog"} />

      {/* Blog Group   key={posts._id} post={posts}*/}
      <BlogGroup />

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Blog;
