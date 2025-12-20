
import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
import "../App";
import img from "../images/icons/Frame 232.png";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection";
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img1 from "../images/icons/Frame 235.svg";
import { useNavigate } from "react-router-dom";
import user from "../images/icons/Vector.svg";
import love from "../images/icons/heart.svg";
import ind from "../images/icons/Frame 242.png";
import emp from "../images/icons/Frame 242-1.png";
import Slider from "react-slick";
import img2 from "../images/icons/Vector.png";
import w1 from "../images/icons/Workplace.svg";
import w2 from "../images/icons/Fund.svg";
import w3 from "../images/icons/Marketing.svg"
import v1 from "../images/icons/email.svg";
import v2 from "../images/icons/mic.png";
import v3 from "../images/icons/host.svg"
import  TiltCarousel from "../components/TiltCarousel"

function GetInvolved() {
  const navigate = useNavigate();

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

  const tags = ["Sponsoring a Child", "Sending a Child to School"];
  const ontime = ["Make a Difference Today", "Occasion Specific Giving"];
  const gift = ["Gift Through Will", "Gifts Outside Will", "Gifts Now"]
  const Volunteering = ["Mission To India", "Medical Mission", "Educational Outreach Programs"]

  const categories = [
    { name: "Sponsorship", special: true },
    { name: "Corporate Partnerships", link: "/corporratepartnerships" },
    { name: "Donation", link: "/ontimegiving" },
    { name: "Legacy Giving", link: "/legacygiving" },
    { name: "Volunteering", link: "/volunteering" },
    { name: "Awareness Programs", link: "/awarenessprograms" },
  ];

  const data = [
    {
      img: w1,
      title: "Workplace Giving",
      desc: `Workplace giving is a simple yet powerful way for employees 
      to assist children through the delivery of essential equipment 
      and services to individual kids and organizations.`,
    },
    {
      img: w2,
      title: "Corporate Fund-raising",
      desc: `Fundraising materials, business supplies, supporter training, 
      and sponsorship of high-profile events helps you reach new audiences 
      and increase brand equity.`,
    },
    {
      img: w3,
      title: "Cause-related Marketing",
      desc: `Partnership between company objectives and our mission delivers 
      real impact to children while engaging staff and customers.`,
    },
  ];



  return (
    <>

      {/* 🌟 HERO SECTION */}
      <div className="program-hero">
        <div className="program-image-box">
          <img src={img1} alt="hero" className="program-image" style={{marginRight: "-94px", marginBottom: "-175px"}} />
        </div>

        <div className="program-content">
          <h1 style={{ color: "#1C191E" }} className="program-title">
            Creating child friendly
            <br /> world, with you!
          </h1>
          <p className="program-desc">
            The solution is now for a bright promising future for
            <br /> these children! Join us to learn about innovative ways
            <br /> supporting education and health care in communities
            <br /> in India.
          </p>
        </div>
      </div>
      <br />
      <br />

      <div className="container text-center what">
        <p className="whatwe">Ways you can be involved</p>
        <h5
          className="mx-auto"
          style={{
            maxWidth: "900px",
            color: "#1C191E",
            fontWeight: "600",
            fontSize: "30px",
            lineHeight: "44px",
            letterSpacing: "2%",
          }}
        >
          Enabling Children by Creating Pathways to <br />
          Opportunity
        </h5>
        <br></br>
        <p>
          There are endless ways that you can raise funds to support children in
          <br /> desperate need. From essential care in India to international
          opportunities,
          <br /> learn how our unique programs are changing lives.
        </p>
        <br />

        <div className="stats-container">
          <button className="icon-btn">
            <img src={user} alt="icon" className="img-icon" />
            <span className="text">10,000+ Supporters</span>
          </button>

          <button className="icon-btn">
            <img src={love} alt="icon" className="img-icon" />
            <span className="text">5,000+ Children Helped</span>
          </button>
        </div>
      </div>

      {/* 🌟 CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <p className="description">
            Ways you can join in the solution:
            <br />
            – Donate to an educational outreach
            <br />
            – Sponsor a student or volunteer’s mission trip to India
            <br />
            – Join us as we share some of the realities in our nation and abroad;
            provide your email and we will notify you of our upcoming information
            meetings
            <br />
            – Improve the lives of children with disabilities around the world
          </p>
          <br />
          <p className="description">
            Children Left Behind can be supported by Individuals, corporations,
            Churches, community groups, friends and well wishers. We accept monetary
            and other donations that will enhance the children education programs and
            humanitarian missions. All gifts are tax deductible.
            <br />
            <br />
            On behalf of the children we serve, Thank you
          </p>
          <br />
          <br />

          <section className="involved-section">
            <div className="involved-container">
              <h2 className="involved-title">Who Can Get Involved</h2>

              <div className="involved-right">
                <div className="involved-item">
                  <img src={ind} alt="Individual"  style={{marginLeft:"-99px", width:"356px", heigth: "210px"}}/>
                  <div style ={{marginLeft: "-86px"}}>
                  <p>Individual</p>
                  </div>
                </div>

                <div className="involved-item">
                  <img src={emp} alt="Corporate Employer" style={{marginLeft:"-210px", width:"480px", heigth: "210px"}} />
                  <div style ={{marginLeft: "-212px"}}>
                  <p>Corporate / Employer</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="category-section container">
            {/* DESKTOP VIEW (no carousel) */}
            <div className="category-desktop"
            style={{ width: "100vw",
    height: "1px",
    background: "#ebebeb",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)"
}}
            >
              <div
                className="category-list"
                style={{
                  display: "flex",
                  gap: "40px",
                  // justifyContent: "center",
                  // alignItems: "center",
                   borderBottom : "1px solid #ebebeb",
            // background : "#ebebeb",
            paddingBottom: "10px",
            width : "100vw",
            // position : "relative",
            // transform : "translate(-50%)",
            left: "50%",
            paddingTop: "10px",
            paddingLeft: "204px"

                }}
              >
                {categories.map((item, i) => (
                  <span
                    key={i}
                    onClick={() => !item.special && navigate(item.link)}
                    className={`cat-item ${item.special ? "special" : ""}`}
                    style={{
                      fontFamily: "Work Sans",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "16px",
                      lineHeight: "18px",
                      textAlign: "center",
                      cursor: "pointer",
                      color: "#1C191E",
                    }}
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
          <br />

          <h4
            style={{
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "2%",
            }}
            className="sub-title"
          >
            Helping a Child
          </h4>

          <div className="d-flex flex-wrap mt-4 gap-2">
            {tags.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 small d-flex align-items-center"
                style={{
                  fontSize: "12px",
                  border: "2px solid #7D7188 ",
                  borderRadius: "5px",
                  gap: "6px",
                  color: "#7D7188",
                }}
              >
                <img
                  src={img2}
                  alt="check"
                  style={{ width: "14px", height: "14px", objectFit: "contain" }}
                />
                {item}
              </span>
            ))}
          </div>
          <br />

          <div className="buttons_container">
            <button
              style={{
                gap: "6px",
                padding: "10px 16px",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#832AD1",
                backgroundColor: "#F8F0FF",
                cursor: "pointer",
                opacity: 1,
                fontFamily: "Work Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "18px",
                textAlign: "center",
                color: "#832AD1",
              }}
            >
              Sponsor now
            </button>
          </div>
          <br />

          <p className="description">
            We are seeing how the promise and hope for a better future through
            education is becoming a reality as we work with at-risk children in the
            United States and developing world nations. We believe in the value of
            education to “open doors” for a new way of life for children and youth
            all around the globe.
            <br />
            Every day men, women, and children are trafficked for sex, or forced into
            labor and/or begging worldwide. Their hearts are crying out for rescue
            from poverty, abuse and bondage. Children Left Behind is committed to
            respond to their cry and be an advocate for this very real need.
            <br />
            <br />
            You too, can be a part of the transformation that education provides in a
            child’s life by giving them a fresh start and a confident hope for a
            better future! Join us in being a part of the solution.
            <br />
            <br />
            For a monthly donation of $35 you can send a child to school for a year.
            The profile of a child who will go to school because of you will be sent
            to you within two weeks.
            <br />
            <br />
            COST
            <br />
            $35 a month goes a long way in many parts of the world, including India.
            Just $35 a month or $500 a year provides a child in need with food,
            shelter, clothing, healthcare, education and a chance for your sponsored
            child to succeed. While your contribution may be measured in dollars, your
            impact on a child’s life is priceless.
            <br />
            <br />
            <br />
            The profound and long-term life-changing difference your donation and
            support makes to a child and their family cannot be overstated. Individuals
            and companies can help children by supporting or partnering with Children
            Left Behind.
          </p><br /><br />
          <h2
            style={{
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "2%",
            }}
            className="sub-title"
          >
            Corporate Partnership
          </h2>
          <h2 className="corporate-des">
            Ranging from corporate volunteering at a local level, workplace giving<br /> programs to multi-faceted sponsor and partner programs. Here are some<br /> ways your company can be involved
            <br /></h2><br />

          <div className="buttons_container">
            <button
              style={{
                gap: "6px",
                padding: "10px 16px",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#832AD1",
                backgroundColor: "#F8F0FF",
                cursor: "pointer",
                opacity: 1,
                fontFamily: "Work Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "18px",
                textAlign: "center",
                color: "#832AD1",
                width: '200px',
                height: '36px'
              }}
            >
              Get in Touch
            </button>
          </div>


          <div className="three-sections">

            {/* Box 1 */}
            <div className="section-box">
              <img style={{ height: '130px' }}
                className="img-one"
                src={w1}
                alt="Workplace Giving"
              /><br /><br />
              <h3>Workplace Giving</h3><br />
              <p>
                Workplace giving is a simple yet powerful way for employees to assist children through the delivery of essential equipment and services to individual kids and children’s organizations. Once established, workplace giving provides the company, employees and Children Left Behind a low-cost, low-maintenance way to support children
              </p>
            </div>

            {/* Box 2 */}
            <div className="section-box">
              <img style={{ height: '130px' }}
                className="img-two"
                src={w2}
                alt="Corporate Fund-raising"
              /><br /><br />
              <h3>Corporate Fund-raising</h3><br />
              <p>
                fundraising materials, staff and supporter training, business supplies, advertising and marketing through to sponsoring one of Children Left Behind’s high profile events or iconic corporate functions. Sponsorship delivers a positive image to your company, helps you reach a new audience, increases brand awareness, motivates staff and customers and grows your brand equity.
              </p>
            </div>

            {/* Box 3 */}
            <div className="section-box">
              <img style={{ height: '130px' }}
                className="img-three"
                src={w3}
                alt="Cause-related Marketing"
              /><br /><br />
              <h3>Cause-related Marketing</h3><br />
              <p>
                Bringing marketing objectives of a company and the objectives of Children Left Behind to form a mutually beneficial partnership. This partnerships provide a unique selling point, engage staff and customers and brand equity while delivering a very real difference to children in your community.
              </p>
            </div>
          </div><br />

          <h2
            style={{
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "2%",
            }}
            className="sub-title"
          >
            One-Time Giving
          </h2>

          <div className="d-flex flex-wrap mt-4 gap-2">
            {ontime.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 small d-flex align-items-center"
                style={{
                  fontSize: "12px",
                  border: "2px solid #7D7188 ",
                  borderRadius: "5px",
                  gap: "6px",
                  color: "#7D7188",
                }}
              >
                <img
                  src={img2}
                  alt="check"
                  style={{ width: "14px", height: "14px", objectFit: "contain" }}
                />
                {item}
              </span>
            ))}
          </div><br />
          <p>One-Time giving is a way to help children in the partnering organizations through single donation. This option entails not only for the make a difference aspect but as well for the event based, where your funds are offered on your special occasions like birthday or In the loving memory of your family member or any other events</p><br />

          <div className="buttons_container">
            <button
              style={{
                gap: "6px",
                padding: "10px 16px",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#832AD1",
                backgroundColor: "#F8F0FF",
                cursor: "pointer",
                opacity: 1,
                fontFamily: "Work Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "18px",
                textAlign: "center",
                color: "#832AD1",
                width: '200px',
                height: '36px'
              }}
            >
              Donate now
            </button>
          </div><br /><br />
          <h2
            style={{
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "2%",
            }}
            className="sub-title"
          >
            Legacy Giving
          </h2>

          <div className="d-flex flex-wrap mt-4 gap-2">
            {gift.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 small d-flex align-items-center"
                style={{
                  // backgroundColor:'#F8F0FF',
                  fontSize: "12px",
                  border: "1px solid #832AD1 ",
                  borderRadius: "5px",
                  gap: "6px",
                  color: "#7D7188",
                }}
              >
                <img
                  src={img2}
                  alt="check"
                  style={{ width: "14px", height: "14px", objectFit: "contain" }}
                />
                {item}
              </span>
            ))}
          </div><br />
          <div className="buttons_container">
            <button
              style={{
                gap: "6px",
                padding: "10px 16px",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#832AD1",
                backgroundColor: "#F8F0FF",
                cursor: "pointer",
                opacity: 1,
                fontFamily: "Work Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "18px",
                textAlign: "center",
                color: "#832AD1",
                width: '200px',
                height: '36px'
              }}
            >
              Get in Touch
            </button>
          </div><br />

          <p>Gifts and services in-kind are a vital element in enabling Children Left Behind to meet its vision and mission. Gifts of auction and raffle prizes for events, business skills such as legal or accountancy advice or technology and office items are all necessary to successfully deliver Children Left Behind’s vision and mission</p><br />
          <p>By making charitable bequests or other “planned gifts,” you can leave an important legacy of caring that endures. Many people choose to leave a charity in their will because they want to support important causes. There are many of advantages to making a legacy gift to the Children Left Behind. Your gift will provide a child in need with food, a home, healthcare, education and a chance to succeed that would not be available to them with our your gift. While your gift may be measured in dollars, your impact on a child’s life is priceless. All gifts are tax deductible</p>
          <p>Different gifts may benefit you in different ways. Find the perfect charitable bequest plan that meets your financial needs and fulfills your charitable interests:</p>
          <li>Gifts Through Your Will – Remembering the Children Left Behind in your will can help you reduce estate taxes and ensure the work you care about will always continue.</li><br />
          <li>Gifts Outside Your Will – Help our mission even faster by making a gift that avoids probate. Just name the Children Left Behind as beneficiary on appreciated securities, retirement plans, insurance policies or real estate</li><br />
          <li>Gifts Now – Save on your current income taxes, and possibly reduce or eliminate estate tax and probate expenses when you make a gift to the Children Left Behind today.</li><br /><br />
          <h2
            style={{
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "2%",
            }}
            className="sub-title"
          >
            Volunteering
          </h2>

          <div className="d-flex flex-wrap mt-4 gap-2">
            {Volunteering.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 small d-flex align-items-center"
                style={{
                  // backgroundColor:'#F8F0FF',
                  fontSize: "12px",
                  border: "1px solid #7D7188",
                  borderRadius: "5px",
                  gap: "6px",
                  color: "#7D7188",
                }}
              >
                <img
                  src={img2}
                  alt="check"
                  style={{ width: "14px", height: "14px", objectFit: "contain" }}
                />
                {item}
              </span>
            ))}
          </div><br />

          <p>
            Most often children are exploited because their families are poor and without education.<br /><br />

            Many of these families do not value education or see a need to educate their children. If the child is in school, they can’t be on the streets working to make money for the family. Our team works with established non-government organizations (NGOs) already working in these areas with local families to try to get them to enroll their children in school. We work hand-in-hand with these organizations to provide academic programming, on-site training, and reading, writing and math camps to educate these at-risk children, many of whom are unschooled, to help prepare them to enter a school setting successfully.<br /><br />

            If you are interested in supporting our Educational Outreach Program for a one-time donation or partnering with us monthly, donations can be sent to Children Left Behind, a registered U.S non-profit organization. Donations are eligible to receive a tax deduction and can be made by credit card or check.

          </p>

          <div className="buttons_container">
            <button
              style={{
                gap: "6px",
                padding: "10px 16px",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#832AD1",
                backgroundColor: "#F8F0FF",
                cursor: "pointer",
                opacity: 1,
                fontFamily: "Work Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "18px",
                textAlign: "center",
                color: "#832AD1",
                width: '200px',
                height: '36px'
              }}
            >
              Get in Touch
            </button>
          </div><br /><br />

          <h2
            style={{
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "2%",
            }}
            className="sub-title"
          >
            Bring Awareness to the Cause
          </h2><br />


          <div className="buttons_container">
            <button
              style={{
                gap: "6px",
                padding: "10px 16px",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#832AD1",
                backgroundColor: "#F8F0FF",
                cursor: "pointer",
                opacity: 1,
                fontFamily: "Work Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "18px",
                textAlign: "center",
                color: "#832AD1",
                width: '200px',
                height: '36px'
              }}
            >
              Get in Touch
            </button>
          </div>


          <div className="three-sections">

            {/* Box 1 */}
            <div className="section-box">
              <img style={{ height: '130px' }}
                className="img-one"
                src={v1}
                alt="Workplace Giving"
              /><br /><br />
              <h3>Invite</h3><br />
              <p>
                If you would like to invite one of our Children Left Behind board members to speak to your group about the Children’s Homes, issues. We have board members in the United States, all of whom have firsthand experience with visiting India and staying at the Children’s Homes.<br /><br />

                If time schedules permit, and you are near these areas, we may be able to speak at your event!
              </p>
            </div>

            {/* Box 2 */}
            <div className="section-box">
              <img style={{ height: '130px' }}
                className="img-two"
                src={v2}
                alt="Corporate Fund-raising"
              /><br /><br />
              <h3>Spread the word</h3><br />
              <p>
                We would love for you to tell your friends about what we’re doing at Children Left Behind. Spread the word through social media outlets, talk to your class about it, and continue to stay informed about what we’re up to in India.
              </p>
            </div>

            {/* Box 3 */}
            <div className="section-box">
              <img style={{ height: '130px' }}
                className="img-three"
                src={v3}
                alt="Cause-related Marketing"
              /><br /><br />
              <h3>Event Host</h3><br />
              <p>
                To raise funds and/or awareness about the Children’s Homes. Raising support for a specific project occurring at the homes, raising awareness about children that still need sponsors, or creating your own event to inform people about our organization are all ways that you can get involved with hosting.
              </p>
            </div>
          </div><br />
           <TiltCarousel/>

<br></br>
<br></br>
<br></br>

          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <img src={img} alt="banner" style={{ width: "100%" }} /> */}
          </div>
        </div>

        <CtaSection ctaclass={"wpo-cta-area-2"} />
        <Needs />
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default GetInvolved; 
