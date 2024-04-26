import React, { useContext } from 'react';
import { userContext } from '../App';
import { BrowserRouter as Router, Routes, Route, a, useNavigate } from 'react-router-dom';
import logo from '../Images/MI.svg'

const Navbar = () => {
    const admin = useContext(userContext);
    const navigate = useNavigate()
    const handleRoute = (route) => {
        navigate(`/${route}`)
    }

    return (
        <div className='container'>
            <nav className="navbar w-100 bg-black rounded-0" style={{ background: 'rgb(255 255 255 / 90%)', borderBottom: '0px solid' }}>
                <div className="d-flex w-100 justify-content-between align-items-center ">
                    <a href='/' className='text-decoration-none text-white d-flex ps-0 align-items-center' >
                        <img src={logo} width={35} className='rounded-2 text-white' style={{filter:'invert()'}} />
                        &nbsp;
                        <strong style={{ filter: 'drop-shadow(1px 1px 1px #296192)' }}>Lightning</strong>
                    </a>
                    <div className='show1000px'>
                    {/* <div className=''> */}
                        <div className='d-flex fw-semibold'>
                            {/* <button className='fw-semibold text-white btn px-2 py-1 adminTag'>{admin.user}</button> */}
                            <a href='/'>
                                <button className="btn btnHover fw-bold ms-2 navsupport " type="button" >
                                    {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                    Home
                                </button>
                            </a>
                            <a href='/all-products'>
                                <button className="btn btnHover fw-bold ms-2 navsupport " type="button" >
                                    {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                    Products
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='less1000px me-3'>
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <i className="bi bi-list-nested"></i>
                        </button>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Logo</h5>
                            <button type="button" className="btn-close text-reset text-dark fs-3 fw-bolder" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <hr />
                        <div className="offcanvas-body " style={{ minHeight: "500px" }}>
                            <a href='/'><button className="btn btn-primary my-1 w-100 rounded-0 border" type="button" >Home</button></a>
                            <a href='/about' className='btn btn-primary my-1 w-100 rounded-0 border'>About</a>
                            <a href='/contact-us' className='btn btn-primary my-1 w-100 rounded-0 border'>Contact</a>
                            <a href='/all-products'><button className="btn btn-primary my-1 w-100 rounded-0 border" type="button" >Products</button></a>
                            <a href='/services' className='btn btn-primary my-1 w-100 rounded-0 border'>Services</a>
                            <a href={`/profile/${admin}`} className='btn btn-primary my-1 w-100 rounded-0 border'>Profile</a>
                            <a href='/dashboard' className='btn btn-primary my-1 w-100 rounded-0 border'>Dashboard</a>
                            <a href='/login' className='w-50 btn btn-success rounded-0 border'>Login</a>
                            <a href='/register' className='w-50 btn btn-info rounded-0 border'>Sign Up</a>
                            <a href='/home' className='w-50 btn btn-danger rounded-0 border'>Logout</a>
                            <a href='/support' className='btn btn-warning my-1 w-50 rounded-0 border'>Support</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
