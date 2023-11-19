import React from 'react';
import './HobbieCards.css';
import HobbieCardItem from './HobbieCardItem';
import fish from './pages/images/IMG_0017.jpg';
import climb from './pages/images/IMG_1904.jpg';
import hike from './pages/images/IMG_4984.jpg';
import games from './pages/images/IMG_3692.jpg';

function HobbieCards() {
  return (
    <>
    <div className='hobbie-cards'>
      <h1>Just for Fun!</h1>
      <div className='hobbie-cards__container'>
        <div className='hobbie-cards__wrapper'>
          <ul className='hobbie-cards__items'>
          <HobbieCardItem
              src={fish}
              label='Fishing'
            />
            <HobbieCardItem
              src={climb}
              label='Climbing'
            />
          </ul>
          <ul className='hobbie-cards__items'>
          <HobbieCardItem
              src={hike}
              label='Hiking'
            />
            <HobbieCardItem
              src={games}
              label='Games'
            />
          </ul>
        </div>
      </div>
    </div>
</>
  );
}

export default HobbieCards;