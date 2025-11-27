import React from "react";
import "./style.css";

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
            <p className="text-uppercase head">What We Do</p>

            <h2 className="mx-auto" style={{ maxWidth: "900px" }}>
                We are a non-profit children’s humanitarian charity, committed to
                improving the lives of children in developing countries by providing
                education and proper medical care.
            </h2>

            {/* TAGS */}
            <div className="d-flex flex-wrap justify-content-center mt-4 gap-2">
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
            </div>
        </div>
    );
};

export default WhatWeDo;
