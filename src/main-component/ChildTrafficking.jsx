import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection";
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img from "../images/icons/Union.svg";
import img1 from "../images/icons/Programs.svg";
import TiltCarousel from "../components/TiltCarousel";

function ChildTrafficking() {
   const navigate = useNavigate();

   // 🔥 MOBILE CAROUSEL SETTINGS
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


   const categories = [
    { name: "Supporting the disabled", link: "/disability" },
    { name: "Education", link: "/education" },
    { name: "Medical campaigns", link: "/medical" },
    { name: "Mission to India", link: "/tripofindia" },
    { name: "Act for child protection", special: true },
    { name: "Nurturing playtime", link: "/nurturingplaytime" },
    { name: "Disaster relief", link: "/disasterrelief" },
  ];

  return (
    <>
      {/* 🌟 HERO SECTION */}
      <div className="program-hero">
        {/* RIGHT IMAGE on Desktop — FIRST on Mobile */}
        <div className="program-image-box">
          <img src={img1} alt="hero" className="program-image" />
        </div>

        {/* LEFT CONTENT on Desktop — BELOW on Mobile */}
        <div className="program-content">
          <h1 style={{ color: "#1C191E" }} className="program-title">
            Aims to bridge the <br />
            gaps in education and <br />
            healthcare
          </h1>

          <p className="program-desc">
            Children Left Behind conceived its goals to meet the pressing
            educational and medical needs of children who live without the crucial
            anchor of family, as well as those with family or caregivers who are
            unable to access the resources they need to flourish.
          </p>
        </div>
      </div><br /><br /><br />

      <div>
        {/* <p style={{ paddingLeft: '50px' }}> */}
         <p style = {{
    margin: "5px 264px auto",
    width: "1164px", marginLeft: "176px"}}>
          We are committed to educating the families of children with disabilities
          and teaching families how to deal with and care for the child along with
          providing equipment or other essentials to meet the child’s needs. Many
          children have wide-ranging but treatable and often preventable medical
          problems. Almost none have a formal education, or any prospect of
          vocational opportunities.
        </p>
      </div>

      {/* 🌟 SCROLL MENU SECTION */}
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
        <div className="category-list"
        
           style={{
                     borderBottom : "1px solid #ebebeb",
            // background : "#ebebeb",
            paddingBottom: "3px",
            width : "100vw",
            // position : "relative",
            // transform : "translate(-50%)",
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

      {/* 🌟 CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <h2 style={{ fontWeight: "600", fontSize: "32px", lineHeight: "40px", letterSpacing: "2%", marginLeft: "-20px"  }} className="sub-title mt-5">
            Act for child protection
          </h2>
          <br />
          <p className="description" style={{marginLeft: "50px"}}>
            Children Trafficking in India<br />
            What causes children trafficking? <br /><br />

            Poverty, especially among women<br />
            A lack of political, social and economic stability<br />
            A lack of reasonable and realistic prospects<br />
            Situations of armed conflict and oppression<br />
            Domestic violence and disintegration of the family structure<br />
            Lack of access to education and information<br />
            You may have never considered that people can be for sale in today’s world – but it’s absolutely true. And those who are at greatest risk of losing their freedom are often those least able to defend themselves: children. Many of the children we’ve encountered in various countries are children who live or work on the streets and have no one to protect them and are subject to both sexual and financial exploitation as well as the dangers of drugs, rape, violence, HIV/AIDS, and poverty.<br /><br />

            Children Left Behind is helping children who have no place else to turn – children who are all alone, on the edge of survival. These children desperately need help and hope.<br /><br />

            Over population is one of the biggest challenges children in India face today. The Government struggles to provide healthcare and education to a growing number of children coming from disadvantaged backgrounds, making them vulnerable to abuse and neglect, and a life in poverty.<br /><br />

            Children Left Behind strives to help children around the world overcome the burdens of poverty to become healthy, educated, self-sustaining and contributing members of society. This goal is achieved primarily through child sponsorship, which unites children in the need with individual sponsors who wish to address the children’s immediate and basic needs, and gives them the tools and opportunities necessary for success.<br /><br />

            Violence<br />
            How to Stop Abuse and Exploitation
          </p>
          <br /><br />
          <p className="description" style={{marginLeft: "50px"}}>
            Violence against children happens everywhere, every day. To stop it, Children Left Behind fights to return children to civilian life and helps them rebuild their lives; supports safe haven shelters that care for street kids; trains and funds child protection teams to patrol areas where children are trafficked; develops innovative programs like Safe and Friendly Cities and Safe Schools; and supports groundbreaking national surveys to document the prevalence of violence against girls and boys and help governments build better protection systems.
          </p>
            <TiltCarousel/>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={img} />
          </div>

        </div>
        <br />

        <CtaSection ctaclass={"wpo-cta-area-2"} />
        <Needs />
      </section>
    </>
  );
}

export default ChildTrafficking;
