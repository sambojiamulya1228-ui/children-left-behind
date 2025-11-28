import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
// import "../css";
import "../App"
import img from "../images/icons/Frame 232.png"
function Disability() {
    return (
        <>
            {/* 🌟 HERO SECTION */}
            <section className="hero-section">
                <Header />
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
                        style={{
                            backgroundColor: "#F2E5FF",
                            color: "#7A3CFF",
                            padding: "6px ",
                            borderRadius: "20px",
                            cursor: "pointer",
                            whiteSpace: "nowrap"
                        }}
                    >
                        Education
                    </span>

                    <span style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}>
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

                    <p className="description">
                        We are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities.
                    </p>

                    <h3 className="sub-title">Educational Outreach</h3>
                    <p className="description">
                        We have partnered with local educators, colleges, and universities in Southwest Virginia to serve through our sister children’s organizations and through the schools’ established educational institutions in India.
                        Educational Outreach and Mission Trips to India: During our Educational Outreach, we visit schools in India and volunteer our skills and expertise in areas where foreign visitors are allowed. We believe it is very timely and important for us to serve the schools in South India.<br></br><br></br>
                        We are seeing how the promise and hope for a better future through education is becoming a reality as we work with at-risk children in the United States and developing world nations. We believe in the value of education to “open doors” for a new way of life for children and youth all around the globe.<br></br><br></br>
                        Every day men, women, and children are trafficked for sex, or forced into labor and/or begging worldwide. Their hearts are crying out for rescue from poverty, abuse and bondage. Children Left Behind is committed to respond to their cry and be an advocate for this very real need. You too, can be a part of the transformation that education provides in a child’s life by giving them a fresh start and a confident hope for a better future! Join us in being a part of the solution
                    </p>



                    <img style={{ width: '100%' }} src={img} />
                </div> <br></br>
            </section>
        </>
    );
}

export default Disability;