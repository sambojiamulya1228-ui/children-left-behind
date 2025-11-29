import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/children-left-behind.png'
import Newsletter from '../Newsletter'
import n1 from '../../images/footer/img-1.jpg'
import n2 from '../../images/footer/img-2.jpg'
import './style.css'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <footer className="wpo-site-footer pt-5">
            {/* <Newsletter/> */}
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className='col-md-12'>
                            <div className='footer-top-links py-4'>


                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Our Impacts</Link></li>
                                    <li><Link onClick={ClickHandler} to="/resources">Resources</Link></li>
                                    <li><Link onClick={ClickHandler} to="/Contactus">Contact</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">F.A.Q</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Partners</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/childcenter">Child Guidance Center</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Community and Rural Development Society</Link></li>
                                    <li><Link onClick={ClickHandler} to="/asha">AASHA JYOTHI Welfare Association for Disability</Link></li>
                                    <li><Link onClick={ClickHandler} to="/pavani">Pavani Special School</Link></li>
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
                                        <li><Link onClick={ClickHandler} to="/education">Education</Link></li>
                                        <li><Link onClick={ClickHandler} to="/medical">Medical Campaigns</Link></li>
                                        <li><Link onClick={ClickHandler} to="/disability">Supporting the disabled</Link></li>
                                        <li><Link onClick={ClickHandler} to="/tripofindia">Mission to india</Link></li>
                                        <li><Link onClick={ClickHandler} to="/childtraffic">Act of child Protection</Link></li>
                                        <li><Link onClick={ClickHandler} to="/disasterrelief">Disaster relief</Link></li>
                                        <li><Link onClick={ClickHandler} to="/nurturingplaytime">Nurturing playtime</Link></li>
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
                                    <li><Link onClick={ClickHandler} to="/stayinformed">Stay informed</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">How to be involved</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Financial reports</Link></li>
                                    <li><Link onClick={ClickHandler} to="/resources">Media</Link></li>
                                    <li><Link onClick={ClickHandler} to="/resources">Brochures</Link></li>
                                    <li><Link onClick={ClickHandler} to="/resources">Financial Accountability</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="wpo-newsletter">
                                <p>Get the latest updates about ChildrenLeftBehind’s new  updates and programs.</p>
                                <div className="wpo-newsletter-form">
                                    <form onSubmit={SubmitHandler}>
                                        <div>
                                            <input type="text" placeholder="Enter Your Email" className="form-control" />
                                            <button type="submit">Subscribe</button>
                                        </div>
                                    </form>
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