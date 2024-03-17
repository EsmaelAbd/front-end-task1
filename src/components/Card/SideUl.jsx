import React from "react";
import "./SideUl.css";

const SideUl = ({ liimg1, liimg2, liimg3, liimg4 }) => {
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
