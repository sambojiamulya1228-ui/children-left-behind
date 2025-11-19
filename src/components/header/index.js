import React from 'react'
import {Link}  from 'react-router-dom'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'
import min1 from '../../images/shop/mini-cart/img-1.jpg'
import min2 from '../../images/shop/mini-cart/img-2.jpg'
import './style.css'

const Header = () => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

    return(	
	<div className="middle-header header-style-3">
        <HeaderTopbar/>
        <div className="container">
            <div className="header-content">
            <div className="row">
                
                <div className="col-lg-12 d-lg-block d-none">
                

                      
                    <nav className='row'>
                        <ul className="col-lg-9">
                            <li><Link className="active" to="/about" title="">About Us</Link>
                              
                            </li>
                            <li><Link to="/case" className='drop-downn' title="">Our Programs</Link>
                                <ul>
                                    <li><Link to="/case" title="">Causes</Link></li>
                                    <li><Link to="/case-single" title="">Causes Single</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/case" className='drop-downn' title="">Our Partners</Link>
                                <ul>
                                    <li><Link to="/case" title="">Causes</Link></li>
                                    <li><Link to="/case-single" title="">Causes Single</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/event" title="">Our Impacts</Link>
                              
                            </li>
                            <li><Link to="/home" title="">Stay Informed</Link>
                                
                            </li>
                           
                            <li><Link to="/contact" title="">How to be involved?</Link></li>
                        </ul>
                        <ul className="col-lg-3">
<li><Link to="/case" className='drop-downn' title="">Resources</Link>
                                <ul>
                                    <li><Link to="/case" title="">Causes</Link></li>
                                    <li><Link to="/case-single" title="">Causes Single</Link></li>
                                </ul>
                            </li> 
                                                        <li><Link to="/contact" title="">F.A.Q</Link></li>

                            <li><Link to="/contact" title="">Subscribe</Link></li>

                            </ul>
                    </nav>
                
                     

</div>
 <div className="col-md-2 col-sm-2 col-2">
                    <MobileMenu/>
                </div>
                </div>
               
                
            </div>
               
                <div className="clearfix"></div>
            </div>
            
        </div>
    )
}

export default Header;