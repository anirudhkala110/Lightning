import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';
import Query from '../../Query/Query';

axios.defaults.withCredentials = true
const Support = () => {
  const type = 'Support'
  return (
    <>
      <Helmet>
        <title>Slogify - Support</title>
        <meta name='description' content='Query abuout any process, Subject, topic, and Cunsultaion' />
        <meta name='keywords' content='Contact Us' />
      </Helmet>
      <div className=" container min-vh-100 pt-3">
        <center className="fs-3 text-primary border-bottom py-3 fw-semibold alert rounded-0" style={{ letterSpacing: '1px', wordSpacing: '5px' }}>CONTACT US ✉</center>
        <div className="px-5 py-1 container min-vh-100">
          <div className="my-3">
            <center> <i className="bi bi-exclamation-triangle-fill text-warning me-1"></i> If you have any questions or require our assistance, Get in touch with <a href='/' className='text-primary text-decoration-none fw-bolder'>Slogify</a>. We are here to help you.</center>
          </div>
          <hr />

          <center><h1>Ask Query ? </h1></center>
          <hr />
          <div className="row">
            {/* <div className="border bg-dark col-lg-6 col-xl-6 my-2 py-2 col-sm-12 d-flex align-items-center justify-content-center " style={{ height: "470px", maxWidth: '550px' }}>
              <img src={csc} className="contactUsBG" alt="Contact Us" />
            </div> */}
            <Query value={type} />
            {/* <hr /> */}
            {/* <div className='container'>
              {/* <center className='fs-2 text-info'>Contact Us</center> 
              <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                {/* <div className='w-100 border my-3 border-secondary' /> 
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' onClick={e => handleCall(8005183363)} style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-telephone-outbound"></i><div><span className='d-flex align-items-center pe-3'><strong className='' style={{ fontSize: '12px' }}>Owner: +91-8005183363</strong> <button className='btn rounded-0  text-white py-1' onClick={e => handleCall(8005183363)}>Call Now</button></span></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://wa.me/+918005183363'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-whatsapp"></i><div><Link to='https://wa.me/+918005183363' className='text-decoration-none text-white' target='_blank'>Whatsapp: 8005183363</Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://www.instagram.com/Slogify?igsh=MXdraDhpbzlxaHk1Zg=='><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-instagram"></i><div><Link to='https://www.instagram.com/Slogify?igsh=MXdraDhpbzlxaHk1Zg==' className='text-decoration-none text-white' target='_blank'>Instagram: Slogify</Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://Slogify@gmail.com'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-envelope-at"></i><div><Link to='https://Slogify@gmail.com' className='text-decoration-none text-white' target='_blank'>Gmail: Slogify@gmail.com</Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://www.facebook.com/Slogify'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-facebook"></i><div><Link to='https://www.facebook.com/Slogify' className='text-decoration-none text-white' target='_blank'>Facebook: Slogify </Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://www.linkedin.com/company/Slogify/'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-linkedin"></i><div><Link to='https://www.linkedin.com/company/Slogify/' className='text-decoration-none text-white' target='_blank'>LinkedIn: Slogify</Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://x.com/Slogify?t=7W11e-jgtl8NoIiFlBllQQ&s=09'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-twitter-x"></i><div><Link to='https://x.com/Slogify?t=7W11e-jgtl8NoIiFlBllQQ&s=09' className='text-decoration-none text-white' target='_blank'>Twiter: @Slogify</Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://youtube.com/@Slogify8260'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-youtube"></i><div><Link to='https://youtube.com/@Slogify8260' className='text-decoration-none text-white' target='_blank'>YouTube: @Slogify8260</Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                <Link to="https://maps.app.goo.gl/4eqS6DdxRkrgA5Rt5" className='text-decoration-none text-white' target='__blank' ><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><div className='' style={{ fontSize: '' }}><i class="bi fs-3 bi-globe-americas"></i> &nbsp;Address: F-76, near saket metro, Saidulajab, DDA Flats, Munirka, New Delhi, Delhi 110030</div></div></div>
                </Link>
              </div>
                <img src={custSat} className='homehover col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' /> 
              </div>
            </div> */}
          </div>
          {/* <hr /> */}
        </div>
      </div>
    </>
  );
};

export default Support;