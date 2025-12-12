import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
import Slider from "react-slick";
// import "../css";
import "../App"
import img from "../images/icons/Union.svg"
import img1 from "../images/icons/Programs.svg"
import { useNavigate } from "react-router-dom";
import TiltCarousel from "../components/TiltCarousel"

import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import { MdMargin } from "react-icons/md";
function Disability() {

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
    { name: "Supporting the disabled", special: true },
    { name: "Education", link: "/education" },
    { name: "Medical campaigns", link: "/medical" },
    { name: "Mission to India", link: "/tripofindia" },
    { name: "Act for child protection", link: "/childtraffic" },
    { name: "Nurturing playtime", link: "/nurturingplaytime" },
    { name: "Disaster relief", link: "/disasterrelief" },
  ];
    return (
        <>
            {/* 🌟 HERO SECTION */}
            {/* <section className="hero-section">
                <div className="hero-overlay"></div>
                <img src={heroImg} alt="Hero" className="hero-bg" />
            </section> */}

            <div className="program-hero">

              
                <div className="program-image-box">
                    <img src={img1} alt="hero" className="program-image" />
                </div>

              
                <div className="program-content">
                    <h1 className="program-title" >
                        Aims to bridge the <br />
                        gaps in education and <br />
                        healthcare
                    </h1>

                    <p className="program-desc" >
                        Children Left Behind conceived its goals to meet the pressing
                        educational and medical needs of children who live without the crucial
                        anchor of family, as well as those with family or caregivers who are
                        unable to access the resources they need to flourish.
                        <br></br>
                        <br></br>
                    </p>

                </div>

            </div><br /><br /><br />

            <div>
                {/* <p style={{ paddingLeft: '50px' }}> */}
                {/* <p style={{ textAlign: "center" , margin: 0}}> */}
               <p style = {{
    margin: "5px 264px auto",
    width: "1164px", marginLeft: "172px"}}>

                    We are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities.
                </p>
            </div>
            {/* <div className= "tabs-border"
            style ={{
width: "100vw",
    height: "1px",
    background: "#ebebeb",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)"
            }} /> */}
            <section className="category-section container">
      {/* DESKTOP VIEW (no carousel) */}
      <div className="category-desktop"
      
style={{
    width: "100vw",
    height: "1px",
    background: "#ebebeb",
    // top: "0",
    // zIndex : "1000",
    // paddingTop: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    position: "relative",
    // overflow: "hidden",
    // overflow: "auto",
    // overflowY: "scroll"
}}


      >
        <div className="category-list"
        
        style={{
            borderBottom : "1px solid #ebebeb",
            // background : "#ebebeb",
            paddingBottom: "20px",
            width : "100vw",
            // position : "relative",
            // transform : "translate(-50%)",
            left: "50%",
            paddingTop: "20px",
            paddingLeft: "222px"

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
      {/* </div> */}

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
    {/* </div> */}



            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">
                  

                    <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%', marginLeft: "-20px" }} className="sub-title mt-5">Supporting Disabled Children</h2><br></br>
                    <p className="description" style={{marginLeft: "50px "}}>
                        Children Left Behind is actively involved in improving the lives and education of children with intellectual and physical disabilities in developing countries.<br></br> <br></br>
                        Often in developing countries it is believed that having a disability is due to a curse or karma, and those with disabilities are often hidden or shunned from society.<br></br><br></br>
                        Through partnership with existing local social service entities, facility administrators and other charitable organizations, Children Left Behind helps to assess and meet the many needs and challenges facing these children. Children Left Behind believes that every child is precious and deserves the best possible opportunities in life<br></br><br></br>
                        Children Left Behind also recognizes the need for expanding community awareness and inclusion in these countries in order to promote more supported home based services, employment opportunities and day treatment programs. With appropriate intervention, education and resources provided to families, many children with disabilities will be able to live and function within the context of their own families and communities </p>
                    {/* </p> */}
                    <p style={{marginLeft: "50px"}}>
                        The Need<br></br>
                        In developing countries around the World, families of children with special needs often do not have the ability or resources to care for them at home. Many of these children are then placed in under-staffed, overcrowded and under-funded orphanages and other residential facilities. Children with Down’s syndrome, autism, cerebral palsy and other disabilities are often isolated in these environments, receiving only minimal care and attention. There is a great need for special education services, physical, occupational and speech therapy, medical care and vocational training. When these needs are not addressed, many children with special needs in these countries cannot thrive or reach their full potential.
                    </p>
                    <p style={{marginLeft: "50px"}}>
                        Children Left Behind Provides:<br></br>
                        Special Education services through the Child Guidance Center Schools* in Andhra Pradesh and Telangana States in South India <br></br>
                        Adaptive wheelchairs, educational and recreational equipment, sensory toys Building materials for ongoing facility<br></br> improvements Volunteer teams who provide special education, occupational therapy, medical care, and caregiver<br></br> assistance <br></br>
                        Volunteer teams that assist with maintenance and building projects<br></br>
                        Support and encouragement to facility administrators and staff<br></br>
                        Direct financial support which contributes to utility expenses, building materials, clothing and diapers<br></br>
                        Housing <br></br><br></br>

                        * The Child Guidance Center encompasses 14 boarding schools for children with disabilities, providing lodging and meals as well as medical care and education appropriate to the ability of each student. A 15th boarding school is currently under construction. See the Partnerships page for details.
                    </p>
                    <br></br>
                    <br></br>

                    <TiltCarousel/>
                    <div>
                        {/* <img style={{alignItems:'center'}} src={img} /> */}
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={img} />
                        </div>

                    </div> <br></br>



        
                </div>


                <CtaSection ctaclass={'wpo-cta-area-2'} />
                <Needs />

            </section>
        </>
    );
}

export default Disability;