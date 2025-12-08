import React from 'react'
import ms1 from '../../images/mission/icon1.png'
import ms5 from '../../images/icons/how-it-works.png'
import './style.css'

const Mission = (props) => {
    return(
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container howit">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <br></br>
                            <br></br>
                            <span style={{fontSize:'16px', fontWeight:'500', color:'#91278f'}}>HOW IT WORKS</span>
                            <h2>Children Are elevated  beyond survival</h2>
                            <br></br>
                            <br></br>
                            <p 
                            style={{width: "70%",
                                paddingLeft: "322px"
                            }}
                            > where they may flourish and have a chance 
                                to live with dignity and purpose.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row justify-content-center">
                       
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item p-0">
                                <div className="wpo-mission-icon-5">
                                    <img style={{borderRadius: "12px"}} src={ms5} alt=""/>
                                </div>
                           
                            </div>
                        </div>
                       
                      
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item text-center">
                               
                                <div className="wpo-mission-content"
                                style={{paddingLeft: "50px"}}
                                >
                                    <p>With the core principle of Maslow’s law of hierarchy, we diligently work towards connecting children in need partners with resources. All the donations, medical and educational resources obtained from sponsors, volunteers are catered to the unique needs of children. </p>
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