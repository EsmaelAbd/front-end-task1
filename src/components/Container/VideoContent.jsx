import React from "react";
import "./VideoContent.css";
import { FaPlay } from "react-icons/fa";

const VideoContent = ({ img }) => {
  return (
    <div className="videocontent">
      <img src={img} alt="" />
      <a href="#">
        <i>
          <FaPlay />
        </i>
      </a>
    </div>
  );
};

export default VideoContent;
