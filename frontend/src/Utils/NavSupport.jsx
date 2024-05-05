import React, { useContext } from 'react'
import { userContext } from '../App'
import { Link, NavLink } from 'react-router-dom';
const NavSupport = () => {
    const admin = useContext(userContext)
    const handleCall = (number) => {
        // Replace this with the phone number you want to call
        window.open(`${number}`);
    };
    return (
        <div className='text-white container px-1 d-flex align-items-center' >
            <div className='navsupport ps-1 fs-5' >
                SmartSync
            </div>
            <div className='w-100 justify-content-end show1000NavSupport' >
                {/* <div className='w-100 justify-content-end show1000NavSupport' > */}
                <NavLink to='https://wa.me/+918005183363' className='text-white rounded-0 py-1 px-3 fw-bold' target='_blank' >
                    <i className='bi bi-whatsapp'></i>
                </NavLink>
                {/* <div className="dropdown me-1">
                    <button className="btn btnHover navsupport fw-bold dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                        {/* <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"> 
                        Technical
                    </button>
                    <ul className="dropdown-menu p-0 rounded-0" aria-labelledby="dropdownMenuButton1">
                        <a href='/about'><button className='btn rounded-0 technicalDropDownbtn' style={{ width: '100%' }}>About</button></a>
                        <a href='/contact-us'><button className='btn rounded-0 technicalDropDownbtn ' style={{ width: '100%' }}>Contact</button></a>
                        <a href='/services'> <button className='btn rounded-0 technicalDropDownbtn ' style={{ width: '100%' }}>Services</button></a>
                        <a href="/support"><button className='btn rounded-0 technicalDropDownbtn ' style={{ width: '100%' }}>Support</button></a>
                    </ul>
                </div> */}
                {/* <div className="dropleft btn-group ms-1 me-0">
                    <button className="btn btnHover navsupport fw-bold dropdown-toggle pe-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                        {/* <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                        Account
                    </button>
                    <ul className="dropdown-menu p-0 rounded-0" aria-labelledby="dropdownMenuButton">
                        <a href={`/profile/${admin}`}><button className='btn rounded-0 technicalDropDownbtn' style={{ width: '100%' }}>Profile</button></a>
                        {/* <button className='btn btn-primary mt-1' style={{ width: '100%' }}>Dashboard</button> *
                        <a href="/login"><button className='btn rounded-0 technicalDropDownbtn ' style={{ width: '100%' }}>Login</button></a>
                        <a href='/register'><button className='btn rounded-0 technicalDropDownbtn ' style={{ width: '100%' }}>Sign Up</button></a>
                        <button className='btn btn-danger rounded-0' style={{ width: '100%' }}>Logout</button>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default NavSupport