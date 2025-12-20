import React, { useState, useEffect } from "react";
import heroDesktop from "../images/icons/contact.png";
import heroMobile from "../images/icons/m-contact.png";
import Header from "./header";
// import img from "../images/icons/Frame 232.png";
import "../App";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img from "../images/icons/Frame 189.svg"
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
    

    

      <div style={{ backgroundColor: '#F8F0FF', borderRadius: "6px", paddingLeft: '80px' }}
        className="resource-header container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          {/* LEFT SIDE — TEXT + CONTACT DETAILS */}
          <div className="col-md-6 col-12 mt-4 mt-md-0">
            <h1 className="res-title" style={{marginLeft: "2px"}}>Get in touch with us!</h1>
            <p className="res-desc" style={{marginLeft: "2px"}}>
              We're available to provide assistance and address any inquiries you may have.
              Feel free to connect with us.
            </p>

            {/* Contact details */}
            <div className="contact-details mt-4">

              <div className="d-flex align-items-start mb-4">
                <i className="fa-solid fa-envelope fs-4 me-3"></i>
                <div>
                  <h5 className="fw-bold mb-1 contact">Chat with us</h5>
                  <p className="mb-0">
                    Reach out to us at <a href="mailto:info@childrenleftbehind.org">info@childrenleftbehind.org</a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <i className="fa-solid fa-location-dot fs-4 me-3"></i>
                <div>
                  <h5 className="fw-bold mb-1 contact">Our office</h5>
                  <p className="mb-0">
                    1045 Radford Street <br />
                    Christiansburg, VA 24073
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <i className="fa-solid fa-phone fs-4 me-3"></i>
                <div>
                  <h5 style={{ paddingRight: '-20px' }} className="fw-bold mb-1 contact">Call us</h5>
                  <p className="mb-0">Ring us on +1 (540) 251-3225</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="col-md-6 col-12 text-center">
            <img src={img} alt="Resources" className="header-img img-fluid mb-3 mb-md-0" />
          </div>
        </div>
      </div>



      <section className="contact-section">

        <div className="contact-container">

          <h5 className="contact-title">We’d love to hear from you</h5>
          <p className="contact-subtitle">
            Contact us regarding any <br></br>concerns or inquiries.
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
      {/* <BlogSection /> */}
      <CtaSection ctaclass={'wpo-cta-area-2'} />
      <Needs />





    </>
  );
}

export default ContactUs;
