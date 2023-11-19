import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import ping from './pages/images/Ping_Identity.jpg';
import automox from './pages/images/automox.jpg';
import vanugard from './pages/images/vanguard.jpg';
import lockheed from './pages/images/lockheed-martin.png';
import westminster from './pages/images/westminster.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Experience at a Glance</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={ping}
              text='Ping Identity'
              label='IAM / IAAS'
              path='https://www.pingidentity.com/en.html'
            />
            <CardItem
              src={automox}
              text='Automox'
              label='SAAS / IT Automation'
              path='https://www.automox.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={vanugard}
              text='Vanguard'
              label='SAAS / Finance'
              path='https://investor.vanguard.com/corporate-portal'
            />
            <CardItem
              src={lockheed}
              text='Lockheed Martin'
              label='Defense'
              path='https://www.lockheedmartin.com/'
            />
            <CardItem
              src={westminster}
              text='Westminster College'
              label='BS: Software Engineering'
              path='https://www.westminster.edu/index.cfm'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;