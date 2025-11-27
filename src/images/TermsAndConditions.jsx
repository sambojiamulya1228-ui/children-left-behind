import React, { useState, useEffect } from "react";
import heroImg from "../images/icons/stat-informed.png";
import Header from "../components/header";
import "../App";

function TermsAndConditions() {

    // Track window width for mobile detection
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Inline styles
    const containerStyle = {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "120px",
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto",
    };

    const sidebarStyle = {
        width: "220px",
        background: "#f7f7f7",
        padding: "15px",
        borderRadius: "6px",
        height: "fit-content",
        display: isMobile ? "none" : "block",
    };

    const listStyle = {
        listStyle: "none",
        padding: 0,
        margin: 0,
    };

    const listItemStyle = {
        padding: "10px 0",
        cursor: "pointer",
        fontWeight: "500",
        color: "#61586a",
        fontSize: "16px",
        lineHeight: "24px",
    };

    const contentStyle = {
        flex: 1,
        lineHeight: "28px",
        fontSize: "18px",
        fontWeight: "400",
    };

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero-section">
                <Header />
                <div className="hero-overlay"></div>
                <img src={heroImg} alt="Hero" className="hero-bg" />
            </section>

            {/* CONTENT */}
            <div style={containerStyle}>

                {/* LEFT SIDEBAR */}
                <aside style={sidebarStyle}>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>Your Use of the Website</li>
                        <li style={listItemStyle}>Privacy Policy</li>
                        <li style={listItemStyle}>Accuracy & Completeness</li>
                        <li style={listItemStyle}>Use of Materials</li>
                        <li style={listItemStyle}>Limitation of Liability</li>
                        <li style={listItemStyle}>Featured Links</li>
                        <li style={listItemStyle}>Copyright</li>
                        <li style={listItemStyle}>Trademarks</li>
                        <li style={listItemStyle}>Changes to Terms</li>
                        <li style={listItemStyle}>How to Contact Us</li>
                        <li style={listItemStyle}>Transactions</li>
                        <li style={listItemStyle}>Method of Payment</li>
                        <li style={listItemStyle}>Donations</li>
                        <li style={listItemStyle}>Refund & Cancellation</li>
                        <li style={listItemStyle}>Governing Law</li>
                    </ul>
                </aside>

                {/* RIGHT CONTENT */}
                <main style={contentStyle}>

                    <h2 style={{ textAlign: "center", color: "#1c191E" }}>
                        Terms & Conditions
                    </h2>

                    <p className="description">
                        This website is owned and operated by Children Left Behind (“Children Left Behind”, “we,” “us” or “our”). Children Left Behind provides this website, including all information, software and services available from this website, to you, the user, conditioned upon your acceptance of all the terms, conditions, policies and notices described herein. Your use of the website constitutes your agreement to all such terms, conditions, policies and notices.
                    </p>

                    <h2 style={{ color: "#1c191E" }}>Your Use of the Website</h2>
                    <p className="description">
                        This website is for your personal and noncommercial use. As a condition to your use of the website, you warrant to Children Left Behind that you will not use the website for any purpose that is unlawful or prohibited by these General Terms and Conditions.
                    </p>

                    <h2 style={{ color: "#1c191E" }}>Privacy Policy</h2>
                    <p className="description">
                        You explicitly consent to the collection, hosting, use, disclosure and other processing or handling of information as described in the Children Left Behind Privacy Notice as such notice may be amended by Children Left Behind in its sole discretion from time to time.
                    </p>

                    <h2 style={{ color: "#1c191E" }}>Accuracy & Information Timeliness</h2>
                    <p className="description">
                        We strive to provide accurate information on our website. We are not responsible, however, if information we make available on this website is not accurate, complete or current. The materials on this website are provided for general information only and should not be relied upon or used as the basis for making any decisions without consulting primary or more accurate, more complete or more timely sources of information. Any reliance on the materials on this website will be at your own risk. This website may contain certain historical information. Historical information is not current and is provided for your reference only. We reserve the right to modify the contents of this website at any time, but we have no obligation to update any information on the website. You agree that it is your responsibility to monitor changes to the website.
                    </p>

                    <h2 style={{ color: "#1c191E" }}>Use of Materials</h2>
                    <p className="description">
                        Except where explicitly stated otherwise, this website and all of its content (including but not limited to software, files, graphics and data) are the property of and owned by Children Left Behind and/or its affiliates, suppliers or licensors and are protected by copyright, trademark and other laws of the United States and other countries. You may display and electronically copy, download and print hard-copy versions of the materials contained on the website for your personal and noncommercial use, provided that you do not modify or delete any copyright, trademark or other proprietary notice that appears on the materials you copy, download or print. When you display, copy, download or print any materials on or from the website, they are provided to you by Children Left Behind and/or its affiliates, suppliers or licensors under a license that is revocable at will by Children Left Behind. Children Left Behind and/or its affiliates, suppliers or licensors retain full and complete title to the materials and to any and all of the associated intellectual property rights. Any other use of the materials on the website, including but not limited to the modification, distribution, transmission, performance, broadcast, reproduction, publication , licensing, reverse engineering, transfer or sale of, or the creation of derivative works from, any materials, information, software, products or services obtained from the website, without the prior written permission of Children Left Behind, is expressly prohibited. Requests for permission to undertake any of these activities should be mailed to
                    </p>
                    <p className="description">
                        Children Left Behind <br />
                        1045 Radford Street <br />
                        Christiansburg, VA 24073-2829 <br />
                        info@childrenleftbehind.org


                    </p>

                    <h2 style={{ color: "#1c191E" }}>Limitation of Liability</h2>
                    <p className="description">
                        To the fullest extent permitted under applicable law, you understand and agree that no member of the Children Left Behind (as defined below) shall be liable for any direct, indirect, incidental, special, exemplary, consequential, punitive or any other damages relating to or resulting from (i) your use or inability to use this website or any other website you access through a link from this site, (ii) from any actions we take or fail to take as a result of electronic mail messages you send us; (iii) the publishing of any information, comments or other information on or to the website by you or any person using your computer; or (iv) the use by any third party of your user name or password. These include damages for errors, omissions, interruptions, defects, delays, computer viruses, your loss of profits, loss of data, unauthorized access to or alteration of your transmissions or data, and other tangible and intangible losses. this limitation applies regardless of whether the damages are claimed under the terms of a contract, as of negligence, or otherwise arise out of or in connection with the use, inability to use or performance of the information, services, products or materials available from this website, and even if we or our representatives have been negligent or have been advised of the possibility of such damages. Because some jurisdictions do not allow limitations on how long an implied warranty lasts, or the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you
                    </p>

                    <h2 style={{ color: "#1c191E" }}>Featured Links</h2>
                    <p className="description">
                        This website may contain hyperlinks to other Internet websites. These hyperlinks are provided for your information and convenience only. Children Left Behind does not control these other websites and is not responsible for their content; nor does Children Left Behind’s inclusion of hyperlinks to such websites imply any endorsement or approval of the material on such websites or any association with their operators. Check the URL address provided in your browser to determine whether you are still in this Children Left Behind website or have moved to another site.
                    </p>

                    <h2 style={{ color: "#1c191E" }}>Copyright</h2>
                    <p className="description">
                        Except for material in the public domain under United States copyright law, all material contained on the website (including all software, HTML code, Java applets, Active X controls and other code) is protected by applicable United States and foreign copyright laws. Except as otherwise expressly provided in these General Terms and Conditions, you may not copy, distribute, transmit, display, perform, reproduce, publish, license, modify, rewrite, create derivative works from, transfer or sell any material contained on the website without the prior consent of the copyright owner. Violation of this provision may result in severe civil and criminal penalties
                    </p>

                    <h2 style={{ color: "#1c191E" }}>Trademarks</h2>
                    <p className="description">
                        Children Left Behind ® OR Children Left Behind ™ and other marks used on this website are trademarks or registered trademarks of Children Left Behind and its affiliates and are protected by state and federal trademark laws. Other trademarks appear on the website with permission from their respective owners. Your unauthorized use of trademarks appearing on the website may constitute trademark infringement, which could subject you to substantial civil penalties.
                    </p>


                    <h2 style={{ color: "#1c191E" }}>Changes to These General Terms and Conditions</h2>
                    <p className="description">
                        Children Left Behind reserves the right to make changes to these General Terms and Conditions at any time by posting revised General Terms and Conditions on the website. It is your responsibility to check periodically for any changes we may make to these General Terms and Conditions. The most current version of the General Terms and Conditions can be reviewed by clicking on the “Terms of Use” hypertext link located at the bottom of our Web pages. By continuing to use the website, you are agreeing to all changes made by Children Left Behind.
                    </p>


                    <h2 style={{ color: "#1c191E" }}>Trademarks</h2>
                    <p className="description">
                        Children Left Behind ® OR Children Left Behind ™ and other marks used on this website are trademarks or registered trademarks of Children Left Behind and its affiliates and are protected by state and federal trademark laws. Other trademarks appear on the website with permission from their respective owners. Your unauthorized use of trademarks appearing on the website may constitute trademark infringement, which could subject you to substantial civil penalties.
                    </p>


                    <h2 style={{ color: "#1c191E" }}>How to Contact Us</h2>
                    <p className="description">
                        If you have any questions or comments about these General Terms and Conditions or this website, please Contact Us or write us at:<br></br><br></br>

                        Children Left Behind<br></br>
                        1045 Radford Street<br></br>
                        Christiansburg, VA 24073-2829
                    </p>


                    <h2 style={{ color: "#1c191E" }}>Transactions</h2><br></br>
                    <h2 style={{ color: "#1c191E", fontSize: '20px' }}>Methods of Payment</h2><br></br>
                    <p className="description">
                        In order to complete a Transaction, Registrant may need to provide a method of payment (“Payment Account”) as specified during the registration process. Registrant may execute a single Transaction at a time or execute multiple Transactions on a recurring basis (e.g., monthly, quarterly, annually, etc.), depending upon the options selected during the Transaction process. You authorize Children Left Behind   to charge your Payment Account at the frequency and in the amounts designated by you during the Transaction process. All fees will be billed via the method of payment you designate during the Transaction process. Once submitted, amounts paid are generally non-refundable. However, in the event your donation was not intended for Children Left Behind, you may request a refund. Children Left Behind may periodically need to increase the sponsorship amount and in such cases, Children Left Behind will announce the increase before any additional deductions are made. You will always have the option to decline an increase.
                    </p>


                    <h2 style={{ color: "#1c191E", fontSize: '20px' }}>Donations</h2>
                    <p className="description">
                        Registrant acknowledges and agrees that Children Left Behind did not provide any goods or services to Registrant personally in consideration for any donations made by Registrant as part of a Transaction. Children Left Behind will apply Registrant’s donations in accordance with its internal policies and procedures.
                    </p>

                    <h2 style={{ color: "#1c191E" }}>Refund and Cancellation</h2><br></br>

                    <p className="description">
                        Our policy on refund and cancellation of donations received:<br></br> <br></br>

                        As a Children’s Charitable Organization, Children Left Behind has a strict Non-Refund policy on all donations made on its website or by mail. The donor understands that charitable donations are not refundable.
                        The donation will be used for the developmental work being initiated by the organization.
                    </p>


                      <h2 style={{ color: "#1c191E" }}>Governing Law</h2><br></br>

                    <p className="description">
                       This Children Left Behind website and the Restricted Sites are controlled and operated by Children Left Behind from its principal office in the Commonwealth of Virginia, USA. The laws of the Commonwealth of Virginia govern these Restricted Sites Terms and Conditions and your use of the Restricted Sites. We recognize that it is possible for you to obtain access to the Restricted Sites from any jurisdiction in the world, but Children Left Behind has no practical ability to prevent such access. The Restricted Sites has been designed to comply with the laws of the Commonwealth of Virginia and the United States. Registrants who choose to access the Restricted Sites from other locations do so on their own initiative and are responsible for compliance with local laws, if and to the extent local laws are applicable. If any material on the Restricted Sites, or your use of the Restricted Sites, is contrary to the laws of the place where you are when you access it, then the Restricted Sites are not intended for you and we ask you not to use the Restricted Sites. You may not use or export materials on the Restricted Sites in violation of United States export laws and regulations. The Restricted Sites are not intended to subject Children Left Behind to the laws or jurisdiction of any state, country or territory other than the Commonwealth of Virginia and the United States of America
                    </p>

                </main>
            </div>
        </>
    );
}

export default TermsAndConditions;
