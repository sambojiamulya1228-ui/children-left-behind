import React from 'react'
import "./style.css"
import imgHero from "../../images/about/About.png"

const AboutHero = () => {
    return (
        <section className="wpo-about-area about-page-hero">
            <div className="container  ourmissionn">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="wpo-section-title about" style={{paddingLeft: "82px"}}>Together, let’s build a better future</h2>
                        <p
                        style={{paddingLeft: "82px",
                            paddingBottom: "60px",
                            paddingTop : "14px"
                        }}
                        
                        >Driven by our core values and visionary leadership, we are dedicated to creating a brighter future for children. As a committed non-profit organization, we strive to turn our ambitious vision into reality.</p>
                    </div>
                    <div className="col-md-6 img">
                        <img src={imgHero} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
