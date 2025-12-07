import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

// Images
import Img1 from "../../images/slider/gallery1.jpg";
import Img2 from "../../images/slider/gallery2.jpg";
import Img3 from "../../images/slider/gallery3.jpg";
import Img4 from "../../images/slider/gallery4.jpg";

class TiltCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: false,
      centerPadding: "0px",
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } }
      ]
    };

    return (
      <div className="tilt-wrapper">
        <Slider {...settings}>

          <div className="tilt-card rotate-1">
            <img src={Img1} alt="" />
          </div>

          <div className="tilt-card rotate-2">
            <img src={Img2} alt="" />
          </div>

          <div className="tilt-card rotate-3">
            <img src={Img3} alt="" />
          </div>

          <div className="tilt-card rotate-4">
            <img src={Img4} alt="" />
          </div>

        </Slider>
      </div>
    );
  }
}

export default TiltCarousel;
