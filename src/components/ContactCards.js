import React from 'react';
import './ContactCards.css';
import ContactCardItem from './ContactCardItem';

function ContactCards() {
  return (
    <div className='contact-cards'>
      <h1>Get in Touch</h1>
      <div className='contact-cards__container'>
        <div className='contact-cards__wrapper'>
          <ul className='contact-cards__items'>
            <ContactCardItem
              src='images/email.jpg'
              text='kylemonteleone96@gmail.com'
              label='Email'
            />
            <ContactCardItem
              src='images/cell.jpg'
              text='Cell: 734-599-6628'
              label='Phone'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;