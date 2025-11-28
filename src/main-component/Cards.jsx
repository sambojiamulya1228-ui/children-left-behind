import React from "react";
import heroImg from "../images/icons/gc.png";
import Header from "../components/header";
import heroDesktop from "../images/icons/cards.png";
import heroMobile from "../images/icons/cards-m.png";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
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
            {/* 🌟 HERO SECTION */}
            <section className="hero-section" style={{ position: "relative" }}>
                {/* <Header /> */}

                {/* Only ONE image will show based on screen size */}
                <img
                    src={isMobile ? heroMobile : heroDesktop}
                    alt="Hero"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
            </section>

            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">

                    <div className="p-6 space-y-6 leading-relaxed text-gray-800">
                        {/* Project 1 */}
                        <div>
                            <h2 className="text-xl font-bold mb-2">
                                Our Vision
                            </h2> <br></br>
                            <p>
                                CARDS envisions an India where Dalit communities are fully integrated into society equal in law, status, opportunity, and dignity. We aspire to build a nation where every Dalit individual is indistinguishable from other citizens, free from barriers of caste, discrimination, or socio-economic exclusion. Our vision is a just and inclusive society where every Dalit can live, work, and grow with pride, respect, and equal rights.
                            </p>
                        </div><br></br>

                        {/* Project 2 */}
                        <div>
                            <h2 className="text-xl font-bold mb-2">
                                Our Mission
                            </h2> <br></br>
                            <p>
                                Our mission is to eliminate every form of discrimination, oppression, and inequality faced by Dalit communities both legally and socially. CARDS is committed to ensuring that Dalits across India receive the same rights, protections, and privileges as every other citizen. We work to empower Dalits with knowledge, opportunities, and resources that support their holistic development, freedom, and participation in nation-building
                            </p>
                        </div> <br></br>
                        {/* Project 3 */}
                        <div>
                            <h2 className="text-xl font-bold mb-2">
                                Our Purpose
                            </h2> <br></br>
                            <p>
                                Our Purpose is to fight for Dalits who deserves: Freedom from discrimination, Equal access to opportunities’ Dignity and respect,, and A voice in democratic processes with a future built on empowerment, not oppression <br></br>
                                <br></br>
                                We work to dismantle structural barriers and create pathways for Dalit communities to thrive socially, economically, culturally, and politically
                            </p>
                        </div> <br></br>


                        <h3 className="sub-title">Projects</h3>

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
            <BlogSection />
            <CtaSection ctaclass={'wpo-cta-area-2'} />
            <Needs />
           
        </>
    );
}

export default Cards;