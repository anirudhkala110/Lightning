import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import './Home.css'
import 'aos/dist/aos.css';
// import Logo from '../../Images/matterPicUp.png'
import Logo from '../../Images/NewMatter.png'
import smartSwitches from '../../Images/smartSwitches.png'
import ThermostateMatter from '../../Images/ThermostateMatter.jpg'
import analytics from '../../Images/analytics.jpg'
import automaticLightUsingSwitch from '../../Images/automaticLightUsingSwitch.jpg'
import applicationControl from '../../Images/applicationControl.jpg'
import emergencySOS2 from '../../Images/emergencySOS2.jpg'
import securityBreach from '../../Images/security.jpg'
import voiceAssistant from '../../Images/voiceAssistant.jpg'
import homeAutomationUsingMotionMatterProtocol from '../../Images/homeAutomationUsingMotionMatterProtocol.jpg'
import Typewriter from '../../Utils/Typewriter';
import AutomaticImageSlider from '../../Images/AutomaticImageSlider';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import FAQ from './FAQ';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';
import axios from 'axios'
import Query from '../../Query/Query';

axios.defaults.withCredentials = true

const Home = () => {
    const navigate = useNavigate();
    const type = 'FAQ'
    const form = useRef();
    const [isAdmin, setAdmin] = useState(false)
    const [name, setName] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const [query, setQuery] = useState()
    const [finalquery, setFQuery] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [id, setId] = useState()
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const handleSubmit = (e) => {
        setDate(currentDate)
        setTime(currentTime)
        setId(Date.now())
        e.preventDefault();
        if (name === '' || !name || mobile === '' || !mobile || email === '' || !email || query === '' || !query) {
            alert("Please Enter All the Fields")
        }
        else {
            axios.post('http://localhost:5090/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id })
                //   axios.post('https://api.legalbrother.in/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id })
                .then(res => {
                    console.log(res)
                    if (res.data.success) {
                        alert("Your  Query Has been saved.\nNow you are redirecting to the Homepage. . .")
                        window.location.href = '/'
                    }
                    else {
                        alert("Sorry, not able to send your query.\nTry again after some time.")
                    }
                })
                .catch(err => console.log(err))
            // emailjs.sendForm('service_j5cbb74', 'template_x4fuopb', form.current, 'A7Zgb_4LO8WMThAjR')
            //     .then((result) => {
            //         alert("Your  message ✉ Has been sent.\nNow you are redirecting to the Homepage. . .")
            //         navigate('/')
            //     }, (error) => {
            //         alert("Sorry, not able to send your query.\nTry again after some time.")
            //         console.log(error.text);
            //     });
        }
    }
    useEffect(() => {
        AOS.init({ duration: 200 })
    }, [])
    const handleCall = (number) => {
        const phoneNumber = parseInt(number); // Replace this with the phone number you want to call
        window.open(`tel:+91${phoneNumber}`);
    };
    const handleGmailButtonClick = (recipientEmail) => {
        window.location.href = `mailto:${recipientEmail}`;
    };
    const handleQuery = (e) => {
        setQuery(e.target.value)
        setDate(currentDate)
        setTime(currentTime)
        setFQuery(name + "\n" + email + "\n" + mobile + "\n" + date + "\n" + time + "\n" + 'Message is : ' + e.target.value)
    }
    const handleRoute = (route) => {
        navigate(`/${route}`)
    }
    function truncate(str, size) {
        var updatedStr = ''
        if (str.length > size) {
            updatedStr = str.slice(0, size) + '...'
        }
        else {
            updatedStr = str + '...'
        }
        return updatedStr
    }
    return (
        <div className='min-vh-100'>
            <div className='bannerBack'>
                <div className='container'>
                    <div className='row pt-3 '>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 px-5 py-3'>
                            {/* <div className='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'> */}
                            {/* <strong className='mt-2 px-2'>What is RoboShop ?</strong> */}
                            <p className='py-3'>
                                <div className='fs-2 mt-3' style={{ minHeight: '220px' }}>
                                    <span style={{ fontSize: "48px" }}>Welcome to </span>
                                    <br />
                                    <strong className='fw-semibold  text-primary px-0' style={{ fontSize: "2em", letterSpacing: "0px", borderTop: '0px solid white' }}><Typewriter text="Slogify... " infinite={true} speed={500} /><Typewriter text="| " infinite={true} speed={280} /></strong>
                                </div>
                                <h1>India's &nbsp;&nbsp;# 1<sup>st</sup> Brand</h1>
                                <h1>Home Automation Based on Matter Protocal</h1>
                                <hr />
                                {/* RoboShop is an online platform dedicated exclusively to robotic arm technology. It serves as a comprehensive marketplace where enthusiasts, professionals, and businesses can explore, discover, and procure the latest advancements in robotic arm technology. From industrial-grade robotic arms for manufacturing and automation to cutting-edge models for research and education, RoboShop offers a wide range of options to cater to every need and application. With a user-friendly interface, advanced search filters, and detailed product descriptions, RoboShop makes it easy to find the perfect robotic arm for your requirements. Additionally, RoboShop provides exceptional support and assistance throughout the purchasing process, ensuring a seamless and hassle-free experience for customers. */}
                            </p>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 px-5 py-3'>
                            {/* <div className='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'> */}
                            <div className='' data-aos="zoom-in" data-aos-delay='' data-aos-anchor-easing='ease-in-out' data-aos-duration='1000' data-aos-mirror='true'>
                                <img src={Logo} className='w-100' style={{ maxHeight: '600px', filter: "drop-shadow(0px 3px 3px white)" }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=''>
                {/* <div className='container'>
                    <br />
                    <br />
                    <div className='homeHover p-3'>
                        <center className='fs-4 fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>How Much Do Home Automation Systems Cost In 2024</center>
                        <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                            <div className='w-100 border mb-2 border-secondary' />
                            <p className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6'>
                                <ul className='p-0' style={{ listStyle: 'none' }}>
                                    <li className='mb-3'>In the ever-evolving landscape of technology, home automation systems have become a key component of modern living. As 2024 rolls in, an increasing number of homeowners are seeking to enhance their living experiences with these innovative systems.</li>
                                    <li className='mb-3'>However, cost is an important consideration in this journey towards smart homes. This document aims to give you a comprehensive understanding of the costs associated with home automation in 2024, helping you make an informed decision and plan your investments wisely.</li>
                                </ul>
                            </p>
                            <img src={Intro} className='col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='homeHover p-3'>
                        <center className='fs-4 fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>What is a home automation system?</center>
                        <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                            <div className='w-100 border mb-2 border-secondary' />
                            <img src={DivCollection} className='col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                            <p className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6'>
                                <ul>
                                    <li>Home automation systems, also known as smart homes, allow homeowners to control different aspects of their house remotely, often with the use of smart devices. This includes functions such as CCTV security, lighting and temperature adjustment with the help of their smartphones or voice commands.</li>
                                    <li>In addition, these systems can be used to monitor energy usage and provide automated alerts for potential problems in the home. They are commonly used to increase security, to streamline entertainment systems, and to increase accessibility. Home automation is also commonly used to increase safety around the home. For example, smart home technology can be used to monitor very young or very old residents.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='homeHover p-3'>
                        <center className='fs-4 fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>What does home automation typically include?</center>
                        <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                            <div className='w-100 border mb-2 border-secondary' />
                            <p className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6'>
                                <ul className='p-0' style={{ listStyle: 'none' }}>
                                    <li>A home automation system typically include a range of features aimed at enhancing convenience, security, and energy efficiency.</li>
                                    <li>
                                        <ul>
                                            <li>
                                                One of the key elements is lighting control, allowing users to adjust the intensity and colour of lights in different rooms directly from their smartphone. Smart lighting can adapt to the homeowners routine, or be NavLinked to sensors that respond to other smart devices such as automated blinds. Smart lights are also high energy efficient, as you can control lighting from anywhere with an internet connection, not just from your home lighting controls.
                                            </li>
                                            <li>
                                                Security is another major aspect, with security features like smart locks, security cameras, and a security alarm that can be remotely monitored and controlled.
                                            </li>
                                        </ul>
                                    </li>
                                    <NavLink to='/info' className='text-decoration-none'>More...</NavLink>
                                </ul>
                            </p>
                            <img src={Navigation} className='col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='homeHover p-3'>
                        <center className='fs-4 fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>WHat is Matter Protocol ?</center>
                        <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                            <div className='w-100 border mb-2 border-secondary' />
                            <img src={mi} className='col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6 bg-white p-2' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                            <p className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6 px-1'>
                                <ul className='' style={{ listStyle: 'none' }}>
                                    <li>
                                        Matter is an open-source connectivity standard for smart home and IoT (Internet of Things) devices
                                    </li>
                                    <li>
                                        The standard is royalty-free, though developers and manufacturers incur certification costs. It originated in December 2019 as the "Project Connected Home over IP" (or "CHIP" for short) working group, founded by Amazon, Apple, Google and the Zigbee Alliance, now called the Connectivity Standards Alliance. Subsequent members include IKEA, Huawei, and Schneider. Version 1.0 of the specification was published on 4 October 2022. The Matter software development kit is open-source under the Apache License.
                                    </li>
                                </ul>
                                <NavLink to='/What-is-Matter-protocol?' className='text-decoration-none mx-3' >More...</NavLink>
                            </p>
                        </div>
                    </div>
                </div> */}
                {/* <div className='sliderImages bg-dark justify-content-center align-items-center d-flex' style={{ minHeight: "350px" }}><ImgSlider /></div> */}
                {/* <hr style={{ backgroundImage: "linear-gradient(to left, black,white,white,black)", height: "3px" }} /> */}
                <div className='imageSliderBack my-4'>
                    {isAdmin && <div className='my-2 container w-100 d-flex justify-content-end' ><button className='btn btn-success' onClick={e => handleRoute('updateImageForSlider')} >Edit Slider Images</button> </div>}
                    <div className='sliderImages  w-100'

                        data-aos="zoom-in" data-aos-delay='' data-aos-anchor-easing='ease-in-out' data-aos-duration='1000' data-aos-mirror='true'
                        style={{ minHeight: "" }}>
                        <center className='fs-2 fw-semibold'>Projects ON</center>
                        <AutomaticImageSlider />
                    </div>
                </div>
                <br />
                <br />
                <div className=''>
                    <div className='container'>
                        <div className='row'
                        // style={{ background: "rgba(0, 0, 0, 25%)" }}
                        >
                            <div className='p-3'>
                                <center className='fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>
                                    <h1>
                                        <b style={{ fontSize: '50px' }}>What is a Slogfy smart home 🏡</b>
                                    </h1>
                                </center>
                                <center className='fs-4 ' data-aos='zoom-in' data-aos-delay='50' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>
                                    Slogfy Smart Home is designed,<br />  <h4 className='text-primary'><Link to='/what-is-matter-protocol?' className='text-decoration-none'>with matter protocol</Link></h4>to elevate the comfort of your space & redefine the way you live your daily life!
                                </center>
                                <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                                    <div className='w-100 border my-3 border-secondary' />
                                    <div className='homehover col-sm-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 my-5' style={{ height: '220px' }}>
                                        <Link to='/Smart-Lights-and-Switches-with-use-of-Matter Protocol' className='text-white text-decoration-none'>
                                            <div className='homehoverTab bg-dark rounded-2 ps-3 pb-2 d-flex justify-content-between align-items-start' style={{ height: '220px' }}>
                                                <div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' className='p-2' style={{ fontSize: '0.7em' }}>
                                                    <h4 className='fw-bold' style={{ color: "#a8ece6" }}>Smart Switches and Plugs</h4> {truncate('Turn your light ON / OFF just by your inward and outward movement, voice or Smart Phone. ', 100)}<br /><em className='fw-bold text-primary'>Learn More About Working. . .</em>
                                                </div>
                                                <img src={smartSwitches} className='col-6 shadow' style={{ borderBottomRightRadius: '0px', borderTopLeftRadius: '5px', marginRight: "-1px", maxHeight: '-webkit-fill-available', marginTop: '-31px', minHeight: '250px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='homehover col-sm-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 my-5' style={{ height: '220px' }}>
                                        <Link to='/Enhancing-Emergency-SOS-with-Matter-Protocol' className='text-white text-decoration-none'>
                                            <div className='homehoverTab bg-dark rounded-2 ps-3 pb-2 d-flex justify-content-between align-items-start' style={{ height: '220px' }}>
                                                <div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' className='p-2' style={{ fontSize: '0.7em' }}><h4 className='fw-bold' style={{ color: "#a8ece6" }}>Smart Emergency SOS</h4> {truncate('Get all the security messages and information about unwanted enterance. Real Time SOS system for Family Members.', 100)}<br /><em className='fw-bold text-primary'>Learn More About Working. . .</em>
                                                    {/* <div className='homehoverTab bg-dark rounded-2 ps-3 pb-2 d-flex justify-content-between align-items-start' style={{ height: '220px' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' className='p-2' style={{ fontSize: '0.7em' }}><h4 className='fw-bold'  style={{color : "#a8ece6"}}>Emergnecy Alert SOS</h4> {truncate('Get all the security messages and information about unwanted enterance. Real Time SOS system for Family Members.', 100)}<br /><em className='fw-bold text-primary'>Learn More About Working. . .</em> */}
                                                </div>
                                                <img src={emergencySOS2} className='col-6 shadow' style={{ borderBottomRightRadius: '0px', borderTopLeftRadius: '5px', marginRight: "-1px", maxHeight: '-webkit-fill-available', marginTop: '-31px', minHeight: '250px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='homehover col-sm-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 my-5' style={{ height: '220px' }}>
                                        <Link to='/Enhancing-Smart-Security-with-Matter-Protocol' className='text-white text-decoration-none'>
                                            <div className='homehoverTab bg-dark rounded-2 ps-3 pb-2 d-flex justify-content-between align-items-start' style={{ height: '220px' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' className='p-2' style={{ fontSize: '0.7em' }}><h4 className='fw-bold' style={{ color: "#a8ece6" }}>Security</h4> {truncate('Get all the security messages and information about unwanted enterance. Real Time SOS system for Family Members.', 100)}<br /><em className='fw-bold text-primary'>Learn More About Working. . .</em>
                                                {/* <div className='homehoverTab bg-dark rounded-2 ps-3 pb-2 d-flex justify-content-between align-items-start' style={{ height: '220px' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' className='p-2' style={{ fontSize: '0.7em' }}><h4 className='fw-bold'  style={{color : "#a8ece6"}}>Emergnecy Alert SOS</h4> {truncate('Get all the security messages and information about unwanted enterance. Real Time SOS system for Family Members.', 100)}<br /><em className='fw-bold text-primary'>Learn More About Working. . .</em> */}
                                            </div>
                                                <img src={securityBreach} className='col-6 shadow' style={{ borderBottomRightRadius: '0px', borderTopLeftRadius: '5px', marginRight: "-1px", maxHeight: '-webkit-fill-available', marginTop: '-31px', minHeight: '250px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='homehover col-sm-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 my-5' style={{ height: '220px' }}>
                                        <Link to='/Home-Automation-with-Motion-Detectors' className='text-white text-decoration-none'>
                                            <div className='homehoverTab bg-dark rounded-2 ps-3 pb-2 d-flex justify-content-between align-items-start' style={{ height: '220px' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' className='p-2' style={{ fontSize: '0.7em' }}><h4 className='fw-bold' style={{ color: "#a8ece6" }}>Motion Detectors Automation</h4> {truncate('Turn your Cooler, Fan, AC ON and OFF just by only Entering and Leaving the room.', 100)} <br /><em className='fw-bold text-primary'>Learn More About Working. . .</em>
                                            </div>
                                                <img src={homeAutomationUsingMotionMatterProtocol} className='col-6 shadow' style={{ borderBottomRightRadius: '0px', borderTopLeftRadius: '5px', marginRight: "-1px", maxHeight: '-webkit-fill-available', marginTop: '-31px', minHeight: '250px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='homehover col-sm-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 my-5' style={{ height: '220px' }}>
                                        <Link to='/Thermostat-with-Matter-Protocol' className='text-white text-decoration-none'>
                                            <div className='homehoverTab bg-dark rounded-2 ps-3 pb-2 d-flex justify-content-between align-items-start' style={{ height: '220px' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' className='p-2' style={{ fontSize: '0.7em' }}><h4 className='fw-bold' style={{ color: "#a8ece6" }}> Room Temperature Controller</h4>{truncate('Utilizing an automated system, fan speed is dynamically adjusted in response to changes in the room temperature, ensuring optimal comfort levels while also minimizing energy consumption using Matter Protocol. ', 100)}<br /><em className='fw-bold text-primary'>Learn More About Working. . .</em>
                                            </div>
                                                <img src={ThermostateMatter} className='col-6 shadow' style={{ borderBottomRightRadius: '0px', borderTopLeftRadius: '5px', marginRight: "-1px", maxHeight: '-webkit-fill-available', marginTop: '-31px', minHeight: '250px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='homehover col-sm-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 my-5' style={{ height: '220px' }}>
                                        <Link to='/Slogfy-App-Control' className='text-white text-decoration-none'>
                                            <div className='homehoverTab bg-dark rounded-2 ps-3 pb-2 d-flex justify-content-between align-items-start' style={{ height: '220px' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' className='p-2' style={{ fontSize: '0.7em' }}><h4 className='fw-bold' style={{ color: "#a8ece6" }}>App Control</h4> {truncate('We Put your home in the palm of your hands with our highly lauded mobile app.', 100)}<br /><em className='fw-bold text-primary'>Learn More About Working. . .</em>
                                            </div>
                                                <img src={applicationControl} className='col-6 shadow' style={{ borderBottomRightRadius: '0px', borderTopLeftRadius: '5px', marginRight: "-1px", maxHeight: '-webkit-fill-available', marginTop: '-31px', minHeight: '250px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='homehover col-sm-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 my-5' style={{ height: '220px' }}>
                                        <Link to='/Slogfy-Voice-Control' className='text-white text-decoration-none'>
                                            <div className='homehoverTab bg-dark rounded-2 ps-3 pb-2 d-flex justify-content-between align-items-start' style={{ height: '220px' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' className='p-2' style={{ fontSize: '0.7em' }}><h4 className='fw-bold' style={{ color: "#a8ece6" }}>Voice Control</h4> {truncate('Compatible with all leading voice assistants like Alexa, Google Home and Apple Siri', 100)}<br /><em className='fw-bold text-primary'>Learn More About Working. . .</em>
                                            </div>
                                                <img src={voiceAssistant} className='col-6 shadow' style={{ borderBottomRightRadius: '0px', borderTopLeftRadius: '5px', marginRight: "-1px", maxHeight: '-webkit-fill-available', marginTop: '-31px', minHeight: '250px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='homehover col-sm-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 my-5' style={{ height: '220px' }}>
                                        <Link to='/Slogfy-App-Analytics' className='text-white text-decoration-none'>
                                            <div className='homehoverTab bg-dark rounded-2 ps-3 pb-2 d-flex justify-content-between align-items-start' style={{ height: '220px' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' className='p-2' style={{ fontSize: '0.7em' }}><h4 className='fw-bold' style={{ color: "#a8ece6" }}>Analytics</h4> {truncate('Gain insight into consumption & save on your bills with analytics & bill prediction.', 100)} <br /><em className='fw-bold text-primary'>Learn More About Working. . .</em>
                                            </div>
                                                <img src={analytics} className='col-6 shadow' style={{ borderBottomRightRadius: '0px', borderTopLeftRadius: '5px', marginRight: "-1px", maxHeight: '-webkit-fill-available', marginTop: '-31px', minHeight: '250px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='homehover col-sm-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 my-5' style={{ height: '220px' }}>
                                        <Link to='/Slogfy-App-Schedule-Control' className='text-white text-decoration-none'>
                                            <div className='homehoverTab bg-dark rounded-2 ps-3 pb-2 d-flex justify-content-between align-items-start' style={{ height: '220px' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' className='p-2' style={{ fontSize: '0.7em' }}><h4 className='fw-bold' style={{ color: "#a8ece6" }}> Schedules</h4>{truncate('Get time-based appliance control with scheduling & timer functionalities', 100)}<br /><em className='fw-bold text-primary'>Learn More About Working. . .</em>
                                            </div>
                                                <img src={automaticLightUsingSwitch} className='col-6 shadow' style={{ borderBottomRightRadius: '0px', borderTopLeftRadius: '5px', marginRight: "-1px", maxHeight: '-webkit-fill-available', marginTop: '-31px', minHeight: '250px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <img src={custSat} className='homehover col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' /> */}
                                </div>
                            </div>
                            {/* <div className='homeHover p-3'>
                            <center className='fs-4 fw-semibold' data-aos='fade-up' data-aos-delay='0' data-aos-anchor-easing='ease-in-out' data-aos-duration='200' data-aos-mirror='true'>Join the RoboShop Community</center>
                            <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                                <div className='w-100 border mb-2 border-secondary' />
                                <img src={JoinUs} className='col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                                <p className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6'>Join the SlogFy today and unlock the potential of robotic arm technology. Whether you're a seasoned professional or a curious enthusiast, RoboShop is your trusted partner in harnessing the power of robotics. Start exploring now and take the first step towards transforming your operations with cutting-edge robotic technology!</p>
                            </div>
                        </div> */}

                        </div>
                    </div>
                </div>
                <br />
                <div className='container pt-4'
                // style={{ background: "rgba(0, 0, 0, 55%)" }}
                >
                    <section id="faqs">
                        <center className='fs-3 fw-bold'>
                            ASKED QUESTIONS
                        </center>
                        <FAQ />
                    </section>
                </div>

                {/* <div className='row'>
                    <div className="container pt-3 col-lg-6 col-xl-6 my-2 py-2 col-sm-12 pb-1">
                        <form onSubmit={(e) => handleSubmit(e)} ref={form} >
                            <div className="form-group text-secondary fw-bolder">
                                <label className="fw-bold" htmlFor="formGroupName">Name <sup className='text-danger'>*</sup></label>
                                <input type="text" className="form-control   text-light rounded-3 border-0  bg-dark" id="formGroupName" placeholder="Your Valid Name" name="user_name" value={name} onChange={e => setName(e.target.value)} required />
                            </div>
                            <div className="form-group text-secondary fw-bolder">
                                <label className="fw-bold" htmlFor="formGroupMobile">Mobile Number<sup className='text-danger'>*</sup></label>
                                <input type="number" className="form-control   text-light rounded-3 border-0  bg-dark" id="formGroupMobile" placeholder="Mobile Number" name="mobile" value={mobile} onChange={e => setMobile(e.target.value)} required />
                            </div>
                            <div className="form-group text-secondary fw-bolder">
                                <label className="fw-bold" htmlFor="formGroupEmail">Email Address<sup className='text-danger'>*</sup></label>
                                <input type="email" className="form-control   text-light rounded-3 border-0  bg-dark" id="formGroupEmail" placeholder="Email Address" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group text-secondary fw-bolder mb-2">
                                <label className="fw-bold" htmlFor="formGroupQuery">Messege<sup className='text-danger'>*</sup></label>
                                <textarea
                                    type="text"
                                    className="form-control   text-light rounded-3 border-0  bg-dark"
                                    cols={30}
                                    rows={5}
                                    style={{ resize: "none" }}
                                    id="formGroupQuery"
                                    value={query}
                                    onChange={e => handleQuery(e)}
                                    placeholder={`✉ Enter your Message here`} required
                                />
                                <textarea name="message" value={finalquery} style={{ display: "none" }} />
                            </div>
                            <button type='submit' className="btn border-0 rounded-0 mb-2 fw-bolder send-mail btn-primary w-100" value="Send">Send Mail</button>
                        </form>
                    </div>
                </div> */}
                <div className='container-fluid w-100 py-4 border-dark'>
                    <center className='fs-3 fw-semibold mb-3' >Have a Question ? Ask Here !</center>
                    <div className='container d-flex justify-content-center'
                    // style={{ background: "rgba(0, 0, 0, 55%)" }}
                    >
                        <Query value={type} />
                    </div>
                </div>
                {/* <hr /> */}
                {/* <div className='container'>
                    <center className='fs-2 text-info'>Contact Us</center>
                    <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                        <div className='w-100 border my-3 border-secondary' />
                        <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                            <Link className='text-decoration-none text-white'><div className='homehoverTab bg-dark rounded-2 px-3 py-2 d-flex justify-content-between align-items-start' onClick={e => handleCall(8005183363)} style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-telephone-outbound"></i><div><span className='d-flex align-items-center pe-3'><strong className='' style={{ fontSize: '12px' }}>Owner: +91-8005183363</strong> &nbsp;&nbsp;&nbsp;&nbsp;<button className='btn rounded-0  text-white py-1 fw-bold' onClick={e => handleCall(8005183363)}>Call Now</button></span></div></div></div>
                            </Link>
                        </div>
                        <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                            <Link className='text-decoration-none text-white' target='__blank' to='https://wa.me/+918005183363'><div className='homehoverTab bg-dark rounded-2 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-whatsapp"></i><div><Link to='https://wa.me/+918005183363' className='text-decoration-none text-white' target='_blank'>Whatsapp: 8005183363</Link></div></div></div>
                            </Link>
                        </div>
                        <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                            <Link className='text-decoration-none text-white' target='__blank' to='https://www.instagram.com/slogfy?igsh=MXdraDhpbzlxaHk1Zg=='><div className='homehoverTab bg-dark rounded-2 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-instagram"></i><div><Link to='https://www.instagram.com/slogfy?igsh=MXdraDhpbzlxaHk1Zg==' className='text-decoration-none text-white' target='_blank'>Instagram: slogfy</Link></div></div></div>
                            </Link>
                        </div>
                        <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                            <Link className='text-decoration-none text-white' target='__blank' to='https://Slogfy@gmail.com'><div className='homehoverTab bg-dark rounded-2 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-envelope-at"></i><div><Link to='https://Slogfy@gmail.com' className='text-decoration-none text-white' target='_blank'>Gmail: Slogfy@gmail.com</Link></div></div></div>
                            </Link>
                        </div>
                        <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                            <Link className='text-decoration-none text-white' target='__blank' to='https://www.facebook.com/slogfy'><div className='homehoverTab bg-dark rounded-2 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-facebook"></i><div><Link to='https://www.facebook.com/slogfy' className='text-decoration-none text-white' target='_blank'>Facebook: SlogFy </Link></div></div></div>
                            </Link>
                        </div>
                        <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                            <Link className='text-decoration-none text-white' target='__blank' to='https://www.linkedin.com/company/slogfy/'><div className='homehoverTab bg-dark rounded-2 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-linkedin"></i><div><Link to='https://www.linkedin.com/company/slogfy/' className='text-decoration-none text-white' target='_blank'>LinkedIn: Slogfy</Link></div></div></div>
                            </Link>
                        </div>
                        <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                            <Link className='text-decoration-none text-white' target='__blank' to='https://x.com/slogfy?t=7W11e-jgtl8NoIiFlBllQQ&s=09'><div className='homehoverTab bg-dark rounded-2 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-twitter-x"></i><div><Link to='https://x.com/slogfy?t=7W11e-jgtl8NoIiFlBllQQ&s=09' className='text-decoration-none text-white' target='_blank'>Twitter: @slogfy</Link></div></div></div>
                            </Link>
                        </div>
                        <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                            <Link className='text-decoration-none text-white' target='__blank' to='https://youtube.com/@slogfy8260'><div className='homehoverTab bg-dark rounded-2 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-youtube"></i><div><Link to='https://youtube.com/@slogfy8260' className='text-decoration-none text-white' target='_blank'>YouTube: @slogfy8260</Link></div></div></div>
                            </Link>
                        </div>
                        <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                            <Link to="https://maps.app.goo.gl/4eqS6DdxRkrgA5Rt5" className='text-decoration-none text-white' target='__blank' ><div className='homehoverTab bg-dark rounded-2 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><div className='' style={{ fontSize: '' }}><i class="bi fs-3 bi-globe-americas"></i> &nbsp;Address: F-76, near saket metro, Saidulajab, DDA Flats, Munirka, New Delhi, Delhi 110030</div></div></div>
                            </Link>
                        </div>
                        {/* <img src={custSat} className='homehover col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' /> 
                    </div>
                </div> */}
                <br />
            </div>
            <br />
            {/* <hr /> */}
        </div>
    )
}

export default Home