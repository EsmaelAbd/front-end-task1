import React from "react";
import "./PropertiesContainer.css";
import Prop1 from "../../imgs/Properties/property-01.jpg";
import Prop2 from "../../imgs/Properties/property-02.jpg";
import Prop3 from "../../imgs/Properties/property-03.jpg";
import Prop4 from "../../imgs/Properties/property-04.jpg";
import Prop5 from "../../imgs/Properties/property-05.jpg";
import Prop6 from "../../imgs/Properties/property-06.jpg";
import PropertiesCard from "../../Card/PropertiesCard";

const PropertiesContainer = () => {
  const propdata = [
    {
      id: 1,
      img: Prop1,
      type: "Luxury Villa",
      price: "2.264.000",
      location: "18 New Street Miami, OR 97219",
      details: {
        bedrooms: 8,
        bathrooms: 8,
        area: 545,
        floor: 4,
        parking: 6,
      },
    },
    {
      id: 2,
      img: Prop2,
      type: "Luxury Villa",
      price: "1.180.000",
      location: "54 Mid Street Florida, OR 27001",
      details: {
        bedrooms: 6,
        bathrooms: 5,
        area: 450,
        floor: 4,
        parking: 8,
      },
    },
    {
      id: 3,
      img: Prop3,
      type: "Luxury Villa",
      price: "1.460.000",
      location: "26 Old Street Miami, OR 38540",
      details: {
        bedrooms: 5,
        bathrooms: 4,
        area: 225,
        floor: 4,
        parking: 10,
      },
    },
    {
      id: 4,
      img: Prop4,
      type: "Appartment",
      price: "584.500",
      location: "12 New Street Miami, OR 12650",
      details: {
        bedrooms: 4,
        bathrooms: 3,
        area: "125m2",
        floor: "25th",
        parking: "2 cars",
      },
    },
    {
      id: 5,
      img: Prop5,
      type: "Penthouse",
      price: "925.600",
      location: "34 Beach Street Miami, OR 42680",
      details: {
        bedrooms: 4,
        bathrooms: 4,
        area: "180m2",
        floor: "38th",
        parking: "2 cars",
      },
    },
    {
      id: 6,
      img: Prop6,
      type: "Modern Condo",
      price: "450.000",
      location: "22 New Street Portland, OR 16540",
      details: {
        bedrooms: 3,
        bathrooms: 2,
        area: "165m2",
        floor: "26th",
        parking: "3 cars",
      },
    },
  ];

  return (
    <div className="propcontainer">
      {propdata.map((element, index) => {
        return (
          <div key={index}>
            <PropertiesCard
              img={element.img}
              type={element.type}
              price={element.price}
              location={element.location}
              details={element.details}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PropertiesContainer;
