import React from "react";
import "./SecondSection.css";
import SsCard from "../Card/SsCard";
import SideUl from "../Card/SideUl";
import liimg1 from "../imgs/SideUl/info-icon-01.png";
import liimg2 from "../imgs/SideUl/info-icon-02.png";
import liimg3 from "../imgs/SideUl/info-icon-03.png";
import liimg4 from "../imgs/SideUl/info-icon-04.png";

const SecondSection = ({ img, micon }) => {
  return (
    <>
      <div className="secondsection">
        <img className="chairs" src={img} alt="chairs" />
        <div className="lefticon">
          <a href="#">
            <img src={micon} alt="" />
          </a>
        </div>
        <div className="msecondsection">
          <h6>| FEATURED</h6>
          <h2>Best Appartment & Sea View</h2>
          <SsCard />
        </div>
        <div>
          <SideUl
            liimg1={liimg1}
            liimg2={liimg2}
            liimg3={liimg3}
            liimg4={liimg4}
          />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
