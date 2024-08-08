import React, { useEffect, useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarFour = () => {
  const [active, setActive] = useState(false);
  const [navbar, setNavbar] = useState(false);
  //const [searchShow, setSearchShow] = useState(false);
  const [logo, setLogo] = useState("assets/img/logo-white.png");
  const menuActive = () => {
    setActive(!active);
  };
  // const searchActive = () => {
  //   setSearchShow(!searchShow);
    
  // };

  const changeBackground = () => {
    if (window.scrollY >= 92  || window.innerWidth <= 992) {
      setNavbar(true);
      setLogo("assets/img/logo3.png");
    } else {
      setNavbar(false);
      setLogo("assets/img/logo-white.png");
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", changeBackground); // Add resize listener
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", changeBackground); // Clean up resize listener
    };
  }, []);

  // Control sidebar navigation
  // let items = document.querySelectorAll(".menu-item-has-children > a");
  // for (let i in items) {
  //   if (items.hasOwnProperty(i)) {
  //     items[i].onclick = function () {
  //       this.parentElement
  //         .querySelector(".sub-menu")
  //         .classList.toggle("active");
  //       this.classList.toggle("open");
  //     };
  //   }
  // }
  useEffect(() => {
    let items = document.querySelectorAll(".menu-item-has-children > a");
    for (let i = 0; i < items.length; i++) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }, []);
  return (
    <>
   
      {/* ==================== Navbar Two Start ====================*/}
      <nav className={navbar ? " li-color navbar navbar-area navbar-expand-lg " : "li-color-before navbar navbar-area navbar-area-3 navbar-expand-lg"}>
        <div className={navbar? "container nav-container bg-white " :" container nav-container"}>
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo ">
            <Link to="/">
              <img src={logo} alt="fritado-logo" />
            </Link>
          </div>
          {/* <div className="nav-right-part nav-right-part-mobile">
            <span className="search-bar-btn" onClick={searchActive}>
              <FaSearch />
            </span>
          </div> */}
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-center ps-lg-5 navbarFive ">
              <li className="">
                <Link to="/">Home</Link>
              </li>
              
              <li className="">
                <Link to="/solutions">Solutions</Link>
              </li>
              <li className="">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="">
                <Link to="/demo">Demo</Link>
              </li>
              <li className="">
                <Link to="/Research-and-development">R&D center</Link>
              </li>
              
              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop align-self-center  ">
            <Link
              className=" btn btn-base-color border-radius-5 d-flex align-items-center"
                          to="https://platform.fritado.com/" target="_"
            >
              Go to portal <FaArrowRight className="mt-0 " />
            </Link>
          </div>
        </div>
      </nav>
      {/* ==================== Navbar Two end ====================
  btn- #2f82a2db  icon-#2f82a2db
      */}
    </>
  );
};

export default NavbarFour;
