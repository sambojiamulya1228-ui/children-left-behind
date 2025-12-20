
import PavaniLogo from "../images/icons/asha-logo.png";
import LeftBG from "../images/icons/pavani-left.png";
import RightBG from "../images/icons/pavani-right.png";
import { useState, useEffect } from "react";
import CtaSection from "../components/cta";
import Needs from "../components/needs";
// import "../css";
import "../App"
function Ashajyothi() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 768);
        checkScreen();

        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);


    return (
        <>
            <div className="pavani-wrapper container">
                {/* Background Illustrations */}
                <img src={LeftBG} alt="" className="pavani-left" />
                <img src={RightBG} alt="" className="pavani-right" />

                <div className="pavani-content">
                    <img src={PavaniLogo} alt="Pavani School" className="pavani-logo" />

                    <h1 className="pavani-title">AASHA JYOTHI Welfare Association for Disability</h1>

                    <p className="pavani-description">
                        with a motive of providing educational and vocational opportunities for the disabled to make them self-dependent and productive members of the society. The main thrusts of the society are Schools for Disabled Children, Formal and Non Formal Education, forming of Parents Associations for the Disabled, Emergency Relief Programs, Child Labour schools, Micro Credit program, Community Based Rehabilitation Programs
                    </p>
                </div>
            </div>

            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">
                    <div className="info-wrapper">
                        <div className="info-row">



                            {/* LOCATION */}
                            <div className="info-col">
                                <h4 style={{ color: '#1C191E' }} className="info-title">Est.</h4>
                                <p className="info-text">1987</p>
                                 <br></br>
        
           
                                <h4 className="info-title">Location</h4>
                                <p className="info-text">
                                    Welfare Association for the Disabled,<br/>
                                    Tondan Sadan, H.No.3-156/2/A,<br/>
                                    Ravindra Nagar,<br/>
                                    Nandipahad, Chillapur Road,<br/>
                                    Miriyalaguda. 508207.<br/>
                                    Telangana.
                                </p>
                            </div>

                            {/* CONTACT */}
                            <div className="info-col">
                                 <br></br>
           <br></br>
            <br></br>
            
                                <h4 className="info-title">Contact</h4>
                                <p className="info-text">+91 7569990626</p>
                                <p className="info-text">ashajyothi97@gmail.com</p>
                            </div>

                            {/* WEBSITE */}
                            <div className="info-col">
                                 <br></br>
                                    <br></br>
            <br></br>
            
                                <h4 className="info-title">Website</h4>
                                <a
                                    className="info-link"
                                    href="https://aashajyothi.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    https://aashajyothi.org/
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="p-6 space-y-6 leading-relaxed text-gray-800">
                        <h5 className="sub-title">   VISION</h5>
                        <p className="description">
                            “We envision an environment where the disabled enjoy the same rights as all other citizens”
                        </p><br></br>

                        <h5 className="sub-title">    MISSION</h5>
                        <p className="description">
                            “Integration of the neglected children into the society”
                        </p><br></br>

                        <h5 className="sub-title">Purpose</h5>
                        <p className="description">
                            A registered, non-profit making voluntary organization actively working to promote the welfare and interest of disabled children and adults. “Impossible is Possible” is the motto of the organization
                        </p><br></br>



                        <h5 className="sub-title">Background</h5>
                        <p className="description">
                            Miryalaguda a Semi urban town having a population of 2.2 Lakhs. It is a highly industrialized and rapidly developing town in the State of Andhra Pradesh, India, and a very good commercial center in Telangana region. The left canal of Nagarjuna Sagar river runs through the town and makes its surroundings green. It ranked one among the top five paddy growing markets. In and around the town limestone is available abundantly as many cement-manufacturing factories such as Raasi Cement, India cements, Sagar Priya Cements, and Deccan Cements established their units here.<br></br><br></br>

                            Job opportunities for labor increased and many job seekers migrated to Miryalaguda for jobs and work. The laborers settled at Miryalaguda are uneducated and this caused a spurt in the growth of disabled/differently abled children, since they could not take proper precautions during pregnancy and during delivery time.
                            A group of philasphists joined together formed as a registered society and established “Aasha Jyothi Welfare Association for disabled” to take care of a such children and guide their parents
                        </p><br></br><br></br>

                        <h5 className="sub-title">  OBJECTIVES </h5><br></br>
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
            {/* <BlogSection /> */}
            <CtaSection ctaclass={'wpo-cta-area-2'} />
            <Needs />

        </>
    );
}

export default Ashajyothi;