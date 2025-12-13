import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'
import './style.css'

const Header = () => {

  useEffect(() => {
    const dropdownParents = document.querySelectorAll("li:has(ul)");

    dropdownParents.forEach(parent => {
      const submenuLinks = parent.querySelectorAll("ul li a");

      submenuLinks.forEach(link => {
        link.addEventListener("click", () => {
          parent.classList.add("closed");

          setTimeout(() => {
            parent.classList.remove("closed");
          }, 300);
        });
      });
    });
  }, []);

  return (
    <div className="middle-header header-style-3">
        <style>{`
        /* make li the positioning parent */
        .middle-header.header-style-3 nav ul li {
          position: relative;
        }

        /* hide all submenus by default */
        .middle-header.header-style-3 nav ul li > ul {
          position: absolute;
          left: 0;
          top: 100%;
          min-width: 220px;
          background: #ffffff;
          padding: 10px 0;
          margin: 0;
          list-style: none;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.25s ease;
          z-index: 999;
        }

        .middle-header.header-style-3 nav ul li > ul li a {
          display: block;
          padding: 6px 20px;
          white-space: nowrap;
        }

        /* show submenu on HOVER */
        .middle-header.header-style-3 nav ul li:hover > ul {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
          /* Hide dropdown by default */
nav ul li ul {
  display: none;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease;
  position: absolute;
}

/* Show dropdown on hover */
nav ul li:hover > ul {
  display: block;
  opacity: 1;
  visibility: visible;
}

/* Close dropdown when the parent has .closed class */
nav ul li.closed > ul {
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
}

      `}</style>
      <HeaderTopbar />
      <div className="container">
        <div className="header-content">
          <div className="row">

            <div className="col-lg-12 d-lg-block d-none">

              <nav className='row'>
                <ul className="col-lg-9 p-0">

                  <li><Link to="/about">About Us</Link></li>

                  <li>
                    <Link to="/disability" className='drop-downn'>Our Programs</Link>
                    <ul>
                      <li><Link to="/disability">Supporting Disability</Link></li>
                      <li><Link to="/education">Education</Link></li>
                      <li><Link to="/medical">Medical Support</Link></li>
                      <li><Link to="/childtraffic">Child Trafficking</Link></li>
                      <li><Link to="/tripofindia">Trip to India</Link></li>
                      <li><Link to="/nurturingplaytime">Before/After School</Link></li>
                      <li><Link to="/disasterrelief">Disaster Relief</Link></li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/ourpartners" className='drop-downn'>Our Partners</Link>
                    <ul>
                      <li><Link to="/childcenter">CGC</Link></li>
                      <li><Link to="/pavani">Pavani</Link></li>
                      <li><Link to="/cards">CARDS</Link></li>
                      <li><Link to="/asha">Asha Jyothi</Link></li>
                    </ul>
                  </li>

                  <li><Link to="/stayinformed">Stay Informed</Link></li>
                  <li><Link to="/getinvolved">Get Involved</Link></li>

                </ul>

                <ul className="col-lg-3 p-0">
                  <li><Link to="/resources">Resources</Link></li>
                  <li><Link to="/faq">F.A.Q</Link></li>
                  <li><Link to="/Subscribe">Subscribe</Link></li>
                </ul>

              </nav>

            </div>

            <div className="col-md-2 col-sm-2 col-2">
              <MobileMenu />
            </div>

          </div>
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Header;
