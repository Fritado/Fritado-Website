import React, { useEffect, useRef } from "react";
import Breadcrumb from "../commonComp/Breadcrumb";
import PriceCard from "./PriceCard";
import ResearchDevFAQ from "../ResearchDevelopment/ResearchDevFAQ";
import { planData } from "../PricingComp/PlanData";

const Pricings = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      if (cardRefs.current.length) {
        const heights = cardRefs.current.map((ref) => ref.clientHeight);
        const maxHeight = Math.max(...heights);
        cardRefs.current.forEach((ref) => {
          ref.style.height = `${maxHeight}px`;
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cardRefs.current.length]);

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Breadcrumb
          title={"Expand as You Grow"}
          para={
            "Whether You're a Small Business, Medium Enterprise, or Large Corporation, We Offer Solutions to Automate Business Branding and Traffic Generation with Our Advanced Automation Tools"
          }
        />
      </div>
      <section className="head-div">
        <div className="d-flex flex-row justify-content-center align-items-center mx-auto title-content">
          {planData.map((plan, index) => (
            <PriceCard
              key={plan.id}
              plan={plan}
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </section>
      <section className="head-div">
        <div className="container"> 
          <div className="d-flex flex-column justify-content-center align-items-center text-center title-content">
            <h2 className="heading">Why Choose Fritado R&D Center?</h2>
            <div className="title-para">
              <p>Rapidly evolving technological landscape, the demand for</p>
            </div>
          </div>
          <div>
            <ResearchDevFAQ />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricings;
