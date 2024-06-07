import React, { useEffect, useState } from 'react';

const Nav2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div 
                id="navbar" 
                style={{ 
                    padding: isScrolled ? '30px 10px' : '80px 10px', 
                    transition: 'padding 0.3s' 
                }}
            >
                <a 
                    href="#default" 
                    id="logo" 
                    style={{ 
                        fontSize: isScrolled ? '25px' : '35px', 
                        transition: 'font-size 0.3s' 
                    }}
                >
                    CompanyLogo
                </a>
                <div id="navbar-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </div>
    );
};

export default Nav2;
