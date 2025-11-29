import React from "react";
import "./style.css";
import HeaderImg from "../../images/resources.png"; // Replace with your image
import BlogSection from "../BlogSection";
import Needs from "../needs";

const ResourcesPage = () => {
    return (
        <>
            <div className="resources-page">

                {/* ================= HEADER SECTION ================= */}
                <div className="resource-header container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="res-title">Discover our brilliance in the media glossaries!</h1>
                            <p className="res-desc">
                                We have been documenting our journey with our partners and supporters
                                as the non-profit org.
                            </p>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src={HeaderImg} alt="Resources" className="header-img" />
                        </div>
                    </div>
                </div>

                {/* ================= BODY SECTION ================= */}
                <div className="container resource-body">

                    {/* ========= PHOTO GALLERY ========= */}
                    <div className="resource-section">
                        <h2 className="section-title">Photo Gallery</h2>

                        <div className="section-content">
                            <div className="year-block">
                                <h4>2017</h4>
                                <p>Disability Awareness Week Celebration</p>
                                <p>CRAC Annual Day</p>
                                <p>Hudhud Cyclone Relief</p>
                                <p>Aasha School Activity</p>
                            </div>

                            <div className="year-block">
                                <h4>2015</h4>
                                <p>HRF Children’s Day</p>
                                <p>CREC Pre-Christmas Celebration</p>
                                <p>CRAC & Special School Christmas</p>
                                <p>GIRL Christmas Celebration</p>
                                <p>CARDS Balabata Krishna District</p>
                                <p>CARDS Balabata West Godavari Meeting</p>
                            </div>
                        </div>
                    </div>

                    {/* ========= VIDEO GALLERY ========= */}
                    <div className="resource-section">
                        <h2 className="section-title">Video Gallery</h2>

                        <div className="section-content">
                            <div className="year-block">
                                <h4>2018</h4>
                                <p>Class of 2018</p>
                                <p>Class of 2018: Meet Reena Jha</p>
                                <p>Class of 2018: Meet Nikki Chandrashekhar</p>
                                <p>Class of 2018: Meet Nazia Naaz</p>
                            </div>

                            <div className="year-block">
                                <h4>2017</h4>
                                <p>Balabata Education for Dalit Children</p>
                                <p>CARDS Balabata Education for Self Sustainability</p>

                                <div className="video-thumb">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1827/1827504.png" alt="icon" />
                                    <p>Sex-ratio in favour of boys leads to millions of missing girls</p>
                                </div>

                                <div className="video-thumb">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png" alt="icon" />
                                    <p>Child Guidance Centre Special School Hyderabad</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========= BROCHURE ========= */}
                    <div className="resource-section">
                        <h2 className="section-title">Brochure</h2>

                        <div className="section-content">
                            <p>Children Left-Behind Brochure</p>
                        </div>
                    </div>

                    {/* ========= FLYERS ========= */}
                    <div className="resource-section">
                        <h2 className="section-title">Flyers</h2>

                        <div className="section-content">
                            <p>Children Left-Behind Flyer</p>
                        </div>
                    </div>

                    {/* ========= PRESS RELEASE ========= */}
                    <div className="resource-section">
                        <h2 className="section-title">Press Releases</h2>

                        <div className="section-content">
                            <p className="coming-soon">Coming Soon!</p>
                        </div>
                    </div>

                </div>

            </div>
            <BlogSection />
            <Needs />
        </>
    );
};

export default ResourcesPage;
