import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
// import "../css";
import "../App"
import img from "../images/icons/Frame 232.png"
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img1 from "../images/icons/Programs.svg"
import { useNavigate } from "react-router-dom";
function Disability() {
      const navigate = useNavigate();
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
                    <h1 style={{color:'#1C191E'}} className="program-title">
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
             
             
            <div style={{ padding: '50px' }}>
                <p>
                    We are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities.
                </p>
            </div>
            <section style={{ width: "100%", overflow: "hidden", padding: "0px 0", background: "#fff" }}>

                {/* animation and keyframes injected inside component */}
                <style>{`
    @keyframes autoScroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .scroll-box {
      animation: autoScroll 20s linear infinite;
      display: flex;
      white-space: nowrap;
      align-items: center;
      gap: 20px;
    }
  `}</style> 
  <hr></hr>
                  <div className="scroll-box">


                    <span onClick={() => navigate("/education")} style={{
                        background: "#F2E5FF",
                        color: "#7A3CFF",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Education</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/midical")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Medical campaigns</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/disability")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>
                        Supporting the disabled
                    </span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/tripofindia")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Mission to India</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/childtraffic")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Act for child protection</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/nurturingplaytime")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Nurturing playtime</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/disasterrelief")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Disaster relief</span>

                    {/* DUPLICATE FOR INFINITE LOOP */}
                    <span onClick={() => navigate("/education")} style={{
                        background: "#F2E5FF",
                        color: "#7A3CFF",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Education</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/medical")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Medical campaigns</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span  onClick={() => navigate("/disability")} style={{ color: "#444", cursor: "pointer", gap: '12px' }} >Supporting the disabled </span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/tripofindia")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Mission to India</span>

                </div>
                 <hr></hr>

            </section>
          

            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">
                    {/* <h2 style={{ textAlign: 'center' }} className="title">Child Guidance Centre (CGC)</h2> */}

                    {/* <p className="description">
                        we are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities.
                    </p> */}

                  

                    <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%' }} className="sub-title">Educational Outreach</h2><br></br>
                    <p className="description">
                        We have partnered with local educators, colleges, and universities in Southwest Virginia to serve through our sister children’s organizations and through the schools’ established educational institutions in India.
                        Educational Outreach and Mission Trips to India: During our Educational Outreach, we visit schools in India and volunteer our skills and expertise in areas where foreign visitors are allowed. We believe it is very timely and important for us to serve the schools in South India.<br></br><br></br>
                        We are seeing how the promise and hope for a better future through education is becoming a reality as we work with at-risk children in the United States and developing world nations. We believe in the value of education to “open doors” for a new way of life for children and youth all around the globe.<br></br><br></br>
                        Every day men, women, and children are trafficked for sex, or forced into labor and/or begging worldwide. Their hearts are crying out for rescue from poverty, abuse and bondage. Children Left Behind is committed to respond to their cry and be an advocate for this very real need. You too, can be a part of the transformation that education provides in a child’s life by giving them a fresh start and a confident hope for a better future! Join us in being a part of the solution
                    </p>
                    <img style={{ width: '100%' }} src={img} />


                </div> <br></br>
                <BlogSection />
                <CtaSection ctaclass={'wpo-cta-area-2'} />
                <Needs />

            </section>
        </>
    );
}

export default Disability;