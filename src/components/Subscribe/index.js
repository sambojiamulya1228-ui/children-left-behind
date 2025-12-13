

import React from "react";
import "./style.css";
import img5 from "../../images/slider/img-1.jpg";

const SubscribePage = () => {
    return (
        <div className="subscribe-page">
            <div className="image-wrapper">
                <img src={img5} alt="Coming Soon" className="org-image" />

                <h2 className="coming-text">
                    <b>Coming Soon.....</b>
                </h2>
            </div>
        </div>
    );
};

export default SubscribePage;
