import React, { useState, useEffect } from "react";
import heroDesktop from "../images/icons/contact.png";
import heroMobile from "../images/icons/m-contact.png"; 
import Header from "./header";
import img from "../images/icons/Frame 232.png";
import "../App";
function ContactUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <section className="hero-section" style={{ position: "relative" }}>
        <Header />

        {/* Only ONE image will show based on screen size */}
        <img
          src={isMobile ? heroMobile : heroDesktop}
          alt="Hero"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </section>
     

     <section className="contact-section">

      <div className="contact-container">

        <h2 className="contact-title">We’d love to hear from you</h2>
        <p className="contact-subtitle">
          Contact us regarding any concerns or inquiries.
        </p>

        {/* First/Last Name */}
        <div className="form-row">
          <div className="input-box">
            <label>First Name</label>
            <input type="text" placeholder="e.g. John" />
          </div>

          <div className="input-box">
            <label>Last Name</label>
            <input type="text" placeholder="e.g. Dowry" />
          </div>
        </div>

        {/* Company */}
        <div className="input-box">
          <label>Company</label>
          <input type="text" placeholder="e.g. Company XYZ (If any)" />
        </div>

        {/* Email */}
        <div className="input-box">
          <label>Email</label>
          <input type="email" placeholder="e.g. example@xyz.com" />
        </div>

        {/* Phone */}
        <div className="input-box">
          <label>Phone Number</label>
          <input type="text" placeholder="+91 (000) 000-0000" />
        </div>

        {/* Options */}
        <p className="option-title">Choose the option that best fits your need</p>

        <div className="checkbox-grid">
          <label><input type="checkbox" /> Sponsorship</label>
          <label><input type="checkbox" /> Partnership</label>
          <label><input type="checkbox" /> One-time giving</label>
          <label><input type="checkbox" /> Volunteering</label>
          <label><input type="checkbox" /> Legacy gifts</label>
          <label><input type="checkbox" /> Other</label>
        </div>

        {/* Message */}
        <div className="input-box">
          <label>Additional Message</label>
          <textarea placeholder="Type a message here..." maxLength="240"></textarea>
        </div>

        {/* Newsletter */}
        <div className="newsletter-box">
          <input type="checkbox" />
          <span>Subscribe to our newsletter</span>
        </div>

        {/* Note */}
        <p className="form-note">
          By pressing the submit button, I agree to CLB contacting me by email and/or
          phone to share opportunities exclusively available to Select or Enterprise
          customers. I also understand that any information I’ve shared in this form is
          subject to CLB Privacy Policy.
        </p>

      </div>
    </section>
    

     
      
    </>
  );
}

export default ContactUs;
