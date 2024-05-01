import React from 'react'
import bbr from '../../Images/bbrn.jpg'
import b1 from '../../Images/b1.jpeg'
import b2 from '../../Images/b2.jpeg'
import b3 from '../../Images/b3.jpeg'
import b4 from '../../Images/b4.jpeg'
import './AboutUs.css'
import { NavLink } from 'react-router-dom'

const data = [
  { name: 'Shivendra', position: 'Co Founder, Research & Development Lead', twitter: 'http://localhost:3033/', insta: '', linkedin: '', profilePic: b2 },
  { name: 'ABC', position: 'CEO', twitter: 'http://localhost:3033/', insta: '', linkedin: '', profilePic: b2 },
  { name: 'ABC', position: 'CEO', twitter: 'http://localhost:3033/', insta: '', linkedin: '', profilePic: b2 },
  { name: 'ABC', position: 'CEO', twitter: 'http://localhost:3033/', insta: '', linkedin: '', profilePic: b2 },
]

const About = () => {
  return (
    <div className='min-vh-100'>
      <div className='aboutUsBacki d-flex align-items-center justify-content-center' style={{ fontSize: '78px', height: '250px', width: '100%' }} >
        <center className='fw-bold aboutusName' style={{ filter: 'drop-shadow(12px 12px 2px black)' }}>About Us</center>
      </div>
      <div className='container bg-black pt-3' style={{ borderLeft: '1px solid #8080806b', borderRight: '1px solid #8080806b' }}>
        <hr />
        <div className='row'>
          <img src={b3} className='rounded-3 col-sm-12 col-lg-6 col-xl-6 col-md-6' />
          <div className='col-sm-12 col-lg-6 col-xl-6 col-md-6'>
            <div className='row'>
              <div className='col-12 p-2 '>
                <ul className='bg- text-' style={{ listStyle: 'none' }}>
                  <li>Slogfy is the brand created by <strong>Roboslog</strong>.</li>
                  <li>Slogfy is an integral part of <strong>Roboslog</strong>.</li>
                  <li>
                    Slogfy assists people to secure their home with
                    creating matter protocol based smart home automation
                    that simply makes your smarter than ever and most precisely "SAFE".</li>
                  <li>It's helping people since 2021 since it's establishment.</li>
                </ul>
                <img className='col-12 rounded-3' src={b2} style={{ maxHeight: "280px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <center className='btn-primary py-2'><i class="bi bi-c-circle"></i> Slogfy All Rights Reserved, Since 2021</center>
        <br />
        <div className='container'>
          <center>Our Team</center>
          <hr />
          <div className='row'>
            {
              data.map((data, idx) => (
                <div className='card pt-2 bg-dark col-sm-12 col-md-6 col-lg-4 border-dark col-xl-3 col-xxl-3 border rounded-0' key={idx}>
                  <img src={data.profilePic} />
                  <div className='card-body text-white'>
                    <strong>{data.name}</strong><br />
                    <strong>{data.position}</strong><br />
                    <div className='d-flex align-items-center justify-content-between'>
                      <NavLink to={data.insta} className='text-decoration-none text-white'><strong><b className='fs-4 bi bi-instagram'></b>{data.insta} </strong></NavLink>
                      <NavLink to={data.twitter} className='text-decoration-none text-white'><strong><b className='fs-4 bi bi-twitter-x'></b> {data.linkedin}</strong></NavLink>
                      <NavLink to={data.linkedin} className='text-decoration-none text-white'><strong><b className='fs-4 bi bi-linkedin'></b></strong></NavLink>
                    </div>

                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default About