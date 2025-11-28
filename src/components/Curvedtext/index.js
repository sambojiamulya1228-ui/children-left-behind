import React from "react";
import "./style.css";

const CurvedText = () => {
  return (
    <div className="curved-wrapper">

      {/* Left Curve */}
      <svg className="curve-left-svg" viewBox="0 0 500 200">
        <defs>
          <path
            id="leftCurve"
            d="M 10 50 Q 250 150 490 -120"
            fill="transparent"
          />
        </defs>
        <text fontSize="30" fill="#7E33E0" fontWeight="500">
          <textPath href="#leftCurve" startOffset="0%">
            A drop in the Ocean.....
          </textPath>
        </text>
      </svg>

      {/* Right Curve */}
      <svg className="curve-right-svg" viewBox="0 0 500 200">
        <defs>
          <path
            id="rightCurve"
            d="M 10 150 Q 250 20 490 200"
            fill="transparent"
          />
        </defs>
        <text fontSize="30" fill="#7E33E0" fontWeight="500">
          <textPath href="#rightCurve" startOffset="0%">
            can still make a difference!
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedText;
