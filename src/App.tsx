import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import TeamPortfolio from './pages/TeamPortfolio';
import Home2Page from './pages/Home2Page';
import FeaturesPage from './pages/FeaturesPage';
import PrivacyPolicy from './pages/Footer_Pages/PrivacyPolicy';
import TermsConditions from './pages/Footer_Pages/TermsConditions';
import Disclaimer from './pages/Footer_Pages/Disclaimer';
import ScrollToTop from './componets/ScrollToTop';
import Service from './pages/Footer_Pages/Service';
import ContactUs from './pages/Footer_Pages/ContactUs';
import RouteChangeProgress from './componets/RouterChangeProgress';
import Signup from './pages/LoginPages/SignUp';
import Signin from './pages/LoginPages/Signin';
import USchemaWithAD from './pages/LoginPages/USchemaWithAD';
import NoInternetOverlay from './componets/NoInternet';
import Dashboard from './pages/AdminPgs/Profile_pages/Dashboard';
import ChangePassword from './pages/AdminPgs/Profile_pages/Change_pass';
import Sub_select from './pages/Features/Feature_1/Sub_select';
import ProtectedRoute from './componets/Protected_route';
import VidSelect1 from './pages/Features/Feature_2/VidSelect';
import ForgotPassword from './pages/LoginPages/ForgotPassword';
import FeedbackPage from './pages/Footer_Pages/Feedback';
import ChatBot from './pages/Features/Feature_3/chatBot';
import { useEffect, useState } from 'react';
import ReportIssue from './pages/Footer_Pages/reportAProblem';
import Sarav1Insights from './pages/Footer_Pages/Sarav1';
import EditProfile from './pages/AdminPgs/Profile_pages/EditProfile';
import FAQs from './componets/faq';
import Not_found from './pages/Not found';
import FAQ from './componets/faq';
import UserList from './pages/AdminPgs/Userdata';
import React from 'react';
import { Monitor } from 'lucide-react';
import UserSchema2 from './Dumb_comp/UserSchema2';
import ChatPage from './Dumb_comp/ChatPage';
import BackToTopButton from './componets/BackToTopButton';
import NavBar from './componets/NavBar';
import Footer from './componets/Footer_FIn';
import ThemeToggle from './componets/ThemeToggle';
import HomePage from './Dumb_comp/HomePage';
import NavBarHome from './componets/NavBarFeatures';
import NavBarFeatures from './componets/NavBarFeatures';
function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    checkMobile();
  }, []);

  if (isMobile) {
    return (
      <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f8f8', }}>
        <h1 className='text-red' >Use a Laptop or Desktop to Access this Website</h1>
        <h2 className='text-red' style={{ color: 'red' }}>This website is not optimized for Mobile Devices</h2>
        <h2>If you are using Mobile Device use Desktop mode to Access this website</h2>
        <h2>Use Landscape Orientation For Better Experience</h2>
        <h2>😊</h2>
      </div>
    );
  }

  return (
    <Router>
      {/* <NavBar /> */}
      {/* <UserList /> */}
      {/* <VidSelect1 /> */}
      {/* <NoInternetOverlay /> */}
      {/* <NavBarFeatures /> */}
      <RouteChangeProgress />
      <ScrollToTop />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UserSchema2" element={<USchemaWithAD />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/" element={<Home2Page />} />
        <Route path="/About_us" element={<TeamPortfolio />} />
        <Route path="/Features" element={<FeaturesPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        <Route path="/ChangePass" element={<ChangePassword />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path='/faq' element={<FAQs />} />
        <Route path='/Report' element={<ReportIssue />} />
        <Route path="/Sarav1" element={<Sarav1Insights />} />
        <Route path='*' element={<Not_found/>} />




        <Route
          path="/select-sub"
          element={

            <Sub_select />

          }
        />
        <Route
          path="/VidSelect"
          element={

            <VidSelect1 />

          }
        />
        <Route
          path='/Feedback'
          element={
            <ProtectedRoute>
              <FeedbackPage />
            </ProtectedRoute>
          } />

        <Route
          path='/Dashboard'
          element={
            <ProtectedRoute>
              < Dashboard />
            </ProtectedRoute>
          } />

        <Route
          path='/chatBot'
          element={

            < ChatBot />

          } />


        <Route
          path="/Dashboard/EditProfile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />

      </Routes>


    </Router>

  );
}

export default App;