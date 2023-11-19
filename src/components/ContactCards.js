import React from 'react';
import './ContactCards.css';
import ContactCardItem from './ContactCardItem';
import email from './pages/images/email.jpg';
import phone from './pages/images/cell.jpg';

function ContactCards() {
  return (
    <div className='contact-cards'>
      <h1>Get in Touch</h1>
      <div className='contact-cards__container'>
        <div className='contact-cards__wrapper'>
          <ul className='contact-cards__items'>
            <ContactCardItem
              src={email}
              text='kylemonteleone96@gmail.com'
              label='Email'
            />
            <ContactCardItem
              src={phone}
              text='Cell: 724-599-6628'
              label='Phone'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;