import React from "react";
import "./BdContainer.css";

const BdContainer = () => {
  return (
    <div className="bd">
      <ul>
        <li>
          Total Flat Space
          <span>185 m2</span>
        </li>
        <li>
          Floor Number
          <span>26th</span>
        </li>
        <li>
          Number of Rooms
          <span>4</span>
        </li>
        <li>
          Parking Available
          <span>Yes</span>
        </li>
        <li>
          Payment Process
          <span>Bank</span>
        </li>
      </ul>
    </div>
  );
};

// const bdlist = [
//   <li className="bdli">
//     Total Flat Space
//     <span className="bdspan">185 m2</span>
//   </li>,
//   <li className="bdli">
//     Floor Number
//     <span className="bdspan">26th</span>
//   </li>,
//   <li className="bdli">
//     Number of Rooms
//     <span className="bdspan">4</span>
//   </li>,
//   <li className="bdli">
//     Parking Available
//     <span className="bdspan">Yes</span>
//   </li>,
//   <li className="bdli">
//     Payment Process
//     <span className="bdspan">Bank</span>
//   </li>,
// ];

// const BdContainer = () => {
//   return <ul className="bdul"> {bdlist} </ul>;
// };

export default BdContainer;
