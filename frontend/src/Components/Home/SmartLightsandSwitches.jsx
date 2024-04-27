import React from 'react'

const SmartLightsandSwitches = () => {
    return (
        <div className='bg-black w-100 pt-2 d-flex align-items-start justify-content-center'>
            <div className='container  p-2 bg-black text-white'
            // style={{ borderLeft: '1px solid rgb(196 191 191)', borderRight: '1px solid rgb(196 191 191)' }}
            >
                <div className='py-1'>
                    <br />
                    <center className='p-1 rounded-0 mb-1 alert text-primary fw-semibold fs-2'>
                        Smart Lights and Switches with use of Matter Protocol
                    </center>
                    <h4> Turn your light ON / OFF just by your inward and outward movement, voice or Smart Phone. The Matter protocol is a new industry standard that enables seamless
                        connectivity and control of smart home devices, including lights and
                        switches, across different brands and platforms.
                    </h4>
                    <hr />
                    <div className='card bg-dark px-2 text-white rounded-0 py-2'>
                        <div className=''>
                            <center className='fs-3'>Integrating Matter Protocol into Your Smart Home (smart switches and lights)</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Upgrading Existing Devices
                                    <div className='card-body text-white'>
                                        Many existing smart home devices can be upgraded to support the Matter protocol, allowing you to seamlessly integrate them into your smart home setup.
                                    </div>
                                </li>
                                <li>&nbsp;Choosing New Matter Enabled Devices
                                    <div className='card-body text-white'>
                                        When selecting new smart home devices, look for those  that are Matter-certified to  ensure compatibility and ease  of integration.
                                    </div>
                                </li>
                                <li>&nbsp;Updating Your Smart Home Hub
                                    <div className='card-body text-white'>
                                        Ensure your smart home hub  or platform is Matter compatible to control and  manage all your Matter enabled devices from a single  interface
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <hr />
                        <div className=''>
                            <center className='fs-3'>The Benefits of Matter Protocol in Smart lights and Switches</center>
                            <hr />
                            <ol className='ps-3 text-info'>
                                <li>&nbsp;Interoperability
                                    <div className='card-body text-white'>
                                        Matter ensures that smart home devices can communicate and work together, regardless of the brand or platform
                                    </div>
                                </li>
                                <li>&nbsp;Simplified Setup
                                    <div className='card-body text-white'>
                                        Matter provides a simplified setup process, making it easier to integrate new smart devices into your home.
                                    </div>
                                </li>
                                <li>&nbsp; Enhanced Security
                                    <div className='card-body text-white'>
                                        Matter incorporates robust security measures to protect your smart home from potential cyber threats
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>

        </div>
    )
}

export default SmartLightsandSwitches