import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Features from "./pages/Features";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Benefits from "./pages/Benefits";
import ContactUs from "./pages/ContactUs";


function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  
  }, []);

  // const FooterFour = () => {
  //   useEffect(() => {
  //     // 👇️ scroll to top on page load
  //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  //   }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/demo" element={<Demo />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/benefits" element={<Benefits />} />
        <Route exact path="/support" element={<ContactUs />} />
        <Route exact path="/features" element={<Features />} />
      </Routes>
     
      
     {/* <ScrollToTop smooth color="rgba(47, 130, 162, 0.8588235294)"/>*/}
      
    </BrowserRouter>
  );
}

export default App;
