import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import AboutPage from '../AboutPage'
import CasePage from '../CasePage'
import CaseSinglePage from '../CaseSinglePage'
import EventPage from '../EventPage'
import EventPageSingle from '../EventPageSingle'
import DonatePage from '../DonatePage'
import VolunteerPage from '../volunteerPage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull'
import ErrorPage from '../ErrorPage'
import ContactPage from '../ContactPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'
import ChildCenter from '../../components/ChildCenter';
import Cards from '../Cards';
import Ashajyothi from '../../components/Asha jyothi';
import Pavani from '../../components/Pavani';
import Disability from '../Disability';
import StayInformed from '../../components/StayInformed';
import Education from '../../components/Education';
import Medicalcampaigns from '../Medicalcampaigns';
import ChildTrafficking from '../ChildTrafficking';
import TripToIndia from '../../components/TripToIndia';
import DisasterRelief from '../../components/DisasterRelief';
import NurturingPlaytime from '../../components/NurturingPlaytime';
import ContactUs from '../../components/ContactUs';
import TermsAndConditions from '../../images/TermsAndConditions';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage3 />} />
          <Route path='home' element={<Homepage />} />
          <Route path='home2' element={<Homepage2 />} />
          <Route path='home3' element={<Homepage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='case' element={<CasePage />} />
          <Route path='case-single' element={<CaseSinglePage />} />
          <Route path='event' element={<EventPage />} />
          <Route path='event-details' element={<EventPageSingle />} />
          <Route path='donate' element={<DonatePage />} />
          <Route path='volunteer' element={<VolunteerPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-details' element={<BlogDetails />} />
          <Route path='blog-details-left' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-details-fullwidth' element={<BlogDetailsFull />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='/childcenter' element={<ChildCenter/>}></Route>
          <Route path='/cards' element={<Cards/>}></Route>
          <Route path='/asha' element={<Ashajyothi/>}></Route>
          <Route path='/pavani' element={<Pavani/>}></Route>
          <Route path='/disability' element={<Disability/>}></Route>
          <Route path='/stayinformed' element={<StayInformed/>}></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/medical' element={<Medicalcampaigns/>}></Route>
          <Route path='/childtraffic' element={<ChildTrafficking/>}></Route>
          <Route path='/tripofindia' element={<TripToIndia/>}></Route>
          <Route path='/disasterrelief' element={<DisasterRelief/>}></Route>
          <Route path='/nurturingplaytime' element={<NurturingPlaytime/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/termsandconditions' element={<TermsAndConditions/>}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default AllRoute;
