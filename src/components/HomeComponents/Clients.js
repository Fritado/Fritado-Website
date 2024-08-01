import React from "react";
import Slider from "react-slick";
import FritadoClient1 from "../Assets/clientLogo/client/Fritado-client_nutalentz.png";
import FritadoClient2 from "../Assets/clientLogo/client/Fritado_client_Jhanvi_enterprises.png";
import FritadoClient3 from "../Assets/clientLogo/client/Fritado_client_airbiz.png";
import FritadoClient4 from "../Assets/clientLogo/client/Fritado_client_apnapandit.png";
import FritadoClient5 from "../Assets/clientLogo/client/Fritado_client_ascendas.png";
import FritadoClient6 from "../Assets/clientLogo/client/Fritado_client_babjilamitronics.png";
import FritadoClient7 from "../Assets/clientLogo/client/Fritado_client_bricasa_developers.png";
import FritadoClient8 from "../Assets/clientLogo/client/Fritado_client_bullsorbit.png";
import FritadoClient9 from "../Assets/clientLogo/client/Fritado_client_dbn_enterprises.png";
import FritadoClient10 from "../Assets/clientLogo/client/Fritado_client_deeba_engineering.png";
import FritadoClient11 from "../Assets/clientLogo/client/Fritado_client_ducbank.png";
import FritadoClient12 from "../Assets/clientLogo/client/Fritado_client_hegde_ayurvedic.png";
import FritadoClient13 from "../Assets/clientLogo/client/Fritado_client_mds_projects.png";
import FritadoClient14 from "../Assets/clientLogo/client/Fritado_client_olivea.png";
import FritadoClient15 from "../Assets/clientLogo/client/Fritado_client_prismatic.png";
import FritadoClient16 from "../Assets/clientLogo/client/Fritado_client_sahiprice.png";
import FritadoClient17 from "../Assets/clientLogo/client/Fritado_client_srimisri_solutions.png";
import FritadoClient18 from "../Assets/clientLogo/client/Fritado_client_suguna_hospital.png";
import FritadoClient19 from "../Assets/clientLogo/client/Fritado_client_susti.png";
import FritadoClient20 from "../Assets/clientLogo/client/Fritado_client_vijayashree_Hospitals.png";

const ClientImages = [
  FritadoClient1,
  FritadoClient2,
  FritadoClient3,
  FritadoClient4,
  FritadoClient5,
  FritadoClient6,
  FritadoClient7,
  FritadoClient8,
  FritadoClient9,
  FritadoClient10,
  FritadoClient11,
  FritadoClient12,
  FritadoClient13,
  FritadoClient14,
  FritadoClient15,
  FritadoClient16,
  FritadoClient17,
  FritadoClient18,
  FritadoClient19,
  FritadoClient20,
];

const Clients = () => {
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
        {ClientImages.map((img, index) => (
          <div key={index} className="">
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
