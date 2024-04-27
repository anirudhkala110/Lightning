import React, { useState, useEffect, useRef } from 'react';
import Logo from './frst.png'
import cANDvisit from './CommAndVisit.jpg'
import custSat from './customerSatisfaction.jpg'
import DivCollection from './DiverseCollection.jpg'
import Intro from './intro.jpg'
import Navigation from './navigation.jpg'
import JoinUs from './JoinUs.jpg'
import mi from './MI.svg'
import one from './1.png'
import two from './2T.png'
import tre from './3.png'
import fr from './4.jpg'
import fv from './5.jpg'
import six from './6.jpg'
import svn from './7.jpg'
import eth from './8.jpg'
import nin from './9.jpg'
import elv from './11.jpg'
import tlv from './12.jpg'
import trln from './13.jpg'
import frtn from './14.jpg'
import fvtn from './15.jpg'
import sxtn from './16.jpg'
import svtn from './17.jpg'
import etn from './18.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const colors = [one, two, tre, fr, six, svn, eth, nin, elv, tlv, trln, frtn,
    fvtn, sxtn, svtn, etn, DivCollection, Intro, Navigation, mi];
const delay = 1000;

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
                {colors.map((backgroundColor, idx) => (
                    <div
                        className="slide text-white"
                        key={idx}
                    // style={{ backgroundColor }}
                    >
                     {/*<center className='w-100 bg-dark alert rounded-0'>Detail of the Image</center>*/}
                        {
                            <img className=' w-100 text-white bg-white shadow-lg' src={backgroundColor} style={{ maxHeight: '450px', height: '100%', minWidth: '400px', maxWidth: "", width: '-webkit-fill-available', color: 'white' }} /> ? <img className=' w-100 text-white bg-white mt-1' src={backgroundColor} style={{ maxHeight: '450px', height: '100%', minWidth: '400px', maxWidth: "", width: '-webkit-fill-available', color: 'white' }} /> : 'No More Images'
                        }
                        {/* data-aos="slide-left" data-aos-delay={1000*idx} data-aos-anchor-easing='ease-in' data-aos-duration='1000' data-aos-mirror='true'/> */}
                    </div>
                ))}
            </div>
            <br />
            <div className="slideshowDots d-flex w-100" style={{ overflow: 'auto',filter:'invert(1)' }}>
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
