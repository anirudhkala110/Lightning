import React, { useEffect, useState } from 'react'
import bbr from '../../Images/bbrn.jpg'
import b1 from '../../Images/b1.jpeg'
import b2 from '../../Images/b2.jpeg'
import b3 from '../../Images/b3.jpeg'
import b4 from '../../Images/b4.jpeg'
import ss from '../../Images/Members/ShivendraPratapSingh.jpg'
import NV from '../../Images/Members/NarendraVerma.jpg'
import AP from '../../Images/Members/AbhinavPrajapati.jpg'
import KA from '../../Images/Members/KaviAgyat.jpg'
import AK from '../../Images/Members/AK.jpg'
import './AboutUs.css'
import { NavLink } from 'react-router-dom'

const data = [
  { name: 'Mr. Narendra verma', position: 'Founder, Research & Development Lead', twitter: '', insta: 'https://www.instagram.com/narendok?igsh=YnM4MzgzcWp2ZzZ4', linkedin: 'https://www.linkedin.com/in/narendok?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', profilePic: NV },
  { name: 'Mr. Shivendra Pratap Singh', position: 'Co Founder, Research & Development Lead', twitter: 'https://x.com/Nirajbabuaan01?t=vbFEqIi4HJzHvgjLllscQw&s=09', insta: 'https://www.instagram.com/niraj_singh_babuaan?igsh=aXZkanZydzNvYnh0', linkedin: 'https://www.linkedin.com/in/shivendra-pratap-singh-683188247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', profilePic: ss },
  { name: 'Mr. Abhinav Prajapati', position: 'CTO, Research & Development Lead', twitter: 'https://twitter.com/Abhi9prajapati', insta: 'https://www.instagram.com/abhi9_prajapati?igsh=MThtZjZjYmYzc2tzYQ==', linkedin: 'https://www.linkedin.com/in/abhinav-prajapati-318080190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', profilePic: AP },
  { name: 'Mr. Kavi agyat', position: 'Web content creator', twitter: '', insta: 'https://www.instagram.com/iamagyat?igsh=eDVtb2I0c2hjeXZ2', linkedin: '', profilePic: KA },
  { name: 'Mr. Anirudh Kala', position: 'Python & MERN Stack WEB Developer', twitter: 'https://twitter.com/AnirudhKala_110', insta: 'https://www.instagram.com/jrcasetooyt/', linkedin: 'https://www.linkedin.com/in/anirudh-kala-808772245/', portfolio: "https://self-portfolio-green.vercel.app/", profilePic: AK },
]

const About = () => {
  const [admin, setAdmin] = useState(false)
  const [edit, setEdit] = useState(false)
  useEffect(() => {
    if (!admin) {
      setEdit(false)
    }
  })
  return (
    <div className='min-vh-100'>
      <div className='aboutUsBacki d-flex align-items-center justify-content-center' style={{ fontSize: '78px', height: '250px', width: '100%' }} >
        <center className='fw-bold aboutusName' style={{ filter: 'drop-shadow(12px 12px 2px black)' }}>About Us</center>
      </div>
      <div className='container bg-black pt-3' style={{ borderLeft: '1px solid #8080806b', borderRight: '1px solid #8080806b' }}>
        <hr />
        <div className='row pb-2'>
          <img src={b3} className='rounded-3 col-sm-12 col-lg-6 col-xl-6 col-md-6' />
          <div className='col-sm-12 col-lg-6 col-xl-6 col-md-6'>
            <div className='row'>
              <div className='col-12 p-2 '>
                <ul className='bg- text-' style={{ listStyle: 'none' }}>
                  <li>
                    Slogfy is the brand created by Roboslog. Slogfy is an integral part of Roboslog.Roboslog is company which deals with robotics related things.Slogfy assists people to secure their home with creating matter protocol based smart home automation that simply makes your smarter than ever and most precisely "SAFE". It's helping people since 2021 since it's establishment.
                  </li>
                  {/* <li>Slogfy is the brand created by <strong>Roboslog</strong>.</li>
                  <li>Slogfy is an integral part of <strong>Roboslog</strong>.</li>
                  <li>
                    Slogfy assists people to secure their home with
                    creating matter protocol based smart home automation
                    that simply makes your smarter than ever and most precisely "SAFE".</li>
                  <li>It's helping people since 2021 since it's establishment.</li> */}
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
        <center className='btn w-100 text-white py-2' style={{background:'linear-gradient(0deg, #275c8b, #3175b0)'}}><i class="bi bi-c-circle"></i> Slogfy All Rights Reserved, Since 2021</center>
        <br />
        <div className='container'>
          <center className='fs-2'>Our Team</center>
          <hr />
          <div className='row'>
            {
              data.map((data, idx) => (
                <div className='card pt-2 col-sm-12 col-md-6 col-lg-4 bg-black col-xl-3 col-xxl-3 border-dark rounded-0 aboutUsTeam' key={idx}>
                  <img src={data.profilePic} className='rounded-2' style={{ maxWidth: '100%', maxHeight: '300px' }} />
                  <div className='card-body text-white'>
                    <strong className='text-primary'>{data.name}</strong><br />
                    <span style={{ fontSize: '12px' }}>{data.position}</span><br />
                    <div className='card-footer px-0 align-items-center justify-content-start border-top'>
                      <NavLink to={data.insta} className='text-decoration-none text-white'><strong><b className='fs-4 bi bi-instagram'></b></strong></NavLink> &nbsp;&nbsp;
                      <NavLink to={data.twitter} className='text-decoration-none text-white'><strong><b className='fs-4 bi bi-twitter-x'></b></strong></NavLink> &nbsp;&nbsp;
                      <NavLink to={data.linkedin} className='text-decoration-none text-white'><strong><b className='fs-4 bi bi-linkedin'></b></strong></NavLink> &nbsp;&nbsp;
                      <NavLink to={data.portfolio} className='text-decoration-none text-white' target='__blank' style={{ display: `${data.name === 'Mr. Anirudh Kala' ? 'inline-block' : 'none'}` }}><strong><i class="fs-4 bi bi-person-workspace"></i></strong></NavLink>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
          {admin && <div className='container py-1 my-2 w-100 d-flex justify-content-end'>
            <button className='btn-primary btn' onClick={e => setEdit(!edit)}>{edit ? <div class=""> Close <i className='bi bi-x-lg ms-1'></i> </div> : <div>Add New Memeber<b class="bi bi-plus-lg ms-1"> </b></div>} </button>
          </div>}
          {edit && <center>
            <div>
              <form className='form border p-2 border-dark' style={{ maxWidth: '550px', textAlign: 'left', background: '#2d6a9f' }}>
                <center className='text-black fs-3 fw-semibold'>Add Memeber</center>
                <div className='form-group'>
                  <label>Name</label>
                  <input className='form-control' placeholder='Enter Member Name' />
                </div>
                <div className='form-group'>
                  <label>Position</label>
                  <input className='form-control' placeholder='Enter Member Name' />
                </div>
                <div className='form-group'>
                  <label>Twitter</label>
                  <input className='form-control' placeholder='Enter Twitter Account Link' />
                </div>
                <div className='form-group'>
                  <label>LinkedIn</label>
                  <input className='form-control' placeholder='Enter LinkedIn Account Link' />
                </div>
                <div className='form-group'>
                  <label>Instagram</label>
                  <input className='form-control' placeholder='Enter Instagram Link' />
                </div>
                <button className='btn btn-success w-100'>
                  Submit
                </button>
              </form>
            </div></center>}
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default About