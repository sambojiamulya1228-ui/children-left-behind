import React, { useState, useEffect } from "react";
import heroImg from "../images/icons/Informed.png";
import Header from "../components/header";
import "../App";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import { useNavigate } from "react-router-dom";

function PovertyInIndia() {
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
                        <div className="col-md-6">
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
                        <p onClick={() => navigate('/statsofindia')}>Stats of India</p>
                        <p onClick={() => navigate('/factonchildren')}>Facts on Children in India </p>


                        {/* <>Hard truths about poverty in India */}
                        <button onClick={() => navigate('/povertyinindia')}
                            style={{
                                backgroundColor: '#F2E5FF',
                                color: '#7A3CFF',
                                padding: '6px 12px',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            Hard truths about poverty in India
                        </button>


                        {/* Duplicate for smooth continuous scroll */}
                        <p onClick={() => navigate('/statsofindia')}>Stats of India</p>
                        <p onClick={() => navigate('/factonchildren')}>Facts on Children in India</p>
                        <button onClick={() => navigate('/povertyinindia')}
                            style={{
                                backgroundColor: '#F2E5FF',
                                color: '#7A3CFF',
                                padding: '6px 12px',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            Hard truths about poverty in India
                        </button>
                    </div>
                </div>

                <hr className="bottom-line" />
            </div>

            {/* CONTENT */}
            <div style={containerStyle}>

                {/* LEFT SIDEBAR — HIDDEN ON MOBILE */}
                <aside style={sidebarStyle}>
                    <ul style={listStyle}>
                        <li onClick={() => navigate('/povertyinindia')} style={listItemStyle}>Hard truths about poverty in India</li>
                        <li onClick={() => navigate('/factonchildren')} style={listItemStyle}>Facts on Children in India</li>
                        <li onClick={() => navigate('/statsofindia')} style={listItemStyle}>Stats of India</li>
                    </ul>
                </aside>

                {/* RIGHT CONTENT */}
                <main style={contentStyle}>
                    <p>
                        A cradle of civilization, India is one of the oldest cultures in the world.centuries-old center of economic  and cultural wealth is the world’s largest democracy.
                        It is also a study in contrasts. Monumental architecture and stunning cultural beauty exist side by side with slums overflowing with garbage and despair. And, while many Indians are enjoying the technological and economic booms that have characterized the nation over the last decade, millions of children still live in extreme poverty. Sponsorship through Children Left Behind gives hope to the poorest children and an opportunity  to participate in their country’s growth
                    </p>

                    <h2 style={headingStyle}>Hard Truths About Poverty In India</h2>
                    <ul>
                        <li>India has the third highest HIV/AIDS rate in the world, with an estimated 2.4 million people living  with the disease</li><br></br>
                        <li>Due to widespread child malnutrition, more children under age 5 are underweight in India  than in any other country in the world. Nearly 45% of Indian children struggle with inadequate nutrition</li><br></br>
                        <li>Over a quarter of India’s population lives below  the poverty line, meaning families and children in  poverty cannot afford basic goods</li> <br></br>
                        <li>Close to 70% of India’s population lacks adequate sanitation and drainage systems. This creates a breeding ground for such diseases as hepatitis A & C, typhoid fever and bacterial infections</li><br></br>
                    </ul>
                </main>

            </div>

            <CtaSection ctaclass={'wpo-cta-area-2'} />
            <Needs />


        </>
    );
}

export default PovertyInIndia;