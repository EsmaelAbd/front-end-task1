import React from "react";
import "./SecondSection.css";
import SsCard from "../Card/SsCard";
import SideUl from "../Card/SideUl";

const SecondSection = () => {
  return (
    <>
      <div className="secondsection">
        <img
          className="chairs"
          src="src/components/imgs/Ss/featured.jpg"
          alt="chairs"
        />
        <div className="lefticon">
          <a href="#">
            <img src="src/components/imgs/Ss/featured-icon.png" alt="" />
          </a>
        </div>
        <div className="msecondsection">
          <h6>| FEATURED</h6>
          <h2>Best Appartment & Sea View</h2>
          <SsCard />
        </div>
        <div>
          <SideUl />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
