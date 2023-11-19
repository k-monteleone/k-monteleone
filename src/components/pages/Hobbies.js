import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HobbieHeader from '../HobbieHeader';
import HobbieCards from '../HobbieCards';

export default function Hobbies() {
  return (
    <>
      <HobbieHeader />
      <HobbieCards />
      <Footer />
    </>
  );
}