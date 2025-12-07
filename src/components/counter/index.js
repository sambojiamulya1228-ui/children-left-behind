import React from 'react';
import './style.css';
import img1 from "../../images/icons/icon-1.svg";
import img2 from "../../images/icons/file.svg";
import img3 from "../../images/icons/trust.svg";

const CounterSection = (props) => {
    const cardStyle = {
        height: "105px",
        // maxWidth: "280px", // max width for large screens
        width: "100%",     // responsive width on small screens
        backgroundColor: "#F8F0FF",
        borderRadius: "8px",
        padding: "12px 15px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "16px", // spacing between rows on mobile
        // justify-content: "flex-start";
        justifyContent:'flex-start'
        
    };

    const iconStyle = {
        width: "36px",
        height: "36px",
        backgroundColor: "#150523",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const imgStyle = {
        width: "16px",
        height: "16px",
        objectFit: "contain",
    };

    return (
        <div  className={`wpo-counter-area counter-section ${props.countclass}`}>
            <div className="container">
                <div className="row justify-content-center">

                    {[{
                        icon: img1,
                        count: "700",
                        text: "Children Empowered"
                    }, {
                        icon: img2,
                        count: "30",
                        text: "Projects Completed"
                    }, {
                        icon: img3,
                        count: "7",
                        text: "Trusted Global Sponsors"
                    }, {
                        icon: img3,
                        count: "5",
                        text: "Dedicated Regional Care"
                    }].map((item, index) => (
                        <div key={index} className='col-lg-3 col-md-6 d-flex justify-content-center'>
                            <div className="grid" style={cardStyle}>
                                <div style={iconStyle}>
                                    <img src={item.icon} alt="icon" style={imgStyle} />
                                </div>
                                <div>
                                    <h2>
                                        <span className="odometer" data-count={item.count}>{item.count}</span>+
                                    </h2>
                                    <p className='counter'>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default CounterSection;
