import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const CtaSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-cta-area ${props.ctaclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-cta-text">
                            <h2>Lets build a 
Safe Space together!</h2>
                            <p>Follow us on youtube for more live content</p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/donate" className="theme-btn">View Media</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;