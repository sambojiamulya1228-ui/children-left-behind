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
function TripToIndia() {
     const navigate = useNavigate();
 
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

              
        <hr />

         
                  <div className="scroll-box">


                    <span onClick={() => navigate("/education")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Education</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/midical")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Medical campaigns</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/disability")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>
                        Supporting the disabled
                    </span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/tripofindia")} style={{
                        background: "#F2E5FF",
                        color: "#7A3CFF",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Mission to India</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/childtraffic")}  style={{ color: "#444", cursor: "pointer", gap: '12px' }}> Act for child protection</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/nurturingplaytime")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Nurturing playtime</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/disasterrelief")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Disaster relief</span>

                    {/* DUPLICATE FOR INFINITE LOOP */}
                    <span onClick={() => navigate("/education")} style={{ color: "#444", cursor: "pointer", gap: '12px' }} >Education</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/medical")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Medical campaigns</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span  onClick={() => navigate("/disability")} style={{ color: "#444", cursor: "pointer", gap: '12px' }} >Supporting the disabled </span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/tripofindia")} style={{
                        background: "#F2E5FF",
                        color: "#7A3CFF",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Mission to India</span>

                </div>

        <hr />

            </section>



            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">
                    {/* <h2 style={{ textAlign: 'center' }} className="title">Child Guidance Centre (CGC)</h2> */}

                    {/* <p className="description">
                        we are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities.
                    </p> */}

                    <h2 style={{ width: "100%", overflow: "hidden", padding: "0px 0", background: "#fff" }} className="sub-title mt-5">Mission oF india</h2><br></br>
                    <p className="description">
                        Traveling to India is a unique and inspiring experience. Children Left Behind organizes and puts together teams of people to travel there together and serve. You will be able to meet the children and staff at the homes, and see first-hand how your contributions help the homes. Frank Viswanath and his team are very gracious hosts, and they do everything they can to make your stay comfortable.<br></br><br></br>

                        For more information on joining a visiting team, please email: info@childrenleftbehind.org.<br></br><br></br>

                        We invite you to experience first-hand the amazing work we do in the orphanages we support. A trip to an orphanage will change your life. You’ll fall in love with the children, be inspired by their housemothers, meet their social workers, eat in their dining rooms and/or help them with an improvement project—it’s a powerful experience of a lifetime. </p><br></br>

                    <h2 style={{ width: "100%", overflow: "hidden", padding: "0px 0", background: "#fff" }} className="sub-title mt-5">Medical Mission Opportunities</h2><br></br><br></br>
                    <p className="description">
                        Children Left Behind’s goal is to put together teams of medical professionals, students, and volunteers to make medical mission trips to India.<br></br><br></br>

                        These mission trips provide medical assistance and education to children and families in need. There are many needs in this area; medical mission trips will provide a rewarding and fulfilling experience for those involved.<br></br><br></br>

                        Contact us if you are interested in volunteering to help be a part of our Medical Outreach program.

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

export default TripToIndia;