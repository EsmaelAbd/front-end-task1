import React from "react";
import "./FCard.css";

const FCard = ({ number, info }) => {
  return (
    <div className="fcard">
      <h1>{number}</h1>
      <p>{info}</p>
    </div>
  );
};

export default FCard;
