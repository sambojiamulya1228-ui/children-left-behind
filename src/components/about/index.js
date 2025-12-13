import React from 'react'
import abimg from '../../images/about1.png'
import abimgg from '../../images/about4.png'
import abimggg from '../../images/about5.png'
import VideoModal from '../ModalVideo'
import ms6 from '../../images/icons/2.png'
import ms7 from '../../images/icons/1.png'
import './style.css'
import m1 from "../../images/icons/image 3.svg"

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area icons section-padding">
            
                 <img src={ms6} alt="" className='icon-left'/>
                    <img src={ms7} alt="" className='icon-right'/>
                   
             
            <div className="container">
                
                <div className="row pb-4">
                    <div className="col-12">
                          <div className="wpo-section-title">
                              <span>OUR KEY INITIATIVES</span>
                              <h2>Enabling Children by Creating Pathways to <br/> Opportunity</h2>
                              <p>From essential care in India to international opportunities, learn how our<br/> unique programs are changing lives.</p>
                          </div>
                      </div>
                      <div className='row py-4'>

                     
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                {/* <span>What We Do?</span> */}
                                <h3>Sponsor a child for their welfare</h3>
                            </div>
                            <p>Sponsoring a child through Children Left Behind is the biggest contribution one can make and it requires very little. Won’t you help us make a difference in a child’s life?</p>
                            <div className="btns">
                                <a href="/donate" className="theme-btn" onClick={ClickHandler}>Learn More</a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img style={{borderRadius: "12px"}} src={abimg} className='img w-100' alt=""/>
                        </div>
                    </div>
                     </div>
                    </div>
                    <div className='row py-4'>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img style={{borderRadius: "12px"}} src={abimggg} className='imgg w-100' alt=""/>
                        </div>
                    </div>
                      <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title ">
                                <h3>Educating every child with disabilities</h3>
                            </div>
                            <p>We are actively involved in improving the lives and education of children with intellectual and physical disabilities in developing countries.</p>
                            <div className="btns">
                                <a href="/donate" className="theme-btn" onClick={ClickHandler}>Learn More</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='row py-4'>
                    
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <h3>Educating every child with disabilities</h3>
                            </div>
                            <p>We are actively involved in improving the lives and education of children with intellectual and physical disabilities in developing countries.</p>
                            <div className="btns">
                                <a href="/donate" className="theme-btn" onClick={ClickHandler}>Learn More</a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img style={{borderRadius: "12px"}} src={abimgg} className='imggg w-100' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;