import React from "react";
import "./PropertiesSection.css";
import PropertiesContainer from "./PropertiesContainer";

const PropertiesSection = () => {
  return (
    <div className="propersec">
      <div className="prophead">
        <h6>| PROPERTIES</h6>
        <h2>We Provide The Best Property You Like</h2>
        <PropertiesContainer />
      </div>
    </div>
  );
};

export default PropertiesSection;
