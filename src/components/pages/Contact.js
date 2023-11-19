import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ContactHeader from '../ContactHeader';
import ContactCards from '../ContactCards';

export default function Contact() {
  return (
    <>
      <ContactHeader />
      <ContactCards />
      <Footer />
    </>
  );
}