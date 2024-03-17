import React from "react";
import "./ContactSection.css";

const ContactSection = (img) => {
  return (
    <div className="contactsec">
      <img src={img} alt="" />
      <div className="csinfo">
        <h6>| CONTACT US</h6>
        <h2>Get In Touch With Our Agents</h2>
      </div>
    </div>
  );
};

export default ContactSection;
