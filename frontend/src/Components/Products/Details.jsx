import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import arm1 from '../../Images/homeAutomationUsingMotion.jpg'
import arm2 from '../../Images/homeAutomationUsingMotion.jpg'
import arm3 from '../../Images/homeAutomationUsingMotion.jpg'
import arm4 from '../../Images/homeAutomationUsingMotion.jpg'
import arm5 from '../../Images/homeAutomationUsingMotion.jpg'
// import vdo1 from '../../Images/roboticArm.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';

const data0 = [
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm1 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm2 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm3 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm4 },
    { uploadedBy: 'Anirudh Kala', location: 'Delhi', machineName: 'Robotic Arm', img: arm5 }
]

const Details = () => {
    useEffect(() => {
        AOS.init({ duration: 200 })
    }, [])
    const { id, uploadedBy, machineName, location } = useParams()
    return (
        <div className='min-vh-100 d-flex justify-content-start align-items-start'>
            <div className='w-100 pb-2'>
                <div className='sideBarButtonDetailsPage'>
                    <button className=' btn btn-primary' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2" style={{ position: 'fixed', zIndex: '100' }}>
                        <i class="bi bi-arrow-left-right fw-bolder fs-5"></i>
                    </button>
                </div>
                <div>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Content</h5>
                            <button type="button" class="btn-close text-reset fs-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <hr />
                        {/* <div class="offcanvas-body overflow-auto pb-4" style={{    maxHeight: "-webkit-fill-available"}}> */}
                        <div class="offcanvas-body overflow-auto pb-1" style={{ maxHeight: "80vh" }}>
                            <div>
                                <button className='btn btn-info w-100 mb-2'>
                                    Types
                                </button>
                                <ul className='ps-0' style={{ listStyle: 'none' }}>
                                    <li className='subList  py-1 ps-3  '>Army Mechanical Arms</li>
                                    <li className='subList  py-1 ps-3  '>Medical Mechanical Arms</li>
                                    <li className='subList  py-1 ps-3  '>School Mechanical Arms</li>
                                    <li className='subList  py-1 ps-3  '>Construction Mechanical Arms</li>
                                    <li className='subList  py-1 ps-3  '>Automobile Mechanical Arms</li>
                                    <li className='subList  py-1 ps-3  '>Mechanical Arms for Mechanics</li>
                                </ul>
                            </div>
                            <hr />
                            <div>
                                <button className='btn btn-info w-100 mb-2'>
                                    Locations
                                </button>
                                <ul className='ps-0' style={{ listStyle: 'none' }}>
                                    <li className='subList  py-1 ps-3  '>Delhi</li>
                                    <li className='subList  py-1 ps-3  '>Mumbai</li>
                                    <li className='subList  py-1 ps-3  '>Chandighar</li>
                                    <li className='subList  py-1 ps-3  '>Maharastra</li>
                                    <li className='subList  py-1 ps-3  '>Goa</li>
                                    <li className='subList  py-1 ps-3  '>Uttarakhand</li>
                                </ul>
                            </div>
                            <hr />
                            <div>
                                <button className='btn btn-info w-100 mb-2'>
                                    Sortby
                                </button>
                                <ul className='ps-0' style={{ listStyle: 'none' }}>
                                    <li className='subList  py-1 ps-3  '>A-Z</li>
                                    <li className='subList  py-1 ps-3  '>Z-A</li>
                                    <li className='subList  py-1 ps-3  '>Type</li>
                                    <li className='subList  py-1 ps-3  '>Latest First</li>
                                    <li className='subList  py-1 ps-3  '>Location</li>
                                    <li className='subList  py-1 ps-3  '>Price</li>
                                </ul>
                            </div>
                            <hr />
                            {/* <div class="dropdown mt-3">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div className='container w-100 d-flex align-items-start justify-content-center'>
                        <div className='container w-100 bg-white px-2' style={{ borderLeft: '1px solid rgb(196 191 191)', borderRight: '1px solid rgb(196 191 191)' }}>
                            <center className='fs-3 fw-semibold alert mt-1 rounded-0 alert-success'>Detail of {machineName}</center>
                            <hr />
                            {
                                data0.map((data, i) => (
                                    <div style={{ display: `${id == i ? 'block' : 'none'}` }}>
                                        <div className=''>
                                            <div className='row'>
                                                <div className='text-center col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                                    {/* <div> */}
                                                    <img src={data.img} className="border w-100 bg-body-secondary" alt={data.machineName} style={{ position: '', maxWidth: "500px", maxHeight: '300px', zIndex: '20', marginLeft: '' }} data-aos='fade-up' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration='500' data-aos-mirror='true' />
                                                    {/* <div className="loadingBase" style={{ position: 'absolute',zIndex:'1', background: 'none',marginTop:'',marginLeft:'' }}>
                                                            <div className="wave"></div>
                                                            <div className="wave"></div>
                                                            <div className="wave"></div>
                                                            <div className="wave"></div>
                                                            <div className="wave"></div>
                                                            <div className="wave"></div>
                                                            <div className="wave"></div>
                                                            <div className="wave"></div>
                                                            <div className="wave"></div>
                                                            <div className="wave"></div>
                                                        </div> */}
                                                    {/* </div> */}
                                                </div>
                                                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 setBorderLeft750' style={{ borderLeft: '1px solid rgb(196 191 191)' }}>
                                                    <div>
                                                        <ul className='p-0' style={{ listStyle: 'none' }}>
                                                            <li><strong>Machine Name: </strong>{data.machineName}</li>
                                                            <li><strong>Location &nbsp;&nbsp; : </strong>{data.location}</li>
                                                            <li><strong>Condition &nbsp;&nbsp;: </strong>First Hand</li>
                                                            <li><strong>Uploaded By : </strong>{data.uploadedBy}</li>
                                                            <li><strong>Description : </strong><p>This is the robotic machine which can be used for many different purposes; like holding different things, pulling up some weight and and can peform the work like normal human being.</p></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='py-1'>
                                                <hr />
                                                <center className='p-1 rounded-0 mb-1 alert alert-info fw-semibold fs-4'>About Machine</center>
                                                <p>Robotic arms, also known as robotic manipulators or robot arms, are mechanical devices designed to mimic the functionality of human arms. These versatile tools are utilized across various industries and applications, ranging from manufacturing and assembly lines to space exploration and healthcare. At their core, robotic arms consist of several key components, including the manipulator, joints, end effector, and actuators.</p>
                                                <p>The manipulator forms the main body of the robotic arm, often comprising multiple segments connected by joints. These joints serve as points of articulation, enabling different degrees of freedom and motion. The end effector, attached to the arm's end, performs specific tasks and can vary widely depending on the application. It may include grippers, welding torches, cameras, or sensors. Actuators, such as electric, hydraulic, or pneumatic mechanisms, provide motion to the arm's joints, allowing it to execute precise movements.</p>
                                                <p>Robotic arms find applications across diverse industries. In manufacturing, they play a pivotal role in assembly lines, performing tasks like welding, painting, picking and placing objects, and packaging. In the automotive sector, robotic arms are integral to tasks such as welding car bodies, assembling components, and handling materials. Healthcare utilizes robotic arms in minimally invasive surgeries for their precision and dexterity, as well as in rehabilitation therapies and prosthetic limbs. Moreover, robotic arms contribute significantly to space exploration, assisting in spacecraft operations, rover mobility, and extraterrestrial tasks.</p>
                                                <p>The advantages of robotic arms are manifold. Their precision and repeatability enhance quality and efficiency in manufacturing processes. By automating repetitive or hazardous tasks, they increase productivity while reducing the risk of injuries to human workers. Additionally, the versatility of robotic arms allows them to be programmed for a wide range of tasks, making them indispensable across various industries. Overall, robotic arms represent a critical component of modern industry and technology, offering advanced capabilities for automation, precision, and efficiency.</p>
                                                <hr />
                                            </div>
                                            {/* <div className='text-center'>
                                                <video src={vdo1} className='w-100' style={{ maxWidth: "1000px" }} autoPlay controls disablePictureInPicture loop controlsList='nodownload' alt="Automated PCB Assembly Line. Conveyor with Advanced High Precision Robot Arms at Electronics Manufacturing Factory. Component Installation on Circuit Board. Semiconductor Production Industry Manufacturing Stock Footage Video" />
                                            </div> */}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Details
