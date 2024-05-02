import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

axios.defaults.withCredentials = true
const Query = (type) => {
    const [modtype, setMtype] = useState()
    useEffect(() => {
        if (type.value === 'Support') {
            setMtype(type.value)
        }
        else {
            setMtype('FAQ')
        }
    })
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
            console.log(name, mobile, email, query, date, time, id, modtype)
            axios.post('http://localhost:5090/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id, type: modtype })
                //   axios.post('https://api.legalbrother.in/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id })
                .then(res => {
                    console.log(res)
                    if (res.data.success) {
                        alert("Your  Query Has been saved.\nNow you are redirecting to the Homepage. . .")
                        window.location.href = '/'
                    }
                    else {
                        alert("Sorry, not able to send your query.\nTry again after some time.")
                    }
                })
                .catch(err => console.log(err))
            // emailjs.sendForm('service_j5cbb74', 'template_x4fuopb', form.current, 'A7Zgb_4LO8WMThAjR')
            //     .then((result) => {
            //         alert("Your  message ✉ Has been sent.\nNow you are redirecting to the Homepage. . .")
            //         navigate('/')
            //     }, (error) => {
            //         alert("Sorry, not able to send your query.\nTry again after some time.")
            //         console.log(error.text);
            //     });
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
                    {/* <div className="btn btn-warning border-0 w-100 rounded-0 fw-bolder mb-2 call-btn" id="call" onClick={() => handleRoute('home')}>Home</div> */}
                </form>
            </div>
        </>
    );
};

export default Query;