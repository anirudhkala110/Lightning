import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const handleCall = (number) => {
        const phoneNumber = parseInt(number); // Replace this with the phone number you want to call
        window.open(`tel:+91${phoneNumber}`);
    };
    return (
        <div className='bg-black container-fluid'>
            <div className='border-bottom my-1 text-white py-2 d-flex align-items-start justify-content-start' style={{ display: '' }}
            // data-aos="slide-down" data-aos-delay='100' data-aos-anchor-easing='ease-in' data-aos-duration='1000' data-aos-mirror='false'
            >
                <Link className='hoveringEffect text-decoration-none me-2 text-white' target='__blank' to='https://wa.me/+918005183363'><b class="bi bi-whatsapp"> <b className='hideUnder600px utube'></b></b> </Link>
                <Link className='hoveringEffect text-decoration-none me-2 text-white' target='__blank' to='https://www.instagram.com/slogfy?igsh=MXdraDhpbzlxaHk1Zg=='><b class="bi bi-instagram"> <b className='hideUnder600px utube'></b></b> </Link>
                {/* <Link className='text-decoration-none text-white' target='__blank' to='https://Slogfy@gmail.com'><b class="bi fs-3 bi-envelope-at"></b></Link> */}
                <Link className='hoveringEffect text-decoration-none me-2 text-white' target='__blank' to='https://www.facebook.com/slogfy'><b class="bi bi-facebook"> <b className='hideUnder600px utube'></b></b> </Link>
                <Link className='hoveringEffect text-decoration-none me-2 text-white' target='__blank' to='https://www.linkedin.com/company/slogfy/'><b class="bi bi-linkedin"> <b className='hideUnder600px utube'></b></b> </Link>
                <Link className='hoveringEffect text-decoration-none me-2 text-white' target='__blank' to='https://x.com/slogfy?t=7W11e-jgtl8NoIiFlBllQQ&s=09'><b class="bi bi-twitter-x "> <b className='hideUnder600px utube'></b></b> </Link>
                {/* <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to=''><b class="bi bi-twitter-x "> <b className='hideUnder600px utube'>Twitter</b></b> </Link> */}
                <Link className='hoveringEffect text-decoration-none me-2 text-white' target='__blank' to='https://youtube.com/@slogfy8260'><b class="bi bi-youtube"> <b className='hideUnder600px utube'></b></b>
                </Link>
                {/* <Link className='hoveringEffect text-decoration-none text-white' target='__blank' to='https://Slogfy@gmail.com'><b class="bi bi-envelope-at"> <b className='hideUnder600px utube'>Gmail</b></b>
                </Link> */}
            </div>
            <Link to="https://maps.app.goo.gl/4eqS6DdxRkrgA5Rt5" target='__blank' className='text-decoration-none'>
                <b class="bi fs-3 bi-globe-americas"></b> &nbsp;Address: F-76, near saket metro, Saidulajab, DDA Flats, Munirka, New Delhi, Delhi 110030
            </Link>
            <div>
                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCZFQPHXCckjMhFzDBnRjqZchGtLrMPXTVFRSJpVcxfZPnJBHLFpvfnVgPLvTCjSCFvkncB" target='__blank' className='text-decoration-none'>
                    <span className='fs-5 d-flex align-items-center pe-3'><strong className='fs-6'>Gmail: </strong> &nbsp;<button className='btn rounded-0 py-1 text-white fw-bold' >Slogfy@gmail.com</button></span>
                </Link>

                {/* <span className='fs-5 d-flex align-items-center pe-3'><strong className='fs-6'>Gmail: </strong> &nbsp;<button className='btn rounded-0 py-1 fw-bold' style={{ background: '#ff5722' }} >Slogfy@gmail.com</button></span> */}
            </div>
            <br />
            {/* <sm className='text-dark'>Website Designed and Created by <b>Anirudh Kala, 7668490213, anirudhkala110@gmail.com</b></sm> */}
        </div>
    )
}

export default Footer