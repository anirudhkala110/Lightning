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
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://wa.me/+918005183363'><i class="bi bi-whatsapp"> Whatsapp</i> </Link>
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://www.instagram.com/slogfy?igsh=MXdraDhpbzlxaHk1Zg=='><i class="bi bi-instagram"> Instagram</i> </Link>
                {/* <Link className='text-decoration-none text-white' target='__blank' to='https://Slogfy@gmail.com'><i class="bi fs-3 bi-envelope-at"></i></Link> */}
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://www.facebook.com/slogfy'><i class="bi bi-facebook"> Facebook</i> </Link>
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://www.linkedin.com/company/slogfy/'><i class="bi bi-linkedin"> LinkedIn</i> </Link>
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://x.com/slogfy?t=7W11e-jgtl8NoIiFlBllQQ&s=09'><i class="bi bi-twitter-x px-1"> Twitter</i> </Link>
                <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://youtube.com/@slogfy8260'><i class="bi bi-youtube"> YouTube</i>
                </Link>
            </div>
            <hr />
            <Link to="https://maps.app.goo.gl/4eqS6DdxRkrgA5Rt5" target='__blank' className='text-decoration-none'>
                <i class="bi fs-3 bi-globe-americas"></i> &nbsp;Address: F-76, near saket metro, Saidulajab, DDA Flats, Munirka, New Delhi, Delhi 110030
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