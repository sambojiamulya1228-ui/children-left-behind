import React from "react";
import PavaniLogo from "../images/icons/cards-logo.png";
import Header from "../components/header";
import LeftBG from "../images/icons/pavani-left.png";
import RightBG from "../images/icons/pavani-right.png";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import PartnersEst from "../components/partnersEst";
// import "../css";
import { useState, useEffect } from "react";
import "../App"
function Cards() {
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
           
                   <h1 className="pavani-title">Community and Rural Development Society (CARDS)</h1>
           
                   <p className="pavani-description">
                     CARDS exists to empower Dalit communities through education, awareness, equal opportunities, social justice, and community-driven development. Our purpose is rooted in the belief that every Dalit individual 
                   </p>
                 </div>
               </div>

            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">
{/* <PartnersEst /> */}

     <div className="info-wrapper">
      <div className="info-row">

       

        {/* LOCATION */}
        <div className="info-col">
          <h4 style={{color:'#1C191E'}} className="info-title">Est.</h4>
          <p className="info-text">2014</p>
           <br></br>
           
          
          <h4 className="info-title">Location</h4>
          <p className="info-text">
            P.O.Box No. 309, Santosh Nagar<br/>
            Guntur-522004, AP, India.
          </p>
        </div>

        {/* CONTACT */}
        <div className="info-col">
           <br></br>
           <br></br>
            <br></br>
             
          <h4 className="info-title">Contact</h4>
          <p className="info-text">+91 (0863) 2231942</p>
          <p className="info-text">info@cardsinternational.org</p>
        </div>

        {/* WEBSITE */}
        <div className="info-col">
           <br></br>
           <br></br>
          
             <br></br>
          <h4 className="info-title">Website</h4>
          <a
            className="info-link"
            href="https://cardsinternational.org/"
            target="_blank"
            rel="noreferrer"
          >
            https://cgcindia.org/
          </a>
        </div>

      </div>
    </div>


                    <div className="p-6 space-y-6 leading-relaxed text-gray-800">
                        {/* Project 1 */}
                        <div>
                            <h5 className="text-xl font-bold mb-2">
                                Vision
                            </h5> <br></br>
                            <p>
                                CARDS envisions an India where Dalit communities are fully integrated into society equal in law, status, opportunity, and dignity. We aspire to build a nation where every Dalit individual is indistinguishable from other citizens, free from barriers of caste, discrimination, or socio-economic exclusion. Our vision is a just and inclusive society where every Dalit can live, work, and grow with pride, respect, and equal rights.
                            </p>
                        </div><br></br>

                        {/* Project 2 */}
                        <div>
                            <h5 className="text-xl font-bold mb-2">
                                Mission
                            </h5> <br></br>
                            <p>
                                Our mission is to eliminate every form of discrimination, oppression, and inequality faced by Dalit communities both legally and socially. CARDS is committed to ensuring that Dalits across India receive the same rights, protections, and privileges as every other citizen. We work to empower Dalits with knowledge, opportunities, and resources that support their holistic development, freedom, and participation in nation-building
                            </p>
                        </div> <br></br>
                        {/* Project 3 */}
                        <div>
                            <h5 className="text-xl font-bold mb-2">
                                Purpose
                            </h5> <br></br>
                            <p>
                                Our Purpose is to fight for Dalits who deserves: Freedom from discrimination, Equal access to opportunities’ Dignity and respect,, and A voice in democratic processes with a future built on empowerment, not oppression <br></br>
                                <br></br>
                                We work to dismantle structural barriers and create pathways for Dalit communities to thrive socially, economically, culturally, and politically
                            </p>
                        </div> <br></br>


                        <h5 className="sub-title">Projects</h5>

                        <ul className="project-list">
                            <p className="text-xl font-bold">
                                Current Projects
                            </p>
                            <li>Education Center for Rural Development</li>
                            <li>International Cultural Exchange Program</li>
                            <li>Balavikas Kendra – Development Schools for Children</li>
                            <li>Rural Christian Junior College</li>
                            <li>School for Differently Challenged Children</li>
                            <li>Indigenous Youth Forum</li>
                            <li>Fr. Heyer Degree College</li>
                            <li>WEDS – Christian Women’s College</li>
                            <li>Self Help Groups – Thrift Program</li>
                            <li>Child Labor Schools</li>
                            <li>Avedana – Counseling Centers</li>
                            <li>Slum Development Program – Urban Health Center</li>
                            <li>Vision 2020 – Bala Bata</li>
                            <li>Arnold Community Trust</li>
                            <li>Child Rights Advocacy Center</li>
                            <li>Viswanadh Institute of Medical Sciences</li>
                            <li>CARDS Silver Jubilee Vocational Jr. College</li>
                            <li>Fr. Heyer and Christian Women’s Vocational Jr. College</li>
                            <li>Agricultural Development Program – Eli Gardens</li>
                            <li>Sr. Xavier Institute of Pharmacy</li>
                            <li>Growing Involving Rehabilitation and Learning Program</li>
                            <li>Formation of Best Clubs</li>
                            <li>Community Health Shelters</li>
                            <li>Environmental Protection Program</li>
                            <li>School for Children with Disabilities</li>
                            <li>Child Rights Education Center</li>
                            <li>Environment Protection Programs</li>
                        </ul>




                    </div>
                </div>
            </section>
            {/* <BlogSection /> */}
            <CtaSection ctaclass={'wpo-cta-area-2'} />
            <Needs />
           
        </>
    );
}

export default Cards;