import React, { useState } from 'react'
import SLSMP from '../../Images/Smart-Lights-and-Switches-with-use-of-Matter-Protocol.pdf'


const VoiceControl = () => {
    const [download, SetDownload] = useState(false)
    return (
        <div className='bg-black w-100 pt-2 d-flex align-items-start justify-content-center'>
            <div className='container  p-2 bg-black text-white'
            // style={{ borderLeft: '1px solid rgb(196 191 191)', borderRight: '1px solid rgb(196 191 191)' }}
            >
                <div className='py-1'>
                    <br />
                    <center className='p-1 rounded-0 mb-1 alert text-primary fw-semibold fs-1'>
                        Welcome to Slogfy: Your Smart Home, Your Voice
                    </center>
                    <h5>
                        Introducing Slogfy, where smart living meets effortless control. With our cutting-edge Slogfy App Control featuring Voice Integration, you're empowered to manage your home environment with the power of your voice. Say goodbye to complicated interfaces and hello to intuitive, hands-free control that puts you in command of your living space like never before.
                    </h5>
                    <hr />
                    <div className='card bg-dark px-2 text-white rounded-0 py-2'>
                        <div className=''>
                            <center className='fs-3'>Experience the Difference</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Voice-Activated Temperature Control
                                    <div className='card-body text-white'>
                                        Feeling a bit chilly? Simply say "Raise the temperature in the bedroom" and watch as your thermostat adjusts to your preferred setting, ensuring your comfort without lifting a finger.
                                    </div>
                                </li>
                                <li>&nbsp;Lighting at Your Command
                                    <div className='card-body text-white'>
                                        Illuminate your home with ease using simple voice commands. Whether it's brightening up your living room or creating a cozy ambiance in the bedroom, control your lights effortlessly with phrases like "Dim the lights in the dining area" or "Turn off all lights."
                                    </div>
                                </li>
                                <li>&nbsp;Seamless Appliance Management
                                    <div className='card-body text-white'>
                                        Control your appliances with ease using natural voice commands. From adjusting the fan speed to powering on the TV for movie night, simply speak your desires and let Slogfy take care of the rest.
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
                        <span>Experience the convenience of smart living with Slogfy App Control featuring Voice Integration. Elevate your home automation experience and embrace a new era of effortless control. Welcome to Slogfy: Your smart home, your voice.</span>
                    </div>
                    {
                        !download ? <button className='btn btn-success my-2' onClick={e => SetDownload(!download)}>Download Info as PDF file</button> : <div className='w-100' style={{ height: "500px" }}>
                            <iframe src={SLSMP} style={{ width: "100%", height: "100%", border: "none" }}></iframe>
                        </div>
                    }
                    <hr />
                </div>
            </div>

        </div>
    )
}

export default VoiceControl