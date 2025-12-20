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
function TripToIndia() {
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
    { name: "Mission to India", special: true  },
    { name: "Act for child protection", link: "/childtraffic" },
    { name: "Nurturing playtime", link: "/nurturingplaytime" },
    { name: "Disaster relief", link: "/disasterrelief" },
  ];

    return (
        <>
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

            </div> <br /><br /><br />


            <div style={{}}>
                {/* <p style={{ paddingLeft: '50px' }}> */}

                 <p style = {{
    margin: "5px 264px auto 50px",
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
            // background : "#ebebeb",
            paddingBottom: "20px",
            width : "100vw",
          
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
                 

                    <h2 style={{ width: "100%", overflow: "hidden", padding: "2px 0", background: "#fff", marginLeft: "-20px" }} className="sub-title mt-5">Mission of india</h2><br></br>
                    <p className="description"  style={{marginLeft: "50px"}}>
                        Traveling to India is a unique and inspiring experience. Children Left Behind organizes and puts together teams of people to travel there together and serve. You will be able to meet the children and staff at the homes, and see first-hand how your contributions help the homes. Frank Viswanath and his team are very gracious hosts, and they do everything they can to make your stay comfortable.<br></br><br></br>

                        For more information on joining a visiting team, please email: info@childrenleftbehind.org.<br></br><br></br>

                        We invite you to experience first-hand the amazing work we do in the orphanages we support. A trip to an orphanage will change your life. You’ll fall in love with the children, be inspired by their housemothers, meet their social workers, eat in their dining rooms and/or help them with an improvement project—it’s a powerful experience of a lifetime. </p><br></br>

                    <h2 style={{ width: "100%", overflow: "hidden", padding: "0px 0", background: "#fff", marginLeft: "-20px" }} className="sub-title mt-5">Medical Mission Opportunities</h2><br></br><br></br>
                    <p className="description" style={{marginLeft: "50px"}}>
                        Children Left Behind’s goal is to put together teams of medical professionals, students, and volunteers to make medical mission trips to India.<br></br><br></br>

                        These mission trips provide medical assistance and education to children and families in need. There are many needs in this area; medical mission trips will provide a rewarding and fulfilling experience for those involved.<br></br><br></br>

                        Contact us if you are interested in volunteering to help be a part of our Medical Outreach program.

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

export default TripToIndia;