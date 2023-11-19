import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './Westminster.css';
import westminsterLogo from './pages/images/westminster.png';
import capstoneLogo from './pages/images/capstone.jpg';

function Westminster() {

    const [isBig, setSize] = useState(false);
    const [isSmall, setSmall] = useState(false);

    const showBig = () => {
        if (window.innerWidth <= 860) {
            setSize(false);
        } else {
            setSize(true);
        }
    };

    const showSmall = () => {
        if (window.innerWidth <= 1060) {
            setSmall(false);
        } else {
            setSmall(true);
        }
    };

    useEffect(() => {
        showBig()
    }, []);

    useEffect(() => {
        showSmall()
    }, []);

    window.addEventListener('resize', showBig)
    window.addEventListener('resize', showSmall)

    return (
        <>
            <ul className="westminser-tasks">
                <li className='tasks'>
                    <div className='westminster'>
                        <h2 className={isBig ? 'position-title':'position-title-small'}>
                            <a className='logo' href='https://www.westminster.edu/index.cfm' target="_blank" rel="noreferrer">
                                <img className='logo' src={westminsterLogo} alt='example' />
                            </a>
                            <ul className='job-description'>
                                <li className='title'>Computer Science</li>
                                <li className='sub-title'>Westminster 2014-2018</li>
                                <li className='sub-title'>Bachelor of Science</li>
                            </ul>
                            <ul className={isSmall ? 'job-details':'job-details-small'}>
                                <li className='details'>Developed and Tested a variety of classic computer algorithms & data structures</li>
                                <li className='details'>Data Structures I, II; Language Design & Implementation; Principles I, II</li>
                                <li className='details'>Human-Computer Interaction, Corporate Cyber Security, Project Management</li>
                                <li className='details'>Biomedical Ethics, Neuropsychology of the Mind, Formal Logic</li>
                            </ul>
                            <ul className={isBig ? 'tech-stack':'tech-stack-small'}>
                                <li className='tech'>Java</li>
                                <li className='tech'>C/C++</li>
                                <li className='tech'>MIPs</li>
                                <li className='tech'>Smalltalk</li>
                                <li className='tech'>Clojure</li>
                            </ul>
                            <ul className={isBig ? 'tech-stack':'tech-stack-small'}>
                                <li className='tech'>Prolog</li>
                                <li className='tech'>Data Structures</li>
                                <li className='tech'>Software Eng.</li>
                                <li className='tech'>Cyber Sec.</li>
                                <li className='tech'>HCI</li>
                            </ul>
                        </h2>
                    </div>
                </li>
                <li className='tasks'>
                    <div className='westminster'>
                        <h2 className={isBig ? 'position-title':'position-title-small'}>
                            <a className='logo' href='https://docs.google.com/presentation/d/1Hv_AL2kTYKlPZnljkiAobctUYlHrE90E11Z7u8-ut5g/edit?usp=sharing' target="_blank" rel="noreferrer">
                                <img className='logo' src={capstoneLogo} alt='example' />
                            </a>
                            <ul className='job-description'>
                                <li className='title'>Capstone Project</li>
                                <li className='sub-title'>Trinity College Competition</li>
                                <li className='sub-title'>Penn State Presentation</li>
                            </ul>
                            <ul className={isSmall ? 'job-details':'job-details-small'}>
                                <li className='details'>Firefighting Senior Division, Unique: First Place</li>
                                <li className='details'>North American Award: Second Place</li>
                                <li className='details'>Extended OpenCV Library for greater accuracy with variable distance & size</li>
                                <li className='details'>Designed and Built an autonomous robot for competition at Trinity College</li>
                            </ul>
                            <ul className={isBig ? 'tech-stack':'tech-stack-small'}>
                                <li className='tech'>C/C++</li>
                                <li className='tech'>Arduino</li>
                                <li className='tech'>Raspbery Pi</li>
                                <li className='tech'>LiDAR</li>
                                <li className='tech'>SLAM</li>
                            </ul>
                            <ul className={isBig ? 'tech-stack':'tech-stack-small'}>
                                <li className='tech'>OpenCV</li>
                                <li className='tech'>Computer Vision</li>
                                <li className='tech'>Robotics</li>
                                <li className='tech'>Git</li>
                                <li className='tech'>Assembly</li>
                            </ul>
                        </h2>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Westminster;