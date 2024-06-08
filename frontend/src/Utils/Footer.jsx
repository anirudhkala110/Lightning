import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../Images/Logo.png'

const Footer = () => {
    const handleCall = (number) => {
        const phoneNumber = parseInt(number); // Replace this with the phone number you want to call
        window.open(`tel:+91${phoneNumber}`);
    };
    return (
        <div className='bg-black container-fluid py-3' style={{ borderTop: "1px solid rgb(72 145 255)", boxShadow: '0px 0px 25px 1px #5388e2' }}>

            <div className='footerMorethan1000px'>
                <div className='text-white'>
                    <div className='' >
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='p-1 d-flex align-items-center'>
                                <img src={logo} className='rounded-circle' style={{ width: '30px', height: '30px', filter: 'drop-shadow(0px 0px 33px #9db7d5)', boxShadow: " black 0px 0px 1px 2px", }} />
                                &nbsp;
                                <strong className='fs-2' style={{ letterSpacing: '3px' }}>Slogify</strong>
                            </div>
                            <div>
                                <a href='/'><button className='btn btn-outline-primary mx-2 border-0 rounded-0'>Home</button></a>
                                <NavLink to='/about'><button className='btn btn-outline-primary mx-2 border-0 rounded-0'>About</button></NavLink>
                                <NavLink to='/support' ><button className='btn btn-outline-primary mx-2 border-0 rounded-0'>Support</button></NavLink>
                            </div>
                        </div>
                        <hr />
                        <div className='py-3 d-flex align-items-center justify-content-center'
                        // style={{ borderTop: "1px solid gray" }}
                        >
                            <div>
                                <center className=" rounded-0 p-2" style={{ borderBottom: '2px solid blue !important', borderRight: '0px', borderLeft: '0px', borderTop: '0px', cursor: '' }}>Connect Via</center>
                                <div className='text-white py-2 d-flex align-items-center justify-content-center'
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
                            </div>
                        </div>
                        <div className='pb-2'
                        // style={{ borderBottom: "1px solid gray" }}
                        >
                            <div className='d-flex justify-content-center'>
                                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCZFQPHXCckjMhFzDBnRjqZchGtLrMPXTVFRSJpVcxfZPnJBHLFpvfnVgPLvTCjSCFvkncB" target='__blank' className='text-decoration-none'>
                                    <span className='d-flex align-items-start pe-3'>
                                        <div className='text-white'>
                                            Gmail:
                                        </div> &nbsp;
                                        <div className='rounded-0 text-warning' >
                                            Slogfy@gmail.com ✉️
                                            {/* <b className='bi bi-envelope'></b> */}
                                        </div>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <NavLink to="https://maps.app.goo.gl/4eqS6DdxRkrgA5Rt5" target='__blank' className='text-decoration-none text-white d-flex'>
                                <i class="bi bi-pin-map-fill me-1 fw-bold fs-6"></i>
                                <strong>Address: F-76, near saket metro, Saidulajab, DDA Flats, Munirka, New Delhi, Delhi 110030</strong>
                            </NavLink>
                        </div>
                        <hr />
                        <center className=''>

                            <div>
                                &copy; 2021, Slogify.

                                <button className='mx-2 termPrivacyButton' style={{ borderBottom: '1px solid gray' }}>Terms</button>
                                <button className='mx-2 termPrivacyButton' style={{ borderBottom: '1px solid gray' }}>Privacy</button>
                            </div>
                        </center>
                    </div >
                </div>
            </div>
            {/* <sm className='text-dark'>Website Designed and Created by <b>Anirudh Kala, 7668490213, anirudhkala110@gmail.com</b></sm> */}
            <div className='footerLess1000px'>
                <div className='text-white'>
                    <center>
                        <img src={logo} className='rounded-circle' style={{ width: '80px', filter: 'drop-shadow(0px 0px 33px #9db7d5)', boxShadow: " black 0px 0px 1px 2px", }} />
                        <br />
                        <strong className='fs-3' style={{ letterSpacing: '3px' }}>Slogify</strong>

                        <div>
                            <a href='/'><button className='btn btn-outline-primary mx-2 border-0 rounded-0'>Home</button></a>
                            <NavLink to='/about'><button className='btn btn-outline-primary mx-2 border-0 rounded-0'>About</button></NavLink>
                            <NavLink to='/support' ><button className='btn btn-outline-primary mx-2 border-0 rounded-0'>Support</button></NavLink>
                        </div>
                        <div className='py-3'
                        // style={{ borderTop: "1px solid gray" }}
                        >
                            <span className=" rounded-0 p-2" style={{ borderBottom: '2px solid blue !important', borderRight: '0px', borderLeft: '0px', borderTop: '0px', cursor: '' }}
                            // style={{ borderBottom: "2px solid gray" }}
                            >Connect Via</span>
                            <div className='text-white py-2 d-flex align-items-center justify-content-center'
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
                        </div>
                        <div className='pb-2'
                        // style={{ borderBottom: "1px solid gray" }}
                        >
                            <div className='d-flex justify-content-center'>
                                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCZFQPHXCckjMhFzDBnRjqZchGtLrMPXTVFRSJpVcxfZPnJBHLFpvfnVgPLvTCjSCFvkncB" target='__blank' className='text-decoration-none'>
                                    <span className='d-flex align-items-start pe-3'>
                                        <div className='text-white'>
                                            Gmail:
                                        </div> &nbsp;
                                        <div className='rounded-0 text-warning' >
                                            Slogfy@gmail.com ✉️
                                            {/* <b className='bi bi-envelope'></b> */}
                                        </div>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <NavLink to="https://maps.app.goo.gl/4eqS6DdxRkrgA5Rt5" target='__blank' className='text-decoration-none text-white d-flex'>
                                <i class="bi bi-pin-map-fill me-1 fw-bold fs-4"></i>
                                <strong>Address: F-76, near saket metro, Saidulajab, DDA Flats, Munirka, New Delhi, Delhi 110030</strong>
                            </NavLink>
                        </div>
                        <hr />
                        <div>
                            <p>
                                &copy; 2021, Slogify.
                            </p>
                            <button className='mx-2 termPrivacyButton' style={{ borderBottom: '1px solid gray' }}>Terms</button>
                            <button className='mx-2 termPrivacyButton' style={{ borderBottom: '1px solid gray' }}>Privacy</button>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Footer