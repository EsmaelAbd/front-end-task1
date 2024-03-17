import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="map">
        <div className="mapimg">
          <img src="src/components/imgs/Map.png" alt="map" />
        </div>
        <div className="contactinfo">
          <div className="call">
            <img
              src="src/components/imgs/ContactSec/phone-icon.png"
              alt="phone"
            />
            <div className="callinfo">
              <h6>010-020-0340</h6>
              <span>Phone Number</span>
            </div>
          </div>
          <div className="email">
            <img
              src="src/components/imgs/ContactSec/email-icon.png"
              alt="email"
            />
            <div className="emailinfo">
              <h6>info@villa.com</h6>
              <span>Business Email</span>
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <form id="contactform" action="post">
          <div className="fname">
            <label For="name">Full name</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Your name..."
            />
          </div>
          <div className="femail">
            <label For="email">Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              pattern="[^ @]*@[^ @]*"
              placeholder="Your E-mail..."
              required
            />
          </div>
          <div className="fsubject">
            <label For="subject">Subject</label>
            <input
              type="subject"
              name="subject"
              id="subject"
              placeholder="Subject..."
              autoComplete="on"
            />
          </div>
          <div className="fmessage">
            <label For="message">Message</label>
            <input name="message" id="message" placeholder="Your Message..." />
          </div>
        </form>
        <div className="btnl">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
