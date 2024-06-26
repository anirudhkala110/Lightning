import React, { useState } from 'react'
import MP from '../../Images/The-Matter-Protocol-Revolutionizing-the-Smart-Home.pdf'

const MatterProtocol = () => {
    const [download, SetDownload] = useState(false)
    return (
        <div className='bg-black w-100 d-flex align-items-start justify-content-center'>
            <div className='container  p-2 bg-black text-white'
            // style={{ borderLeft: '1px solid rgb(196 191 191)', borderRight: '1px solid rgb(196 191 191)' }}
            >
                <div className='py-1'>
                    <center className='p-1 rounded-0 text-primary alert fw-semibold fs-2'>What is Matter or Matter Protocol ?</center>
                    <hr />
                    <h4 className='text-info'><b>Matter</b> is an open-source connectivity standard for smart home and IoT (Internet of Things) devices.</h4>
                    <br />
                    <ul>
                        <li>
                            It aims to improve interoperability and compatibility between different manufacturer and security, and always allowing local control as an option.
                        </li>
                        <li>
                            The standard is royalty-free, though developers and manufacturers incur certification costs. It originated in December 2019 as the "Project Connected Home over IP" (or "CHIP" for short) working group, founded by Amazon, Apple, Google and the Zigbee Alliance, now called the Connectivity Standards Alliance. Subsequent members include IKEA, Huawei, and Schneider. Version 1.0 of the specification was published on 4 October 2022. The Matter software development kit is open-source under the Apache License.
                        </li>
                        <li>
                            Matter-compatible software updates for many existing hubs became available in late 2022, with Matter-enabled devices and software updates expected to be released during 2023.
                        </li>
                    </ul>
                    <hr />
                    <strong className='fs-3 fw-bold text-info'>
                        Background or History
                    </strong>
                    <br />
                    <p>
                        In December 2019, Amazon, Apple, Google, Samsung SmartThings and the Zigbee Alliance announced the collaboration and formation of the working group of Project Connected Home over IP. The goal of the project is to simplify development for smart home product brands and manufacturers while increasing the compatibility of the products for consumers.
                    </p>
                    <p>
                        The standard operates on Internet Protocol (IP) and functions via one or more "controllers" that connect and manage devices within your local network, eliminating the need for multiple proprietary hubs. Matter-certified products are engineered to operate locally and do not depend on an internet connection for their core functions. Leveraging IPv6 addressing, the standard facilitates seamless communication with cloud services. Its goal is to facilitate interoperability among smart home devices, mobile apps, and cloud services, employing a specific suite of IP-based networking technologies such as mDNS and IPv6. By adhering to a network design that operates at the Application Layer of the OSI 7 layer model, Matter differs from protocols like Zigbee or Z-Wave and theoretically can function on any IPv6-enabled network. Presently, official support is limited to Wi-Fi, Ethernet, and the wireless mesh network Thread.
                    </p>
                    <strong className='fs-3 fw-bold text-info'>
                        Supported Devices
                    </strong>
                    <p className=''> The Connectivity Standards Alliance (CSA) maintains the official list of Matter certified products and restricts use of the Matter logo to certified devices. This list is available on the CSA's Certified Products Search. Matter product certification is also stored on the CSA's Distributed Compliance Ledger (DCL), which publishes attestation information about certified devices.</p>
                    <div className='' style={{ overflowX: 'auto' }}>
                        <table className='table table-striped table-dark table-hover table-bordered table-striped table-responsive-sm table-responsive-md'>
                            <thead className=' '>
                                <tr>
                                    <th className='text-primary'>Company</th>
                                    <th className='text-primary'>Platforms</th>
                                    <th className='text-primary'>Device Type</th>
                                    <th className='text-primary'>Hub(s)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Google</td>
                                    <td>
                                        <ul style={{ listStyle: '' }} className=''>
                                            <li>
                                                Android
                                            </li>
                                            <li>
                                                Wear OS
                                            </li>
                                            <li>
                                                iOS
                                            </li>
                                            <li>
                                                iPadOS
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                Bridges
                                            </li>
                                            <li>
                                                Lights
                                            </li>
                                            <li>Locks</li>
                                            <li>Outlets</li>
                                            <li>sensors (contact, flow, humidity, illuminance, motion, occupancy, pressure, & temperature)</li>
                                            <li>Speakers</li>
                                            <li>Thermostats</li>
                                            <li>Window coverings (except tilting)</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                Google Home Speaker & Google Home Mini
                                            </li>
                                            <li>Nest Mini, Nest Audio, Nest Hub (All Generations),Nest Wifi Pro*</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Apple
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                iOS
                                            </li>
                                            <li>
                                                iPadOS
                                            </li>
                                            <li>
                                                macOS
                                            </li>
                                            <li>
                                                watchOS
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                Air conditioners
                                            </li>
                                            <li>
                                                Bridges, Lights, locks, outlets, switches, blinds & shades
                                            </li>
                                            <li>
                                                Sensors (motion, ambient light, contact, temperature, and humidity)
                                            </li>
                                            <li>
                                                Thermostats, and window coverings
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                Amazon Echo smart speakers, Echo Pop, Echo Dot, and Echo Dot with Clock (third-gen and newer)
                                            </li>
                                            <li>
                                                Echo Studio
                                            </li>
                                            <li>
                                                Echo Show 5 and Echo Show 8 (second-gen and newer)
                                            </li>
                                            <li>
                                                Echo Show 10 (third-gen)
                                            </li>
                                            <li>
                                                Echo Input, Flex, and Plus (v2)
                                            </li>
                                            <li>
                                                Echo (4th-gen)*
                                            </li>
                                            <li>
                                                Eero Pro 6E, Pro 6, 6 Plus, 6, PoE 6, and PoE Gateway*
                                            </li>
                                            <li>
                                                Echo Show 8 (third-gen)*
                                            </li>
                                            <li>
                                                Eero Max 7*
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {
                        !download ? <button className='btn btn-success my-2' onClick={e => SetDownload(!download)}>Download Info as PDF file</button> : <div className='w-100' style={{ height: "500px" }}>
                            <button className='w-100 btn rounded-0 fw-bold my-1' style={{ background: '#00e3ff' }} onClick={e => SetDownload(false)}>Close &nbsp;&nbsp;&nbsp;<i class="bi bi-x-lg"></i></button>
                            <iframe src={MP} style={{ width: "100%", height: "100%", border: "none" }}></iframe>
                        </div>
                    }
                    <br/>
                    <br/>
                    <hr />
                    <sm>Note* : For more information you can visit <a href="https://en.wikipedia.org/wiki/Matter_(standard)" target='__blank' className='text-decoration-none'>Wikipedia</a></sm>
                </div>
            </div>

        </div>
    )
}

export default MatterProtocol