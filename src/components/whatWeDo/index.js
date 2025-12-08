import React from "react";
import "./style.css";
// import img1 from "/Work/children-left-behind/src/images/icons/Vector.png"
import img1 from "../../images/icons/Vector.png"

const WhatWeDo = () => {
    const tags = [
        "Awareness and Outreach",
        "Knowledge Sharing",
        "Child development activities",
        "Education",
        "Medical Care",
    ];

    return (
        <div className="container text-center what">
            <p className="whatwe">What We Do</p><br></br>


            <h4 className="mx-auto" 
            // style={{ maxWidth: "900px", color: '#1C191E', fontWeight: '400', fontSize: '30px', lineHeight: '44px', letterSpacing: '2%' }}
            >
                We are a non-profit children’s humanitarian charity, committed to improving the lives of children in developing countries around the world through providing education and proper medical care.
            </h4>

            {/* TAGS */}
            {/* <div className="d-flex flex-wrap justify-content-center mt-4 gap-2">
                {tags.map((item, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 border border-primary rounded-pill small"
                        style={{ fontSize: "12px" }}
                    >
                        <i className="fa-solid fa-badge-check"></i>
                        {item}
                    </span>
                ))}
            </div> */}

            <div className="d-flex flex-wrap justify-content-center mt-4 gap-2">
                {tags.map((item, index) => (
                    <span
                        key={index}
                        className="px-3 py-1  small d-flex align-items-center"
                        style={{
                            fontSize: "12px",
                            border: "2px solid #6817AE",
                            borderRadius: "5px",
                            gap: "6px",
                            color: '#6817AE'
                        }}
                    >
                        <img
                            src={img1}
                            alt="check"
                            style={{ width: "14px", height: "14px", objectFit: "contain" }}
                        />

                        {item}
                    </span>
                ))}
            </div>

        </div>
    );
};

export default WhatWeDo;
