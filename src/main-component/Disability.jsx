import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
// import "../css";
import "../App"
import img from "../images/icons/Frame 232.png"
function Disability() {
    return (
        <>
            {/* 🌟 HERO SECTION */}
            <section className="hero-section">
                <Header />
                <div className="hero-overlay"></div>
                <img src={heroImg} alt="Hero" className="hero-bg" />
            </section>

            <div
                style={{
                    width: "100%",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    paddingLeft:'30px'
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "30px",
                        padding: "10px 15px",
                        alignItems: "center"
                    }}
                >
                    <span
                        style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap"
                            
                        }}
                    >
                        Education
                    </span>

                    <span style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}>
                        Medical campaigns
                    </span>

                    <span style={{backgroundColor: "#F2E5FF",
                            color: "#7A3CFF",
                            padding: "6px ",
                            borderRadius: "20px",
                            cursor: "pointer",
                            whiteSpace: "nowrap" }}>
                        Supporting the disabled
                    </span>

                    <span style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}>
                        Mission to India
                    </span>

                    <span style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}>
                        Act for child protection
                    </span>
                    
                    <span style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}>
                        Nurturing playtime
                    </span>
                    
                    <span style={{ color: "#444", cursor: "pointer", whiteSpace: "nowrap" }}>
                        Disaster relief
                    </span>
                </div>
            </div>


            {/* 🌟 CONTENT SECTION */}
            <section className="content-section">
                <div className="container">
                    {/* <h2 style={{ textAlign: 'center' }} className="title">Child Guidance Centre (CGC)</h2> */}

                    {/* <p className="description">
                        we are committed to educating the families of children with disabilities and teaching families how to deal with and care for the child along with providing equipment or other essentials to meet the child’s needs. Many children have wide-ranging but treatable and often preventable medical problems. Almost none have a formal education, or any prospect of vocational opportunities.
                    </p> */}



                    {/* <h3 className="sub-title">Educational Outreach</h3>
                    <p className="description">
                        We have partnered with local educators, colleges, and universities in Southwest Virginia to serve through our sister children’s organizations and through the schools’ established educational institutions in India.
                        Educational Outreach and Mission Trips to India: During our Educational Outreach, we visit schools in India and volunteer our skills and expertise in areas where foreign visitors are allowed. We believe it is very timely and important for us to serve the schools in South India.<br></br>
                        We are seeing how the promise and hope for a better future through education is becoming a reality as we work with at-risk children in the United States and developing world nations. We believe in the value of education to “open doors” for a new way of life for children and youth all around the globe. Every day men, women, and children are trafficked for sex, or forced into labor and/or begging worldwide. Their hearts are crying out for rescue from poverty, abuse and bondage. Children Left Behind is committed to respond to their cry and be an advocate for this very real need. You too, can be a part of the transformation that education provides in a child’s life by giving them a fresh start and a confident hope for a better future! Join us in being a part of the solution.
                    </p> */}

                    {/* <h3 className="sub-title">Medical campaigns</h3>
                    <p className="description">
                        Children in developing countries suffer from many diseases that may be prevented with proper medical care and preventive medicine. Children Left Behind’s mission is to provide medical care and education to children and their families in developing countries.<br></br> <br></br>

                        Children in developing countries suffer from many diseases that may be prevented with proper medical care and preventive medicine. Children Left Behind’s mission is to provide medical care and education to children and their families in developing countries.<br></br><br></br>

                        Children Left Behind has partnered with Child Guidance Center in the states of Andhra Pradesh and Telangana, India, to help provide assistance with medical needs. Child Guidance Center provides special schools for children with mental and physical disabilities.<br></br><br></br>

                        Most commonly seen disabilities and disorders are intellectual disability (mild, moderate, and severe), autism, epilepsy, ADHD, cerebral palsy, Down’s syndrome, and malnutrition, just to mention a few.
                    </p> */}

                    {/* <p className="description">
                        Children Left Behind is working hard to increase resources through donations, supplies, and medical education.
                        These resources assist in addressing the needs of children suffering from lack of medical resources.
                    </p> */}
                    {/* <p>
                        Some of the educational needs are:
                    </p> */}
                    {/* <ul className="project-list">
                        <li>Prenatal care and pregnancy education</li>
                        <li>Causes and prevention of disabilities</li>
                        <li>Preventive medicine and immunization</li>
                        <li>Infection and intoxication</li>
                        <li>Epilepsy</li>
                        <li>First Aid & CPR</li>
                        <li>Genetics and genetic counseling</li>
                        <li>ADHD (Attention Deficit Hyperactivity Disorder)</li>
                        <li>Mental Illness</li>
                        <li>Fragile X Syndrome</li>
                        <li>Down’s Syndrome</li>
                        <li>Hydrocephaly</li>
                        <li>Cretinism</li>
                        <li>Progressive metabolic disorders</li>
                        <li>HIV & AIDS</li>
                    </ul> */}

                    <h2 className="sub-title mt-5">Supporting Disabled Children</h2>
                    <p className="description">
                        Children Left Behind is actively involved in improving the lives and education of children with intellectual and physical disabilities in developing countries.<br></br> <br></br>
                        Often in developing countries it is believed that having a disability is due to a curse or karma, and those with disabilities are often hidden or shunned from society.<br></br><br></br>
                        Through partnership with existing local social service entities, facility administrators and other charitable organizations, Children Left Behind helps to assess and meet the many needs and challenges facing these children. Children Left Behind believes that every child is precious and deserves the best possible opportunities in life<br></br><br></br>
                        Children Left Behind also recognizes the need for expanding community awareness and inclusion in these countries in order to promote more supported home based services, employment opportunities and day treatment programs. With appropriate intervention, education and resources provided to families, many children with disabilities will be able to live and function within the context of their own families and communities </p>
                    {/* </p> */}
                    <p>
                        The Need<br></br>
                        In developing countries around the World, families of children with special needs often do not have the ability or resources to care for them at home. Many of these children are then placed in under-staffed, overcrowded and under-funded orphanages and other residential facilities. Children with Down’s syndrome, autism, cerebral palsy and other disabilities are often isolated in these environments, receiving only minimal care and attention. There is a great need for special education services, physical, occupational and speech therapy, medical care and vocational training. When these needs are not addressed, many children with special needs in these countries cannot thrive or reach their full potential.
                    </p>
                    <p>
                        Children Left Behind Provides:<br></br>
                        Special Education services through the Child Guidance Center Schools* in Andhra Pradesh and Telangana States in South India <br></br>
                        Adaptive wheelchairs, educational and recreational equipment, sensory toys Building materials for ongoing facility<br></br> improvements Volunteer teams who provide special education, occupational therapy, medical care, and caregiver<br></br> assistance <br></br>
                        Volunteer teams that assist with maintenance and building projects<br></br>
                        Support and encouragement to facility administrators and staff<br></br>
                        Direct financial support which contributes to utility expenses, building materials, clothing and diapers<br></br>
                        Housing <br></br><br></br>

                        * The Child Guidance Center encompasses 14 boarding schools for children with disabilities, providing lodging and meals as well as medical care and education appropriate to the ability of each student. A 15th boarding school is currently under construction. See the Partnerships page for details.
                    </p>
                    <div>
                        <img style={{ width: '100%' }} src={img} />
                    </div> <br></br>



                    {/* <h2 className="sub-title mt-5">Medical Mission Opportunities</h2>
                    <p className="description">
                        Children Left Behind’s goal is to put together teams of medical professionals, students, and volunteers to make medical mission trips to India.<br></br><br></br>

                        These mission trips provide medical assistance and education to children and families in need. There are many needs in this area; medical mission trips will provide a rewarding and fulfilling experience for those involved.<br></br><br></br>

                        Contact us if you are interested in volunteering to help be a part of our Medical Outreach program.

                    </p> */}

                    {/* <h2 className="sub-title mt-5">Act for child protection</h2>
                    <p className="description">
                        Children Trafficking in India<br></br>
                        What causes children trafficking? <br></br><br></br>

                        Poverty, especially among women<br></br>
                        A lack of political, social and economic stability<br></br>
                        A lack of reasonable and realistic prospects<br></br>
                        Situations of armed conflict and oppression<br></br>
                        Domestic violence and disintegration of the family structure<br></br>
                        Lack of access to education and information<br></br>
                        You may have never considered that people can be for sale in today’s world – but it’s absolutely true. And those who are at greatest risk of losing their freedom are often those least able to defend themselves: children. Many of the children we’ve encountered in various countries are children who live or work on the streets and have no one to protect them and are subject to both sexual and financial exploitation as well as the dangers of drugs, rape, violence, HIV/AIDS, and poverty.<br></br><br></br>

                        Children Left Behind is helping children who have no place else to turn – children who are all alone, on the edge of survival. These children desperately need help and hope.<br></br><br></br>

                        Over population is one of the biggest challenges children in India face today. The Government struggles to provide healthcare and education to a growing number of children coming from disadvantaged backgrounds, making them vulnerable to abuse and neglect, and a life in poverty.<br></br><br></br>

                        Children Left Behind strives to help children around the world overcome the burdens of poverty to become healthy, educated, self-sustaining and contributing members of society. This goal is achieved primarily through child sponsorship, which unites children in the need with individual sponsors who wish to address the children’s immediate and basic needs, and gives them the tools and opportunities necessary for success.<br></br><br></br>

                        Violence<br></br>
                        How to Stops Abuse and Exploitation<br></br>

                        Violence against children happens everywhere, every day. To stop it, Children Left Behind fights to return children to civilian life and helps them rebuild their lives; supports safe haven shelters that care for street kids; trains and funds child protection teams to patrol areas where children are trafficked; develops innovative programs like Safe and Friendly Cities and Safe Schools; and supports groundbreaking national surveys to document the prevalence of violence against girls and boys and help governments build better protection systems.</p>

                    <h2 className="sub-title mt-5">Medical Mission Opportunities</h2>
                    <p className="description">
                        When natural disasters strike parents often leave children behind as orphans or render families homeless. Children Left Behind provides children and their families’ food, clothing and basic supplies to help them cope and begin to rebuild their lives.<br></br><br></br>

                        $25 helps provide basic sanitation such as toilets and temporary hand washing stations.<br></br>
                        $50 helps feed a family with food such as rice, Oil, Vegetables and cooking oil for a week.<br></br>
                        $100 helps provide basic medical supplies for a partner to treat up to 50 patients.<br></br>
                        $500 helps provide critical life items like temporary shelter, blankets and clothing for 10 families.<br></br>
                        Any amount you choose to offer would provide critical relief for all those in dire need.<br></br><br></br>

                        International Emergency Relief<br></br>
                        Children Left Behind responds quickly to bring relief to people in need. One way we help in disaster situations is by handing out “family survival kits” that include warm blankets, buckets with water filters, cooking utensils, soap, and other daily essentials. For just $45, we can provide a lifeline to a family that has lost everything, to help them get back on their feet.<br></br><br></br>

                        Helping families in India After Cyclone<br></br>
                        Devastated by powerful Phailin, families along India’s eastern coast receive relief from our local partners.<br></br><br></br>

                        Our partners in India, Child Guidance Center (CGC) and Community and Rural Development Society (CARDS) recently provided emergency relief through our local partners in India to several hundred families affected by Cyclone Phailin, which pounded India’s eastern coast on October 12.<br></br> <br></br>

                        The country’s most powerful cyclone in 14 years, the storm, packed winds of more than 120 miles per hour resulted in landfall in Odisha (formerly Orissa) state. There were relatively few casualties, but there likely would have been more deaths had not approximately 1 million people moved to shelters and government buildings in anticipation of the storm—the largest evacuation in India’s history. Nonetheless, winds and floods left 600,000 people homeless and many thousands marooned.<br></br><br></br>

                        Our partners distributed relief packages in few areas of states of Odisha and Andhra Pradesh. Families received 55 pounds of food items, enough to sustain four people for 15 days. Rice, Vegetables, tea, cooking oil, curry powders, mosquito repellant, a bathing bucket, and sugar were among the staple cooking items included in the packages.<br></br><br></br>

                        Parts of Odisha were severely damaged by Phailin’s fury, making accessibility a greatdifficulty. Roads were badly damaged to the extent that one of the relief trucks met with an accident. In one of the areas, many mud homes had collapsed walls and roofs while in other villages, houses were completely washed away.
                        “It was some of the most impoverished places we’ve ever been,” said a team member. Some beneficiaries cried with relief as they gratefully received the staples. <br></br><br></br>

                        Food Delivered to Flood Victims in India <br></br>
                        Our partners in India, Child Guidance Center (CGC) and Community and Rural Development Society (CARDS) are providing emergency food packets and other relief measures to victims of the historic floods.<br></br> <br></br>

                        The worst flood in over 100 years, it has taken the lives of hundreds and left tens of thousands stranded in southern India. <br></br> <br></br>

                        Chennai, the country’s fourth largest city, received over a foot of rain in one day, which is higher than their average for the whole month. <br></br> <br></br>

                        Our partners have responded supplying emergency food to more than 20,000 flood victims.<br></br> <br></br>

                        The help provided through Child Guidance Center (CGC) and Community and Rural Development Society (CARDS)has been of great relief to the people suffering in rural areas who had very little to begin with. <br></br> <br></br>

                        Child Guidance Center (CGC) and Community and Rural Development Society (CARDS) will be providing more aid to thousands of flood victims. The aid would be in the form of basic household goods like vessels, bed sheets, dishes, etc. Assistance would also be provided to them in the repair work of their homes.<br></br> <br></br>

                        We are grateful to our partnersfor helping the victims in India during emergency crisis.<br></br> <br></br>

                        Catastrophic Flooding in India<br></br>
                        Our partners in India, Child Guidance Center (CGC) and Community and Rural Development Society (CARDS) is working with localsto bring needed relief and comfort to families affected by recent monsoon flooding.<br></br> <br></br>

                        Our partners, Child Guidance Center (CGC) and Community and Rural Development Society (CARDS), have begun providing essential supplies; such as water, food, blankets, matches, and mosquito coils, to hundreds in desperate need. <br></br> <br></br>

                        Family members continue to search for missing loved ones, even as they struggle to survive. Many traumatized flood victims are in desperate straits, cut off from the outside world due to damaged roads and bridges. Some have no power, no homes, and no provisions. <br></br> <br></br>

                        In Adavuladevi village, our partners distributed supplies to about 100 people who had not previously received any relief. They were grateful to have food after 10 days. Similar scenes are occurring in different areas, especially in towns away from the main roads.<br></br> <br></br>

                        Please support the people affected by the floods, for our partners as they work in this remote rural areas in India.

                    </p>


                    <h2 className="sub-title mt-5">Disaster relief</h2>
                    <p className="description">
                        When natural disasters strike parents often leave children behind as orphans or render families homeless. Children Left Behind provides children and their families’ food, clothing and basic supplies to help them cope and begin to rebuild their lives<br></br><br></br>

                        $25 helps provide basic sanitation such as toilets and temporary hand washing stations.<br></br>
                        $50 helps feed a family with food such as rice, Oil, Vegetables and cooking oil for a week.<br></br>
                        $100 helps provide basic medical supplies for a partner to treat up to 50 patients.<br></br>
                        $500 helps provide critical life items like temporary shelter, blankets and clothing for 10 families.<br></br>
                        Any amount you choose to offer would provide critical relief for all those in dire need.<br></br>

                        Contact us if you are interested in volunteering to help be a part of our Medical Outreach program.<br></br><br></br>

                    </p> */}


                </div>
            </section>
        </>
    );
}

export default Disability;