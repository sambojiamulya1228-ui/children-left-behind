import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
import Slider from "react-slick";
import TiltCarousel from "../components/TiltCarousel";
// import "../css";
import "../App"
import img from "../images/icons/Union.svg"
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img1 from "../images/icons/Programs.svg"
import { useNavigate } from "react-router-dom";
function DisasterRelief() {
    const navigate = useNavigate();

   // 🔥 MOBILE CAROUSEL SETTINGS
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    variableWidth: true,
  };


   const categories = [
    { name: "Supporting the disabled", link: "/disability" },
    { name: "Education", link: "/education" },
    { name: "Medical campaigns", link: "/medical" },
    { name: "Mission to India", link: "/tripofindia" },
    { name: "Act for child protection", link: "/childtraffic" },
    { name: "Nurturing playtime", link: "/nurturingplaytime" },
    { name: "Disaster relief",  special: true },
  ];
    return (
        <>
            {/* 🌟 HERO SECTION */}


            <div className="program-hero">

                {/* RIGHT IMAGE on Desktop — FIRST on Mobile */}
                <div className="program-image-box">
                    <img src={img1} alt="hero" className="program-image" />
                </div>

                {/* LEFT CONTENT on Desktop — BELOW on Mobile */}
                <div className="program-content">
                    <h1 style={{ color: '#1C191E' }} className="program-title">
                        Aims to bridge the <br />
                        gaps in education and <br />
                        healthcare
                    </h1>

                    <p className="program-desc">
                        Children Left Behind conceived its goals to meet the pressing
                        educational and medical needs of children who live without the crucial
                        anchor of family, as well as those with family or caregivers who are
                        unable to access the resources they need to flourish.
                    </p>

                </div>

            </div><br /><br /><br />




            <div>
                {/* <p style={{ paddingLeft: '50px' }}> */}
                       <p style = {{
    margin: "5px 264px auto",
    width: "1164px", marginLeft: "172px"}}>
                    We are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities.
                </p>
            </div>
             <section className="category-section container">
      {/* DESKTOP VIEW (no carousel) */}
      <div className="category-desktop"
      
       style={{
                   width: "100vw",
    height: "1px",
    background: "#ebebeb",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)"

                 }}
      
      >
        <div className="category-list"
        
        
        style={{
                     borderBottom : "1px solid #ebebeb",
            // background : "#ebebeb",
            paddingBottom: "20px",
            width : "100vw",
          
            left: "50%",
            paddingTop: "20px",
            paddingLeft: "222px"
                   }}
        
        >
          {categories.map((item, i) => (
            <span
              key={i}
              onClick={() => !item.special && navigate(item.link)}
              className={`cat-item ${item.special ? "special" : ""}`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* MOBILE VIEW (carousel) */}
      <div className="category-mobile">
        <Slider {...settings}>
          {categories.map((item, i) => (
            <div key={i} style={{ width: "auto" }}>
              <span
                onClick={() => !item.special && navigate(item.link)}
                className={`cat-item ${item.special ? "special" : ""}`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </section>


            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">
                    <h2 style={{ width: "100%", overflow: "hidden", padding: "6px 0", background: "#fff", color: '#1C191E', marginLeft: "-20px" }} className="sub-title">Disaster relief</h2><br></br>
                    <p className="description" style={{marginLeft: "50px"}}>
                        When natural disasters strike parents often leave children behind as orphans or render families homeless. Children Left Behind provides children and their families’ food, clothing and basic supplies to help them cope and begin to rebuild their lives
                    </p><br></br>
                    <p className="description" style={{marginLeft: "50px"}}>
                        $25 helps provide basic sanitation such as toilets and temporary hand washing stations.<br></br>
                        $50 helps feed a family with food such as rice, Oil, Vegetables and cooking oil for a week.<br></br>
                        $100 helps provide basic medical supplies for a partner to treat up to 50 patients.<br></br>
                        $500 helps provide critical life items like temporary shelter, blankets and clothing for 10 families.<br></br>
                        Any amount you choose to offer would provide critical relief for all those in dire need<br></br>

                    </p> <br></br>
                    <p className="description" style={{marginLeft: "50px"}}>
                        International Emergency Relief <br></br>
                        Children Left Behind responds quickly to bring relief to people in need. One way we help in disaster situations is by handing out “family survival kits” that include warm blankets, buckets with water filters, cooking utensils, soap, and other daily essentials. For just $45, we can provide a lifeline to a family that has lost everything, to help them get back on their feet.
                    </p> <br></br>

                    <p className="description" style={{marginLeft: "50px"}}>
                        Helping families in India After Cyclone<br></br>
                        Devastated by powerful Phailin, families along India’s eastern coast receive relief from our local partners.
                    </p> <br></br>

                    <p className="description" style={{marginLeft: "50px"}}>
                        Our partners in India, Child Guidance Center (CGC) and Community and Rural Development Society (CARDS) recently provided emergency relief through our local partners in India to several hundred families affected by Cyclone Phailin, which pounded India’s eastern coast on October 12.
                    </p><br></br>

                    <p className="description" style={{marginLeft: "50px"}}>
                        The country’s most powerful cyclone in 14 years, the storm, packed winds of more than 120 miles per hour resulted in landfall in Odisha (formerly Orissa) state. There were relatively few casualties, but there likely would have been more deaths had not approximately 1 million people moved to shelters and government buildings in anticipation of the storm—the largest evacuation in India’s history. Nonetheless, winds and floods left 600,000 people homeless and many thousands marooned
                    </p><br></br>

                    <p className="description"style={{marginLeft: "50px"}}>
                        Our partners distributed relief packages in few areas of states of Odisha and Andhra Pradesh. Families received 55 pounds of food items, enough to sustain four people for 15 days. Rice, Vegetables, tea, cooking oil, curry powders, mosquito repellant, a bathing bucket, and sugar were among the staple cooking items included in the packages
                    </p><br></br>

                    <p className="description"style={{marginLeft: "50px"}}>
                        Parts of Odisha were severely damaged by Phailin’s fury, making accessibility a greatdifficulty. Roads were badly damaged to the extent that one of the relief trucks met with an accident. In one of the areas, many mud homes had collapsed walls and roofs while in other villages, houses were completely washed away.
                        “It was some of the most impoverished places we’ve ever been,” said a team member. Some beneficiaries cried with relief as they gratefully received the staples
                    </p><br></br>

                    <p className="description" style={{marginLeft: "50px"}}>
                        Food Delivered to Flood Victims in India<br></br>
                        Our partners in India, Child Guidance Center (CGC) and Community and Rural Development Society (CARDS) are providing emergency food packets and other relief measures to victims of the historic floods.

                    </p><br></br>

                    <p className="description" style={{marginLeft: "50px"}}>
                        The worst flood in over 100 years, it has taken the lives of hundreds and left tens of thousands stranded in southern India.
                    </p><br></br>


                    <p className="description" style={{marginLeft: "50px"}}>
                        Chennai, the country’s fourth largest city, received over a foot of rain in one day, which is higher than their average for the whole month
                    </p><br></br>


                    <p className="description" style={{marginLeft: "50px"}}>
                        Our partners have responded supplying emergency food to more than 20,000 flood victims
                    </p><br></br>


                    <p className="description" style={{marginLeft: "50px"}}>
                        The help provided through Child Guidance Center (CGC) and Community and Rural Development Society (CARDS)has been of great relief to the people suffering in rural areas who had very little to begin with.
                    </p><br></br>


                    <p className="description" style={{marginLeft: "50px"}}>
                        Child Guidance Center (CGC) and Community and Rural Development Society (CARDS) will be providing more aid to thousands of flood victims. The aid would be in the form of basic household goods like vessels, bed sheets, dishes, etc. Assistance would also be provided to them in the repair work of their homes.
                    </p><br></br>



                    <p className="description" style={{marginLeft: "50px"}}>
                        We are grateful to our partnersfor helping the victims in India during emergency crisis
                    </p><br></br>

                    <p className="description" style={{marginLeft: "50px"}}>
                        Catastrophic Flooding in India<br></br>
                        Our partners in India, Child Guidance Center (CGC) and Community and Rural Development Society (CARDS) is working with localsto bring needed relief and comfort to families affected by recent monsoon flooding.
                    </p><br></br>

                    <p className="description" style={{marginLeft: "50px"}}>
                        Our partners, Child Guidance Center (CGC) and Community and Rural Development Society (CARDS), have begun providing essential supplies; such as water, food, blankets, matches, and mosquito coils, to hundreds in desperate need.
                    </p><br></br>


                    <p className="description" style={{marginLeft: "50px"}}>
                        Family members continue to search for missing loved ones, even as they struggle to survive. Many traumatized flood victims are in desperate straits, cut off from the outside world due to damaged roads and bridges. Some have no power, no homes, and no provisions.
                    </p><br></br>

                    <p className="description" style={{marginLeft: "50px"}}>
                        In Adavuladevi village, our partners distributed supplies to about 100 people who had not previously received any relief. They were grateful to have food after 10 days. Similar scenes are occurring in different areas, especially in towns away from the main roads.
                    </p><br></br>


                    <p className="description" style={{marginLeft: "50px"}}>
                        Please support the people affected by the floods, for our partners as they work in this remote rural areas in India.
                    </p>
                    <br></br>
                    <br></br>
                      <TiltCarousel/>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={img} />
                    </div>

                </div> <br></br>
                
                <CtaSection ctaclass={'wpo-cta-area-2'} />
                <Needs />

            </section>
        </>
    );
}

export default DisasterRelief;