import React from 'react'
import {Link} from 'react-router-dom'
import abimg from '../../images/icons/about8.png'
import abimgg from '../../images/about4.png'
import abimggg from '../../images/about5.png'
import VideoModal from '../ModalVideo'
import ms6 from '../../images/icons/2.png'
import ms7 from '../../images/icons/1.png'
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area needs  section-padding">
            
               
                   
             
            <div className="container">
                
                <div className="row pb-4">
                    
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                {/* <span>What We Do?</span> */}
                                <h2>20 million Children have no access to basic needs </h2>
                            </div>
                            <p>Join us to make a small difference even more impactful with our trusted partners</p>
                            {/* <p>Thing embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, </p> */}
                           <div className="btns gap-2">
                                                               <Link to="/donate" className="theme-btn">Learn More</Link>
                                                               <Link to="/donate" className="theme-btn">Join Hands</Link>
                                                           </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src={abimg} className='img' alt=""/>
                        </div>
                    </div>
                    </div>
                   
            </div>
        </div>
    )
}

export default About;