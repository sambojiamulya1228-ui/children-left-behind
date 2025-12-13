import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import TiltCarousel from "../components/TiltCarousel";
// import "../css";
import "../App"
import img from "../images/icons/Union.svg"
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img1 from "../images/icons/Programs.svg"
function Medicalcampaigns() {
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
    { name: "Medical campaigns", special: true },
    { name: "Mission to India", link: "/tripofindia" },
    { name: "Act for child protection", link: "/childtraffic" },
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
                <div className="program-content" 
                // style={{marginLeft: "50px"}}
                >
                    <h1 style={{ color: '#1C191E'}} className="program-title">
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
    width: "1164px", marginLeft: "172px"}}>
                    We are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities.
                </p>
            </div>
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
           
            paddingBottom: "20px",
            width : "100vw",
            
            left: "50%",
            paddingTop: "20px",
            paddingLeft: "222px"
            //  paddingBottom: "10px",
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
                  



                    <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%', marginLeft: "-20px" }} className="sub-title">Medical campaigns</h2><br></br>
                    <p className="description" style={{marginLeft: "50px"}}>
                        Children in developing countries suffer from many diseases that may be prevented with proper medical care and preventive medicine. Children Left Behind’s mission is to provide medical care and education to children and their families in developing countries.<br></br><br></br>

                        Children in developing countries suffer from many diseases that may be prevented with proper medical care and preventive medicine. Children Left Behind’s mission is to provide medical care and education to children and their families in developing countries.<br></br><br></br>

                        Children Left Behind has partnered with Child Guidance Center in the states of Andhra Pradesh and Telangana, India, to help provide assistance with medical needs. Child Guidance Center provides special schools for children with mental and physical disabilities.<br></br><br></br>

                        Most commonly seen disabilities and disorders are intellectual disability (mild, moderate, and severe), autism, epilepsy, ADHD, cerebral palsy, Down’s syndrome, and malnutrition, just to mention a few.

                        Children Left Behind is working hard to increase resources through donations, supplies, and medical education.
                        These resources assist in addressing the needs of children suffering from lack of medical resources.
                    </p>
                    <div style={{marginLeft: "52px"}}>
                    <p>Some of the educational needs are:</p>
                    </div>
                    <div style={{marginLeft: "52px"}}>
                    <ul className="project-list">
                        <li>Prenatal care and pregnacy education</li>
                        <li>Causes and prevention of disabilities</li>
                        <li>Preventive medicine and immunization</li>
                        <li>Infection and intoxication</li>
                        <li>Epilepsy</li>
                        <li>First Aid & CPR</li>
                        <li>Genetics and genetic counseling</li>
                        <li>ADHD</li>
                        <li>Mental Illness</li>
                        <li>Fragile X Syndrome</li>
                        <li>Down’s Syndrome</li>
                        <li>Hydrocephaly</li>
                        <li>Cretinism</li>
                        <li>Progressive metabolic disorders</li>
                        <li>HIV & AIDS</li>
                    </ul>
</div>
                     <br></br>
                    <br></br>
                      <TiltCarousel/>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={img} />
                    </div>

                </div> <br></br>

                <CtaSection ctaclass={'wpo-cta-area-2'} />
                <Needs />

            </section>
        </>
    );
}

export default Medicalcampaigns;