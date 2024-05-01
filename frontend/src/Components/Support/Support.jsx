import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';
import csc from './Customer_service_chat.gif'

axios.defaults.withCredentials = true
const Support = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [name, setName] = useState()
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState()
  const [query, setQuery] = useState()
  const [finalquery, setFQuery] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [id, setId] = useState()
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const handleSubmit = (e) => {
    setDate(currentDate)
    setTime(currentTime)
    setId(Date.now())
    e.preventDefault();
    if (name === '' || !name || mobile === '' || !mobile || email === '' || !email || query === '' || !query) {
      alert("Please Enter All the Fields")
    }
    else {
      // axios.post('https://localhost:8099/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id })
      //   //   axios.post('https://api.legalbrother.in/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id })
      //   .then(res => {
      //     console.log(res)
      //     if (res.data.success) {
      //       alert("Your  Query Has been saved.\nNow you are redirecting to the Homepage. . .")
      //       window.location.href = '/'
      //     }
      //     else {
      //       alert("Sorry, not able to send your query.\nTry again after some time.")
      //     }
      //   })
      //   .catch(err => console.log(err))
      emailjs.sendForm('service_j5cbb74', 'template_x4fuopb', form.current, 'A7Zgb_4LO8WMThAjR')
        .then((result) => {
          alert("Your  message ✉ Has been sent.\nNow you are redirecting to the Homepage. . .")
          navigate('/')
        }, (error) => {
          alert("Sorry, not able to send your query.\nTry again after some time.")
          console.log(error.text);
        });
    }
  }

  const handleButtonClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleQuery = (e) => {
    setQuery(e.target.value)
    setDate(currentDate)
    setTime(currentTime)
    setFQuery(name + "\n" + email + "\n" + mobile + "\n" + date + "\n" + time + "\n" + 'Message is : ' + e.target.value)
  }
  const handleRoute = (route) => {
    navigate(`/${route}`)
  }
  const handleCall = (number) => {
    const phoneNumber = parseInt(number); // Replace this with the phone number you want to call
    window.open(`tel:+91${phoneNumber}`);
  };
  return (
    <>
      <Helmet>
        <title>Slogfy - Support</title>
        <meta name='description' content='Query abuout any process, Subject, topic, and Cunsultaion' />
        <meta name='keywords' content='Contact Us' />
      </Helmet>
      <div className="bg-black container min-vh-100 pt-3">
        <center className="fs-3 text-primary border-bottom py-3 fw-semibold alert rounded-0" style={{ letterSpacing: '1px', wordSpacing: '5px' }}>CONTACT US ✉</center>
        <div className="px-5 py-1 container" style={{ background: "rgba(0, 0, 0, 5%)", minHeight: "100vh" }}>
          <div className="my-3">
            <center> <i className="bi bi-exclamation-triangle-fill text-warning me-1"></i> If you have any questions or require our assistance, Get in touch with <a href='/' className='text-primary text-decoration-none fw-bolder'>Slogfy</a>. We are here to help you.</center>
          </div>
          <hr />

          <center><h1>Ask Question ? </h1></center>
          <hr />
          <div className="row col-12 contactUsBG ps-4">
            {/* <div className="border bg-dark col-lg-6 col-xl-6 my-2 py-2 col-sm-12 d-flex align-items-center justify-content-center " style={{ height: "470px", maxWidth: '550px' }}>
              <img src={csc} className="contactUsBG" alt="Contact Us" />
            </div> */}
            <div className="container pt-3 col-lg-6 col-xl-6 my-2 py-2 col-sm-12 pb-1">
              <form onSubmit={(e) => handleSubmit(e)} ref={form} >
                <div className="form-group text-secondary fw-bolder">
                  <label className="fw-bold" htmlFor="formGroupName">Name <sup className='text-danger'>*</sup></label>
                  <input type="text" className="form-control   text-light rounded-3 border-0  bg-dark" id="formGroupName" placeholder="Your Valid Name" name="user_name" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="form-group text-secondary fw-bolder">
                  <label className="fw-bold" htmlFor="formGroupMobile">Mobile Number<sup className='text-danger'>*</sup></label>
                  <input type="number" className="form-control   text-light rounded-3 border-0  bg-dark" id="formGroupMobile" placeholder="Mobile Number" name="mobile" value={mobile} onChange={e => setMobile(e.target.value)} required />
                </div>
                <div className="form-group text-secondary fw-bolder">
                  <label className="fw-bold" htmlFor="formGroupEmail">Email Address<sup className='text-danger'>*</sup></label>
                  <input type="email" className="form-control   text-light rounded-3 border-0  bg-dark" id="formGroupEmail" placeholder="Email Address" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="form-group text-secondary fw-bolder mb-2">
                  <label className="fw-bold" htmlFor="formGroupQuery">Messege<sup className='text-danger'>*</sup></label>
                  <textarea
                    type="text"
                    className="form-control   text-light rounded-3 border-0  bg-dark"
                    cols={30}
                    rows={5}
                    style={{ resize: "none" }}
                    id="formGroupQuery"
                    value={query}
                    onChange={e => handleQuery(e)}
                    placeholder={`✉ Enter your Message here`} required
                  />
                  <textarea name="message" value={finalquery} style={{ display: "none" }} />
                </div>
                <button type='submit' className="btn border-0 rounded-0 mb-2 fw-bolder send-mail btn-primary w-100" value="Send">Send Mail</button>
                {/* <div className="btn btn-success border-0 rounded-0 ms-2 mb-2 call-btn" id="call" onClick={() => handleCall(8005183363)}>Make a Call</div> */}
                <div className="btn btn-warning border-0 w-100 rounded-0 fw-bolder mb-2 call-btn" id="call" onClick={() => handleRoute('home')}>Home</div>
              </form>
            </div>
            <hr />
            <div className='container'>
              {/* <center className='fs-2 text-info'>Contact Us</center> */}
              <div className='px-2 row py-1' data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'>
                {/* <div className='w-100 border my-3 border-secondary' /> */}
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' onClick={e => handleCall(8005183363)} style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-telephone-outbound"></i><div><span className='d-flex align-items-center pe-3'><strong className='' style={{ fontSize: '12px' }}>Owner: +91-8005183363</strong> <button className='btn rounded-0  text-white py-1' onClick={e => handleCall(8005183363)}>Call Now</button></span></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://wa.me/+918005183363'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-whatsapp"></i><div><Link to='https://wa.me/+918005183363' className='text-decoration-none text-white' target='_blank'>Whatsapp: 8005183363</Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://www.instagram.com/slogfy?igsh=MXdraDhpbzlxaHk1Zg=='><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-instagram"></i><div><Link to='https://www.instagram.com/slogfy?igsh=MXdraDhpbzlxaHk1Zg==' className='text-decoration-none text-white' target='_blank'>Instagram: slogfy</Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://Slogfy@gmail.com'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-envelope-at"></i><div><Link to='https://Slogfy@gmail.com' className='text-decoration-none text-white' target='_blank'>Gmail: Slogfy@gmail.com</Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://www.facebook.com/slogfy'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-facebook"></i><div><Link to='https://www.facebook.com/slogfy' className='text-decoration-none text-white' target='_blank'>Facebook: SlogFy </Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://www.linkedin.com/company/slogfy/'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-linkedin"></i><div><Link to='https://www.linkedin.com/company/slogfy/' className='text-decoration-none text-white' target='_blank'>LinkedIn: Slogfy</Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://x.com/slogfy?t=7W11e-jgtl8NoIiFlBllQQ&s=09'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-twitter-x"></i><div><Link to='https://x.com/slogfy?t=7W11e-jgtl8NoIiFlBllQQ&s=09' className='text-decoration-none text-white' target='_blank'>Twiter: @slogfy</Link></div></div></div>
                  </Link>
                </div>
                <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                  <Link className='text-decoration-none text-white' target='__blank' to='https://youtube.com/@slogfy8260'><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '-webkit-fill-available' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><i class="bi fs-3 bi-youtube"></i><div><Link to='https://youtube.com/@slogfy8260' className='text-decoration-none text-white' target='_blank'>YouTube: @slogfy8260</Link></div></div></div>
                  </Link>
                </div>
                {/* <div className='homehover col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3 mb-3' style={{ height: '100px' }}>
                <Link to="https://maps.app.goo.gl/4eqS6DdxRkrgA5Rt5" className='text-decoration-none text-white' target='__blank' ><div className='homehoverTab bg-dark rounded-4 px-3 py-2 d-flex justify-content-between align-items-start' style={{ height: '' }}><div data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true'><div className='' style={{ fontSize: '' }}><i class="bi fs-3 bi-globe-americas"></i> &nbsp;Address: F-76, near saket metro, Saidulajab, DDA Flats, Munirka, New Delhi, Delhi 110030</div></div></div>
                </Link>
              </div> */}
                {/* <img src={custSat} className='homehover col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6' style={{ maxHeight: '300px' }} data-aos="fade-up" data-aos-delay='150' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' /> */}
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Support;