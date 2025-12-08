import React from 'react'
import ms5 from '../../images/about6.png'

import './style.css'

const Mission = (props) => {
    return (
        <div className='wpo-mission-area ourm about-section-2 pt-5 mt-5'>
            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>OUR MISSION</span>
                            <h2>Child Friendly World</h2><br></br><br></br>
                            <p>We envision a world where every child has the opportunity to <br/> thrive, a world that protects, nurtures, and empowers its youngest<br/> citizens.</p>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row align-items-center justify-content-center">
                        <div className='col-lg-12 text-center'>
                            <h5 id='remodeling'>Remodeling a world where</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div   className="wpo-mission-content">
                                <p>Basic needs, such as shelter, clean water and nutritional food to eat</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 custom-grid">
                            <div   className="wpo-mission-content">
                                <p>Medical needs met and have access to preventive medicine</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 custom-grid">
                            <div   className="wpo-mission-content">
                                <p>Children are safe, healthy and provided quality education</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 custom-grid">
                            <div   className="wpo-mission-content">
                                <p>Free of violence and abuses such as child trafficking, child slavery.</p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;