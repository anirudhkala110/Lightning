import React, { useState } from 'react'
import HAMD from '../../Images/Home-Automation-with-Motion-Detectors-1.pdf'

const HomeAutomation = () => {
    const [download, SetDownload] = useState(false)
    return (
        <div className='bg-black w-100 pt-2 d-flex align-items-start justify-content-center'>
            <div className='container  p-2 bg-black text-white'
            // style={{ borderLeft: '1px solid rgb(196 191 191)', borderRight: '1px solid rgb(196 191 191)' }}
            >
                <div className='py-1'>
                    <br />
                    <center className='p-1 rounded-0 mb-1 alert text-primary fw-semibold fs-2'>
                        Motion Detection with Matter Protocol
                    </center>
                    <h4>Turn your Lights, Switches, Cooler, Fan, AC ON and OFF just by only <b>Entering</b> and <b>Leaving</b> the room. Motion detectors are a key component in modern home automation
                        systems, enabling intelligent control of lighting, security, and other
                        connected devices based on occupancy. This can enhance convenience,
                        energy efficiency, and overall home management.
                    </h4>
                    <hr />
                    <div className='card bg-dark px-2 text-white rounded-0 py-2'>
                        <div className=''>
                            <center className='fs-3'>Leveraging the Matter Protocol</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Device Interoperability
                                    <div className='card-body text-white'>
                                        The Matter protocol enables
                                        seamless integration of
                                        motion detectors with a wide
                                        range of smart home
                                        products, breaking down
                                        barriers between ecosystems.
                                    </div>
                                </li>
                                <li>&nbsp;Secure Connectivity
                                    <div className='card-body text-white'>
                                        Matter's security-first
                                        approach ensures reliable
                                        and protected
                                        communication between
                                        motion sensors and other
                                        devices, safeguarding your
                                        home network.
                                    </div>
                                </li>
                                <li>&nbsp;Unified Platform
                                    <div className='card-body text-white'>
                                        Matter provides a unified
                                        platform for managing and
                                        controlling all your connected
                                        home devices, including
                                        motion detectors, from a
                                        single interface.

                                    </div>
                                </li>
                            </ol>
                        </div>
                        <hr />
                        <div className=''>
                            <center className='fs-3'>Benefits and Use Cases</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Automated Lighting
                                    <div className='card-body text-white'>
                                        Motion detectors can trigger smart lights
                                        to turn on and off based on room
                                        occupancy, enhancing convenience and
                                        energy savings.
                                    </div>
                                </li>
                                <li>&nbsp;Security Monitoring
                                    <div className='card-body text-white'>
                                        Motion sensors can integrate with home
                                        security systems, alerting you to potential
                                        intruders and triggering appropriate
                                        actions.
                                    </div>
                                </li>
                                <li>&nbsp;  Personalized Comfort
                                    <div className='card-body text-white'>
                                        Motion data can be used to adjust
                                        temperature, blinds, and other smart
                                        home features to create a personalized,
                                        comfortable environment.
                                    </div>
                                </li>
                                <li>&nbsp;   Elderly Assistance
                                    <div className='card-body text-white'>
                                        Motion detectors can monitor activity
                                        patterns and alert caregivers to potential
                                        issues, supporting independent living for
                                        the elderly
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    {
                        !download ? <button className='btn btn-success mt-3' onClick={e => SetDownload(!download)}>Download PDF file</button> : <div className='w-100' style={{ height: "500px" }}>
                            <iframe src={HAMD} style={{ width: "100%", height: "100%", border: "none" }}></iframe>
                        </div>
                    }
                    <hr />
                </div>
            </div>

        </div>
    )
}

export default HomeAutomation