import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Experience at a Glance</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ping_identity.jpg'
              text='Ping Identity'
              label='IAM / IAAS'
              path='https://www.pingidentity.com/en.html'
            />
            <CardItem
              src='images/automox.jpg'
              text='Automox'
              label='SAAS / IT Automation'
              path='https://www.automox.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/vanguard.jpg'
              text='Vanguard'
              label='SAAS / Finance'
              path='https://investor.vanguard.com/corporate-portal'
            />
            <CardItem
              src='images/lockheed-martin.png'
              text='Lockheed Martin'
              label='Defense'
              path='https://www.lockheedmartin.com/'
            />
            <CardItem
              src='images/westminster.png'
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