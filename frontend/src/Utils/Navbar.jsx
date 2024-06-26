import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../App';
import { BrowserRouter as Router, Routes, Route, a, useNavigate, NavLink, Link } from 'react-router-dom';
import logo from '../Images/Logo.png'

const Navbar = () => {
    const admin = useContext(userContext);
    const navigate = useNavigate()
    const [degree, setDegree] = useState()
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            setDegree(parseInt(document.documentElement.scrollTop/360))
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleRoute = (route) => {
        // navigate(`/${route}`)
        window.location.href = `${route}`
        // window.location.reload = `/${route}`
    }
    const handleCall = (number) => {
        const phoneNumber = parseInt(number); // Replace this with the phone number you want to call
        window.open(`tel:+91${phoneNumber}`);
    };
    return (
        <div className=''>
            {/* <nav className="navbar w-100 rounded-0 py-0" id="sidebar" style={{ background: 'black', borderBottom: '0px solid' }}> */}
            {/* <div className="d-flex w-100 justify-content-between align-items-center "> */}
            <div id="navbar" className='d-flex justify-content-between' style={{ padding: isScrolled ? '2px 2px' : '15px 15px', maxHeight: isScrolled ? '80px' : '', transition: 'padding 0.3s', borderBottom: '1px solid white', boxShadow: '0px 0px 0px 0px #5388e2', background: isScrolled ? `linear-gradient(${degree}deg, rgb(2 187 244 / 100%), rgb(43 101 152))` : 'linear-gradient(to left, rgb(2 187 244 / 100%), rgb(43 101 152))' }} >
                {/* <div id="navbar" className='d-flex justify-content-between' style={{ padding: isScrolled ? '2px 2px' : '15px 15px', maxHeight: isScrolled ? '80px' : '', transition: 'padding 0.3s', borderBottom: '1px solid rgb(72 145 255)', boxShadow: '0px 0px 25px 1px #5388e2',background: "linear-gradient(to right, royalblue, #7c18c5)" }} > */}
                <a href="/" id="logo" className='text-decoration-none text-white d-flex ps-0 align-items-center' style={{ fontSize: isScrolled ? '25px' : '35px', transition: 'font-size 0.3s' }} >
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className=''>
                            <img src={logo} className='' style={{
                                filter: 'invert(0) !important', borderRadius: '', height: "50px"
                            }} />
                        </div>
                        &nbsp;
                        <strong style={{ filter: 'drop-shadow(1px 1px 1px #296192)' }}>Slogify</strong>
                    </div>
                </a>
                <div className='show1000px ms-4 '>
                    {/* <div className=''> */}
                    <div className='d-flex fw-semibold fs-4'>
                        {/* <button className='fw-semibold text-white btn px-2 py-1 adminTag'>{admin.user}</button> */}
                        <NavLink to='/home' className='mx-2'>
                            <button className="btn fs-5 btnHover fw-bold navsupport " style={{ fontSize: isScrolled ? '14px' : '24px' }}>
                                {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                Home
                            </button>
                        </NavLink>
                        <NavLink to='/about' className='mx-2' >
                            <button className="btn fs-5 btnHover fw-bold navsupport " style={{ fontSize: isScrolled ? '14px' : '24px' }}>
                                {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                About
                            </button>
                        </NavLink>
                        <NavLink to='/support' className='mx-2' >
                            <button className="btn btnHover fs-5 fw-bold navsupport " style={{ fontSize: isScrolled ? '14px' : '24px' }}>
                                {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                Support
                            </button>
                        </NavLink>
                        {/* <NavLink to='/#faqs' >
                                <button className="btn btnHover fw-bold navsupport "  >
                                    FAQs
                                </button>
                            </NavLink> */}
                        <Link to='' className='mx-2' >
                            <button className="btn btnHover fs-5 fw-bold navsupport " onClick={e => alert('Available Soon..')} style={{ fontSize: isScrolled ? '14px' : '24px' }}>
                                {/* <button className="btn btn-primary ms-2 " type="button" > */}
                                App
                            </button>
                        </Link>
                        <NavLink to='https://wa.me/+918005183363' className='text-white rounded-0 pt-4 ms-3 fw-bold' target='_blank' >
                            <i className='bi bi-whatsapp fs-4'></i>
                        </NavLink>
                        {/* <NavLink to='/all-products'>
                                    <button className="btn btnHover fw-bold  navsupport "  >
                                        {/* <button className="btn btn-primary ms-2 " type="button" > 
                                        Products
                                    </button>
                                </NavLink> */}
                    </div>
                </div>
                <div className='less1000px  align-items-center me-1'>
                    {/* <div className='text-white'>
                            <Link to='https://www.instagram.com/Slogify?igsh=MXdraDhpbzlxaHk1Zg==' className='text-decoration-none text-white' target='__blank'>
                                <i class="bi bi-instagram fs-4 "></i>&nbsp;&nbsp;
                            </Link>
                            <Link to='https://www.facebook.com/Slogify' className='text-decoration-none text-white' target='__blank'>
                                <i class="bi bi-facebook fs-4 "></i>&nbsp;&nbsp;
                            </Link>
                            <Link to='https://www.linkedin.com/company/Slogify/' className='text-decoration-none text-white' target='__blank'>
                                <i class="bi bi-linkedin fs-4 "></i>&nbsp;&nbsp;
                            </Link>
                            <Link to='https://youtube.com/@Slogify8260' className='text-decoration-none text-white' target='__blank'>
                                <i class="bi bi-youtube fs-4 "></i>&nbsp;&nbsp;
                            </Link>
                        </div> */}

                    <button className="btn text-white d-flex align-items-center btn-primary rounded-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        {/* style={{ background: '#ff5722' }} */}
                        <strong className='' >
                            <i className="bi bi-list p-0" ></i>
                        </strong>
                    </button>
                </div>
                <div className="offcanvas offcanvas-end offcanvasBacki" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header bg-black">
                        <a href='/' className='text-decoration-none text-white d-flex ps-0 align-items-center' >
                            <div className='bg-black text-white rounded-circle'>
                                <img src={logo} width={35} className='rounded-circle text-white bg-black' style={{ filter: 'invert() !important' }} />
                            </div>
                            &nbsp;
                            <strong style={{ filter: 'drop-shadow(1px 1px 1px #296192)' }}>Slogify</strong>
                        </a>
                        <button type="button" className="btn-close text-reset text-white fs-3 fw-bolder py-2" data-bs-dismiss="offcanvas" aria-label="Close" style={{ color: 'white' }}><i class="bi bi-x-lg text-white"></i></button>
                    </div>
                    <div className="offcanvas-body  " style={{ minHeight: "500px" }}>
                        <div className='bg-black'>
                            <NavLink to='/home' className="btn  my-1 w-100 rounded-0 linkTabs" >
                                <div onClick={e => handleRoute('/')} >
                                    Home
                                </div>
                            </NavLink>
                            <div onClick={e => handleRoute('/about')} >
                                <NavLink to='/about' className='btn  my-1 w-100 rounded-0 linkTabs'>
                                    About
                                </NavLink>
                            </div>
                            {/* <NavLink to='/contact-us' className='btn  my-1 w-100 rounded-0 linkTabs'>Contact</NavLink> */}
                            {/* <NavLink to='/all-products' className="btn  my-1 w-100 rounded-0 linkTabs" type="button" >Products</NavLink> */}
                            {/* <NavLink to='/services' className='btn  my-1 w-100 rounded-0 linkTabs'>Services</NavLink> */}
                            {/* <NavLink to={`/profile/${admin}`} className='btn  my-1 w-100 rounded-0 linkTabs'>Profile</NavLink> */}
                            {/* <NavLink to='/dashboard' className='btn  my-1 w-100 rounded-0 linkTabs'>Dashboard</NavLink> */}
                            {/* <NavLink to='/login' className='w-50 btn  rounded-0 linkTabs'>Login</NavLink>
                            <NavLink to='/register' className='w-50 btn  rounded-0 linkTabs'>Sign Up</NavLink>
                            <NavLink to='/home' className='w-50 btn  rounded-0 linkTabs'>Logout</NavLink> */}
                            <div onClick={e => handleRoute('/support')} >
                                <NavLink to='/support' className='btn  my-1 w-100 rounded-0 linkTabs'>
                                    Support
                                </NavLink>
                            </div>
                            <div className='bg-black text-white'>
                                <NavLink className='btn  my-1 w-100 rounded-0 linkTabs' target='__blank' to='https://wa.me/+918005183363' >
                                    <i class="bi bi-whatsapp"></i> Whatsapp
                                </NavLink>
                            </div>
                            <div className='bg-black text-white'>
                                <NavLink className='btn  my-1 w-100 rounded-0 linkTabs' target='__blank' to='https://www.instagram.com/Slogify?igsh=MXdraDhpbzlxaHk1Zg==' >
                                    <i class="bi bi-instagram"></i> Instagram
                                </NavLink>
                            </div>
                            <div className='bg-black text-white'>
                                <NavLink className='btn  my-1 w-100 rounded-0 linkTabs' target='__blank' to='https://Slogify@gmail.com' >
                                    <i class="bi bi-envelope-at"></i> Gmail
                                </NavLink>
                            </div>
                            <div className='bg-black text-white'>
                                <NavLink className='btn  my-1 w-100 rounded-0 linkTabs' target='__blank' to='https://www.facebook.com/Slogify' >
                                    <i class="bi bi-facebook"></i> Facebook
                                </NavLink>
                            </div>

                            <div className='bg-black text-white'>
                                <NavLink className='btn  my-1 w-100 rounded-0 linkTabs' target='__blank' to='https://www.linkedin.com/company/Slogify/' >
                                    <i class="bi bi-linkedin"></i> LinkedIn
                                </NavLink>
                            </div>

                            <div className='bg-black text-white'>
                                <NavLink className='btn  my-1 w-100 rounded-0 linkTabs' target='__blank' to='https://x.com/Slogify?t=7W11e-jgtl8NoIiFlBllQQ&s=09'>
                                    <i class="bi bi-twitter-x"></i> Twiter
                                </NavLink>
                            </div>

                            <div className='bg-black text-white'>
                                <NavLink className='btn  my-1 w-100 rounded-0 linkTabs' target='__blank' to='https://youtube.com/@Slogify8260'>
                                    <i class="bi bi-youtube"></i> YouTube
                                </NavLink>
                            </div>
                            <div className='bg-black text-white'>
                                <NavLink to="https://maps.app.goo.gl/4eqS6DdxRkrgA5Rt5" className='btn  my-1 w-100 rounded-0 linkTabs' target='__blank' >

                                    <i class="bi bi-globe-americas"></i> &nbsp;Address
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white container px-1 d-flex align-items-center mt-5' style={{ top: isScrolled ? '140px' : '200px', left: isScrolled ? "200px" : '500px' }}>
                <div className='navsupport ps-1 text-black' >
                    SmartSync
                </div>
                <div className='w-100 justify-content-end show1000NavSupport' >
                    {/* <div className='w-100 justify-content-end show1000NavSupport' > */}
                    {/* <NavLink to='https://wa.me/+918005183363' className='text-white rounded-0 py-1 px-3 fw-bold' target='_blank' >
                    <i className='bi bi-whatsapp'></i>
                </NavLink> */}
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
            {/* </div> */}
            {/* </nav> */}
        </div>
    )
}

export default Navbar;
