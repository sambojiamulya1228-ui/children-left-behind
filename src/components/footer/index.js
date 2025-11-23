import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/children-left-behind.png'
import Newsletter from '../Newsletter'
import n1 from '../../images/footer/img-1.jpg'
import n2 from '../../images/footer/img-2.jpg'
import './style.css'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <Newsletter/>
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                         <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Partners</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/about">Child Guidance Center</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">Community and Rural Development Society</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">AASHA JYOTHI Welfare Association for Disability</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Pavani Special School</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget resource-widget">
                           <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Programs</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/about">Education</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">Medical Campaigns</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">Supporting the disabled</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Mission to india</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Act of child Protection</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Disaster relief</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Nurturing playtime</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Quick Links</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/about">Stay informed</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">How to be involved</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">Financial reports</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Media</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Brochures</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Financial Accountability</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                        <div className="widget market-widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <p>online store with lots of cool and exclusive wpo-features</p>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>28 Street, New York City, USA</li>
                                    <li><i className="fi flaticon-call"></i>+000123456789</li>
                                    <li><i className="fi flaticon-envelope"></i>nasarna@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                         <ul className='d-flex align-items-center  gap-2'>
                                <li><Link onClick={ClickHandler} className='text-white' to="/about">Terms of Service</Link></li>
                                <li><Link onClick={ClickHandler} className='text-white' to="/case">Privacy Policy</Link></li>
                              
                            </ul>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <p className="copyright">&copy; © 2025 ChildrenLeftBehind Inc. is a 501(c)(3) organization. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;