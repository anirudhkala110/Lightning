import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

import { Swiper, SwiperSlide } from 'swiper/react';

import './Swiper.css'

const colors = [
    { img: fv, info: "Complete Home Automation Using Matter Protocols" },
    { img: CHA, info: "Complete Home Automation Using Matter Protocols and Smart Phone" },
    { img: SSL, info: "Smart Lights and Switches Using Matter Protocols" },
    { img: six, info: 'Smart Display Control' },
    { img: SLS, info: 'Smart Light and Switches, controled by one click' },
    { img: svn, info: 'Control AC, Fans from Anywhere' },
    { img: eth, info: 'Get the Latest Update of Security' },
    { img: tlv, info: 'Control Your Home System Through Voice' },
    { img: trln, info: 'Smart LED Lights and Displays Systems' },
    { img: frtn, info: 'System for automate washing Machines' },
    { img: sxtn, info: 'Control and Automate Home From your motion' },
    { img: svtn, info: 'Get Video Updates on Smart Devices' },
    { img: SSAE, info: 'Smart Emergency Monitoring, Voice controled and Automated by Matter Protocol' },
    { img: SSE, info: 'Smart Security and Monitoring, controled and Automated by Matter Protocol' },
    { img: Intro, info: 'Get room Temperature Updates and Set your Fan to maintain a fix Room Temperature on your Demand' },
    { img: Navi, info: 'Control Your Complete Home Devices by single touch' },
    { img: MID, info: ' Connecting all in one.' },
    { img: mi, info: ' Automation Your Home Using Matter Protocol' }
];

const SwiperImageSlider = () => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={fv} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SSL} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SLS} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={frtn} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fv} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SSAE} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SSE} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}

export default SwiperImageSlider