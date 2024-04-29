import React, { useState, useEffect, useRef } from 'react';
import Intro from './intro.jpg'
import Navigation from './navigation.jpg'
import mi from './MI.svg'
import SLS from './SLS.png'
import SSL from './SSL.jpg'
import fv from './frst.png'
import six from './6.jpg'
import svn from './7.jpg'
import eth from './8.jpg'
import SSAE from './SSAE.png'
import SSE from './SSE.jpg'
import tlv from './12.jpg'
import trln from './13.jpg'
import frtn from './14.jpg'
import CHA from './CHA.jpg'
import sxtn from './homeAutomationUsingMotion.jpg'
import svtn from './17.jpg'
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
    { img: mi, info: ' Automation Your Home Using Matter Protocol' }
];
const delay = 3000;

function AutomaticImageSlider() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (index <= colors.length) {
            const resetTimeout = () => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
            };

            const handleNextSlide = () => {
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                );
            };
            // console.log(index, colors.length)
            if (index >= colors.length - 1) {
                // clearTimeout(timeoutRef.current);
                return; // Stop the useEffect if index exceeds colors.length
            }
            else {
                resetTimeout();
                timeoutRef.current = setTimeout(handleNextSlide, delay);

                return () => {
                    resetTimeout();
                };
            }
        }
    }, [index]);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current); // Pause the slideshow
    };
    const handleMouseLeave = () => {
        // Resume the slideshow only if index is less than colors.length
        if (index < colors.length) {
            timeoutRef.current = setTimeout(
                () => setIndex((prevIndex) => prevIndex + 1),
                delay
            );
        }
    };

    return (
        <div className="slideshow"
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
                    // style={{ backgroundColor }}
                    >
                        <center className='w-100 text-white alert bg-dark rounded-0'>{data.info}</center>
                        {
                            <img className=' w-100 text-white bg-dark shadow-lg' src={data.img} style={{ maxHeight: '450px', height: '100%', minWidth: '400px', maxWidth: "", width: '-webkit-fill-available', color: 'white' }} /> ? <div className='bg-dark' style={{ color: "white", maxHeight: '450px', height: '100%', minWidth: '400px', maxWidth: "", width: '-webkit-fill-available', color: 'white' }}><img className=' w-100 text-white py-2' src={data.img} style={{ color: "white", maxHeight: '450px',filter:`${data.img==mi?'invert(1)':'invert(0)'}`, height: '100%', minWidth: '400px', maxWidth: "", width: '-webkit-fill-available', color: 'white' }} /></div> : 'No More Images'
                        }
                        {/* data-aos="slide-left" data-aos-delay={1000*idx} data-aos-anchor-easing='ease-in' data-aos-duration='1000' data-aos-mirror='true'/> */}
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
