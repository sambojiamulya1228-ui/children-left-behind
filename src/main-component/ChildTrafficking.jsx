import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection";
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img from "../images/icons/Frame 232.png";
import img1 from "../images/icons/Programs.svg";

function ChildTrafficking() {
  const navigate = useNavigate();

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
          <h1 style={{ color: "#1C191E" }} className="program-title">
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
      </div>

      <div style={{ padding: "50px" }}>
        <p>
          We are committed to educating the families of children with disabilities
          and teaching families how to deal with and care for the child along with
          providing equipment or other essentials to meet the child’s needs. Many
          children have wide-ranging but treatable and often preventable medical
          problems. Almost none have a formal education, or any prospect of
          vocational opportunities.
        </p>
      </div>

      {/* 🌟 SCROLL MENU SECTION */}
      <section style={{ width: "100%", overflow: "hidden", padding: "0", background: "#fff" }}>
        <style>{`
          @keyframes autoScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scroll-box {
            animation: autoScroll 20s linear infinite;
            display: flex;
            white-space: nowrap;
            align-items: center;
            gap: 20px;
          }
        `}</style>

        <hr />

         
                  <div className="scroll-box">


                    <span onClick={() => navigate("/education")} style={{
                        background: "#F2E5FF",
                        color: "#7A3CFF",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Education</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/midical")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Medical campaigns</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/disability")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>
                        Supporting the disabled
                    </span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/tripofindia")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Mission to India</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/childtraffic")} style={{
                        background: "#F2E5FF",
                        color: "#7A3CFF",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Act for child protection</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/nurturingplaytime")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Nurturing playtime</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/disasterrelief")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Disaster relief</span>

                    {/* DUPLICATE FOR INFINITE LOOP */}
                    <span onClick={() => navigate("/education")} style={{
                        background: "#F2E5FF",
                        color: "#7A3CFF",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Education</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/medical")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Medical campaigns</span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span  onClick={() => navigate("/disability")} style={{ color: "#444", cursor: "pointer", gap: '12px' }} >Supporting the disabled </span>
                    <span style={{ color: "#ccc", fontSize: "20px", gap: '12px' }}></span>

                    <span onClick={() => navigate("/tripofindia")} style={{ color: "#444", cursor: "pointer", gap: '12px' }}>Mission to India</span>

                </div>

        <hr />
      </section>

      {/* 🌟 CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <h2 style={{ fontWeight: "600", fontSize: "32px", lineHeight: "40px", letterSpacing: "2%" }} className="sub-title mt-5">
            Act for child protection
          </h2>
          <br />
          <p className="description">
            Children Trafficking in India<br />
            What causes children trafficking? <br /><br />

            Poverty, especially among women<br />
            A lack of political, social and economic stability<br />
            A lack of reasonable and realistic prospects<br />
            Situations of armed conflict and oppression<br />
            Domestic violence and disintegration of the family structure<br />
            Lack of access to education and information<br />
            You may have never considered that people can be for sale in today’s world – but it’s absolutely true. And those who are at greatest risk of losing their freedom are often those least able to defend themselves: children. Many of the children we’ve encountered in various countries are children who live or work on the streets and have no one to protect them and are subject to both sexual and financial exploitation as well as the dangers of drugs, rape, violence, HIV/AIDS, and poverty.<br /><br />

            Children Left Behind is helping children who have no place else to turn – children who are all alone, on the edge of survival. These children desperately need help and hope.<br /><br />

            Over population is one of the biggest challenges children in India face today. The Government struggles to provide healthcare and education to a growing number of children coming from disadvantaged backgrounds, making them vulnerable to abuse and neglect, and a life in poverty.<br /><br />

            Children Left Behind strives to help children around the world overcome the burdens of poverty to become healthy, educated, self-sustaining and contributing members of society. This goal is achieved primarily through child sponsorship, which unites children in the need with individual sponsors who wish to address the children’s immediate and basic needs, and gives them the tools and opportunities necessary for success.<br /><br />

            Violence<br />
            How to Stop Abuse and Exploitation
          </p>
          <br /><br />
          <p className="description">
            Violence against children happens everywhere, every day. To stop it, Children Left Behind fights to return children to civilian life and helps them rebuild their lives; supports safe haven shelters that care for street kids; trains and funds child protection teams to patrol areas where children are trafficked; develops innovative programs like Safe and Friendly Cities and Safe Schools; and supports groundbreaking national surveys to document the prevalence of violence against girls and boys and help governments build better protection systems.
          </p>

          <img style={{ width: "100%" }} src={img} alt="Child Trafficking" />
        </div>
        <br />
        <BlogSection />
        <CtaSection ctaclass={"wpo-cta-area-2"} />
        <Needs />
      </section>
    </>
  );
}

export default ChildTrafficking;
