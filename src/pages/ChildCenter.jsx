import React from "react";
// import heroImg from "../images/icons/partners.png";
// import CGC_LOGO 1 from "../images/icons/CGC_LOGO 1.png";
import CGC_LOGO from "../images/icons/CGC_LOGO 1.png"
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
// import "../css";
import "../App"

import PartnersEst from "../components/partnersEst";

function ChildCenter() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 768);
        checkScreen();

        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);
    return (
        <>
        
                  <section className="wpo-about-area">
                       <div className="container child">
                           <div className="row align-items-center">
                               <div className="col-md-6" style={{paddingLeft: "306px", width: "100%", paddingTop: "160px"}} >
                                   <h2 className="wpo-section-title about">Child Guidance Centre (CGC)</h2>
                                    </div>
                                    <div className="col-md-6" style={{paddingLeft: "96px", width: "100%", paddingBottom: "36px"}}>
                                   <p>A non-profit voluntary organization registered under the societes Registration Act of Indi (Reg. No. 315/1981). Over the past five decades, CGC has worked relentlessly for the empowerement of children, women, persons with disabilities, and vulnerable communities across India</p>
                               </div>
                               <div className="col-md-6" style={{position: "absolute", paddingLeft: "526px", paddingBottom:"142px"}}>
                                   <img src={CGC_LOGO} alt=""/>
                               </div>
                           </div>
                       </div>
                   </section>










            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">
                    <PartnersEst />
                    <div>
                        <h2 className="text-xl font-bold mb-2">
                            Background
                        </h2> <br></br>
                        <p>
                            Guided by the motto “Reaching the Unreached,” CGC focuses on supporting individuals who are economically disadvantaged, socially excluded, or in need of special care including children with disabilities, orphaned and abandoned children, street children, child labourers, traumatized women, and the elderly
                        </p>
                    </div><br></br>



                    <h3 className="sub-title">Projects</h3>

                    <ul className="project-list">
                        <li>Child Guidance Center – Special School</li>
                        <li>Happy Home – Home for the Street Children</li>
                        <li>Toby School – A branch of the Special School</li>
                        <li>Balabata</li>
                        <li>Cheyutha Project</li>
                        <li>Community Based Rehabilitation Programs</li>
                        <li>HIV-AIDS-Care, Support and Awareness Program</li>
                        <li>Dr. Ranjan Babu Vocational Junior College</li>
                        <li>Tsunami Rehabilitation Programs</li>
                        <li>Medical Camps</li>
                        <li>Water Project</li>
                        <li>Vocational Training/Rehabilitation Center for the Disabled</li>
                        <li>Human Resource Development</li>
                        <li>Center for Traumatized Women</li>
                        <li>Short term Courses affiliated to Board of Intermediate Education, Telangana</li>
                        <li>Promoting Health and Hygiene in Guntur</li>
                        <li>Dr. Swarnalatha Devi Vocational Junior College, Guntur</li>
                        <li>Holistic Rehabilitation Center for Persons with Disabilities</li>
                        <li>Community Health Shelters</li>
                    </ul>

                    <div className="p-6 space-y-6 leading-relaxed text-gray-800">
                        {/* Project 1 */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 1: CHILD GUIDANCE CENTER – Special School for the Mentally Challenged
                            </p>
                            <p>
                                Child Guidance Center was established in the year 1973 with a motive of making the mentally
                                challenged self-dependent and productive members of the society by providing them opportunity
                                for education, vocational training and economic rehabilitation. The school started with a
                                vision to make the Mentally Challenged “Mentally Active, Physically Strong and Socially
                                Competent”. It has rendered three decades of valuable service for the upliftment of the lives
                                of the disabled. The school currently has strength of above 205 special children.
                            </p>
                        </div><br></br>

                        {/* Project 2 */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 2: HAPPY HOME – Home for the Street Children
                            </p>
                            <p>
                                The Happy Home Project was established in the year 2003. The program envisages
                                multidimensional activities from the stage of survey to the stage of eventual rehabilitation
                                of the street children leading them to a path of independence making them self-supporting
                                adults by providing them shelter, food, clothing, health care, protection, education,
                                training, skill development and placement assistance. The program includes restoration to
                                parental care, whenever this course is found feasible and desirable in the interest of the
                                child concerned. The project has been successfully running since the year 2003. At present
                                there are 65 inmates in the happy home.
                            </p>
                        </div><br></br>
                        {/* Project 3 */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 3: TOBY SCHOOL – Special School for the mentally Challenged
                            </p>
                            <p>

                                Toby school is a branch of Child Guidance Center (Special school for the mentally challenged in rural area) established in the year 2002 at Swarnanagar, Ghatkesar. A large number of street children from the Happy Home were diagnosed as mentally challenged. The Toby School provides special services to these children of the Happy Home, apart from special education thus helping them to be independent individuals.
                            </p>
                        </div><br></br>

                        {/* Project 4 */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 4: BALABATA
                            </p>
                            <p>
                                Balabata is a development initiative for nearly 1200 Dalit children in 4 districts who are in the age group of 5-10 years enrolled in the local primary schools. The teachers in the Primary school are appointed and paid by the State government. Most of the teachers stay in the nearby towns but not in the villages where they are supposed to stay and work. Hence the teachers failed to devote more time to students. The illiterate parents neglect their children’s education. Hence the dropout rate is high. To reduce the dropout rate the Balabata program was started.
                            </p>
                        </div><br></br>

                        <div>
                            <p className="text-xl font-bold mb-2">
                                Balabata program is four fold:
                            </p>
                            <p>Education through play way methods – Songs and Scripts.<br></br>
                                Encouraging children to motivate their parents to start kitchen gardens at their homes.<br></br>
                                Encouraging children in Clean and green activities.<br></br>
                                Enabling their parents to take up Income Generation programs.</p>

                        </div><br></br>
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 5: CHEYUTHA PROJECT
                            </p>
                            <p>
                                Cheyutha Project is an Income Generating Program wherein the parents of the disabled are provided loans to support better employment. Over the last several years many children/parents have utilized this opportunity and have expressed their satisfaction.
                            </p>
                        </div><br></br>

                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 6: COMMUNITY BASED REHABILITATION PROGRAMS
                            </p>
                            <p>
                                Regular Camps are conducted in different districts to identify the disabled and provide them with proper support and referrals and involving several stake holders. Door to door surveys are conducted at regular intervals to identify the handicapped and help them by providing them appropriate information regarding rehabilitation services available. The Community Based Rehabilitation Programs gradually aim at enabling the community to take up the responsibility of the disabled people.
                            </p>
                        </div><br></br>

                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 7: HIV-AIDS – CARE, SUPPORT AND AWARENESS PROGRAM
                            </p>
                            <p>
                                “Prevention is better than cure” as such to fight against spreading of HIV/AIDS through cultural programmes is the main endeavor/aim for this unique project to reach the unreached. The cultural team attracts the attention of the public through (Dam Dora) drum beating. Songs and Body theatre is the main medium through which message is conveyed.
                            </p>
                        </div><br></br>

                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 8: DR RANJAN BABU VOCATIONAL JUNIOR COLLEGE
                            </p>
                            <p>
                                The Dr. Ranjan Babu Vocational Junior College was established in the year 2004. The main motive behind starting this college was to provide educational opportunities to those students who would otherwise find it difficult to obtain admission in regular colleges with their low socioeconomic status and grades.
                            </p>
                        </div><br></br>

                        {/* {9} */}

                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 9: TSUNAMI REHABILITATION PROGRAMS
                            </p>
                            <p>
                                As a part of this project about 103 permanent houses have been constructed for the villagers with the association of the Andhra Pradesh Housing Board Society. Two Tsunami Shelter homes for the Orphans accommodating 50 orphans each have been built to provide shelter to the children who were left as orphans by the catastrophe
                            </p>
                        </div><br></br>


                        {/* {10} */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 10: MEDICAL CAMPS
                            </p>
                            <p>
                                Free Medical Camps (Dental and Eye Camps) are conducted wherein eye and dental checkups are done. Cases are identified for operations after which they are assisted to get operated. Preventive medicines for a few diseases are distributed.
                            </p>
                        </div><br></br>
                        {/* {11} */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 11: WATER PROJECT
                            </p>
                            <p>
                                Until now we have installed 4 boring (Water Holes) through the support of POW and we are very grateful to them for supporting this cause.
                            </p>
                        </div><br></br>
                        {/* {12} */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 12: VOCATIONAL TRAINING/REHABILITATION CENTER FOR THE DISABLED
                            </p>
                            <p>
                                The Vocational Training/Rehabilitation Center provides vocational training for people with all types of Disabilities. This project aims at developing the skills of the deferentially abled and enabling them to be productive members of the society.
                            </p>
                        </div><br></br>
                        {/* {13} */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 13: HERALD HUMAN RESOURCE ACADEMY
                            </p>
                            <p>
                                Child Guidance Center is presently working towards developing human resources in the field of Mental Retardation. The Rehabilitation Council of India has approved the organization to conduct a two year Diploma to prepare professionals (Special Teachers) in the field of Mental Retardation as there is a dearth of professionals in the field of disability (Diploma in Education, Special Education, and Mental Retardation).
                            </p>
                        </div><br></br>
                        {/* {14} */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 14: CENTER FOR TRAUMATIZED WOMEN
                            </p>
                            <p>
                                The Center for the Traumatized Women has been established in Guntur. This center works towards the restoration and rehabilitation of 200 traumatized women (including women with disability), by helping them develop into responsible citizens. Vocational Training in different trades like Bangle Making, Beautician course, Bakery, Gardening, etc. is provided to them to make them self reliant.
                            </p>
                        </div><br></br>

                        {/* {15} */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 15: SHORT TERM COURSES
                            </p>
                            <p>
                                Government of Andhra Pradesh sanctioned the following Short Term Courses for our institute: Bakery & Confectionery, Beautician Course, Embroidery & Zig-Zag, Pre Primary Teacher Training, Farm Assistant, Gardener Training Course, Accounting Package, DTP and M.S.Office. The purpose of these courses is to generate employment opportunities who could not secure jobs even after acquiring the required qualifications. There is heavy demand for this courses in private and government sectors and the qualified candidate can establish their own entities and earn independently and employee others in their entities.
                            </p>
                        </div><br></br>
                        {/* {16} */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 16: DR SWARNALATHA DEVI VOCATIONAL JUNIOR COLLEGE
                            </p>
                            <p>
                                The Dr. Swarnalatha Devi Vocational Junior College was established in the year 2011. The main motive behind starting this college was to provide educational opportunities to the girls belonging to remote rural areas who would otherwise find it difficult to obtain admission in regular colleges with their low socioeconomic status and grades.
                            </p>
                        </div><br></br>
                        {/* {17} */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 17: HOLISTIC REHABILITATION FACILTY FOR PEOPLE WITH DISABILITIES
                            </p>
                            <p>
                                The Holistic Rehabilitation Facility established at Guntur is an attempt at providing comprehensive rehabilitation services to people with Disabilities. The aim is to empower the differentially abled by offering qualitative rehabilitation services thus enabling them to be integrated into the society by encouraging full participation and protection of their rights. The center will offer various services including Developmental, Intellectual, Audio Logical and Ophthalmological Assessment and Intervention services. The center will work towards preventive and promotional aspects of rehabilitation like education, employment and vocational training, research and manpower development, creation of barrier-free environment.
                            </p>
                        </div><br></br>
                        {/* {18} */}
                        <div>
                            <p className="text-xl font-bold mb-2">
                                Project 18: COMMUNITY HEALTH SHELTERS
                            </p>
                            <p>
                                The Community Health Shelters are presently functioning in the district of Guntur. These shelters have been established to promote health care of the people in the community. The project aims at providing proper medical amenities to the people of the village and improve their health conditions by educating them about hygiene and sanitation. The shelters offer preliminary tests for common diseases among the people. The Community Health Shelter primarily offers basic first aid for physical and mental ailments.
                            </p>
                            <br></br>
                            <br></br>
                        </div>
                    </div>

                </div>

            </section>
          
            <CtaSection ctaclass={'wpo-cta-area-2'} />
            <Needs />
        </>
    );
}

export default ChildCenter;



