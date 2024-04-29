import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const handleCall = (number) => {
        const phoneNumber = parseInt(number); // Replace this with the phone number you want to call
        window.open(`tel:+91${phoneNumber}`);
    };
    return (
        <div className='text-white bg-dark container'>
            <div className='text-white pt-2 d-flex align-items-start justify-content-between' style={{ display: '' }} data-aos="slide-right" data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='1000' data-aos-mirror='false'>
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://wa.me/+918005183363'><b class="bi bi-whatsapp"> Whatsapp</b> </Link>
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://www.instagram.com/slogfy?igsh=MXdraDhpbzlxaHk1Zg=='><b class="bi bi-instagram"> Instagram</b> </Link>
                {/* <Link className='text-decoration-none text-white' target='__blank' to='https://Slogfy@gmail.com'><b class="bi fs-3 bi-envelope-at"></b></Link> */}
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://www.facebook.com/slogfy'><b class="bi bi-facebook"> Facebook</b> </Link>
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://www.linkedin.com/company/slogfy/'><b class="bi bi-linkedin"> LinkedIn</b> </Link>
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://x.com/slogfy?t=7W11e-jgtl8NoIiFlBllQQ&s=09'><b class="bi bi-twitter-x px-1"> Twitter</b> </Link>
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://youtube.com/@slogfy8260'><b class="bi bi-youtube"> YouTube</b>
                </Link>
            </div>
            <hr />
            <Link to="https://maps.app.goo.gl/4eqS6DdxRkrgA5Rt5" target='__blank' className='text-decoration-none'>
                <b class="bi fs-3 bi-globe-americas"></b> &nbsp;Address: F-76, near saket metro, Saidulajab, DDA Flats, Munirka, New Delhi, Delhi 110030
            </Link>
            <hr />
            <div>
                <span className='fs-5 d-flex align-items-center pe-3'><strong className='fs-6'>Owner: +91-8005183363</strong> &nbsp;<button className='btn rounded-0 py-1 fw-bold' style={{ background: '#ff5722' }} onClick={e => handleCall(8005183363)}>Call Now</button></span>
            </div>
            <hr />
            <sm className='text-dark'>Website Designed and Created by <b>Anirudh Kala, 7668490213, anirudhkala110@gmail.com</b></sm>
        </div>
    )
}

export default Footer