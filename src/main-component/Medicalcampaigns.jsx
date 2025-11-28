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
function Medicalcampaigns() {
    return (
        <>
            {/* 🌟 HERO SECTION */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <img src={heroImg} alt="Hero" className="hero-bg" />
            </section>

            <div
                style={{
                    width: "100%",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    paddingLeft: '30px'
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "30px",
                        padding: "10px 15px",
                        alignItems: "center"
                    }}
                >
                    <span
                        style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}
                    >
                        Education
                    </span>

                    <span style={{
                        backgroundColor: "#F2E5FF",
                        color: "#7A3CFF",
                        padding: "6px ",
                        borderRadius: "20px",
                        cursor: "pointer",
                        whiteSpace: "nowrap"
                    }}>
                        Medical campaigns
                    </span>

                    <span style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}>
                        Supporting the disabled
                    </span>

                    <span style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}>
                        Mission to India
                    </span>

                    <span style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}>
                        Act for child protection
                    </span>

                    <span style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}>
                        Nurturing playtime
                    </span>

                    <span style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}>
                        Disaster relief
                    </span>
                </div>
            </div>

            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">
                    {/* <h2 style={{ textAlign: 'center' }} className="title">Child Guidance Centre (CGC)</h2> */}

                    {/* <p className="description">
                        we are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities.
                    </p> */}



                    <h3 className="sub-title">Medical campaigns</h3>
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