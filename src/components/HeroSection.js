import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className='hero-text'>Kyle Monteleone</h1>
      <p className='hero-text'>Fullstack Software Engineer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact Me
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('Clicked!')}
        >
          See Resume
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;