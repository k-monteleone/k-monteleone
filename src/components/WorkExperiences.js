import React from 'react';
import './WorkExperiences.css';
import pingLogo from './pages/images/ping.png'
import automoxLogo from './pages/images/automox.jpg'
import vanguardLogo from './pages/images/vanguard.jpg'
import lockheedLogo from './pages/images/lockheed-martin.png'

function WorkExperiences() {
    return (
        <>
            <ul className='work-experiences'>
                <li className='job'>
                    <div className='ping-identity'>
                        <h2 className='position-title'>
                            <a className='logo' href='https://www.pingidentity.com/en.html' target="_blank" rel="noreferrer">
                                <img className='logo' src={pingLogo} alt='example' />
                            </a>
                            <ul className='job-description'>
                                <li className='title'>Software Engineer</li>
                                <li className='sub-title'>Ping: 1 yr 4 mos</li>
                                <li className='sub-title'>IAM / IAAS</li>
                            </ul>
                            <ul className='job-details-ping'>
                                <li className='details-ping'>Collaborated in a small team to develop Java-based microservices and locally-hosted solutions, utilizing REST APIs and WebSocket connections</li>
                                <li className='details-ping'>Proactively addressed compatibility issues with dev tools on M-Series Mac</li>
                                <li className='details-ping'>Led the development and proof-of-concept of a standalone Windows service for a product</li>
                                <li className='details-ping'>Worked alongside senior developers as the team Security Champion to resolve high-priority CVEs</li>
                                <li className='details-ping'>Assisted in the onboarding and training of new team members</li>
                                <li className='details-ping'>Conducted incident response on-call, ensuring swift resolution of critical incidents</li>
                                <li className='details-ping'>Fostered cross-team collaboration to ensure timely product releases and seamless compatibility</li>
                            </ul>
                            <ul className='tech-stack'>
                                <li className='tech'>Java</li>
                                <li className='tech'>New Relic</li>
                                <li className='tech'>Kubernetes</li>
                                <li className='tech'>REST</li>
                                <li className='tech'>Cassandra</li>
                            </ul>
                            <ul className='tech-stack'>
                                <li className='tech'>Spring</li>
                                <li className='tech'>Bash</li>
                                <li className='tech'>Splunk</li>
                                <li className='tech'>AWS</li>
                                <li className='tech'>Docker</li>
                            </ul>
                        </h2>
                    </div>
                </li>

                <li className='job'>
                    <div className='automox'>
                        <h2 className='position-title'>
                            <a className='logo' href='https://www.automox.com/' target="_blank" rel="noreferrer">
                                <img className='logo' src={automoxLogo} alt='example' />
                            </a>
                            <ul className='job-description'>
                                <li className='title'>Software Engineer III</li>
                                <li className='sub-title'>Automox: 8 mos</li>
                                <li className='sub-title'>SAAS / IT Automation</li>
                            </ul>
                            <ul className='job-details'>
                                <li className='details'>Designed and Developed an Elasticsearch service used in next-gen project development</li>
                                <li className='details'>Handled and successfully resolved live, customer-facing, high-impact incidents</li>
                                <li className='details'>Implemented new alerting and management systems within a legacy framework to increase product reliability and reduce MTD/MTM times</li>
                            </ul>
                            <ul className='tech-stack'>
                                <li className='tech'>Java</li>
                                <li className='tech'>PHP</li>
                                <li className='tech'>Go</li>
                                <li className='tech'>Kafka</li>
                                <li className='tech'>Elasticsearch</li>
                            </ul>
                            <ul className='tech-stack'>
                                <li className='tech'>Spring</li>
                                <li className='tech'>Kubernetes</li>
                                <li className='tech'>DataDog</li>
                                <li className='tech'>AWS</li>
                                <li className='tech'>Docker</li>
                            </ul>
                        </h2>
                    </div>
                </li>

                <li className='job'>
                    <div className='ping-identity'>
                        <h2 className='position-title'>
                            <a className='logo' href='https://investor.vanguard.com/corporate-portal' target="_blank" rel="noreferrer">
                                <img className='logo' src={vanguardLogo} alt='example' />
                            </a>
                            <ul className='job-description'>
                                <li className='title'>Software Engineer II</li>
                                <li className='sub-title'>Vanguard: 1 y 3 mos</li>
                                <li className='sub-title'>Finance</li>
                            </ul>
                            <ul className='job-details'>
                                <li className='details'>Helped kick off a new development team on a ‘Big 6’ program</li>
                                <li className='details'>Worked with specialized agile teams to deliver custom products and solutions</li>
                                <li className='details'>Developed functional software products from the ground up in an Agile environment</li>
                            </ul>
                            <ul className='tech-stack'>
                                <li className='tech'>Java</li>
                                <li className='tech'>CI/CD</li>
                                <li className='tech'>Atlassian</li>
                                <li className='tech'>REST/SOAP</li>
                                <li className='tech'>PostgrSQL</li>
                            </ul>
                            <ul className='tech-stack'>
                                <li className='tech'>Spring</li>
                                <li className='tech'>PagerDuty</li>
                                <li className='tech'>Postman</li>
                                <li className='tech'>AWS</li>
                                <li className='tech'>Python</li>
                            </ul>
                        </h2>
                    </div>
                </li>

                <li className='job'>
                    <div className='automox'>
                        <h2 className='position-title'>
                            <a className='logo' href='https://www.lockheedmartin.com/' target="_blank" rel="noreferrer">
                                <img className='logo' src={lockheedLogo} alt='example' />
                            </a>
                            <ul className='job-description'>
                                <li className='title'>Software Engineer Asc.</li>
                                <li className='sub-title'>Lockheed Martin: 2 y 4 mos</li>
                                <li className='sub-title'>Defense</li>
                            </ul>
                            <ul className='job-details'>
                                <li className='details'>Worked on IRAD and Direct-to-Customer projects</li>
                                <li className='details'>Participated in Agile Software Development with multiple teams</li>
                                <li className='details'>Developed, tested, and reviewed a software across multiple languages</li>
                            </ul>
                            <ul className='tech-stack'>
                                <li className='tech'>Java</li>
                                <li className='tech'>JavaScript/TS</li>
                                <li className='tech'>C/C++</li>
                                <li className='tech'>Angular</li>
                                <li className='tech'>Ansible</li>
                            </ul>
                            <ul className='tech-stack'>
                                <li className='tech'>Spring</li>
                                <li className='tech'>Git/GitLab</li>
                                <li className='tech'>C#</li>
                                <li className='tech'>AWS</li>
                                <li className='tech'>Docker</li>
                            </ul>
                        </h2>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default WorkExperiences;