
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

import cs1 from '../../images/slider/news.1.jpg'
import cs2 from '../../images/slider/News.2.jpg'
import cs3 from '../../images/slider/News.3.jpg'

import './style.css'

class CaseSlide extends Component {

    render() {
        var settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            margin: 10,
            loop: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }
        return (
            <div className="wpo-case-area section-padding news-slide-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="three-boxes">
                                <p style={{ cssText: "color: #E3C3FF !important;opacity: 0.5;" }}>
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <p style={{ cssText: "color: #E3C3FF !important;opacity: 0.5;" }}>
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <p style={{ cssText: "color: #E3C3FF !important;opacity: 0.5;" }}>
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <p style={{ cssText: "color: #E3C3FF !important;opacity: 0.5;" }}>
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            </div>
                     

                            <div className="two-column-section">

                                {/* LEFT SIDE */}
                                <div className="left-text" >
                                    <h2>News and our media presence</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam,
                                    </p>
                                </div>

                                {/* RIGHT SIDE */}
                                <div className="right-text" style={{ cssText: "color: #E3C3FF !important;opacity: 0.5;" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                        <br /><br /><br /><br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="wpo-case-wrap">
                        <div className="wpo-case-slider">
                            <div className="wpo-case-slider-content">

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                            <Slider {...settings}>
                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img style={{ borderRadius: '12px' }} src={cs1} alt="" />
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img style={{ borderRadius: '12px' }} src={cs2} alt="" />
                                        </div>
                                     
                                    </div>
                                </div>
                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img style={{ borderRadius: '12px' }} src={cs3} alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img style={{ borderRadius: '12px' }} src={cs1} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </Slider>
                            <div className="three-boxes">
                                <p style={{ cssText: "color: #E3C3FF !important;" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam
                                </p>
                                <p style={{ cssText: "color: #E3C3FF !important;" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam
                                </p>
                                <p style={{ cssText: "color: #E3C3FF !important;" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam
                                </p>
                                <p style={{ cssText: "color: #E3C3FF !important;" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam
                                </p>






                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CaseSlide;




