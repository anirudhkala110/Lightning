import { createContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './Utils/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageNoteFound from './Utils/PageNoteFound';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Details from './Components/Products/Details';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Support from './Components/Support/Support';
import Profile from './Components/Admin/Profile/Profile';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import DashBoard from './Components/Admin/Dashboard/DashBoard';
import Footer from './Utils/Footer';
import JoinUs from './Images/JoinUs.jpg'
import ContactDetails from './Components/Contact/ContactDetails';
import NavSupport from './Utils/NavSupport';
import DetailsOfHomePageDiv from './Components/Home/DetailsOfHomePageDiv';
import MatterProtocol from './Components/Home/MatterProtocol';
import SmartLightsandSwitches from './Components/Home/SmartLightsandSwitches';
import Security from './Components/Home/Security';
import EmergencySOS from './Components/Home/EmergencySOS';
import HomeAutomation from './Components/Home/HomeAutomation';
import ThermostatControl from './Components/Home/ThermostatControl';
import AppControl from './Components/Home/AppControl';
import VoiceControl from './Components/Home/VoiceControl';
import Schedule from './Components/Home/Schedule';
import Analytics from './Components/Home/Analytics';
import UpdateImages from './Images/UpdateImages';
import Nav2 from './Utils/Nav2';

export const userContext = createContext()

function App() {
  const [admin, setAdmin] = useState({ user: "Admin", img: JoinUs })
  // const [admin, setAdmin] = useState("Admin")
  const [time, setTime] = useState(new Date());
  const [value, setValue] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());


    }, 5000);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=''>
      {/* <div className={`${time % 3 == 0 ? 'imageSliderBacki1' : time % 3 == 1 ? 'imageSliderBacki3' : time % 3 == 2 ? 'imageSliderBacki2' : 'bg-black'}`} style={{ minWidth: "400px" }}> */}
      <div className='bgBacki' style={{ minWidth: "400px" }}>
        <userContext.Provider value={admin}>
          <Router>
            <div className='navbar-fixed-top d-flex align-items-center' style={{ minHeight: '50px', borderBottom: '0px solid white', zIndex: '100' }}>
              <Navbar />
            </div>
            <div className='text-primary navSupport pt-3 mt-5 pb-2' style={{ zIndex: '50', position:"relative",borderBottom: '0px solid white', background: '#0a0c3fe8' }}>
              <NavSupport />
            </div>
            <div className='text-white' style={{ minWidth: "400px" }}>
              <div className='container' style={{ background: 'rgb(0 0 0 / 67%) ',zIndex:'2' }}>
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/home' element={<Home />} />
                  <Route exact path='/login' element={<Login />} />
                  <Route exact path='/register' element={<Register />} />
                  {/* <Route exact path='/all-products' element={<Products />} /> */}
                  <Route exact path='/about' element={<About />} />
                  {/* <Route exact path='/contact-us' element={<Contact />} /> */}
                  {/* <Route exact path='/services' element={<Services />} /> */}
                  <Route exact path='/support' element={<Support />} />
                  {/* <Route exact path='/profile/:user' element={<Profile />} /> */}
                  {/* <Route exact path='/Registerpage' element={<Register />} /> */}
                  {/* <Route exact path='/dashboard' element={<DashBoard />} /> */}
                  {/* <Route exact path='/detail/:id/:machineName/:location/:uploadedBy' element={<Details />} /> */}
                  <Route exact path='/info' element={<DetailsOfHomePageDiv />} />
                  <Route exact path='/updateImageForSlider' element={<UpdateImages />} />
                  <Route exact path='/What-is-Matter-protocol?' element={<MatterProtocol />} />
                  <Route exact path='/Smart-Lights-and-Switches-with-use-of-Matter Protocol' element={<SmartLightsandSwitches />} />
                  <Route exact path='/Enhancing-Smart-Security-with-Matter-Protocol' element={<Security />} />
                  <Route exact path='/Enhancing-Emergency-SOS-with-Matter-Protocol' element={<EmergencySOS />} />
                  <Route exact path='/Home-Automation-with-Motion-Detectors' element={<HomeAutomation />} />
                  <Route exact path='/Thermostat-with-Matter-Protocol' element={<ThermostatControl />} />
                  <Route exact path='/Slogify-App-Control' element={<AppControl />} />
                  <Route exact path='/Slogify-Voice-Control' element={<VoiceControl />} />
                  <Route exact path='/Slogify-App-Analytics' element={<Analytics />} />
                  <Route exact path='/Slogify-App-Schedule-Control' element={<Schedule />} />
                  <Route exact path='/contact-detail/:userName/:phone/:email/:address' element={<ContactDetails />} />
                  <Route path='*' element={<PageNoteFound />} />
                </Routes>
              </div>
            </div>
            <div className='rounded-0 footerBacki d-flex align-items-center' style={{ minHeight: '50px' }}>
              {/* <div className='navbar-inverse rounded-0' style={{ minHeight: '50px' }}> */}
              {/* <div className='navbar-fixed-bottom navbar-inverse'> */}
              <Footer />
            </div>
          </Router>
        </userContext.Provider>
      </div>
    </div>
  );
}

export default App;