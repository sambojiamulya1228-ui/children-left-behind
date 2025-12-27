import React from 'react'
import {Link}  from 'react-router-dom'
import './style.css'
import MobileMenu from '../../components/MobileMenu'
import Logo from '../../images/children-left-behind.png'
import ContactUs from '../ContactUs'

const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container" >
                <div className="row align-items-center" style={{backgroundColor: "#fff"}}>
                    <div className="col-lg-6 col-md-5 col-sm-5 col-5">
                    <div className="logo">
                        <Link to="/" title=""><img src={Logo} alt=""/></Link>
                    </div>
                </div>
                    <div className="col col-md-6 col-sm-5 col-5">
                        <div className="contact-info">
                            <ul className="contact-list d-flex align-items-center justify-content-end"  style={{backgroundColor: "#fff"}}>
                                <li className='d-none d-lg-block' style={{background:' #F8F0FF',color:'#832AD1',padding:'12px 20px',border:"1px solid #832AD1",borderRadius:"8px"}}> <Link to="/Contactus" style={{color:"#832AD1"}}>Contact</Link></li>
                                <li style={{background:' #91278f;'}}><Link className="theme-btn m-0" to="/donate">Join Hands</Link></li>
                            
                            </ul>
                        </div>
                    </div>
                  
                </div>
              
            </div>
        </div>
    )
}

export default HeaderTopbar;