import React from "react";
import Slider from "react-slick";

import img1 from "../../images/about6.png";
import img2 from "../../images/about4.png";
import img3 from "../../images/about5.png";
import img4 from "../../images/icons/org-layer1.png";
import img5 from "../../images/icons/org-layer2.png";

import { Link } from "react-router-dom";
import "./style.css";

const Mission = (props) => {
  // Slick Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={`wpo-mission-area org ${props.subclass}`}>
      <div className="container pt-5 mt-5">
        <img src={img4} alt="" className='org-icon-left'/>
                            <img src={img5} alt="" className='org-icon-right'/>
        {/* Section Title */}
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title orgs">
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#91278f",
                }}
              >
                OUR PARTNERING ORGS
              </span>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "600",
                  lineHeight: "44px",
                  letterSpacing: "2%",
                }}
              >
                Partners That Trusted Us to Amplify Impacts
              </h2>
              <br></br>
              <br></br>
              <p style={{ color: "#37323C" }}>
                We have strategic partners, leaders from the private, public, and
            non-governmental organization (NGO) sectors, and subject matter experts in a variety of areas within children's programs internationally.
              </p>
              <br></br>
            
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="wpo-mission-wrap">
          <div className="row align-items-center justify-content-center">
            {/* LEFT SIDE - Partner Links */}
            <div className="col-lg-5">
              <div className="partner-links">
                <h3>
                  <Link to="/childcenter">Child Guidance Center</Link>
                </h3>
                <h3>
                  <Link to="/cards">
                    Community & Rural Development Society (CARDS)
                  </Link>
                </h3>
                <h3>
                  <Link to="/asha">Aasha Jyothi Welfare</Link>
                </h3>
                <h3>
                  <Link to="/pavani">Pavani Special School</Link>
                </h3>
              </div>
            </div>

            {/* RIGHT SIDE - Image Carousel */}
            <div className="col-lg-5 imgs p-0">
              <Slider {...settings}>
                <div>
                  <img  src={img1} className=" w-100" alt="" />
                </div>
                <div>
                  <img  src={img2} className=" w-100" alt="" />
                </div>
                <div>
                  <img  src={img3} className=" w-100" alt="" />
                </div>
              </Slider>
            </div>

            {/* Bottom Description */}
            <div className="col-12">
              <div className="wpo-mission-item">
                <p>
                  The Child Guidance Center encompasses 14 boarding schools* for children with disabilities, providing lodging <br/> and meals as well as medical care and education appropriate to the ability of each student. A 15th boarding <br/>school is currently under construction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
