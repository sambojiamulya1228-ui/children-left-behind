
import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
import "../App";
import img from "../images/icons/Frame 232.png";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection";
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img1 from "../images/icons/Frame 235.svg";
import { useNavigate } from "react-router-dom";
import user from "../images/icons/Vector.svg";
import love from "../images/icons/heart.svg";
import ind from "../images/icons/Frame 242.png";
import emp from "../images/icons/Frame 242-1.png";
import Slider from "react-slick";
import img2 from "../images/icons/Vector.png";
import w1 from "../images/icons/Workplace.svg";
import w2 from "../images/icons/Fund.svg";
import w3 from "../images/icons/Marketing.svg"
import v1 from "../images/icons/email.svg";
import v2 from "../images/icons/mic.png";
import v3 from "../images/icons/host.svg"
import TiltCarousel from "../components/TiltCarousel"

function OneTimeGiving() {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    variableWidth: true,
  };

  const tags = ["Sponsoring a Child", "Sending a Child to School"];
  const ontime = ["Make a Difference Today", "Occasion Specific Giving"];
  const gift = ["Gift Through Will", "Gifts Outside Will", "Gifts Now"]
  const Volunteering = ["Mission To India", "Medical Mission", "Educational Outreach Programs"]

  const categories = [
    { name: "Sponsorship",  link: "/getinvolved" },
    { name: "Corporate Partnerships", link: "/corporratepartnerships"},
    { name: "Donation", special: true },
    { name: "Legacy Giving", link: "/legacygiving" },
    { name: "Volunteering", link: "/volunteering" },
    { name: "Awareness Programs", link: "/awarenessprograms" },
  ];

  const data = [
    {
      img: w1,
      title: "Workplace Giving",
      desc: `Workplace giving is a simple yet powerful way for employees 
      to assist children through the delivery of essential equipment 
      and services to individual kids and organizations.`,
    },
    {
      img: w2,
      title: "Corporate Fund-raising",
      desc: `Fundraising materials, business supplies, supporter training, 
      and sponsorship of high-profile events helps you reach new audiences 
      and increase brand equity.`,
    },
    {
      img: w3,
      title: "Cause-related Marketing",
      desc: `Partnership between company objectives and our mission delivers 
      real impact to children while engaging staff and customers.`,
    },
  ];



  return (
    <>

      {/* 🌟 HERO SECTION */}
      <div className="program-hero">
        <div className="program-image-box">
          <img src={img1} alt="hero" className="program-image" />
        </div>

        <div className="program-content">
          <h1 style={{ color: "#1C191E" }} className="program-title">
            Creating child friendly
            <br /> world, with you!
          </h1>
          <p className="program-desc">
            The solution is now for a bright promising future for
            <br /> these children! Join us to learn about innovative ways
            <br /> supporting education and health care in communities
            <br /> in India.
          </p>
        </div>
      </div>
      <br />
      <br />

      <div className="container text-center what">
        <p className="whatwe">Ways you can be involved</p>
        <h2
          className="mx-auto"
          style={{
            maxWidth: "900px",
            color: "#1C191E",
            fontWeight: "600",
            fontSize: "36px",
            lineHeight: "44px",
            letterSpacing: "2%",
          }}
        >
          Enabling Children by Creating Pathways to <br />
          Opportunity
        </h2>
        <p>
          There are endless ways that you can raise funds to support children in
          <br /> desperate need. From essential care in India to international
          opportunities,
          <br /> learn how our unique programs are changing lives.
        </p>
        <br />

        <div className="stats-container">
          <button className="icon-btn">
            <img src={user} alt="icon" className="img-icon" />
            <span className="text">10,000+ Supporters</span>
          </button>

          <button className="icon-btn">
            <img src={love} alt="icon" className="img-icon" />
            <span className="text">5,000+ Children Helped</span>
          </button>
        </div>
      </div>

      {/* 🌟 CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <p className="description">
            Ways you can join in the solution:
            <br />
            – Donate to an educational outreach
            <br />
            – Sponsor a student or volunteer’s mission trip to India
            <br />
            – Join us as we share some of the realities in our nation and abroad;
            provide your email and we will notify you of our upcoming information
            meetings
            <br />
            – Improve the lives of children with disabilities around the world
          </p>
          <br />
          <p className="description">
            Children Left Behind can be supported by Individuals, corporations,
            Churches, community groups, friends and well wishers. We accept monetary
            and other donations that will enhance the children education programs and
            humanitarian missions. All gifts are tax deductible.
            <br />
            <br />
            On behalf of the children we serve, Thank you
          </p>
          <br />
          <br />

          <section className="involved-section">
            <div className="involved-container">
              <h2 className="involved-title">Who Can Get Involved</h2>

              <div className="involved-right">
                <div className="involved-item">
                  <img src={ind} alt="Individual" style={{marginLeft:"-99px", width:"356px", heigth: "210px"}}/>
                    <div style ={{marginLeft: "-86px"}}>
                  <p>Individual</p>
                  </div>
                </div>

                <div className="involved-item">
                  <img src={emp} alt="Corporate Employer" style={{marginLeft:"-210px", width:"480px", heigth: "210px"}}/>
                   <div style ={{marginLeft: "-212px"}}>
                  <p>Corporate / Employer</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="category-section container">
            {/* DESKTOP VIEW (no carousel) */}
            <div className="category-desktop"
            style={{
              width: "100vw",
    height: "1px",
    background: "#ebebeb",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)"
            }}
            >
              <div
                className="category-list"
                style={{
                  display: "flex",
                  gap: "40px",
                
                    borderBottom : "1px solid #ebebeb",
            // background : "#ebebeb",
            paddingBottom: "10px",
            width : "100vw",
          
            left: "50%",
            paddingTop: "10px",
            paddingLeft: "204px"
                }}
              >
                {categories.map((item, i) => (
                  <span
                    key={i}
                    onClick={() => !item.special && navigate(item.link)}
                    className={`cat-item ${item.special ? "special" : ""}`}
                    style={{
                      fontFamily: "Work Sans",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "16px",
                      lineHeight: "18px",
                      textAlign: "center",
                      cursor: "pointer",
                      color: "#1C191E",
                    }}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* MOBILE VIEW (carousel) */}
            <div className="category-mobile">
              <Slider {...settings}>
                {categories.map((item, i) => (
                  <div key={i} style={{ width: "auto" }}>
                    <span
                      onClick={() => !item.special && navigate(item.link)}
                      className={`cat-item ${item.special ? "special" : ""}`}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </Slider>
            </div>
          </section>
          <br />




        



          <h4
            style={{
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "2%",
            }}
            className="sub-title"
          >
            One-Time Giving
          </h4>

          <div className="d-flex flex-wrap mt-4 gap-2">
            {ontime.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 small d-flex align-items-center"
                style={{
                  fontSize: "12px",
                  border: "2px solid #7D7188 ",
                  borderRadius: "5px",
                  gap: "6px",
                  color: "#7D7188",
                }}
              >
                <img
                  src={img2}
                  alt="check"
                  style={{ width: "14px", height: "14px", objectFit: "contain" }}
                />
                {item}
              </span>
            ))}
          </div><br />
          <p>One-Time giving is a way to help children in the partnering organizations through single donation. This option entails not only for the make a difference aspect but as well for the event based, where your funds are offered on your special occasions like birthday or In the loving memory of your family member or any other events</p><br />

          <div className="buttons_container">
            <button
              style={{
                gap: "6px",
                padding: "10px 16px",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#832AD1",
                backgroundColor: "#F8F0FF",
                cursor: "pointer",
                opacity: 1,
                fontFamily: "Work Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "18px",
                textAlign: "center",
                color: "#832AD1",
                width: '200px',
                height: '36px'
              }}
            >
              Donate now
            </button>
          </div><br /><br />
         


          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <img src={img} alt="banner" style={{ width: "100%" }} /> */}
             <TiltCarousel/>
          </div>
          <br></br>
          <br></br>
        </div>

        <CtaSection ctaclass={"wpo-cta-area-2"} />
        <Needs />
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default OneTimeGiving; 