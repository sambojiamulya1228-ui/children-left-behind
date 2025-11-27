import React, { Fragment } from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import VedioCta from '../../components/vediocta'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import AboutHero from '../../components/aboutHero'
import AboutMission from '../../components/aboutMission'
import OurMission from '../../components/ourMission'
import ValuesSection from '../../components/ourValuess'
import WhatWeDo from '../../components/whatWeDo'
import LeaderShip from '../../components/LeaderShip'
import Howworks from '../../components/howworks'
import BlogSection from '../../components/BlogSection'


const CasePage = () => {
    return (
        <Fragment>
            <Header />
            {/* <PageTitle pageTitle={'About Us'} pagesub={'About'}/>  */}
            {/* <VedioCta/> */}
            <AboutHero />
            <WhatWeDo />
            <CounterSection/>
            <AboutMission subclass={'section-padding'} />
            <OurMission />
            <LeaderShip />
            <ValuesSection />
             <Howworks/>
             <Mission subclass={'section-padding'}/>
             <BlogSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CasePage;
