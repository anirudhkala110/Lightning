import React, { useState, useEffect, useRef } from 'react';
import Logo from './frst.png'
import cANDvisit from './CommAndVisit.jpg'
import custSat from './customerSatisfaction.jpg'
import DivCollection from './DiverseCollection.jpg'
import Intro from './intro.jpg'
import Navigation from './navigation.jpg'
import JoinUs from './JoinUs.jpg'
import mi from './MI.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const colors = [Logo, cANDvisit, custSat, DivCollection, Intro, Navigation, JoinUs, mi];
const delay = 2500;

function AutomaticImageSlider() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
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

        resetTimeout();
        timeoutRef.current = setTimeout(handleNextSlide, delay);

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow pt-3">
            <div
                className="slideshowSlider rounded-0"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, idx) => (
                    <div
                        className="slide"
                        key={idx}
                        // style={{ backgroundColor }}
                    >
                        <span>Heading</span>
                        <br/>
                        <img className=' w-100 text-white bg-white' src={backgroundColor} style={{ maxHeight: '450px', height: '100%', minWidth: '400px', maxWidth: "600px", color: 'white' }}
                        // data-aos="slide-left" data-aos-delay={1000*idx} data-aos-anchor-easing='ease-in' data-aos-duration='1000' data-aos-mirror='true'
                        /></div>
                ))}
            </div>
<br/>
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
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
