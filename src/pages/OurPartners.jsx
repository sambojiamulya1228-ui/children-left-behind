import React from "react";
import heroImg from "../images/icons/partners.png";
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import CounterSection from "../components/counter";
import Mission from "../components/mission";
// import "../css";
import "../App"
import TiltCarousel from "../components/TiltCarousel"

import PartnersEst from "../components/partnersEst";

function OurPartners() {

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
                               <div className="col-md-6" style={{paddingLeft: "96px" , marginTop: "100px"}}>
                                   <h2 className="wpo-section-title about">Impacting through mission partners</h2>
                                   <p>We offering programs are coordinated through our mission partners, an innovative network that connects children in need to the people and organizations prepared to help them.</p>
                               </div>
                               <div className="col-md-6" style={{width: "570px", height: "400px"}}>
                                   <img src={heroImg} alt=""/>
                               </div>
                           </div>
                       </div>
                   </section><br/><br/>
                   <CounterSection/>
                   <Mission/>

                    <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#91278f",
                }}
              >
                Life of a child
              </span>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "600",
                  lineHeight: "44px",
                  letterSpacing: "2%",
                }}
              >
                Heartwarming tales of<br/> children
                
              </h2>
              <p style={{ color: "#37323C" }}>
               Life at our partner organization is a journey from basic needs to<br/> boundless potential. Children receive not just shelter and food, but also<br/> the educational support and encouragement needed to explore their<br/> passions. Take a glimpse of the life changing stories of children here
              </p>
              <TiltCarousel/>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>




            <CtaSection ctaclass={'wpo-cta-area-2'} />
            <Needs />
        </>
    );
}

export default OurPartners;