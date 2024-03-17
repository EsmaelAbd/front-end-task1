import React from "react";
import "./BestDeal.css";
import BdContainer from "../BestDealContainer/BdContainer";
import { FaCalendar } from "react-icons/fa";

const BestDeal = ({ img }) => {
  return (
    <div className="bestdeal">
      <div className="bdhead">
        <div className="leftb">
          <h4>| Best Deal</h4>
          <h1>Find Your Best Deal Right Now!</h1>
        </div>
        <ul>
          <li>
            <button>Apparment</button>
          </li>
          <li>
            <button>Villa House</button>
          </li>
          <li>
            <button>Penthouse</button>
          </li>
        </ul>
      </div>
      <div className="bdealssec">
        <BdContainer />
        <img src={img} alt="" />
        <div className="bdealp">
          <h4>Extra Info About Property</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod
            tempor pack incididunt ut labore et dolore magna aliqua quised ipsum
            suspendisse.
            <br />
            <br />
            When you need free CSS templates, you can simply type TemplateMo in
            any search engine website. In addition, you can type TemplateMo
            Portfolio, TemplateMo One Page Layouts, etc.
          </p>
          <button>
            <i className="fa-calender">
              <FaCalendar />
            </i>
            <p>Schedule a visit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
