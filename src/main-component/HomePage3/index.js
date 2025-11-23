import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero3 from '../../components/hero3'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import TeamSection from '../../components/team'
import EventSection from '../../components/event'
import CtaSection from '../../components/cta'
import WorldSection from '../../components/world'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import CounterSection from '../../components/counter'
import Howworks from '../../components/howworks'
import Lifeofchild from '../../components/lifeofchild'
import Needs from '../../components/needs'


const HomePage3 =() => {
    return(
        <Fragment>
            <Header/>
            <Hero3/>
             <CounterSection/>
          
            <About/>
              <Mission subclass={'section-padding'}/>
              <Howworks/>
              <Lifeofchild/>
            <CaseSlide/>
            <BlogSection/>
            <Needs/>
            <CtaSection ctaclass={'wpo-cta-area-2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage3;