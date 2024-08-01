import React from 'react'
import Slider from "react-slick";
import Partner1 from "../Assets/Partners/Blogger.jpg";
import Partner2 from "../Assets/Partners/Linkedin.jpg"
import Partner3 from "../Assets/Partners/facebook.jpg"
import Partner4 from "../Assets/Partners/google.jpg"
import Partner5 from "../Assets/Partners/insta.jpg"
import Partner6 from "../Assets/Partners/medium.jpg";
import Partner7 from "../Assets/Partners/reddit.jpg";
import Partner8 from "../Assets/Partners/twitter.jpg"
import Partner9 from "../Assets/Partners/wordpress.jpg"

const partnerLogos = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner7,
    Partner8,
    Partner9,
    
]

const Partner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Adjust the speed as needed
        cssEase: "linear",
       
      };
  return (
    <div className="image-slider">
    <Slider {...settings}>
      {partnerLogos.map((img, index) => (
        <div key={index} className="">
          <img src={img} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default Partner
