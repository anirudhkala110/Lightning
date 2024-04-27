import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const handleCall = (number) => {
        const phoneNumber = parseInt(number); // Replace this with the phone number you want to call
        window.open(`tel:+91${phoneNumber}`);
    };
    return (
        <div className='text-white bg-dark container'>
            <div className='text-white pt-3'>
                <Link to='https://wa.me/+918005183363' className='text-decoration-none' target='_blank'>
                    <i class="bi bi-instagram fs-4 "></i>&nbsp;&nbsp;
                </Link>
                <Link to='https://wa.me/+918005183363' className='text-decoration-none' target='_blank'>
                    <i class="bi bi-facebook fs-4 "></i>&nbsp;&nbsp;
                </Link>
                <Link to='https://wa.me/+918005183363' className='text-decoration-none' target='_blank'>
                    <i class="bi bi-messenger fs-4 "></i>&nbsp;&nbsp;
                </Link>
                <Link to='https://wa.me/+918005183363' className='text-decoration-none' target='_blank'>
                    <i class="bi bi-whatsapp fs-4 "></i>&nbsp;&nbsp;
                </Link>
                <Link to='https://wa.me/+918005183363' className='text-decoration-none' target='_blank'>
                    <i class="bi bi-meta fs-4 "></i>&nbsp;&nbsp;
                </Link>
            </div>
            <hr />
            <div className=''>
                <i class="bi bi-geo"></i> &nbsp;Address: F-76, near saket metro, Saidulajab, DDA Flats, Munirka, New Delhi, Delhi 110030
            </div>
            <hr />
            <div>
                <span className='fs-5 d-flex align-items-center pe-3'><strong className='fs-6'>Owner: +91-8005183363</strong> &nbsp;<button className='btn rounded-0 py-1 fw-bold' style={{ background: '#ff5722' }} onClick={e => handleCall(8005183363)}>Call Now</button></span>
            </div>
            <hr />
        </div>
    )
}

export default Footer