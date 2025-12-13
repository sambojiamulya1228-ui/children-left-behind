import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
// import "../css";
import "../App"
import img from "../images/icons/Frame 232.png"
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img1 from "../images/icons/Programs.svg"
import { useNavigate } from "react-router-dom";
function USPrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <>








      {/* 🌟 CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
       



          <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%', textAlign: 'center' }} className="sub-title">U.S. Privacy Policy Statement</h2><br></br>
          <p className="description">
            This privacy statement applies to Children Left Behind, Inc. and its fundraising organization. We respect the<br /> privacy of our visitors and donors.<br /><br /><br />

            Children Left Behind will not collect personally identifiable information from our donors; namely, name,<br /> address, email address, or telephone number without the express consent of the individual(s) as provided on <br />the forms used by Children Left Behind to collect such information.Donors may restrict how the information <br />  is used by indicating individual preferences, including opting out of having information stored and used <br />for any reason other than follow-up correspondence.<br /><br />

            Children Left Behind does not share donor information with other organizations for commercial or non-commercial
            purposes. Information collected by Children Left Behind is used to respond to requests and provide better service to individuals using this website. <br /> <br />

            Children Left Behind uses a secure PayPal with encryption technology that allows for safe donations. The PayPal system may collect name, address, phone, credit card number and expiration date in order to process transactions.
          </p><br />

          <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%', }} className="sub-title">Security</h2><br></br>
          <p className="description">
            we care about the security of your transactions and apply industry-standard practices and technologies to safeguard your credit card information. We also employ other best practice security protocols to protect your personally identifiable information from unauthorized access by users inside and outside the organization.

          </p><br />

          <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%', }} className="sub-title">Changes to our Privacy Statement</h2><br/>
          <p className="description">
            Any changes to our privacy policy will be posted on this site. Any changes will become effective when posted unless indicated otherwise.

          </p><br />

                   <h2 style={{ fontWeight: '600', fontSize: '32px', lineHeight: '40px', letterSpacing: '2%', }} className="sub-title">Contact</h2><br/>
          <p className="description">
            If you have any questions or concerns about our website or this privacy policy, please feel free to contact us. Email or by mail.<br /><br /><br/>
             Children Left Behind<br/>
             1045 Radford Street<br/>
             Christiansburg, VA 24073-2829<br/>
            info@childrenleftbehind.org


            


          </p><br /><br />


          <img style={{ width: '100%' }} src={img} />


        </div> <br></br>
        <BlogSection />
        <CtaSection ctaclass={'wpo-cta-area-2'} />
        <Needs />

      </section>
    </>
  );
}

export default USPrivacyPolicy;