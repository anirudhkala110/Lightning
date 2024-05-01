import React, { useRef, useEffect, useState } from 'react';
import Intro from './intro.jpg';
import Navigation from './navigation.jpg';
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
    { img: Navigation, info: 'Control Your Complete Home Devices by single touch' },
    { img: MID, info: ' Connecting all in one.' },
    { img: mi, info: ' Automation Your Home Using Matter Protocol' }
];
const delay = 3000;

function AutomaticImageSlider() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleNextSlide = () => {
            setIndex((prevIndex) => (prevIndex === colors.length - 1 ? colors.length - 1  : prevIndex + 1));
        };

        const startSlideshow = () => {
            timeoutRef.current = setTimeout(handleNextSlide, delay);
        };

        const stopSlideshow = () => {
            clearTimeout(timeoutRef.current);
        };
        // if(index==)

        startSlideshow();

        return () => {
            stopSlideshow();
        };
    }, [index]);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1));
        }, delay);
    };

    return (
        <div className="slideshow mt-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer' }}
        >
            <div
                className="slideshowSlider rounded-0 shadow-6-strong"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((data, idx) => (
                    <div
                        className="slide text-white"
                        key={idx}
                    >
                        <center className='w-100 text-white alert bg-dark rounded-0 mb-0'>{data.info}</center>
                        <center>
                            <img className={`${data.img==mi?'white !important':'bg-dark'} w-100 text-white `} src={data.img} style={{ background:`${data.img==mi?'white !important':''}`,maxHeight: '400px', height: '100%', minWidth: '400px', maxWidth: "550px", width: '-webkit-fill-available', color: 'white',filter:`${data.img==mi?'invert(1)':''}` }} />
                        </center>
                    </div>
                ))}
            </div>
            <br />
            <div className="slideshowDots d-flex w-100" style={{ overflow: 'auto', filter: 'invert(0)' }}>
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        style={{ width: '200px' }}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default AutomaticImageSlider;
