import React, { useState, useEffect } from 'react';
import './FAQ.css'

const questions = [
    {
        id: 1,
        question: 'How do the automation solutions work ?',
        answer: 'Switch Based Appliances : A Credit card sized device is installed behind your switchboard which connects to the supply and loads & provides conventional switching as well as Wi-Fi based control. Remote-Based appliances : A Table-top device is installed in front of the appliance and is trained to replicate the respective IR-based commands',
        type: 'product',
    },
    {
        id: 2,
        question: 'What devices can be automated via remote automation ?',
        answer: 'All Standard IR-based Remote operated appliances such as ACs, TVs & Sound systems are compatible with the automation system.',
        type: 'product',
    },
    {
        id: 3,
        question: 'Which Voice assistants is the product line compatible with ?',
        answer: 'The Aliste product line is compatible with Amazon Alexa, Apple Siri Shortcuts & Google Assistant. It can easily be integrated with these assistants via their respective applications.',
        type: 'product',
    },
    {
        id: 5,
        question: 'Do I have to change my switchboard or appliances to automation ?',
        answer: 'No, we provide you with a complete retrofit solution. The Sync Device goes right behind your existing switchboards without any additional rewiring.',
        type: 'general',
    },
    {
        id: 4,
        question: 'Can an existing home be automated ?',
        answer: 'Yes, our solutions are designed to automate new & existing homes without any rewiring or reconfiguration.',
        type: 'general',
    },
    {
        id: 6,
        question: 'Does your product needs re-wiring ?',
        answer: 'No, Our products do not require any rewiring. They are perfectly compatible with your existing switchboard.',
        type: 'general',
    },
    {
        id: 7,
        question: 'How does it takes to install the solution ?',
        answer: 'A device typically takes around 15 minutes to install. Set up of a standard 3 BHK takes approximately 2-3 hours.',
        type: 'general',
    },
    {
        id: 8,
        question: 'What type of network does the device support ?',
        answer: 'The device requires a 2.4 GHz WiFi Connection of sufficient strength, Aliste is not liable for irregularities or malfunctions caused due to low quality network',
        type: 'usage',
    },
    {
        id: 9,
        question: 'How do I share access to my smart home ?',
        answer: 'The device requires a 2.4 GHz WiFi Connection of sufficient strength, Aliste is not liable for irregularities or malfunctions caused due to low quality network',
        type: 'usage',
    },
    {
        id: 10,
        question: 'How many users can access a single home ?',
        answer: 'There is no limit on the number of users that can access a single home',
        type: 'usage',
    },
];

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [type, setType] = useState('general')
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const results = questions.filter((item) =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div className='cntner'>
            <h2 className='hding text-primary py-2' style={{ fontSize: '55px', borderBottom: '1px solid ' }}>Frequently asked <strong className='FAQes'>Questions</strong></h2>
            {/* <Searchbar onSearchChange={handleSearchChange} /> */}
            <center id='typeActive'>
                <button className={`btn mx-2 typeBtn ${type === 'general' ? 'btn-primary' : ''}`} onClick={e => setType('general')}>General</button>
                <button className={`btn mx-2 typeBtn ${type === 'product' ? 'btn-primary' : ''}`} onClick={e => setType('product')}>Product</button>
                <button className={`btn mx-2 typeBtn ${type === 'usage' ? 'btn-primary' : ''}`} onClick={e => setType('usage')}>Usage</button>
            </center>
            <section className='faq'>
                {searchResults.map((item) => (
                    <>
                        {
                            type === item.type ? <Question key={item.id} question={item.question} answer={item.answer} /> : ''
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
        <form>
            <svg viewBox='0 0 512 512' width='100' title='search'>
                <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z' />
            </svg>
            <input
                className='searchbar'
                type='text'
                placeholder='Describe your issue'
                onChange={handleChange}
                value={value}
            />
        </form>
    );
};

const Question = ({ question, answer }) => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    };

    return (
        <div className='question-wrapper' onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className='question' >
                <h5 className='text-white quesHover'>{question}</h5>
                <button >
                    <svg
                        className={isActive ? 'active' : ''}
                        viewBox='0 0 320 512'
                        width='100'
                        title='angle-down'
                    >
                        <path d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z' />
                    </svg>
                </button>
            </div>
            <div className={`${isActive ? 'answer active' : 'answer'} text-white mb-2`} >
                <hr />
                {answer}
            </div>
        </div>
    );
};

export default FAQ;
