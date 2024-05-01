import React, { useState } from 'react'
import SLSMP from '../../Images/Mastering-App-Control-with-Matter-Protocol.pdf'


const AppControl = () => {
    const [download, SetDownload] = useState(false)
    return (
        <div className='bg-black w-100 pt-2 d-flex align-items-start justify-content-center'>
            <div className='container  p-2 bg-black text-white'
            // style={{ borderLeft: '1px solid rgb(196 191 191)', borderRight: '1px solid rgb(196 191 191)' }}
            >
                <div className='py-1'>
                    <br />
                    <center className='p-1 rounded-0 mb-1 alert text-primary fw-semibold fs-1'>
                        Welcome to Slogfy App Control!
                    </center>
                    <h5>
                        At Slogfy, we believe in providing you with seamless control over your home environment, ensuring comfort, convenience, and security at your fingertips. With our intuitive Slogfy App Control feature, managing your home has never been easier. Whether you're at home or on the go, stay connected and in control of your living space with just a few taps on your smartphone.
                    </h5>
                    <hr />
                    <div className='card bg-dark px-2 text-white rounded-0 py-2'>
                        <div className=''>
                            <center className='fs-3'>Key Features</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Temperature Control
                                    <div className='card-body text-white'>
                                        Adjust the temperature of your home to your desired comfort level effortlessly. Whether it's a chilly winter night or a scorching summer day, regulate the temperature with precision to create the perfect ambiance.
                                    </div>
                                </li>
                                <li>&nbsp;Lighting Control
                                    <div className='card-body text-white'>
                                        Illuminate your living space with the touch of a button. Turn lights on or off remotely, dim or brighten them according to your mood, and schedule lighting routines to enhance energy efficiency and security.
                                    </div>
                                </li>
                                <li>&nbsp;CCTV Surveillance
                                    <div className='card-body text-white'>
                                        Keep a watchful eye on your home with live video surveillance directly from your smartphone. Monitor different areas of your property in real-time, playback recorded footage, and receive instant alerts for any suspicious activity.
                                    </div>
                                </li>
                                <li>&nbsp;Camera Direction Control
                                    <div className='card-body text-white'>
                                        Take control of your CCTV cameras' direction from anywhere. Pan, tilt, and zoom to get a clear view of specific areas, ensuring comprehensive coverage and peace of mind.
                                    </div>
                                </li>
                                <li>&nbsp;Appliance Control
                                    <div className='card-body text-white'>
                                        Manage your household appliances effortlessly. Control your fan, air conditioner, and TV remotely, so you can always come back to a comfortable and entertaining environment.
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <hr />
                        <div className=''>
                            <center className='fs-3'>How It Works</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Download the Slogfy App
                                    <div className='card-body text-white'>
                                        Will be available soon for both iOS and Android devices, download the Slogfy App from the App Store or Google Play Store.
                                    </div>
                                </li>
                                <li>&nbsp;Connect Your Devices
                                    <div className='card-body text-white'>
                                        Easily pair your smart devices, CCTV cameras, and appliances with the Slogfy App for seamless integration.
                                    </div>
                                </li>
                                <li>&nbsp;Customize Your Settings
                                    <div className='card-body text-white'>
                                        Personalize your preferences, set schedules, and create automation routines tailored to your lifestyle and needs.
                                    </div>
                                </li>
                                <li>&nbsp;Enjoy Remote Control
                                    <div className='card-body text-white'>
                                        Whether you're at home, at work, or on vacation, enjoy full control of your home environment with remote access via the Slogfy App.
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <span>Experience the convenience of smart living with Slogfy App Control. Transform your house into a connected home where comfort, security, and energy efficiency go hand in hand. Join the Slogfy community today and elevate your living experience to new heights!</span>
                    </div>
                    {
                        !download ? <button className='btn btn-success my-2' onClick={e => SetDownload(!download)}>Download Info as PDF file</button> : <div className='w-100' style={{ height: "500px" }}>
                            <button className='w-100 btn rounded-0 fw-bold my-1' style={{ background: '#00e3ff' }} onClick={e => SetDownload(false)}>Close &nbsp;&nbsp;&nbsp;<i class="bi bi-x-lg"></i></button>
                            <iframe src={SLSMP} style={{ width: "100%", height: "100%", border: "none" }}></iframe>
                        </div>
                    }
                    <br />
                    <br />
                    <hr />
                </div>
            </div>

        </div>
    )
}

export default AppControl