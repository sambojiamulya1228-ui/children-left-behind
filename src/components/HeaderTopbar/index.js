import React from 'react'
import {Link}  from 'react-router-dom'
import './style.css'
import MobileMenu from '../../components/MobileMenu'
import Logo from '../../images/children-left-behind.png'
import ContactUs from '../ContactUs'

const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-5 col-sm-5 col-5">
                    <div className="logo">
                        <Link to="/" title=""><img src={Logo} alt=""/></Link>
                    </div>
                </div>
                    <div className="col col-md-6 col-sm-5 col-5">
                        <div className="contact-info">
                            <ul className="contact-list d-flex align-items-center justify-content-end">
                                <li className='d-none d-lg-block'> <Link to="/Contactus">Contact</Link></li>
                                <li><Link className="theme-btn m-0" to="/donate">Join Hands</Link></li>
                            
                            </ul>
                        </div>
                    </div>
                      {/* <div className="col-md-2 col-sm-2 col-2">
                    <MobileMenu/>
                </div> */}
                </div>
              
            </div>
        </div>
    )
}

export default HeaderTopbar;