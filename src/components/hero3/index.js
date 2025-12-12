import React from 'react'
import {Link}  from 'react-router-dom';
import HeroImg from '../../images/slider/Imagee.png'
import Layer1 from '../../images/icons/layer1.png'
import Layer2 from '../../images/icons/layer2.png'
import Layer3 from '../../images/icons/layer3.png'
import './style.css'

const Hero3 = (props) => {

    return(
        <section className="hero hero-style-3">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="hero-layer-1">
                            <img src={Layer1} alt=""/>
                                </div>
                               <div className="hero-layer-2">
                               <img src={Layer2} alt=""/>
                               </div>
                               <div className="hero-layer-3">
                               <img src={Layer3} alt=""/>
                               </div>

                        <div className="row align-items-center justify-content-center">
                            <div className="col col-lg-10 slide-caption">
                                
                                <div className="slide-title">
                                    <h2 style={{width:"525px"}} className=' px-4'>Reimagining the World for Children in Need</h2>
                                </div>
                                <div className="slide-subtitle">
                                    {/* <p className=' px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                                    <p className=' px-4'>A vision of children breaking past survival and flourishing into confident, capable, and purpose-driven individuals.</p>

                             
                                </div>
                                <div className="btns">
                                    <Link to="/donate" className="theme-btn">Learn More</Link>
                                    <Link to="/donate" className="theme-btn">Join Hands</Link>
                                </div>
                                <div className="slider-pic">
                                    <img src={HeroImg} alt=""/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="right-vec">
                    </div>  
                </div>
            </div>
    </section>
    )
}

export default Hero3;