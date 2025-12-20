import React from "react";
import PavaniLogo from "../images/icons/pavani-logo.png";
import Header from "../components/header";
import LeftBG from "../images/icons/pavani-left.png";
import RightBG from "../images/icons/pavani-right.png";
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import PartnersEst from "../components/partnersEst";
// import "../css";
import "../App"
function Pavani() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 768);
        checkScreen();

        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);
    return (
        <>
           <div className="pavani-wrapper container">
      {/* Background Illustrations */}
      <img src={LeftBG} alt="" className="pavani-left" />
      <img src={RightBG} alt="" className="pavani-right" />

      <div className="pavani-content">
        <img src={PavaniLogo} alt="Pavani School" className="pavani-logo" />

        <h1 className="pavani-title">Pavani Special School</h1>

        <p className="pavani-description">
          endeavors to provide children with mental disabilities and hearing
          impairment with basic life skills that enrich their quality of life
          and also strives to equip them with the requisite skills to gain
          employment through vocational education.
        </p>
      </div>
    </div>


            <section className="content-section">
                <div className="container">
                    <PartnersEst />
                    <div className="p-6 space-y-6 leading-relaxed text-gray-800">
                        <h5 className="sub-title">   VISION</h5>
                        <p className="description">
                            To empower children with intellectual disabilities and hearing impairments by providing quality education, skill development, therapeutic interventions, and pathways to independent and dignified living.
                        </p><br></br>

                        <h5 className="sub-title">  MISSION</h5>
                        <p className="description">
                            o equip children with disabilities with essential life skills for improved quality of life.
                            To provide vocational training that enhances livelihood opportunities.
                            To create employment pathways through advocacy, capacity-building, and partnerships with government bodies, corporate entities, NGOs, and philanthropic organizations
                        </p><br></br>

                        <h5 className="sub-title">Purpose</h5>
                        <p className="description">
                            To empower mentally challenged children with life skill education.
                            To impart vocational education and enhance livelihood skills through job oriented courses.
                            To ensure placements and self-employment avenues through advocacy and networking with government departments, corporate, NGOs and philanthropists.
                            Pavani’s Key Services:
                        </p><br></br>



                        <h5 className="sub-title">Background</h5>
                        <p className="description">
                            Pavani Special School endeavors to provide children with mental disabilities and hearing impairment with basic life skills that enrich their quality of life and also strives to equip them with the requisite skills to gain employment through vocational education.<br></br><br></br>

                            Presently there are 130 students comprising of both categories i.e., mental disability and hearing impairment. Pavani Special School is primarily a day school and does not have hostel facility. The teaching and non-teaching staff is experienced, dedicated, qualified and well trained in Special Education for both categories of students. The caring, nurturing environment that surrounds the children ensures an effective learning process. Pavani Special School is empowering the mentally disabled and hearing impaired students from all corners of the city of Visakhapatnam by engaging the students in therapeutic and skill-building activities.<br></br><br></br>

                            The Special School is receiving 70% grant in aid from the Ministry of Social Justice and Empowerment, Government of India since 2000. The Special School is forever grateful and indebted to the several institutions, philanthropists, officials, people representatives and parents of the special children who have extended support to the noble cause over the past 26 years.

                            The founders and members of Pavani Special School (PIMHANS) hope to receive the same continued support in the future as well.

                        </p>

                        <h5 className="sub-title">  Programs </h5><br></br>
                        <p className="description">
                            <p>
                                Free education and institutional training<br></br>
                                Physiotherapy<br></br>
                                Behavioral Modification<br></br>
                                Speech Therapy<br></br>
                                Psychological evaluation and counseling<br></br>
                                Yoga Sessions<br></br>
                                Dance Therapy<br></br>
                                Parent Counseling
                            </p>
                        </p><br></br>

                        <p>
                            Vocational Education<br></br><br></br>

                            The special children are gifted in many ways, it is the responsibility of any organization working for their cause to identify their strengths and channelize them in the right directions. It is by providing them with the necessary skills and training that livelihood opportunities can be created and thereby brings about a significant difference in their lives. Therefore strong emphasis is being laid to impart vocational education and enhance livelihood skills through job oriented courses. It will be a endeavor to ensure to ensure placements and self-employment avenues through advocacy and networking with government departments, corporate, NGOs and philanthropists.
                        </p><br></br>

                        <p>

                            Computer Education<br></br><br></br>

                            Teaching computer basics to the special kids opens a window to a world of opportunities. Introduction to MS Word, Excel, and Paint etc., has become a part of their curriculum with classes being conducted thrice a week. The boys and girls from the hearing impaired section are showing keen interest and are very much engrossed with the hands on training.
                        </p><br></br>
                        Our sincere thanks to Knoah Solutions, Hyderabad for donating four desk top systems for the school<br></br><br></br>

                        <p>
                            Tailoring<br></br><br></br>

                            Tailoring has conventionally been a popular job oriented course. The girls show great enthusiasm during the classes. Not to mention, it requires minimum capital to start a business of their own as the tailoring job works are ideal for ‘work from home’.

                        </p> <br></br>
                        <p>
                            Phenyl and Candle Making<br></br><br></br>

                            Phenyl and candle making is also being encouraged amongst the students and the activity receives great response especially from the children with mental disabilities. These children show a lot of interest in such group activities and adapt well to put their limited skills to satisfactory results.
                        </p><br></br><br></br>

                        <p>
                            Special Summer Camp for Special Kids<br></br><br></br>

                            A two week ling summer camp was organized for the special kids at the Pavani School campus. The summer camp was designed as a curtain raiser for the proposed vocational courses that were planned to be introduced for the new academic year. Special classes were held for the students held for the students in Computer Basics, Beautician Skills and Tailoring. Students participated with great enthusiasm and took keen interest in learning the basics of each course. The girls took special interest towards gaining exposure in the beautician skills and tailoring. Whereas the boys had an engrossing two weeks with hands on training on computer basics.
                        </p><br></br><br></br>

                        <p>
                            Money Management- Consumer Store<br></br><br></br>

                            In order to acquaint and familiarize the special kids with money management in their everyday lives the school has set up a consumer store. Children are encouraged to purchase stationary and snacks to understand the process of money exchange. The consumer store is managed by the special students themselves.<br></br><br></br>

                            Ms. Ch. Supriya is with strong zeal and committed. She is known for her simplicity, unassuming nature and dedication to community service. As a Special Educator she has catered to the health needs of all sections of the society in the city of Visakhapatnam as well as the rural areas of Visakhapatnam District. She has rendered selfless service to the poor people. Ms. Supriya also worked extensively in the field of rural development HIV / AIDS awareness programs, women empowerment, environment & environmental initiatives.<br></br><br></br>

                            Ms. Supriya has visited Disabled Rehabilitation Centers, Community Based Health Programs, in Germany.<br></br>
                            Pavani Special School was started on 14th November, 1987 and Ms. Supriya who is the present Secretary for the organization established to cater to the educational and training needs of the differently abled children in the city of Visakhapatnam. Ms. Supriya was deeply touched and by sufferings of few children with mental disability and longed to do something for the individuals with disabilities.<br></br><br></br>

                            The school started receiving grant in aid from the Ministry of Social Justice and Empowerment, Government of India from the year 2000.
                        </p>
<br></br>
<br></br>



                    </div>
                </div>
            </section>
               {/* <BlogSection /> */}
                                <CtaSection ctaclass={'wpo-cta-area-2'} />
                                <Needs />
                             


        </>
    );
}

export default Pavani;