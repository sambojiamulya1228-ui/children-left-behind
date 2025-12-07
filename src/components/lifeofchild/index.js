import React from 'react'
import LeftBG from "../../images/icons/pavani-left.png";
import RightBG from "../../images/icons/pavani-right.png";
import TiltCarousel from '../TiltCarousel'

import './style.css'

const Mission = (props) => {
    return (
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container heart pb-5 mb-2">
  
                <div className="row">
                    <img src={LeftBG} alt="" className="pavani-left" />
      <img src={RightBG} alt="" className="pavani-right" />
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>LIFE OF A CHILD</span>
                            <h2>Heartwarming tales of children </h2>
                            <p>Life at our partner organization is a journey from basic needs to boundless potential. Children receive not just shelter and food, but also the educational support and encouragement needed to explore their passions. Take a glimpse of the life changing stories of children here
                            </p>
                        </div>
                    </div>
                </div>
                <TiltCarousel />
            </div>
        </div>
    )
}

export default Mission;