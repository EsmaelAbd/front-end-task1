import React from "react";
import "./Hero.css";
const Hero = ({ img }) => {
  return (
    <div className="hero">
      <img src={img} />
      <div className="hero1info">
        <span className="text1">
          Toronto, <em>Canada</em>
        </span>
        <h1>
          HURRY!
          <br />
          GET THE BEST VILLA FOR YOU
        </h1>
      </div>
    </div>
  );
};

export default Hero;

// <div className="hero">
//   <h5 className="loc">{locationa}</h5>
//   <h5>{locationb}</h5>
//   <p>{cta}</p>
// </div>
