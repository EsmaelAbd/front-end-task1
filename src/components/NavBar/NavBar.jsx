import React from "react";
import "./NavBarStyle.css";
import { FaCalendar } from "react-icons/fa";

const NavBar = ({ logo, navitems }) => {
  return (
    <nav className="snav">
      <h1>{logo}</h1>
      <div className="items">
        <ul>
          {navitems.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
        <button>
          <i className="fa-calender">
            <FaCalendar />
          </i>
          <p>Schedule a visit</p>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
