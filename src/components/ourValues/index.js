import React from "react";
import Values from "../../images/about/our-values.png"
import "./style.css"; // <-- make sure to create this file

const ValuesSection = () => {
  return (
    <section className="values-section">
      <h3 className="values-title">OUR VALUES</h3>

      <div className="values-text">
        <p>
          At Children Left Behind, our mission is to create,<br/> implement, and 
          advocate for child-friendly policies<br/> that promote the holistic 
          development and <br/>empowerment of children across the globe.
        </p>

        <p>
          We believe that governments, businesses, and civil society must come 
          together to protect, nurture, and provide for every child, regardless 
          of geography, ability, or socioeconomic status.
        </p>

        <p>
          Education is the foundation for breaking the cycle of poverty. We are 
          committed to ensuring that every child has access to a quality 
          education that upholds children’s rights, fosters empowerment, and 
          enables them to become leaders of tomorrow.
        </p>
      </div>

      <div className="values-bg">
        <img src={Values} alt="icon" />
      </div>
    </section>
  );
};

export default ValuesSection;
