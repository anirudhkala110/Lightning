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
    const validateEmail = (email) => {
        console.log(email);

        // Split the email by '@'
        const atIndex = email.indexOf('@');
        console.log(atIndex)
        if (atIndex === -1) {
            return false; // No '@' character
        }

        const localPart = email.substring(0, atIndex);
        const domainPart = email.substring(atIndex + 1);
        console.log(localPart, domainPart)

        // Check if local part and domain part are non-empty
        if (!localPart || !domainPart) {
            return false;
        }

        // Split the domain part by '.'
        const dotIndex = domainPart.lastIndexOf('.');
        console.log(dotIndex)
        if (dotIndex === -1) {
            return false; // No '.' character
        }

        const domain = domainPart.substring(0, dotIndex);
        const topLevelDomain = domainPart.substring(dotIndex + 1);
        console.log(domain, topLevelDomain)

        // Check if domain and top-level domain are non-empty
        if (!domain || !topLevelDomain) {
            return false;
        }

        // Check if top-level domain has at least two characters
        console.log(topLevelDomain.length)
        if (topLevelDomain.length < 2) {
            return false;
        }

        // Check for invalid characters in local part
        const localPartValid = /^[a-zA-Z0-9._%+-]+$/.test(localPart);
        console.log(localPartValid)
        if (!localPartValid) {
            return false;
        }

        // Check for invalid characters in domain
        const domainValid = /^[a-zA-Z0-9.-]+$/.test(domain);
        console.log(domainValid)
        if (!domainValid) {
            return false;
        }

        return true;
    };

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
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMobile = (e) => {
        if (e.target.value.length <= 10)
            setMobile(e.target.value)
        else alert('Mobile Number cannot exceed...')
    }
    const handleSubmit = (e) => {
        setDate(currentDate)
        setTime(currentTime)
        setId(Date.now())
        e.preventDefault();
        if (e.target.value.length != 10)
            setMobile(e.target.value)
        else if (name === '' || name.length < 3 || !name || mobile === '' || !mobile || email === '' || !email || query === '' || !query) {
            alert("Please Enter All the Fields")
        }
        else if (!validateEmail(email)) {
            console.log('Validated Email...', validateEmail(email))
            alert("Enter the Email Correctly")
        }
        else {
            console.log(name, mobile, email, date, query)
            // console.log(name, mobile, email, query, date, time, id, modtype)
            // axios.post('http://localhost:5090/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id, type: modtype })
            //     //   axios.post('https://api.legalbrother.in/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id })
            //     .then(res => {
            //         console.log(res)
            //         if (res.data.success) {
            //             alert("Your  Query Has been saved.\nNow you are redirecting to the Homepage. . .")
            //             window.location.href = '/'
            //         }
            //         else {
            //             alert("Sorry, not able to send your query.\nTry again after some time.")
            //         }
            //     })
            //     .catch(err => console.log(err))
            emailjs.sendForm('service_lp4818p', 'template_cv9aadl', form.current, 'KIziC7gLpfq9dXvv7')
                .then((result) => {
                    alert("Your  message ✉ Has been sent.\nNow you are redirecting to the Homepage. . .")
                    navigate('/')
                }, (error) => {
                    alert("Sorry, not able to send your query.\nTry again after some time.")
                    console.log(error);
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
            <div className="container text-white pt-3 col-lg-6 col-xl-6 my-2 py-2 col-sm-12 pb-1">
                <form onSubmit={(e) => handleSubmit(e)} ref={form} >
                    <div className="form-group text-light fw-bolder">
                        <label className="fw-bold" htmlFor="formGroupName">Your Complete Name <sup className='text-danger'>*</sup></label>
                        <input type="text" className="form-control   text-light rounded-3 border-0  bg-dark" id="formGroupName" placeholder="Your Valid Name with surname" name="user_name" value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="form-group text-light fw-bolder">
                        <label className="fw-bold" htmlFor="formGroupMobile">Mobile Number<sup className='text-danger'>*</sup></label>
                        <input type="number" className="form-control   text-light rounded-3 border-0  bg-dark" id="formGroupMobile" placeholder="Mobile Number" name="mobile" value={mobile} onChange={handleMobile} required />
                    </div>
                    <div className="form-group text-light fw-bolder">
                        <label className="fw-bold" htmlFor="formGroupEmail">Email Address<sup className='text-danger'>*</sup></label>
                        <input type="email" className="form-control   text-light rounded-3 border-0  bg-dark" id="formGroupEmail" placeholder="Email Address" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group text-light fw-bolder mb-2">
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
