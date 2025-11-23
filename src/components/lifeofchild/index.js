import React from 'react'
import ms5 from '../../images/about7.png'
import './style.css'

const Mission = (props) => {
    return(
        <div className='wpo-mission-area '>
            <div className="container">
               
                <div className="wpo-mission-wrap">
                    <div className="row align-items-center">
                         <div className='col-lg-6'>
     <div className="wpo-mission-content">
                                    <h2>Life of a Child</h2>
                                    <p>Life at our partner organization is a journey from basic needs to boundless potential. Children receive not just shelter and food, but also the educational support and encouragement needed to explore their passions. Take a glimpse of the life changing stories of children here</p>
                                     <div className="btns">
                                <a href="/donate" className="theme-btn">Learn More</a>
                                
                            </div>
                                </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item p-0">
                                <div className="wpo-mission-icon-5">
                                    <img src={ms5} alt=""/>
                                </div>
                           
                            </div>
                        </div>
                       
                      
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;