import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
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
import { useNavigate } from "react-router-dom";
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
        { name: "Supporting the disabled", link: "/disability" },
        { name: "Education",  special: true },
        { name: "Medical campaigns", link: "/medical" },
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
                <div className="program-content">
                    <h1 style={{ color: '#1C191E' }} className="program-title">
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

            </div><br /><br />


            {/* <p style={{ paddingLeft: '50px' }} */}
                   <p style = {{
    margin: "28px 264px auto",
    width: "1164px", marginLeft: "172px"}}
            className="program-desc">We are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities</p>
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
                   



                    <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%', marginLeft: "-20px" }} className="sub-title">Educational Outreach</h2><br></br>
                    <p className="description" style={{marginLeft: "50px"}}>
                        We have partnered with local educators, colleges, and universities in Southwest Virginia to serve through our sister children’s organizations and through the schools’ established educational institutions in India.
                        Educational Outreach and Mission Trips to India: During our Educational Outreach, we visit schools in India and volunteer our skills and expertise in areas where foreign visitors are allowed. We believe it is very timely and important for us to serve the schools in South India.<br></br><br></br>
                        We are seeing how the promise and hope for a better future through education is becoming a reality as we work with at-risk children in the United States and developing world nations. We believe in the value of education to “open doors” for a new way of life for children and youth all around the globe.<br></br><br></br>
                        Every day men, women, and children are trafficked for sex, or forced into labor and/or begging worldwide. Their hearts are crying out for rescue from poverty, abuse and bondage. Children Left Behind is committed to respond to their cry and be an advocate for this very real need. You too, can be a part of the transformation that education provides in a child’s life by giving them a fresh start and a confident hope for a better future! Join us in being a part of the solution
                    </p>
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

export default Disability;