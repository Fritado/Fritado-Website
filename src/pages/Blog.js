import React from "react";
/*import BlogGroup from "../components/BlogComponents/BlogGroup";*/
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header"
import RecentBlog from "../components/commonComp/RecentBlog";
//import {
 //   FaAngleLeft,
//    FaAngleRight,
//} from "react-icons/fa";

//import axios from "axios";
//const BASE_URL = process.env.REACT_APP_BASE_URL

const Blog = () => {
 
  
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Navigation Bar */}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Breadcrumb
          title={"Blog"}
          para={"Whatever question you have, please feel free to ask."}
        />
      </div>

      {/* Blog Group   key={posts._id} post={posts}*/}
          {/*<BlogGroup />*/}

          <RecentBlog />
{/*
          <div class='container'>
              <div class='row'>
                  <div class='col-md-12'>
                      <div class='my-component'>
                          <div class='pagination'>
                              <a class='prev page-numbers ' href='http://icare.local/'>
                                  <FaAngleLeft />
                              </a>
                              <a class='page-numbers' href='http://icare.local/'>
                                  1
                              </a>
                              <span class='page-numbers current'>2</span>
                              <a class='page-numbers' href='http://icare.local/page/3/'>
                                  3
                              </a>
                              <a class='page-numbers' href='http://icare.local/page/4/'>
                                  4
                              </a>
                              <a class='next page-numbers' href='http://icare.local/page/3/'>
                                  <FaAngleRight />
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>*/}


      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Blog;
