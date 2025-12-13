import React, { useState, useEffect } from "react";
import heroImg from "../images/icons/Informed.png";
import Header from "../components/header";
import "../App";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import { useNavigate } from "react-router-dom";

function Statsofindia() {
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
                        <button onClick={() => navigate('/statsofindia')} style={{
                                backgroundColor: '#F2E5FF',
                                color: '#7A3CFF',
                                padding: '6px 12px',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer'
                            }} >Stats of India</button>
                        <p onClick={() => navigate('/factonchildren')}>Facts on Children in India</p>


                        {/* <>Hard truths about poverty in India */}
                        <p onClick={() => navigate('/povertyinindia')}>
                            Hard truths about poverty in India
                        </p>


                        {/* Duplicate for smooth continuous scroll */}
                        <button onClick={() => navigate('/statsofindia')}  style={{
                                backgroundColor: '#F2E5FF',
                                color: '#7A3CFF',
                                padding: '6px 12px',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer'
                            }}>Stats of India</button>
                        <p onClick={() => navigate('/factonchildren')}>Facts on Children in India</p>
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

                 

                    <h2 style={headingStyle}>Statistics Of India</h2>
                    <ul className="project-list">
                        <li>There are 20 million street children in India</li>
                        <li>Over 59 million children in India have no access to school.</li>
                        <li>One out of two children between the ages of 6 and 14 has no access to primary education.</li>
                        <li>Out of 27 million children born in India every year, 2 million do not survive to celebrate their first birthday.</li>
                        <li>About 60 million Indian children under the age of 6 live below the poverty line.</li>
                        <li>500,000 children are forced into the commercial sex trade every year.</li>
                        <li>1 out of every 3 girls does not live to see her 15th birthday.</li>
                        <li>Every sixth girl child's death is due to gender discrimination—2 lakh more girls than boys die every year.</li>
                        <li>53% of the girls in the age group of 5 to 9 years are illiterate.</li>
                        <li>2 million children in India are infected with HIV/AIDS.</li>
                        <li>7% of infants die before their 1st birthday.</li>
                        <li>46% of children under 5 are malnourished.</li>
                        <li>India has 17 million child laborers—the highest in the world.</li>
                        <li>Under the age group of 5–14 years, 4.02% of children are engaged in economic activities.</li>
                        <li>Total of 6.75% children at work: 4.73% boys and 8.93% girls.</li>
                        <li>Sex ratio under 15 years: 1.06 males per female.</li>
                        <li>Infant mortality rate: 57.92.</li>
                        <li>Children underweight rate: 18%.</li>
                        <li>Life expectancy at birth (male): 63.9 years.</li>
                        <li>Life expectancy at birth (female): 63 years.</li>
                    </ul>


                </main>

            </div>

            <CtaSection ctaclass={'wpo-cta-area-2'} />
            <Needs />


        </>
    );
}

export default Statsofindia;