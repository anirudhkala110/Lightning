import React, { useState } from 'react';
import axios from "axios"


import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true
function Register() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [cpassword, setRepeatpassword] = useState()
  const [retypePassword, setRetypePassword] = useState()
  const [alertMessage, setAlertMessage] = useState(null)
  const [alertColor, setAlertColor] = useState()
  const [OTP, setOTP] = useState()


  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
    const newPass = e.target.value
    const checker = password.slice(0, newPass.length)
    if (newPass.length === 0) {
      setAlertMessage(null);
    }
    else if (newPass === checker) {
      if (newPass.length === password.length) {
        setAlertMessage('Passwords match completely!');
      } else {
        setAlertMessage('Passwords match till now!');
      }
      setAlertColor('green');
    }
    else {
      setAlertMessage('Passwords do not match!');
      setAlertColor('red');
    }
  };

  const [phone, setphone] = useState()
  const [msg, setMsg] = useState()
  const [msg_type, setMsg_type] = useState()
  const [show1, setShow1] = useState(false)


  const HandleRegiserPage = (e) => {
    e.preventDefault()
    console.log(name, email, password, cpassword)
    axios.post('http://localhost:5090/register/email', { name: name, email: email, password: password, cpassword: cpassword, phone: phone })
      .then(res => {
        console.log(res)
        setMsg(res.data.msg)
        setMsg_type(res.data.msg_type)
      })
      .catch(err => {
        console.log(err)
      })

  }
  const [disableEmail, setDisableEmail] = useState(false)
  const [verified, setVerified] = useState(false)
  const [otpSent, setOtpSent] = useState(true)

  const handleSendOTP = (e) => {
    if (!email) {
      alert("Enter the Email First. . . ")
      return
    }
    const Confirm = window.confirm("Are you sure About Email Address, Please Check Again. You will not be able to change it again...")
    if (Confirm) {
      setDisableEmail(true)
      setOtpSent(false)
      e.preventDefault()
      axios.post('http://localhost:5090/verifyEmail', { email: email })
        .then(res => {
          setMsg(res.data.msg)
          setMsg_type(res.data.msg_type)
        })
        .catch(err => {
          console.log(err)
        })

    }
  }
  const handleVerifyOTP = () => {
    setDisableEmail(true)
    axios.post('http://localhost:5090/verifyOTP', { email: email, OTP: OTP })
      .then(res => {
        console.log(res)
        setVerified(true)
      })
      .catch(err => console.log(err))
  }
  return (
    <MDBContainer fluid className='min-vh-100' style={{background:'transparent !imoprtant'}}>

      <MDBCard className='m-5' style={{ borderRadius: '' }}>
        <MDBCardBody>
          <center><p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 " style={{ fontSize: '40px', fontWeight: '500' }}>Welcome to <strong style={{ color: 'blue' }}>Slogfy</strong></p></center>
          <MDBRow>
            <MDBCol md='6' lg='6' className='border d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

            {
              verified ?
                <MDBCol md='6' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>


                  <div className="input-group ">
                    <label>Your Name</label>
                    <input id='form1' type='text' className='w-100 form-control  rounded-0' onChange={e => setName(e.target.value)} />
                    {/* <MDBIcon fas icon="user me-3" size='lg' /> */}
                  </div>

                  <div className="input-group">
                    <label>Entered Email</label>
                    {/* <MDBIcon fas icon="envelope me-3" size='lg' /> */}
                    <input className="w-100 form-control  rounded-0" label='Your Email' id='form2' type='email' value={email} disabled />
                  </div>

                  <div className="input-group ">
                    {/* <MDBIcon fas icon="envelope me-3" size='lg' /> */}
                    <label>Mobile Number</label>
                    <input className="w-100 form-control  rounded-0" label='Your Mobile Number' id='form2' type='number' onChange={e => setphone(e.target.value)} />
                  </div>

                  <div className="input-group ">
                    {/* <MDBIcon fas icon="lock me-3" size='lg' /> */}
                    <label>Password</label>
                    <div className='d-flex align-items-center w-100 form-control  rounded-0 rounded'>
                      <input type={`${show1 === true ? 'text' : 'password'}`} className="form-control  rounded-0 rounded-0 w-100" placeholder='Enter Password. . .' onChange={e => setPassword(e.target.value)} style={{ borderLeft: '0px', borderRight: '0px' }} />
                      {/* <input type={`${show1 === true ? 'text' : 'password'}`} className="form-control  rounded-0 rounded-0 w-100" placeholder='Enter Password. . .' onChange={e => setPassword(e.target.value)} style={{ borderLeft: '0px', borderRight: '0px' }} /> */}
                      {
                        show1 === true ?
                          <i class="bi bi-eye-slash-fill px-1" style={{ cursor: 'pointer' }} onClick={e => setShow1(!show1)}></i>
                          : <i class="bi bi-eye-fill px-1" style={{ cursor: 'pointer' }} onClick={e => setShow1(!show1)}></i>
                      }
                    </div>
                  </div>

                  <div className="input-group ">
                    {/* <MDBIcon fas icon="key me-3" size='lg' /> */}
                    <label>Retype Password</label>
                    <div className='d-flex align-items-center w-100 form-control  rounded-0 rounded'>
                      <input type={`${show1 === true ? 'text' : 'password'}`} className="form-control  rounded-0 w-100" placeholder='Enter Password. . .' onChange={handleRetypePasswordChange} style={{ borderLeft: '0px', borderRight: '0px' }} />
                      {/* <input type={`${show1 === true ? 'text' : 'password'}`} className="form-control  rounded-0 w-100" placeholder='Enter Password. . .' onChange={e => setRepeatpassword(e.target.value)} style={{ borderLeft: '0px', borderRight: '0px' }} /> */}
                      {
                        show1 === true ?
                          <i class="bi bi-eye-slash-fill px-1" style={{ cursor: 'pointer' }} onClick={e => setShow1(!show1)}></i>
                          : <i class="bi bi-eye-fill px-1" style={{ cursor: 'pointer' }} onClick={e => setShow1(!show1)}></i>
                      }
                    </div>
                    {alertMessage && <div style={{ color: alertColor }}>{alertMessage}</div>}

                  </div>
                  {/* <div className='mb-4'>
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
</div> */}
                  <button className='btn mt-2 btn-primary w-100' size='' onClick={HandleRegiserPage}>Register</button>
                  <div className='w-100 mt-2'>
                    <span>Already have an account? <a href="/login" className='text-decoration-none'>Login here</a></span>
                    <a href="/login"><button className='btn btn-info w-100'>Login</button></a>
                  </div>
                </MDBCol> :
                <MDBCol md='6' lg='6' className='order-2 border order-lg-1 d-flex flex-column align-items-center'>
                  <div>
                    <br />
                    {!disableEmail && <center className='fs-5  fw-semibold'>Enter Email for OTP validation</center>}
                    {disableEmail && <center className='fs-5  fw-semibold text-success'> <strong className='fs-3 w-100 py-1 mb-1 btn fw-bold btn-success'>OTP validation</strong> <br /> OTP is sent on your registered gmail... </center>}
                    <br />
                    <hr />
                    <br />
                    <form>
                      <div className='input-group mb-2'>
                        <label>Enter your valid Email</label>
                        <input className='w-100 form-control' disabled={disableEmail} onChange={e => setEmail(e.target.value)} required />
                      </div>
                      {otpSent && <div className='btn btn-success mb-1 w-100' onClick={handleSendOTP}>Send OTP</div>}
                      <p className='mt-2'>Already have an account ? Login here <i className='bi bi-arrow-down'></i></p>
                      <Link to='/login' class="text-decoration-none btn btn-primary w-100"><i className='bi bi-arrow-right me-3'></i>Login Here!<i className='bi bi-arrow-left ms-3'></i></Link>
                      {!otpSent && <>
                        <div className='input-group mb-2'>
                          <label>Enter OTP</label>
                          <input className='w-100 form-control' onChange={e => setOTP(e.target.target.value)} />
                        </div>
                        <button className='btn btn-success ' onClick={handleVerifyOTP}>Verify OTP</button></>}

                    </form>


                  </div>
                </MDBCol>
            }
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  )
}




export default Register