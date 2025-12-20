import React, { useState, useEffect } from "react";
import heroImg from "../images/icons/Informed.png";
import Header from "../components/header";
import "../App";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import { useNavigate } from "react-router-dom";

function FactOnChildren() {
    const navigate = useNavigate()

    // Track window width for mobile detection
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Inline styles
    const containerStyle = {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "120px",
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto",
    };

    const sidebarStyle = {
        width: "220px",
        background: "#f7f7f7",
        padding: "15px",
        borderRadius: "6px",
        height: "fit-content",
        display: isMobile ? "none" : "block",   // 🔥 Sidebar hidden on mobile
    };

    const listStyle = {
        listStyle: "none",
        padding: 0,
        margin: 0,
    };

    const listItemStyle = {
        padding: "10px 0",
        cursor: "pointer",
        fontWeight: "500",
        color: '#61586a',
        fontSize: '16px',
        lineHeight: '24px',
    };

    const contentStyle = {
        flex: 1,
        lineHeight: '28px',
        fontSize: '18px',
        fontWeight: '400'
    };

    const headingStyle = {
        marginTop: "30px",
        color: "#333",
        fontSize: "22px",
    };
    const bg = {
        background: "linear-gradient(180deg, #FFFFFF 0%, #FAF0FF 100%)",
    }

    return (
        <>

            {/* HERO SECTION */}
            <section className="wpo-about-area stay">
                <div className="container" style={bg}>
                    <div className="row align-items-center">
                        <div className="col-md-6" >
                            <h2 className="wpo-section-title about">Hard truths of children in India </h2>
                            <p>In India, countless children endure the harsh realities. By learning about their lives and challenges, we can foster awareness and take meaningful steps to support these children, helping to alleviate their struggles and pave the way for a better tomorrow.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={heroImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>

               <div className="stats-section">
                <hr className="top-line" />

                <div className="scroll-wrapper">
                    <div className="stats-row">
                        <p onClick={() => navigate('/statsofindia')} >Stats of India</p>
                        <button onClick={() => navigate('/factonchildren')} style={{
                                backgroundColor: '#F2E5FF',
                                color: '#7A3CFF',
                                padding: '6px 12px',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer'
                            }}>Facts on Children in India</button>


                        {/* <>Hard truths about poverty in India */}
                        <p onClick={() => navigate('/povertyinindia')}>
                            Hard truths about poverty in India
                        </p>


                        {/* Duplicate for smooth continuous scroll */}
                        <p onClick={() => navigate('/statsofindia')}>Stats of India</p>
                        <button onClick={() => navigate('/factonchildren')} style={{
                                backgroundColor: '#F2E5FF',
                                color: '#7A3CFF',
                                padding: '6px 12px',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer'
                            }}>Facts on Children in India</button>
                        <p onClick={() => navigate('/povertyinindia')}
                            
                        >
                            Hard truths about poverty in India
                        </p>
                    </div>
                </div>

                <hr className="bottom-line" />
            </div>

            {/* CONTENT */}
            <div style={containerStyle}>

                

                {/* LEFT SIDEBAR — HIDDEN ON MOBILE */}
                <aside style={sidebarStyle}>
                    <ul style={listStyle}>
                        <li onClick={() => navigate('/povertyinindia')} style={listItemStyle}>
                            Hard truths about poverty in India
                        </li>

                        <li onClick={() =>navigate('/factofchildren')} style={listItemStyle}>Facts on Children in India</li>
                        <li onClick={() =>navigate('/statsofindia')} style={listItemStyle}>Stats of India</li>
                    </ul>
                </aside>

                {/* RIGHT CONTENT */}
                <main style={contentStyle}>
                   
                   <p>
                        A cradle of civilization, India is one of the oldest cultures in the world.centuries-old center of economic  and cultural wealth is the world’s largest democracy.
                        It is also a study in contrasts. Monumental architecture and stunning cultural beauty exist side by side with slums overflowing with garbage and despair. And, while many Indians are enjoying the technological and economic booms that have characterized the nation over the last decade, millions of children still live in extreme poverty. Sponsorship through Children Left Behind gives hope to the poorest children and an opportunity  to participate in their country’s growth
                    </p>
                  

                    <h2 style={headingStyle}>Facts on Children</h2>
                    <ul>
                        <li>Street children by definition are children who live on the streets without any adult care or supervision. They usually live and sleep on the streets because they do not have a home. They have only intermittent contact with parents or family (usually mother or sisters). Most of the time they live with other children in the city streets, or on the move.</li> <br></br>
                        <li>Slum is a district of a city marked by poverty and inferior living conditions. Children in slum clusters live without a sense of security and stability. As their homes are mostly illegal they may face demolition by municipal authorities at any time. Families are then rehabilitated in remote places, serving them from social, economic and educational lifelines, so essential to their well being.</li> <br></br>
                        <li>A child becomes an orphan if he or she does not have any parents. This could happen because of death or disappearance, abandonment or desertion, separation or loss of both parents. A foreign-born child is also an orphan if his or her sole or surviving parent is not able to take proper care of the child and has, in writing, irrevocably released the child for emigration and adoption.</li> <br></br>
                        <li>Child abuse is the physical or psychological mistreatment of a child by his or her parents, guardians, or other adults. While there are many different types and degrees of abuse, the one thing they all have in common is the failure to look after a child’s long-term interest. The degree of the abuse, when in the child’s life it occurred and its duration have varying levels of impact on the child. This includes sexual, physical and emotional abuse. Sometimes children hide that they have been abused and may not reveal it until later. Abuse affects children differently and may cause emotional and behavioral problems that require the help of counseling and flexible parenting techniques to help the child heal. Child abuse can range from limited to intentional injury to a long term damage that could impair the development potential of a child. Included in the definition are neglect (acts of omission) and physical, psychological, pre sexual injury (act of commission) by a parent or a caregiver.</li> <br></br>
                    </ul>

                   <br></br>
                   <br></br>


                </main>

            </div>

            <CtaSection ctaclass={'wpo-cta-area-2'} />
            <Needs />


        </>
    );
}

export default FactOnChildren;