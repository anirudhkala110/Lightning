import React, { useState } from 'react'
import TMP from '../../Images/Thermostats-in-the-Matter-Protocol.pdf'

const ThermostatControl = () => {
    const [download, SetDownload] = useState(false)
    return (
        <div className='bg-black w-100 pt-2 d-flex align-items-start justify-content-center'>
            <div className='container  p-2 bg-black text-white'
            // style={{ borderLeft: '1px solid rgb(196 191 191)', borderRight: '1px solid rgb(196 191 191)' }}
            >
                <div className='py-1'>
                    <br />
                    <center className='p-1 rounded-0 mb-1 alert text-primary fw-semibold fs-1'>
                        Matter Protocol in Thermostats
                    </center>
                    <h5>Utilizing an automated system, fan speed is dynamically adjusted in response to changes in the room temperature, ensuring optimal comfort levels while also minimizing energy consumption using Matter Protocol. The Matter protocol is a new standard for smart home devices that
                        enables seamless connectivity and interoperability. Thermostats are a
                        key component of Matter-enabled devices, providing precise climate
                        control and energy efficiency.
                    </h5>
                    <hr />
                    <div className='card bg-dark px-2 text-white rounded-0 py-2'>
                        <div className=''>
                            <center className='fs-3'>Overview of Matter Protocol and Thermostats</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Device Connection
                                    <div className='card-body text-white'>
                                        Matter allows thermostats and other
                                        smart home devices to connect and
                                        communicate securely across
                                        platforms.
                                    </div>
                                </li>
                                <li>&nbsp;Automation and Control
                                    <div className='card-body text-white'>
                                        Thermostats leverage Matter to enable
                                        advanced automation, scheduling,
                                        and remote control features.

                                    </div>
                                </li>
                                <li>&nbsp; Energy Management
                                    <div className='card-body text-white'>
                                        Matter-enabled thermostats optimize
                                        energy usage and provide insights to
                                        reduce costs and environmental
                                        impact.
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <hr />
                        <div className=''>
                            <center className='fs-3'>Benefits of Thermostats in Matter-Devices</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Enhanced Comfort
                                    <div className='card-body text-white'>
                                        Matter-powered thermostats deliver
                                        precise temperature control and
                                        personalized comfort settings.
                                    </div>
                                </li>
                                <li>&nbsp; Improved Efficiency
                                    <div className='card-body text-white'>
                                        These thermostats leverage advanced
                                        algorithms to optimize energy usage and
                                        reduce costs.
                                    </div>
                                </li>
                                <li>&nbsp;  Seamless Integration
                                    <div className='card-body text-white'>
                                        Matter enables thermostats to seamlessly
                                        integrate with other smart home devices
                                        and platforms
                                    </div>
                                </li>
                                <li>&nbsp;  Increased Functionality
                                    <div className='card-body text-white'>
                                        Matter-enabled thermostats offer
                                        advanced features like remote access,
                                        voice control, and scheduling
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    {
                        !download ? <button className='btn btn-success my-2' onClick={e => SetDownload(!download)}>Download Info as PDF file</button> : <div className='w-100' style={{ height: "500px" }}>
                            <iframe src={TMP} style={{ width: "100%", height: "100%", border: "none" }}></iframe>
                        </div>
                    }
                    <hr />
                </div>
            </div>

        </div>
    )
}

export default ThermostatControl