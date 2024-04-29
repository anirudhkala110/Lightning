import { createContext, useState } from 'react';
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
import HomeAutomation from './Components/Home/HomeAutomation';
import ThermostatControl from './Components/Home/ThermostatControl';
import AppControl from './Components/Home/AppControl';
import VoiceControl from './Components/Home/VoiceControl';
import Schedule from './Components/Home/Schedule';
import Analytics from './Components/Home/Analytics';

export const userContext = createContext()

function App() {
  const [admin, setAdmin] = useState({ user: "Admin", img: JoinUs })
  // const [admin, setAdmin] = useState("Admin")

  return (
    <>
      <div className='bg-black' style={{ minWidth: "400px" }}>
        <userContext.Provider value={admin}>
          <Router>
            <div className='navbar-fixed-top bg-dark pb-0' style={{ maxHeight: '70px', borderBottom: '0px solid white', zIndex: '100' }}>
              <Navbar />
            </div>
            <div className='text-primary navSupport navbar-fixed-top py-3 mt-5 bg-black pb-2' style={{ zIndex: '50', borderBottom: '0px solid white' }}>
              <NavSupport />
            </div>
            <div className='pt-2 mt-5 pt-5 text-white' style={{ minWidth: "400px" }}>
              <div className='mt-3'>
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/home' element={<Home />} />
                  {/* <Route exact path='/all-products' element={<Products />} /> */}
                  <Route exact path='/about' element={<About />} />
                  {/* <Route exact path='/contact-us' element={<Contact />} /> */}
                  {/* <Route exact path='/services' element={<Services />} /> */}
                  <Route exact path='/support' element={<Support />} />
                  {/* <Route exact path='/profile/:user' element={<Profile />} /> */}
                  {/* <Route exact path='/login' element={<Login />} /> */}
                  {/* <Route exact path='/register' element={<Register />} /> */}
                  {/* <Route exact path='/Registerpage' element={<Register />} /> */}
                  {/* <Route exact path='/dashboard' element={<DashBoard />} /> */}
                  {/* <Route exact path='/detail/:id/:machineName/:location/:uploadedBy' element={<Details />} /> */}
                  <Route exact path='/info' element={<DetailsOfHomePageDiv />} />
                  <Route exact path='/What-is-Matter-protocol?' element={<MatterProtocol />} />
                  <Route exact path='/Smart-Lights-and-Switches-with-use-of-Matter Protocol' element={<SmartLightsandSwitches />} />
                  <Route exact path='/Enhancing-Smart-Security-and-Emergency-with-Matter-Protocol' element={<Security />} />
                  <Route exact path='/Home-Automation-with-Motion-Detectors' element={<HomeAutomation />} />
                  <Route exact path='/Thermostat-with-Matter-Protocol' element={<ThermostatControl />} />
                  <Route exact path='/Slogfy-App-Control' element={<AppControl />} />
                  <Route exact path='/Slogfy-Voice-Control' element={<VoiceControl />} />
                  <Route exact path='/Slogfy-App-Analytics' element={<Analytics />} />
                  <Route exact path='/Slogfy-App-Schedule-Control' element={<Schedule />} />
                  <Route exact path='/contact-detail/:userName/:phone/:email/:address' element={<ContactDetails />} />
                  <Route path='*' element={<PageNoteFound />} />
                </Routes>
              </div>
            </div>
            <div className='navbar-dark bg-dark rounded-0 px-5 d-flex align-items-center' style={{ minHeight: '50px' }}>
              {/* <div className='navbar-inverse rounded-0' style={{ minHeight: '50px' }}> */}
              {/* <div className='navbar-fixed-bottom navbar-inverse'> */}
              <Footer />
            </div>
          </Router>
        </userContext.Provider>
      </div>
    </>
  );
}

export default App;