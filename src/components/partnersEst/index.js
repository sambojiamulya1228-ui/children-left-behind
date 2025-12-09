import React from "react";
import "./style.css";

const InfoSection = () => {
  return (


 
    <div className="info-wrapper">
      <div className="info-row">

       

        {/* LOCATION */}
        <div className="info-col">
          <h4 style={{color:'#1C191E'}} className="info-title">Est.</h4>
          <p className="info-text">1973</p>
          <br></br>
          
          <h4 className="info-title">Location</h4>
          <p className="info-text">
            H.NO. 7-6/2, Santosh Sadan,<br />
            Ganesh Nagar Colony, Near Uppal Depot,<br />
            Peerzadiguda, Medipally Mandal,<br />
            Medchal District,<br />
            Hyderabad – 500098,<br />
            Telangana - INDIA
          </p>
        </div>

        {/* CONTACT */}
        <div className="info-col">
          <br></br>
           <br></br>
            <br></br>
             
          <h4 className="info-title">Contact</h4>
          <p className="info-text">+91 8367675467</p>
          <p className="info-text">info@cgcindia.org</p>
        </div>

        {/* WEBSITE */}
        <div className="info-col">
           <br></br>
           <br></br>
            <br></br>
            
          <h4 className="info-title">Website</h4>
          <a
            className="info-link"
            href="https://cgcindia.org/"
            target="_blank"
            rel="noreferrer"
          >
            https://cgcindia.org/
          </a>
        </div>

      </div>
    </div>

  );
};

export default InfoSection;
