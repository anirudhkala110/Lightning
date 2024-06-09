import React, { useState, useEffect } from 'react';
import './FAQ.css'
import 'bootstrap/js/dist/modal'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const questions = [
    {
        id: 0,
        question: 'What is Matter Protocol ?',
        answer: "<b>Matter</b> is an open-source connectivity standard for smart home and IoT (Internet of Things) devices.",
        type: 'general',
        likes: 154,
        dislikes: 20
    },
    {
        id: 1,
        question: 'How do the automation solutions work ?',
        answer: '<ul><li>Switch Based Appliances : A Credit card sized device is installed behind your switchboard which connects to the supply and loads & provides conventional switching as well as Wi-Fi based control.</li><li>Remote-Based appliances : A Table-top device is installed in front of the appliance and is trained to replicate the respective IR-based commands</li></ul>',
        type: 'product',
        likes: 980,
        dislikes: 20
    },
    {
        id: 2,
        question: 'What devices can be automated via remote automation ?',
        answer: 'All Standard IR-based Remote operated appliances such as ACs, TVs & Sound systems are compatible with the automation system.',
        type: 'product',
        likes: 653,
        dislikes: 20
    },
    {
        id: 3,
        question: 'Which Voice assistants is the product line compatible with ?',
        answer: 'The Aliste product line is compatible with Amazon Alexa, Apple Siri Shortcuts & Google Assistant. It can easily be integrated with these assistants via their respective applications.',
        type: 'product',
        likes: 771,
        dislikes: 20
    },
    {
        id: 5,
        question: 'Do I have to change my switchboard or appliances to automation ?',
        answer: 'No, we provide you with a complete retrofit solution. The Sync Device goes right behind your existing switchboards without any additional rewiring.',
        type: 'general',
        likes: 840,
        dislikes: 20
    },
    {
        id: 4,
        question: 'Can an existing home be automated ?',
        answer: 'Yes, our solutions are designed to automate new & existing homes without any rewiring or reconfiguration.',
        type: 'general',
        likes: 1750,
        dislikes: 20
    },
    {
        id: 6,
        question: 'Does your product needs re-wiring ?',
        answer: 'No, Our products do not require any rewiring. They are perfectly compatible with your existing switchboard.',
        type: 'general',
        likes: 352,
        dislikes: 20
    },
    {
        id: 7,
        question: 'How does it takes to install the solution ?',
        answer: 'A device typically takes around 15 minutes to install. Set up of a standard 3 BHK takes approximately 2-3 hours.',
        type: 'general',
        likes: 554,
        dislikes: 20
    },
    {
        id: 8,
        question: 'What type of network does the device support ?',
        answer: 'The device requires a 2.4 GHz WiFi Connection of sufficient strength, Aliste is not liable for irregularities or malfunctions caused due to low quality network',
        type: 'usage',
        likes: 210,
        dislikes: 20
    },
    {
        id: 9,
        question: 'How do I share access to my smart home ?',
        answer: 'The device requires a 2.4 GHz WiFi Connection of sufficient strength, Aliste is not liable for irregularities or malfunctions caused due to low quality network',
        type: 'usage',
        likes: 789,
        dislikes: 20
    },
    {
        id: 10,
        question: 'How many users can access a single home ?',
        answer: 'There is no limit on the number of users that can access a single home',
        type: 'usage',
        likes: 511,
        dislikes: 20
    },
];

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isAdmin, setAdmin] = useState(false)
    const [searchResults, setSearchResults] = useState([]);
    const [type, setType] = useState('general')
    const [editorValue, setEditorValue] = useState('');
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const [qerry, setQuerry] = useState()
    useEffect(() => {
        const results = questions.filter((item) =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    const navigate = useNavigate()
    const handleSubmit = () => {
        // Your API endpoint for saving the content
        const saveEndpoint = 'https://localhost:5090/api/saveUpdate';

        if (qerry === '' || !qerry) {
            alert("Enter the Querry First...");
            return
        } else {
            axios.post(saveEndpoint, {
                topic: qerry,
                content: editorValue,
                date: currentDate,
                time: currentTime
            })
                .then(res => {
                    alert("Post Uploaded...");
                    navigate('/');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };
    const [addQues, setAddQues] = useState(false)
    return (
        <div className='cntner'>
            <h2 className='hding text-primary py-2' style={{ fontSize: '55px', borderBottom: '1px solid ' }}>Frequently asked <strong className='FAQes'>Questions</strong></h2>
            {isAdmin && <div className='w-100 d-flex align-items-center justify-content-end' >{addQues ? <button className='btn btn-danger mb-2' onClick={e => setAddQues(!addQues)}>Close <i className='bi bi-x-lg'></i></button> : <button className='btn btn-success mb-2' onClick={e => setAddQues(!addQues)}>Add Query<i className='bi bi-plus-lg'></i></button>}</div>}
            {addQues &&
                <form className='my-3 border p-2'>
                    <center className='fs-2 fw-bold'>Add Querry</center>
                    <hr style={{ backgroundImage: "linear-gradient(to left,black, white,white,black)", height: "2px" }} />
                    <div className='text-start mb-2'>
                        <label className=''>Question</label>
                        <input className='form-control' placeholder='Enter the question or querry...' type='text' onChange={e => setQuerry(e.target.value)} />
                    </div>
                    <div className='text-start mb-2'>
                        <label className=''>Type</label>
                        <input className='form-control' placeholder='Enter type of querry same as general or product or usage' type='text' onChange={e => setType(e.target.value)} />
                    </div>
                    <div className='text-start mb-2'>
                        <label className=''>Answer or Reply</label>
                        <ReactQuill className='bg-white text-dark' value={editorValue} onChange={setEditorValue} style={{ height: '350px', overflow: 'auto' }} />
                        {/* <textarea cols={100} rows={10} style={{ resize: 'none' }} className='form-control' placeholder='Enter the question or querry...' type='text' onChange={e => setQuerry(e.target.value)} /> */}
                    </div>
                    <button className='btn btn-primary w-100 my-1 shadow' onClick={handleSubmit}>Upload</button>
                </form>}
            {/* <Searchbar onSearchChange={handleSearchChange} /> */}
            <center id='typeActive'>
                <button className={`btn mx-2 typeBtn ${type === 'general' ? 'btn-primary' : ''}`} onClick={e => setType('general')}>General</button>
                <button className={`btn mx-2 typeBtn ${type === 'product' ? 'btn-primary' : ''}`} onClick={e => setType('product')}>Product</button>
                <button className={`btn mx-2 typeBtn ${type === 'usage' ? 'btn-primary' : ''}`} onClick={e => setType('usage')}>Usage</button>
            </center>
            <section className='faq px-3' style={{ maxHeight: '270px', overflow: 'auto' }} >
                {searchResults.map((item) => (
                    <>
                        {
                            type === item.type ? <div className='' style={{ maxHeight: '' }}><Question key={item.id} question={item.question} answer={item.answer} id={item.id} initialLikes={item.likes} initialdisLikes={item.dislikes} /></div> : ''
                        }
                    </>
                ))}
            </section>
        </div>
    );
};

const Searchbar = ({ onSearchChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        onSearchChange(e);
    };

    return (
        <form className="mb-5">
            {/* <svg viewBox='0 0 512 512' width='100' title='search'>
                <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z' />
            </svg> */}
            <input
                className='searchbar text-black'
                type='text'
                placeholder='Describe your issue'
                onChange={handleChange}
                value={value}
            />
        </form>
    );
};

const Question = ({ id, question, answer, initialLikes, initialdisLikes }) => {
    const [isActive, setActive] = useState(false);
    const [likeCount, setLikeCount] = useState(initialLikes)
    const [dislikeCount, setDisLikeCount] = useState(initialdisLikes)

    const handleClick = () => {
        setActive(!isActive);
    };
    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        if (modalShow) {
            const interval = setInterval(() => {
                setModalShow(false);
            }, 1500);

            // Clear the interval when the component unmounts or modalShow changes
            return () => clearInterval(interval);
        }
    }, [modalShow]);
    const handleLike = () => {
        if (dislike) {
            setDisLikeCount(dislikeCount - 1);
        }
        if (!like) {
            setLikeCount(likeCount + 1);
        } else {
            setLikeCount(likeCount - 1);
        }
        setLike(!like);
        setDislike(false);
        setModalShow(true);
    };

    const handleDislike = () => {
        if (like) {
            setLikeCount(likeCount - 1);
        }
        if (!dislike) {
            setDisLikeCount(dislikeCount + 1);
        } else {
            setDisLikeCount(dislikeCount - 1);
        }
        setDislike(!dislike);
        setLike(false);
        setModalShow(true);
    };
    return (
        <>
            <div className='question-wrapper' style={{ cursor: 'pointer' }}>
                <div className='question'>
                    <h5 className='text-white quesHover me-1' style={{ textAlign: 'left' }}>{question} </h5>
                    <div className='d-flex align-items-center ps-2' style={{ borderLeft: '1px solid white', minWidth: '130px' }}>
                        <div className='me-3 text-white'>
                            <i className={`bi ${like ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'} me-1 text-white`} onClick={e => (handleLike(id))}></i>
                            <div>{likeCount}</div>
                        </div>
                        <div className='me-3 text-white'>
                            <i className={`bi ${dislike ? 'bi-hand-thumbs-down-fill' : 'bi-hand-thumbs-down'} me-1 text-white`} onClick={(handleDislike)}></i>
                            <div>{dislikeCount}</div>
                        </div>
                        <button onClick={handleClick}>
                            <svg className={isActive ? 'active' : ''} viewBox='0 0 320 512' width='150' title='angle-down'>
                                <path d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z' />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${isActive ? 'answer active' : 'answer'} text-white mb-2 pb-4`} style={{ height: '-webkit-fill-available' }}>
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: answer }} ></div>
                </div>

            </div>
            {
                modalShow &&
                <div className='container w-100 d-flex justify-content-center align-items-center' style={{ position: 'fixed', top: '40%', left: '5%', zIndex: '1000' }}>
                    <div style={{ boxShadow: "0px 0px 8000px 800px #000000db" }}>
                        <center className='modalMade border rounded-3 container-fluid' style={{ position: '', top: '0%', maxWidth: '450px' }}>
                            <strong>{like && 'Thanks for your feedback 😍!'}{!like && 'Thanks for your feedback 🙂!'}</strong>
                            {/* <strong>{dislike && !like && 'Thanks for your feedback 😰!' }{!dislike && 'Thanks for your feedback 🙂!'}</strong> */}
                        </center>
                    </div>
                </div>
            }
        </>
    );
};

export default FAQ;
