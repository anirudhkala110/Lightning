import React, { useState } from 'react'
import SLSMP from '../../Images/Smart-Lights-and-Switches-with-use-of-Matter-Protocol.pdf'


const Schedule = () => {
    const [download, SetDownload] = useState(false)
    return (
        <div className='bg-black w-100 pt-2 d-flex align-items-start justify-content-center'>
            <div className='container  p-2 bg-black text-white'
            // style={{ borderLeft: '1px solid rgb(196 191 191)', borderRight: '1px solid rgb(196 191 191)' }}
            >
                <div className='py-1'>
                    <br />
                    <center className='p-1 rounded-0 mb-1 alert text-primary fw-semibold fs-1'>
                        Slogfy Scheduler: Your Personal Smart Home Assistant
                    </center>
                    <h5>
                        Introducing Slogfy Scheduler, the ultimate tool for automating and scheduling tasks in your smart home environment. With Slogfy Scheduler, you can effortlessly create customized schedules for your devices, ensuring that your home operates efficiently and effectively according to your preferences.
                    </h5>
                    <hr />
                    <div className='card bg-dark px-2 text-white rounded-0 py-2'>
                        <div className=''>
                            <center className='fs-3'>Key Features of Slogfy Scheduler</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Flexible Scheduling
                                    <div className='card-body text-white'>
                                        Whether you want to turn your lights on/off at specific times, adjust the temperature based on your daily routine, or activate your security system when you're away, Slogfy Scheduler offers flexible scheduling options to meet your needs.
                                    </div>
                                </li>
                                <li>&nbsp;Device Integration
                                    <div className='card-body text-white'>
                                        Slogfy Scheduler seamlessly integrates with a wide range of smart devices, including thermostats, lights, security cameras, and more. With support for popular smart home platforms, you can easily connect all of your devices and manage them from a single interface.
                                    </div>
                                </li>
                                <li>&nbsp;Multi-Device Control
                                    <div className='card-body text-white'>
                                        Create schedules that control multiple devices simultaneously to orchestrate complex automation scenarios with ease. For example, you can set up "scenes" that activate predefined configurations for different times of the day or specific events.
                                    </div>
                                </li>
                                <li>&nbsp;Sunrise/Sunset Trigger
                                    <div className='card-body text-white'>
                                        Take advantage of the built-in sunrise and sunset triggers to automate your smart home based on natural light conditions. Whether you want to open your blinds in the morning or turn on outdoor lights at dusk, Slogfy Scheduler makes it simple.
                                    </div>
                                </li>
                                <li>&nbsp;Vacation Mode
                                    <div className='card-body text-white'>
                                        Going on vacation? Enable vacation mode to simulate occupancy and deter potential intruders while you're away. Slogfy Scheduler can randomly activate lights, adjust blinds, and turn on/off devices to create the illusion that someone is home.
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <hr />
                        <div className=''>
                            <center className='fs-3'>How Slogfy Scheduler Works</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Create Schedules
                                    <div className='card-body text-white'>
                                        Use the intuitive scheduling interface to create custom schedules for your devices. Specify the days of the week, times of day, and actions you want to automate.
                                    </div>
                                </li>
                                <li>&nbsp;Set Triggers
                                    <div className='card-body text-white'>
                                        Choose from a variety of triggers, including time-based triggers, sunrise/sunset triggers, and event-based triggers, to activate your schedules. You can also set up recurring schedules or one-time events.
                                    </div>
                                </li>
                                <li>&nbsp;Manage Schedules
                                    <div className='card-body text-white'>
                                        View and manage all of your schedules from a centralized dashboard. Make adjustments on the fly, add new schedules, or delete existing ones as needed.
                                    </div>
                                </li>
                                <li>&nbsp;Monitor Activity
                                    <div className='card-body text-white'>
                                        Keep track of schedule activity and device status in real-time. Receive notifications when schedules are triggered or when there are any issues with device connectivity.
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <hr />
                        <div>
                            <center className='fs-4 text-info'>Take Control of Your Smart Home with Slogfy Scheduler</center>
                            <span style={{ textAlign: 'justify' }}>With Slogfy Scheduler, you can take the hassle out of managing your smart home devices and enjoy greater convenience and peace of mind. Whether you're looking to save energy, enhance security, or simply streamline your daily routine, Slogfy Scheduler has you covered. Welcome to a smarter, more efficient home automation experience with Slogfy Scheduler.</span>
                        </div>
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

export default Schedule