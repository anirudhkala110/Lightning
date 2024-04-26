import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, infinite, speed = 100, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let interval;

        if (text.length > displayText.length) {
            interval = setInterval(() => {
                setDisplayText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, speed);
        } else if (infinite) {
            interval = setInterval(() => {
                setDisplayText('');
                setCurrentIndex(0);
            }, delay);
        }

        return () => clearInterval(interval);

    }, [currentIndex, displayText.length, speed, text, infinite, delay]);

    return <span dangerouslySetInnerHTML={{ __html: displayText }}></span>;
};

export default Typewriter;
