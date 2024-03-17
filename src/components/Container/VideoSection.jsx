import React from "react";
import "./VideoSection.css";

const VideoSection = ({ img }) => {
  return (
    <div className="video">
      <img src={img} alt="" />
      <div className="middleinfo">
        <h6>| Video Show</h6>
        <h2>Get Closer View & Different Feeling</h2>
      </div>
    </div>
  );
};

export default VideoSection;
