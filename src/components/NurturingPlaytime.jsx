import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
// import "../css";
import "../App"
import img from "../images/icons/Frame 232.png"
function NurturingPlaytime() {
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
                        style={{
                             color: "#444", cursor: "pointer", whiteSpace: "nowrap"
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
                    
                    <span style={{  backgroundColor: "#F2E5FF",
                            color: "#7A3CFF",
                            padding: "6px ",
                            borderRadius: "20px",
                            cursor: "pointer",
                            whiteSpace: "nowrap" }}>
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

                    <h3 className="sub-title">Nurturing playtime</h3>
                    <p className="description">
                        Before- and after-school programs offer fun activities, educational experiences, and homework help. This programs for school-age children to continue learning outside of school.
                    </p><br></br>
                    <p className="description">
                        Bala Bata School Programs/School<br></br>
                        Background:<br></br>
                        Most of the villages are now provided with State Govt. Primary Schools. Many of them are single teacher schools. The teachers are required to reside in the villages of their duty. But most of them do not. They reside in nearby towns for their own convenience and comfort and commute daily to the place of duty. Under the circumstances of such a situation, they rarely attend to their duties regularly and properly and very often even indulge in unauthorized absence for days together without being noticed. Even where the teachers attend to their duties, they lack the commitment required of their profession in the context of a rural situation. As a result children of parents who cannot afford to send their children to better equipped and better managed private educational institutions, are subjected to gross neglect and their future careers become jeopardized. Consequently there is increasing dropout rates at the primary level and those few who survive are not destined to go much far in the educational ladder because of their poor standard of attainment at the primary level. Children, what with their poverty, and the illiteracy and ignorance of their parents are the major casualties in this situation. Bala Bata Program is conceived against this background situation.
                    </p> <br></br>


                    <p className="description">
                        ACTIVITIES:
                    </p>

                   

                    <p className="description">
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
                    </p><br></br>

                    <img style={{ width: '100%' }} src={img} />
                </div> <br></br>
            </section>
        </>
    );
}

export default NurturingPlaytime;