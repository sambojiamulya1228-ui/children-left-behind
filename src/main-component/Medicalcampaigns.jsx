import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
// import "../css";
import "../App"
import img from "../images/icons/Frame 232.png"
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img1 from "../images/icons/Programs.svg"
function Medicalcampaigns() {
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
        
                    </div><br/><br/><br/>

                       
            <div>
                <p style={{paddingLeft:'50px'}}>
                    We are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities.
                </p>
            </div>
            <section style={{ width: "100%", overflow: "hidden", paddingTop:'10px', background: "#fff" }}>

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


                    <span onClick={() => navigate("/education")} style={{ color: "#444", cursor: "pointer", gap: '12px' }} >Education</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/medical")}  style={{
                        background: "#F2E5FF",
                        color: "#7A3CFF",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Medical campaigns</span>
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
                    <span onClick={() => navigate("/education")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Education</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/medical")} style={{
                        background: "#F2E5FF",
                        color: "#7A3CFF",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Medical campaigns</span>
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



                    <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%' }} className="sub-title">Medical campaigns</h2><br></br>
                    <p className="description">
                        Children in developing countries suffer from many diseases that may be prevented with proper medical care and preventive medicine. Children Left Behind’s mission is to provide medical care and education to children and their families in developing countries.<br></br><br></br>

                        Children in developing countries suffer from many diseases that may be prevented with proper medical care and preventive medicine. Children Left Behind’s mission is to provide medical care and education to children and their families in developing countries.<br></br><br></br>

                        Children Left Behind has partnered with Child Guidance Center in the states of Andhra Pradesh and Telangana, India, to help provide assistance with medical needs. Child Guidance Center provides special schools for children with mental and physical disabilities.<br></br><br></br>

                        Most commonly seen disabilities and disorders are intellectual disability (mild, moderate, and severe), autism, epilepsy, ADHD, cerebral palsy, Down’s syndrome, and malnutrition, just to mention a few.

                        Children Left Behind is working hard to increase resources through donations, supplies, and medical education.
                        These resources assist in addressing the needs of children suffering from lack of medical resources.
                    </p>
                    <p>Some of the educational needs are:</p>
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




                    <img style={{ width: '100%' }} src={img} />
                </div> <br></br>
                  <BlogSection />
                    <CtaSection ctaclass={'wpo-cta-area-2'} />
                    <Needs />
               
            </section>
        </>
    );
}

export default Medicalcampaigns;