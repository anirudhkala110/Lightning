import React, { useState } from 'react'
import SLSMP from '../../Images/Smart-Lights-and-Switches-with-use-of-Matter-Protocol.pdf'


const Analytics = () => {
    const [download, SetDownload] = useState(false)
    return (
        <div className='bg-black w-100 pt-2 d-flex align-items-start justify-content-center'>
            <div className='container  p-2 bg-black text-white'
            // style={{ borderLeft: '1px solid rgb(196 191 191)', borderRight: '1px solid rgb(196 191 191)' }}
            >
                <div className='py-1'>
                    <br />
                    <center className='p-1 rounded-0 mb-1 alert text-primary fw-semibold fs-1'>
                        Unlocking Insights: Harnessing the Power of Slogfy Analytics
                    </center>
                    <h5>
                        At Slogfy, we believe that knowledge is power. That's why we're excited to introduce Slogfy Analytics, a powerful tool that provides you with valuable insights into your smart home ecosystem. With Slogfy Analytics, you can take control of your data, uncover trends, and make informed decisions to optimize your home environment like never before.
                    </h5>
                    <hr />
                    <div className='card bg-dark px-2 text-white rounded-0 py-2'>
                        <div className=''>
                            <center className='fs-3'>Key Features of Slogfy Analytics:</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Data Visualization
                                    <div className='card-body text-white'>
                                        Dive deep into your home automation data with intuitive visualizations. From temperature trends to energy usage patterns, our easy-to-understand charts and graphs empower you to grasp complex information at a glance.
                                    </div>
                                </li>
                                <li>&nbsp;Customizable Dashboards
                                    <div className='card-body text-white'>
                                        Tailor your analytics experience to suit your unique needs with customizable dashboards. Whether you're interested in monitoring energy consumption, security events, or device performance, create personalized dashboards that focus on what matters most to you.
                                    </div>
                                </li>
                                <li>&nbsp;Actionable Insights
                                    <div className='card-body text-white'>
                                        Transform raw data into actionable insights with Slogfy Analytics. Identify opportunities for energy savings, detect anomalies in device behavior, and uncover usage patterns that can enhance your smart home experience.
                                    </div>
                                </li>
                                <li>&nbsp;Predictive Analysis
                                    <div className='card-body text-white'>
                                        Anticipate future trends and behaviors with predictive analytics. By analyzing historical data and employing advanced algorithms, Slogfy Analytics can forecast potential issues, recommend optimizations, and help you stay one step ahead.
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
                            <center className='fs-3'>How Slogfy Analytics Works</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Data Collection
                                    <div className='card-body text-white'>
                                        Slogfy Analytics collects data from your connected devices, including temperature sensors, smart thermostats, lighting systems, security cameras, and more.
                                    </div>
                                </li>
                                <li>&nbsp;Data Processing
                                    <div className='card-body text-white'>
                                        Once collected, your data is processed in real-time to extract valuable insights and identify trends. Our advanced algorithms analyze large datasets quickly and efficiently, ensuring that you have access to up-to-date information whenever you need it.
                                    </div>
                                </li>
                                <li>&nbsp;Insight Generation
                                    <div className='card-body text-white'>
                                        Using sophisticated analytics techniques, Slogfy Analytics generates actionable insights that empower you to make informed decisions about your smart home. Whether you're looking to optimize energy usage, enhance security, or improve device performance, our platform has you covered.
                                    </div>
                                </li>
                                <li>&nbsp;Continuous Improvement
                                    <div className='card-body text-white'>
                                        Slogfy is committed to continuous improvement, and we're constantly enhancing our analytics platform to provide you with even greater insights and functionality. Stay tuned for future updates and new features designed to further enhance your smart home experience.
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <hr />
                        <div>
                            <center className='text-info mb-2 fs-4'>Unlock the Potential of Your Smart Home</center>
                            <span>Experience the convenience of smart living with Slogfy App Control. Transform your house into a connected home where comfort, security, and energy efficiency go hand in hand. Join the Slogfy community today and elevate your living experience to new heights!</span>
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

export default Analytics