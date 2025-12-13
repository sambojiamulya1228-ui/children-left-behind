

import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
// import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-content">

        <h1 className="contact-title">Get in touch with us!</h1>

        <p className="contact-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </p>

        {/* Chat */}
        <div className="contact-box">
          <FaEnvelope className="contact-icon" />
          <div>
            <h3 className="contact-heading">Chat with us</h3>
            <p className="contact-text">
              Reach out to us at hello@designership.com
            </p>
          </div>
        </div>

        {/* Office */}
        <div className="contact-box">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <h3 className="contact-heading">Our office</h3>
            <p className="contact-text">
              4556 Brendan Ferry<br />
              Los Angeles, CA 90210
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="contact-box">
          <FaPhone className="contact-icon" />
          <div>
            <h3 className="contact-heading">Call us</h3>
            <p className="contact-text">Ring us on +1 (201) 555-0123</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
