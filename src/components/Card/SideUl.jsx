import React from "react";
import "./SideUl.css";
import liimg1 from "../imgs/SideUl/info-icon-01.png";
import liimg2 from "../imgs/SideUl/info-icon-02.png";
import liimg3 from "../imgs/SideUl/info-icon-03.png";
import liimg4 from "../imgs/SideUl/info-icon-04.png";

const SideUl = () => {
  return (
    <div className="sideul">
      <ul>
        <li>
          <img src={liimg1} alt="" />
          <h4>
            250 m2
            <br />
            <span>Total Flat Space</span>
          </h4>
        </li>
        <li>
          <img src={liimg2} alt="" />
          <h4>
            Contract
            <br />
            <span>Contract Ready</span>
          </h4>
        </li>
        <li>
          <img src={liimg3} alt="" />
          <h4>
            Payment
            <br />
            <span>Payment Process</span>
          </h4>
        </li>
        <li>
          <img src={liimg4} alt="" />
          <h4>
            Safety
            <br />
            <span>24/7 Under Control</span>
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default SideUl;
