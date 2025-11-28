import React from "react";
import { Link } from "react-router-dom";

import toyImg from "../../images/icons/about8.png";   // toy box illustration
import dinoImg from "../../images/icons/Unionn.png";       // small dinosaur icon
import "./style.css";
import CurvedText from "../Curvedtext";

const About = () => {
  return (
    <div className="needs-wrapper">
 <CurvedText/>
      <div className="container needs">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div className="needs-text">
              <h2>
                <span className="highlight">20 million</span> Children have no
                access to basic needs
              </h2>
              <p>
                Join us to make a small difference even more impactful with our
                trusted partners.
              </p>

              <div className="needs-btns">
                <Link to="/donate" className="btn btn-learn">
                  Learn More
                </Link>
                <Link to="/donate" className="btn btn-join">
                  Join Hands
                </Link>
              </div>
            </div>

            {/* Dino icon bottom-left */}
            <img src={dinoImg} className="dino-icon" alt="dinosaur" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 text-center">
            <img src={toyImg} className="toy-img" alt="toys illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
