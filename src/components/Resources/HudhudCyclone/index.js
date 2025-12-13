


import React from "react";
import "./style.css";

const importImages = (r) => {
  return r
    .keys()
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map(r);
};

const images = importImages(
  require.context(
    "../../../images/HudhudCycloneRelief",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const HudhudCycloneRelief = () => {
  const firstGroup = images.slice(0, 4);
  const secondGroup = images.slice(4);

  return (
    <div className="hudhud-gallery container">
        <br></br>
      {/* <h2 className="gallery-title">Hudhud Cyclone Effect in Tribal Area</h2> */}

      <div className="gallery-text">Hudhud Cyclone Effect in Tribal Area</div>


      <div className="gallery-grid">
        {firstGroup.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hudhud Cyclone Effect image ${index + 1}`}
            className="gallery-img"
          />
        ))}
      </div>
<br></br>
<br></br>
      {/* <h2>
        CARDS Team distributing Vegetables & Vessels, Water Packets, Provisions
        to Hudhud Cyclone affected Families
      </h2> */}
      <div className="gallery-text">
  CARDS Team distributing Vegetables and Vessels, Water Packets, Provisions 
  to Hudhud Cyclone affected Families
</div>


      <div className="gallery-grid">
        {secondGroup.map((img, index) => (
          <img
            key={index + 4}
            src={img}
            alt={`Distribution image ${index + 5}`}
            className="gallery-img"
          />
        ))}
      </div>
    </div>
  );
};

export default HudhudCycloneRelief;
