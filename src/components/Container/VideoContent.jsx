import React from "react";
import "./VideoContent.css";
import { FaPlay } from "react-icons/fa";

const VideoContent = () => {
  return (
    <div className="videocontent">
      <img src="src/components/imgs/video-frame.jpg" alt="" />
      <a href="#">
        <i>
          <FaPlay />
        </i>
      </a>
    </div>
  );
};

export default VideoContent;
