import React, { useState } from 'react'
import SSEMP from '../../Images/ancing-Smart-Security-and-Emergency-with-Matter-Protocol.pdf'
const Security = () => {
    const [download, SetDownload] = useState(false)
    return (

        <div className='bg-black w-100 pt-2 d-flex align-items-start justify-content-center'>
            <div className='container  p-2 bg-black text-white'
            // style={{ borderLeft: '1px solid rgb(196 191 191)', borderRight: '1px solid rgb(196 191 191)' }}
            >
                <div className='py-1'>
                    <br />
                    <center className='p-1 rounded-0 mb-1 alert text-primary fw-semibold fs-1'>
                        Smart Security and Emergency with Matter Protocol
                    </center>
                    <h5> Live streamed, smartphone,integrated video is the example of security systems have gained more attention in past years. Take  example it sends video feeds from around your home straight to your smartphone so you can easily monitor pets,children, or simply watch for suspicious or unusual activities. This technology is just the starting point for smart security with emergency system as many more applications can  be added. So, Get all the security messages and information about unwanted enterance. Real Time SOS system for Family Members. The Matter protocol offers a unified, secure, and reliable platform to
                        seamlessly integrate various smart devices for enhanced security and
                        emergency response in homes and buildings.
                    </h5>
                    <hr />
                    <div className='card bg-dark px-2 text-white rounded-0 py-2'>
                        <div className=''>
                            <center className='fs-3'>Implementing Matter in Smart Security and  Emergency</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Sensor Integration
                                    <div className='card-body text-white'>
                                        Seamlessly connect various security sensors, such as motion detectors, smoke alarms, and water leak sensors, through the Matter protocol.
                                    </div>
                                </li>
                                <li>&nbsp;Centralized Control
                                    <div className='card-body text-white'>
                                        Manage and monitor all connected security devices from a single, user-friendly platform, enhancing overall situational awareness.
                                    </div>
                                </li>
                                <li>&nbsp;Automated Responses
                                    <div className='card-body text-white'>
                                        Trigger pre-programmed emergency actions, like notifying authorities, activating alarms, or unlocking doors, to ensure rapid and coordinated response
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <hr />
                        <div className=''>
                            <center className='fs-3'>Understanding the Matter Protocol in Smart Security and Emergency</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Interoperability
                                    <div className='card-body text-white'>
                                        Matter enables smart devices from different brands to communicate and work together, ensuring a cohesive and seamless smart home experience.
                                    </div>
                                </li>
                                <li>&nbsp; Security-First Approach
                                    <div className='card-body text-white'>
                                        The protocol prioritizes secure connectivity and data encryption, providing robust protection against cyber threats and unauthorized access.
                                    </div>
                                </li>
                                <li>&nbsp; Versatile Applications
                                    <div className='card-body text-white'>
                                        From smart locks and security cameras to emergency notification systems, Matter empowers a wide range of smart security and safety solutions.
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    {
                        !download ? <button className='btn btn-success mt-2' onClick={e => SetDownload(!download)}>Download Info as PDF file</button> : <div className='w-100' style={{ height: "500px" }}>
                            <button className='w-100 btn rounded-0 fw-bold my-1' style={{ background: '#00e3ff' }} onClick={e => SetDownload(false)}>Close &nbsp;&nbsp;&nbsp;<i class="bi bi-x-lg"></i></button>
                            <iframe src={SSEMP} style={{ width: "100%", height: "100%", border: "none" }}></iframe>
                        </div>
                    }
                    <br/>
                    <br/>
                    <hr />
                </div>
            </div>

        </div>
    )
}

export default Security