import React from "react";
import "./PropertiesCard.css";

const PropertiesCard = ({
  img,
  type,
  price,
  location,
  details: { bedrooms, bathrooms, area, floor, parking },
}) => {
  return (
    <div className="propcard">
      <img src={img} alt="" />
      <div className="prptxt">
        <span>{type}</span>
        <h4>${price}</h4>
      </div>
      <h4>
        <a href="#">{location}</a>
      </h4>
      <ul>
        <li>Bedrooms: {bedrooms}</li>
        <li>Bathrooms: {bathrooms}</li>
        <li>Area: {area}</li>
        <li>Floor: {floor}</li>
        <li>Parking: {parking}</li>
      </ul>
      <button>Scedule a visit</button>
    </div>
  );
};

export default PropertiesCard;
