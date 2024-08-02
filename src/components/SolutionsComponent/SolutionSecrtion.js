import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import SolutionCard from "./SolutionCard";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const SolutionSecrtion = ({ data, flexDirection }) => {
  const [showKeyPoints, setShowKeyPoints] = useState(false);
 
    const handleViewMore = () => {
      setShowKeyPoints(!showKeyPoints);
    };
  const marginStyle =
    flexDirection === "row" ? { marginRight: "4rem" } : { marginLeft: "4rem" };
  return (
    <div className="container">
      {/* section 1 */}
      <section className="top-section solution-section">
        <div className="main-div" style={{ flexDirection }}>
          <div
            className="head-container head-div animate-div d-flex align-items-center "
            style={{ flexDirection }}
          >
            <img
              src={data.image}
              alt={data.heading}
              className="image-container "
              style={marginStyle}
            />

            <div className="content-container">
              <h2 className="heading">{data.heading}</h2>
              <p>{data.description}</p>
              <div className="view-more-btn">
                <span
                  onClick={handleViewMore}
                  className="d-flex flex-row btn-tab"
                >
                  {showKeyPoints ? "View Less" : "View More"}{" "}
                  {/* <IoMdArrowForward size={22} className="pt-1 pl-1" /> */}
                </span>
                <Link to="https://platform.fritado.com/" target="_">
                  <span className="btn-tab">
                    Register now
                    {/* Register now <FaPlus /> */}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* card start */}
          <SolutionCard
            points={data.points}
            showKeyPoints={showKeyPoints}
          />
          {/* card end */}
        </div>
      </section>
    </div>
  );
};

export default SolutionSecrtion;
