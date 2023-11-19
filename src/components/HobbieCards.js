import React from 'react';
import './HobbieCards.css';
import HobbieCardItem from './HobbieCardItem';

function HobbieCards() {
  return (
    <div className='hobbie-cards'>
      <h1>Just for Fun!</h1>
      <div className='hobbie-cards__container'>
        <div className='hobbie-cards__wrapper'>
          <ul className='hobbie-cards__items'>
            <HobbieCardItem
              src='./images/IMG_0017.jpg'
              label='Fishing'
            />
            <HobbieCardItem
              src='images/IMG_1904.jpg'
              label='Climbing'
            />
          </ul>
          <ul className='hobbie-cards__items'>
            <HobbieCardItem
              src='./images/IMG_4984.jpg'
              label='Hiking'
            />
            <HobbieCardItem
              src='./images/IMG_3692.jpg'
              label='Games'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HobbieCards;