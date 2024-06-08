import React, { useState } from 'react'
import SLSMP from '../../Images/Smart-Lights-and-Switches-with-use-of-Matter-Protocol.pdf'

const SmartLightsandSwitches = () => {
    const [download, SetDownload] = useState(false)
    return (
        <div className='bg-black w-100 pt-2 d-flex align-items-start justify-content-center'>
            <div className='container  p-2 bg-black text-white'
            // style={{ borderLeft: '1px solid rgb(196 191 191)', borderRight: '1px solid rgb(196 191 191)' }}
            >
                <div className='py-1'>
                    <br />
                    <center className='p-1 rounded-0 mb-1 alert text-primary fw-semibold fs-1'>
                        Smart Emergency SOS
                    </center>
                    <h5> Slogify introduces an advanced Smart Emergency SOS system with Matter Protocal designed to ensure the safety and security of your home and loved ones. With cutting-edge technology and intelligent features, our SOS system is capable of detecting emergency situations, triggering alerts, and providing real-time assistance when needed.
                        At Slogify, we prioritize the safety and well-being of our customers. Our Smart Emergency SOS system is a testament to our commitment to providing innovative solutions that make homes safer and more secure. With advanced features and intuitive functionality, Slogify empowers homeowners to respond swiftly and effectively to any emergency situation.
                    </h5>
                    <hr />
                    <div className='card bg-dark px-2 text-white rounded-0 py-2'>
                        <div className=''>
                            <center className='fs-3'>Key Features</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Keyword Detection
                                    <div className='card-body text-white'>
                                        Our Smart Emergency SOS system is equipped with sophisticated algorithms that can detect specific keywords or sounds associated with emergency situations. Whether it's a distress call like "Help" or any relevant sound indicative of danger, our system swiftly recognizes these signals and initiates the emergency response protocol.
                                    </div>
                                </li>
                                <li>&nbsp;Automated Alerting
                                    <div className='card-body text-white'>
                                        Once an emergency signal is detected, the system automatically sends alerts to a predefined list of emergency contacts stored in its memory. This ensures that help is promptly notified, even if the homeowner is unable to do so manually.
                                    </div>
                                </li>
                                <li>&nbsp;Real-time Camera Control
                                    <div className='card-body text-white'>
                                        In addition to alerting emergency contacts, our SOS system provides the capability to remotely control surveillance cameras installed in your home. The main householder can instantly rotate the camera toward the location of the emergency, allowing them to assess the situation and take appropriate action, whether it's contacting authorities or providing assistance.
                                    </div>
                                </li>
                                <li>&nbsp;Manual Activation
                                    <div className='card-body text-white'>
                                        While the system is designed to detect emergencies automatically, it also offers the option for manual activation. In case of a non-verbal emergency or when the homeowner perceives a threat, they can trigger the SOS system manually, ensuring immediate attention and response.
                                    </div>
                                </li>
                                <li>&nbsp;Customizable Settings
                                    <div className='card-body text-white'>
                                        Slogify understands that every home and situation is unique. Therefore, our Smart Emergency SOS system allows users to customize settings according to their preferences and needs. From adjusting sensitivity levels to defining emergency contacts, users have full control over how the system responds to different scenarios.
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <hr />
                        <div className=''>
                            <center className='fs-3'>Benefits</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Enhanced Safety
                                    <div className='card-body text-white'>
                                        With Slogify's Smart Emergency SOS system, homeowners can rest assured knowing that their home is equipped to handle unforeseen emergencies effectively.
                                    </div>
                                </li>
                                <li>&nbsp;Peace of Mind
                                    <div className='card-body text-white'>
                                        Whether you're at home or away, our SOS system provides peace of mind by offering swift and reliable emergency response capabilities.
                                    </div>
                                </li>
                                <li>&nbsp; Quick Assistance
                                    <div className='card-body text-white'>
                                        By automating the alerting process and enabling real-time camera control, our system ensures that help arrives promptly, potentially preventing further harm or damage.
                                    </div>
                                </li>
                            </ol>
                        </div>
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

export default SmartLightsandSwitches