import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const handleCall = (number) => {
        const phoneNumber = parseInt(number); // Replace this with the phone number you want to call
        window.open(`tel:+91${phoneNumber}`);
    };
    return (
        <div className='text-white bg-dark container'>
            <div className='text-white pt-2 d-flex align-items-start justify-content-between' style={{ display: '' }} data-aos="fade-up" data-aos-delay='10' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='false'>
                <Link className='text-decoration-none text-white' target='__blank' to='https://wa.me/+918005183363'><i class="bi fs-3 bi-whatsapp"></i></Link>
                <Link className='text-decoration-none text-white' target='__blank' to='https://www.instagram.com/slogfy?igsh=MXdraDhpbzlxaHk1Zg=='><i class="bi fs-3 bi-instagram"></i></Link>
                {/* <Link className='text-decoration-none text-white' target='__blank' to='https://Slogfy@gmail.com'><i class="bi fs-3 bi-envelope-at"></i></Link> */}
                <Link className='text-decoration-none text-white' target='__blank' to='https://www.facebook.com/slogfy'><i class="bi fs-3 bi-facebook"></i></Link>
                <Link className='text-decoration-none text-white' target='__blank' to='https://www.linkedin.com/company/slogfy/'><i class="bi fs-3 bi-linkedin"></i></Link>
                <Link className='text-decoration-none text-white' target='__blank' to='https://x.com/slogfy?t=7W11e-jgtl8NoIiFlBllQQ&s=09'><i class="bi fs-3 bi-twitter-x"></i></Link>
                <Link className='text-decoration-none text-white' target='__blank' to='https://youtube.com/@slogfy8260'><i class="bi fs-3 bi-youtube"></i>
                </Link>
            </div>
            <hr />
            <Link to="https://www.google.com/maps/dir/25.6002237,83.6027452/slogfy/@26.8630207,75.0915494,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390ce1fad4ebf025:0x5c77723190c86583!2m2!1d77.1729745!2d28.5508758?entry=ttu" className='text-decoration-none'>
                <i class="bi fs-3 bi-globe-americas"></i> &nbsp;Address: F-76, near saket metro, Saidulajab, DDA Flats, Munirka, New Delhi, Delhi 110030
            </Link>
            <hr />
            <div>
                <span className='fs-5 d-flex align-items-center pe-3'><strong className='fs-6'>Owner: +91-8005183363</strong> &nbsp;<button className='btn rounded-0 py-1 fw-bold' style={{ background: '#ff5722' }} onClick={e => handleCall(8005183363)}>Call Now</button></span>
            </div>
            <hr />
        </div>
    )
}

export default Footer
