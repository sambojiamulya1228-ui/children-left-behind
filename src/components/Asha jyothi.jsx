import React from "react";
import heroImg from "../images/icons/gc.png";
import Header from "../components/header";
// import "../css";
import "../App"
function Ashajyothi() {
    return (
        <>
            {/* 🌟 HERO SECTION */}
            <section className="hero-section">
                <Header />
                <div className="hero-overlay"></div>
                <img src={heroImg} alt="Hero" className="hero-bg" />
            </section>

            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">
                    <div className="p-6 space-y-6 leading-relaxed text-gray-800">
                        <h3 className="sub-title">   OUR VISION</h3>
                        <p className="description">
                            “We envision an environment where the disabled enjoy the same rights as all other citizens”
                        </p><br></br>

                        <h3 className="sub-title">    OUR MISSION</h3>
                        <p className="description">
                            “Integration of the neglected children into the society”
                        </p><br></br>

                        <h3 className="sub-title">Purpose</h3>
                        <p className="description">
                            A registered, non-profit making voluntary organization actively working to promote the welfare and interest of disabled children and adults. “Impossible is Possible” is the motto of the organization
                        </p><br></br>



                        <h3 className="sub-title">Background</h3>
                        <p className="description">
                            Miryalaguda a Semi urban town having a population of 2.2 Lakhs. It is a highly industrialized and rapidly developing town in the State of Andhra Pradesh, India, and a very good commercial center in Telangana region. The left canal of Nagarjuna Sagar river runs through the town and makes its surroundings green. It ranked one among the top five paddy growing markets. In and around the town limestone is available abundantly as many cement-manufacturing factories such as Raasi Cement, India cements, Sagar Priya Cements, and Deccan Cements established their units here.<br></br>

                            Job opportunities for labor increased and many job seekers migrated to Miryalaguda for jobs and work. The laborers settled at Miryalaguda are uneducated and this caused a spurt in the growth of disabled/differently abled children, since they could not take proper precautions during pregnancy and during delivery time.
                            A group of philasphists joined together formed as a registered society and established “Aasha Jyothi Welfare Association for disabled” to take care of a such children and guide their parents
                        </p>

                        <h3 className="sub-title">  OBJECTIVES </h3><br></br>
                        <p className="description">
                            <p>
                                To provide for the mentally disabled, the benefits of care, treatment, education, training according to their abilities and to develop statutory and voluntary efforts on their behalf.<br></br>
                                To assist societies and organizations conducting special educational and special training and employment programs for the disabled.<br></br>
                                To prepare and train disabled children for domestic skills, vocational training and integration into the community.<br></br>
                                To carry out rehabilitation programs for all groups of people with disabilities. Such programs will be based on the actual individual needs of persons with disability and on the principles of full participation and equality.<br></br>
                                To improve the quality of life of the disabled<br></br>
                                To provide therapeutic intervention programs for the Disabled<br></br>
                                To provide educational and vocational opportunities to the Disabled<br></br>
                                To undertake programs for awareness and prevention of such disabilities<br></br>
                                To cooperate and collaborate with like-minded organizations and individuals in the implementation of the programs<br></br>
                                To prepare the disabled for an independent living in the society<br></br>
                                Total School Strength – 75 <br></br>
                                Students staying at the hostel – 20 <br></br>
                                Students who are day scholars – 55 <br></br>
                            </p>
                        </p><br></br>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ashajyothi;