import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const CtaSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-cta-area cta ${props.ctaclass}`}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4">
                        <div className="wpo-cta-text">
                            <h5 className='text-white'>Lets build a <br></br>Safe Space together!</h5>
                            {/* <br></br> */}
                            <p className='text-white mb-1'>Follow us on youtube for more live content</p>
                            <div className="btns" style={{paddingLeft: "14px"}} >
                                <Link onClick={ClickHandler} to="/donate" className="theme-btn" >
                                     View Media <i class="fas fa-external-link-alt"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;