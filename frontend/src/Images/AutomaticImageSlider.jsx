import { Navigation, Pagination, EffectCoverflow, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react';
import SwiperCore from 'swiper/core';
import Intro from './intro.jpg';
import Navi from './navigation.jpg';
import mi from './MI.svg';
import SLS from './SLS.png';
import SSL from './SSL.jpg';
import fv from './frst.png';
import six from './6.jpg';
import svn from './7.jpg';
import eth from './8.jpg';
import SSAE from './SSAE.png';
import SSE from './SSE.jpg';
import tlv from './12.jpg';
import trln from './13.jpg';
import frtn from './14.jpg';
import CHA from './CHA.jpg';
import sxtn from './homeAutomationUsingMotion.jpg';
import MID from './MatterinDevices.jpg';
import svtn from './17.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

SwiperCore.use([EffectCoverflow, Navigation, Autoplay]);

const colors = [
    { img: fv, info: "Complete Home Automation with Slogfy" },
    { img: CHA, info: "Home Automation Using  Smart Phone" },
    { img: SSL, info: "Smart Lights and Switches " },
    { img: six, info: 'Smart Display Control' },
    { img: SLS, info: 'Smart Light controlled by one click' },
    { img: svn, info: 'Control AC, Fans from Anywhere' },
    { img: eth, info: 'Get the Latest Update of Security' },
    { img: tlv, info: 'Control Your Home with Voice' },
    { img: trln, info: 'Smart LED Lights and Displays Systems' },
    { img: frtn, info: 'System for automate washing Machines' },
    { img: sxtn, info: 'Automate Home From your motion' },
    { img: svtn, info: 'Get Video Updates on Smart Devices' },
    { img: SSAE, info: 'Smart Emergency SOS Monitoring' },
    { img: SSE, info: 'Smart Security  Monitoring' },
    { img: Intro, info: 'Set your room temprature on your Demand' },
    { img: Navi, info: 'Complete Home Devices under single touch' },
    { img: MID, info: ' Connecting all in one.' },
    { img: mi, info: ' Automation Your Home Using Matter Protocol' }
];

const delay = 2500;

function AutomaticImageSlider() {
    const [index, setIndex] = useState(0);
    const [hover, setHover] = useState(false);
    const [autoplayParams, setAutoplayParams] = useState({ delay: 2500, disableOnInteraction: false });

    useEffect(() => {
        const handleNextSlide = () => {
            setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1));
        };

        const timeout = setTimeout(handleNextSlide, delay);

        return () => clearTimeout(timeout);
    }, [index]);
    useEffect(() => {
        // Update autoplay parameters based on hover state
        setAutoplayParams(hover ? { delay: 7000, disableOnInteraction: true } : { delay: 2500, disableOnInteraction: false });
    }, [hover]);
    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <div className="slideshow"
        // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <div className='show750px'>
                <Swiper
                    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    className="slideshowSlider swiper_container rounded-0 shadow-6-strong"
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={hover ? false : { delay: 2500 }}
                    // autoplay={hover === true ? false : { delay: 300 }}
                    autoplay={autoplayParams}
                    slidesPerView={2}
                    coverflowEffect={{
                        rotate: 60,
                        stretch: 10,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {colors.map((data, idx) => (
                        <SwiperSlide className="slide imageShadow text-white mb-3" key={idx}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <center className=''>
                                <center className='text-white alert bg-black rounded-0 mb-0'>{data.info}</center>
                                <div className=''>
                                    <img
                                        // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                                        className={`${data.img === mi ? 'white !important' : 'bg-dark'} w-100 text-white rounded-4 `}
                                        src={data.img}
                                        style={{ background: `${data.img === mi ? 'white !important' : ''}`, transform: 'scale(1)', maxHeight: '350px', height: '40vh', minWidth: '400px', maxWidth: "", width: '-webkit-fill-available', color: 'white', filter: `${data.img === mi ? 'invert(1)' : ''}` }}
                                        alt={`Slide ${idx}`}
                                    />
                                </div>
                            </center>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev slider-arrow bg-black p-2">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow bg-dark p-2">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    {/* <center>
                    {colors.map((data, idx) => (
                        <div className="slide text-white mx-3" key={idx}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                            style={{ width: '5px', height: '5px',background:`${idx==index ? 'blue':'white'}` }}
                        >

                        </div>
                    ))}
                </center> */}
                </Swiper>
            </div>
            <div className='less1000px'>
                <Swiper
                    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    className="slideshowSlider swiper_container rounded-0 shadow-6-strong"
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={hover ? false : { delay: 2500 }}
                    // autoplay={hover === true ? false : { delay: 300 }}
                    autoplay={autoplayParams}
                    slidesPerView={1}
                    coverflowEffect={{
                        rotate: 10,
                        stretch: 10,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {colors.map((data, idx) => (
                        <SwiperSlide className="slide bg-black text-white" key={idx}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <center>
                                <center className='text-white alert bg-black rounded-0 mb-0'>{data.info}</center>
                                <img
                                    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                                    className={`${data.img === mi ? 'white !important' : 'bg-dark'} w-100 text-white `}
                                    src={data.img}
                                    style={{ background: `${data.img === mi ? 'white !important' : ''}`, transform: 'scale(1)', maxHeight: '350px', height: '40vh', minWidth: '400px', maxWidth: "", width: '-webkit-fill-available', color: 'white', filter: `${data.img === mi ? 'invert(1)' : ''}` }}
                                    alt={`Slide ${idx}`}
                                />
                            </center>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev slider-arrow bg-black p-2">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow bg-dark p-2">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    {/* <center>
                    {colors.map((data, idx) => (
                        <div className="slide text-white mx-3" key={idx}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                            style={{ width: '5px', height: '5px',background:`${idx==index ? 'blue':'white'}` }}
                        >

                        </div>
                    ))}
                </center> */}
                </Swiper>
            </div>
        </div>
    );
}

export default AutomaticImageSlider;
