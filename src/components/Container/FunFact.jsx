import React from "react";
import "./FunFact.css";
import FCard from "../Card/FCard";

const FunFact = () => {
  const data = [
    {
      id: 1,
      number: 34,
      info: "Bulidings Finshed Now",
    },
    {
      id: 2,
      number: 12,
      info: "Years Experience",
    },
    {
      id: 3,
      number: 34,
      info: "Awards Won 2023",
    },
  ];

  return (
    <div className="fun-fact">
      {data.map((element, index) => {
        return (
          <div key={index}>
            <FCard number={element.number} info={element.info} />
          </div>
        );
      })}
    </div>
  );
};

export default FunFact;
