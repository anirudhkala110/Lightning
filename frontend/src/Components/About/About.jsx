import React from 'react'
import bbr from '../../Images/bbrn.jpg'
import b1 from '../../Images/b1.jpeg'
import b2 from '../../Images/b2.jpeg'
import b3 from '../../Images/b3.jpeg'
import b4 from '../../Images/b4.jpeg'
import './AboutUs.css'

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
                <ul className='bg-white text-black' style={{ listStyle: 'none' }}>
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

      </div>
      <br />
      <br />
    </div>
  )
}

export default About