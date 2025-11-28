import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
// import "../css";
import "../App"
import img from "../images/icons/Frame 232.png"
function TripToIndia() {
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
                    paddingLeft:'30px'
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
                        style={{  color: "#444", cursor: "pointer", whiteSpace: "nowrap"
                           
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

                    <span style={{  backgroundColor: "#F2E5FF",
                            color: "#7A3CFF",
                            padding: "6px ",
                            borderRadius: "20px",
                            cursor: "pointer",
                            whiteSpace: "nowrap" }}>
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

                    <h2 className="sub-title mt-5">Mission oF india</h2>
                    <p className="description">
                        Traveling to India is a unique and inspiring experience. Children Left Behind organizes and puts together teams of people to travel there together and serve. You will be able to meet the children and staff at the homes, and see first-hand how your contributions help the homes. Frank Viswanath and his team are very gracious hosts, and they do everything they can to make your stay comfortable.<br></br><br></br>

                        For more information on joining a visiting team, please email: info@childrenleftbehind.org.<br></br><br></br>

                        We invite you to experience first-hand the amazing work we do in the orphanages we support. A trip to an orphanage will change your life. You’ll fall in love with the children, be inspired by their housemothers, meet their social workers, eat in their dining rooms and/or help them with an improvement project—it’s a powerful experience of a lifetime. </p><br></br><br></br>

                    <h2 className="sub-title mt-5">Medical Mission Opportunities</h2>
                    <p className="description">
                        Children Left Behind’s goal is to put together teams of medical professionals, students, and volunteers to make medical mission trips to India.<br></br><br></br>

                        These mission trips provide medical assistance and education to children and families in need. There are many needs in this area; medical mission trips will provide a rewarding and fulfilling experience for those involved.<br></br><br></br>

                        Contact us if you are interested in volunteering to help be a part of our Medical Outreach program.

                    </p>





                    <img style={{ width: '100%' }} src={img} />
                </div> <br></br>
            </section>
        </>
    );
}

export default TripToIndia;