import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
// import "../css";
import "../App"
import img from "../images/icons/Frame 232.png"
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img1 from "../images/icons/Programs.svg"
import { useNavigate } from "react-router-dom";
function FinanciaiAccountability() {
    const navigate = useNavigate();
    return (
        <>

            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">
                    {/* <h2 style={{ textAlign: 'center' }} className="title">Child Guidance Centre (CGC)</h2> */}

                    {/* <p className="description">
                        we are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities.
                    </p> */}



                    <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%', textAlign: 'center' }} className="sub-title">FinanciaiAccountability</h2><br></br>
                    <p className="description">
                        We strive to be transparent, trustworthy and above reproach in every aspect of our finances.<br /><br />

                        At Children Left Behind, stewardship is an essential part of everything we do – because we recognize that<br /> every resource entrusted to us can transform children’s lives.<br /><br />

                        As part of our stewardship, we optimize resources and distribute them where they are needed most.<br /><br />

                        We carefully monitor and review programs and costs, use donations and grants for their intended purposes,<br /> and look for ways to leverage funds for maximum impact.<br /><br />

                        In addition, we continually strive to keep our overhead very low. Our effectiveness has earned the trust and support of many donors, churches, corporations, institutions, and government agencies around the Globe.
                    </p><br />

                    <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%', }} className="sub-title">How To Contact Us</h2><br></br>
                    <p className="description">
                        if you have any questions or comments about the financial information on this website, please Contact Us or write us at:<br /><br />

                        Children Left Behind<br />
                        1045 Radford Street<br />
                        Christiansburg, VA 24073-2829<br />
                        Contact: 540-251-3438<br />
                        Email: info@childrenleftbehind.org<br />

                    </p><br />

                    <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%', }} className="sub-title">Because of your support</h2><br />
                    <p className="description">
                        Children are healthy, educated and safe<br/>
                        Youth are skilled and elevated themselves beyond survival<br/>
                        Young adults are shaping their own worlds in positive ways with dignity and purpose

                    </p><br />

                   


                    <img style={{ width: '100%' }} src={img} />


                </div> <br></br>
                <BlogSection />
                <CtaSection ctaclass={'wpo-cta-area-2'} />
                <Needs />

            </section>
        </>
    );
}

export default FinanciaiAccountability;