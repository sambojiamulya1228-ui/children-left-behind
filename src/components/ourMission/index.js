import React from "react";
import Values from "../../images/about/our-values.png"
import "./style.css"; // <-- make sure to create this file


const ourMission = () => {
  return (
    <section className="values-section">
      <div className="wpo-section-title">
        <br></br>
        <br>
      </br>
      <br></br>
      <br></br>
        <span>
OUR VALUES
        </span>
        
        </div>

      <div className="valuestext">
        <h3>
          At Children Left Behind, our mission is to create, implement, and
          advocate for child-friendly policies that promote the holistic
          development and empowerment of children across the globe.
        </h3>
<br></br>
        <h3>
          We believe that governments, businesses, and civil society must come
          together to protect, nurture, and provide for every child, regardless
          of geography, ability, or socioeconomic status.
        </h3>
<br></br>
        <h3>
          Education is the foundation for breaking the cycle of poverty. We are
          committed to ensuring that every child has access to a quality
          education that upholds children’s rights, fosters empowerment, and
          enables them to become leaders of tomorrow.
        </h3>
        <br></br>
      </div>

      <div style={{paddingTop:'-20px'}}  className="values-bg">
        <img src={Values} alt="icon" />
      </div>
    </section>
  );
};

export default ourMission;
