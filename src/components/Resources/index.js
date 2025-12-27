import React from "react";
import "./style.css";
import HeaderImg from "../../images/resources.png"; // Replace with your image
// import BlogSection from "../BlogSection";
import Needs from "../needs";
// import styled from "styled-components"

const ResourcesPage = () => {
    return (
        <>
            <div className="resources-page">

                {/* ================= HEADER SECTION ================= */}
                <div className="resource-header container">
                    <div className="row align-items-center" style={{backgroundColor: "#eccdec1a"}}>
                        <div className="col-lg-6">
                            <h2 className="res-title">Discover our brilliance<br></br> in the media<br></br> glossaries!</h2>
                            <br></br>
                            <p className="res-desc" style={{width: "80%"}}>
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
                        <h5 className="section-title">Photo Gallery</h5>

                        <div className="section-content">
                            <div className="year-block">
                                <br></br>
                                 <br></br>
                                  <br></br>
                                <h3>2017</h3>
                                {/* <p>Disability Awareness Week Celebration</p> */}
                                <a href="https://photos.google.com/share/AF1QipNBHNi83wCYNo_BsGeJfVMZNOTLEMCFUy4EtwrE2Fl70dFsPA_3ZS4I2rP37m_FDQ?key=aU9uQ1Vxd21FcUxtekZ4ZXRZbmIzZFNIUFhPcjZB" 
    target="_blank" 
    rel="noopener noreferrer"
    className="resource-link"
  > 
    Disability Awareness Week Celebration
  </a>
                                <p>CRAC Annual Day</p>
                                {/* <p>Hudhud Cyclone Relief</p> */}
                                <a 
  href="/HudhudCycloneRelief"
  className="resource-link"
>
  Hudhud Cyclone Relief
</a>

                                {/* <p>Aasha School Activity</p> */}
                                  <a href="https://photos.google.com/share/AF1QipOEdoGusA4oEK8ec_6RXOv7nGs6PPvtewAam9QBYhUIZUeNUvmotmQn3hjcGUVqiA?key=NHRhQkh1RVZLTmNXRU0zSjk4S1ZPcEhQY25uNmlR" 
    target="_blank" 
    rel="noopener noreferrer"
    className="resource-link"
  > 
    Aasha School Activity
  </a>
                            </div>

                            <div className="year-block">
                                <h3>2015</h3>
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
                        <h5 className="section-title1">Video Gallery</h5>

                        <div className="section-content">
                            <div className="year-block">
                                <h3>2018</h3>
                                <p>Class of 2018</p>
                                <p>Class of 2018: Meet Reena Jha</p>
                                <p>Class of 2018: Meet Nikki Chandrashekhar</p>
                                <p>Class of 2018: Meet Nazia Naaz</p>
                            </div>

                            <div className="year-block">
                                <h3>2017</h3>
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
                        <h5 className="section-title2">Brochure</h5>

                        <div className="section-content">
                            <p>Children Left-Behind Brochure</p>
                        </div>
                    </div>

                    {/* ========= FLYERS ========= */}
                    <div className="resource-section">
                        <h5 className="section-title3">Flyers</h5>

                        <div className="section-content">
                            <p>Children Left-Behind Flyer</p>
                        </div>
                    </div>

                    {/* ========= PRESS RELEASE ========= */}
                    <div className="resource-section">
                        <h5 className="section-title4">Press Releases</h5>

                        <div className="section-content">
                            <p className="coming-soon">Coming Soon!</p>
                        </div>
                    </div>

                </div>

            </div>
            {/* <BlogSection /> */}
            <Needs />
        </>
    );
};

export default ResourcesPage;


