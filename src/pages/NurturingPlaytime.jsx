import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
import Slider from "react-slick";
// import "../css";
import "../App"
import img from "../images/icons/Union.svg"
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img1 from "../images/icons/Programs.svg"
import { useNavigate } from "react-router-dom";
import TiltCarousel from "../components/TiltCarousel";
function NurturingPlaytime() {
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
    { name: "Act for child protection", link: "/childtraffic" },
    { name: "Nurturing playtime", special: true },
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

            </div>


            <div>
                {/* <p style={{ paddingLeft: '50px' }}> */}
                 <p style = {{
    margin: "80px 264px auto",
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
                    <h2 style={{ width: "100%", overflow: "hidden", padding: "13px 0", background: "#fff", color: '#1C191E', marginLeft: "-26px" }} className="sub-title">Nurturing playtime</h2><br></br>
                    <p className="description" style={{marginLeft: "50px"}}>
                        Before- and after-school programs offer fun activities, educational experiences, and homework help. This programs for school-age children to continue learning outside of school.
                    </p>
                    <p className="description" style={{marginLeft: "50px"}}>
                        Bala Bata School Programs/School<br></br>
                        Background:<br></br>
                        Most of the villages are now provided with State Govt. Primary Schools. Many of them are single teacher schools. The teachers are required to reside in the villages of their duty. But most of them do not. They reside in nearby towns for their own convenience and comfort and commute daily to the place of duty. Under the circumstances of such a situation, they rarely attend to their duties regularly and properly and very often even indulge in unauthorized absence for days together without being noticed. Even where the teachers attend to their duties, they lack the commitment required of their profession in the context of a rural situation. As a result children of parents who cannot afford to send their children to better equipped and better managed private educational institutions, are subjected to gross neglect and their future careers become jeopardized. Consequently there is increasing dropout rates at the primary level and those few who survive are not destined to go much far in the educational ladder because of their poor standard of attainment at the primary level. Children, what with their poverty, and the illiteracy and ignorance of their parents are the major casualties in this situation. Bala Bata Program is conceived against this background situation.
                    </p> <br></br>


                    <p className="description" style= {{marginLeft: "-20px"}}  >
                        ACTIVITIES:
                    </p>



                    <p className="description" style={{marginLeft: "50px"}}>
                        Bala Bata schools are opened for Children in the age group of 5 to 10 years.
                        They supplement and reinforce the education at the regular schools and are not a substitution for them.
                        The Children attend Bala Bata Schools during their off time of the regular schools and on holidays.
                        They supplement the curriculum of the regular schools with the innovated curriculum design.
                        They use the Folk arts and culture and the play way methods to kindle and sustain the interest of the children in the education.
                        They ensure that the children who are lagging behind in the school make up for these deficiencies and come up to the required standard.
                        They encourage the children and their parents to take up Kitchen gardening at their homes to have fresh vegetables and supplement their incomes.
                        They promote habits of “Clean and Green” among children.
                        CARDS supports Income generating programs undertaken by the parents of Bala Bata Children with micro–credit to serve as a compensation for the loss of labor wages hitherto earned through Child Labor.
                        The Program lays the path for a new generation of educated.
                        View Bala-Bata 2016 Jan-Feb brochure
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

export default NurturingPlaytime;