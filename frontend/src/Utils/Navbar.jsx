import React, { useContext } from 'react';
import { userContext } from '../App';
import { BrowserRouter as Router, Routes, Route, a, useNavigate, NavLink, Link } from 'react-router-dom';
import logo from '../Images/MI.svg'

const Navbar = () => {
    const admin = useContext(userContext);
    const navigate = useNavigate()
    const handleRoute = (route) => {
        navigate(`/${route}`)
    }

    return (
        <div className='container'>
            <nav className="navbar w-100 bg-dark rounded-0" id="sidebar" style={{ background: 'rgb(255 255 255 / 90%)', borderBottom: '0px solid' }}>
                <div className="d-flex w-100 justify-content-between align-items-center ">
                    <div className='d-flex align-items-center justify-content-between'>
                        <a href='/' className='text-decoration-none text-white d-flex ps-0 align-items-center' >
                            <img src={logo} width={35} className='rounded-2 text-white' style={{ filter: 'invert()' }} />
                            &nbsp;
                            <strong style={{ filter: 'drop-shadow(1px 1px 1px #296192)' }}>Lightning</strong>
                        </a>
                        <div className='show1000px ms-4'>
                            {/* <div className=''> */}
                            <div className='d-flex fw-semibold'>
                                {/* <button className='fw-semibold text-white btn px-2 py-1 adminTag'>{admin.user}</button> */}
                                <NavLink to='/'>
                                    <button className="btn btnHover fw-bold navsupport "  >
                                        {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                        Home
                                    </button>
                                </NavLink>
                                <NavLink to='/all-products'>
                                    <button className="btn btnHover fw-bold  navsupport "  >
                                        {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                        Products
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='text-white'>

                        <Link to='https://wa.me/+918005183363' className='text-decoration-none' target='_blank'>
                            <i class="bi bi-instagram fs-4 "></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        <Link to='https://wa.me/+918005183363' className='text-decoration-none' target='_blank'>
                            <i class="bi bi-facebook fs-4 "></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        <Link to='https://wa.me/+918005183363' className='text-decoration-none' target='_blank'>
                            <i class="bi bi-messenger fs-4 "></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        <Link to='https://wa.me/+918005183363' className='text-decoration-none' target='_blank'>
                            <i class="bi bi-whatsapp fs-4 "></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        <Link to='https://wa.me/+918005183363' className='text-decoration-none' target='_blank'>
                            <i class="bi bi-meta fs-4 "></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                    </div>
                    <div className='less1000pxDisabled me-3'>
                        <button className="btn text-white d-flex align-items-center rounded-0" style={{ background: '#ff5722' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <strong>
                                Menu
                            </strong>
                            &nbsp;
                            <strong className='' >
                                <i className="bi bi-list p-0" ></i>
                            </strong>
                        </button>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header bg-black">
                            <a href='/' className='text-decoration-none text-white d-flex ps-0 align-items-center' >
                                <img src={logo} width={35} className='rounded-2 text-black' style={{ filter: 'invert(1)' }} />
                                &nbsp;
                                <strong style={{ filter: 'drop-shadow(1px 1px 1px #296192)' }}>Lightning</strong>
                            </a>
                            <button type="button" className="btn-close text-reset text-white fs-3 fw-bolder py-2" data-bs-dismiss="offcanvas" aria-label="Close" style={{ color: 'white' }}><i class="bi bi-x-lg text-white"></i></button>
                        </div>
                        <hr />
                        <div className="offcanvas-body " style={{ minHeight: "500px" }}>
                            <NavLink to='/' className="btn  my-1 w-100 rounded-0 linkTabs" >Home</NavLink>
                            <NavLink to='/about' className='btn  my-1 w-100 rounded-0 linkTabs'>About</NavLink>
                            <NavLink to='/contact-us' className='btn  my-1 w-100 rounded-0 linkTabs'>Contact</NavLink>
                            <NavLink to='/all-products' className="btn  my-1 w-100 rounded-0 linkTabs" type="button" >Products</NavLink>
                            <NavLink to='/services' className='btn  my-1 w-100 rounded-0 linkTabs'>Services</NavLink>
                            <NavLink to={`/profile/${admin}`} className='btn  my-1 w-100 rounded-0 linkTabs'>Profile</NavLink>
                            <NavLink to='/dashboard' className='btn  my-1 w-100 rounded-0 linkTabs'>Dashboard</NavLink>
                            <NavLink to='/login' className='w-50 btn  rounded-0 linkTabs'>Login</NavLink>
                            <NavLink to='/register' className='w-50 btn  rounded-0 linkTabs'>Sign Up</NavLink>
                            <NavLink to='/home' className='w-50 btn  rounded-0 linkTabs'>Logout</NavLink>
                            <NavLink to='/support' className='btn  my-1 w-50 rounded-0 linkTabs'>Support</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
