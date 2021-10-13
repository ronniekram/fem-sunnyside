import React from 'react';
import { ReactComponent as hero } from '../../assets/img/hero.jpg';

const Hero = () => {
  return (
    <header>
      <div>
        <img src={hero} alt="Half an orange slice on blue backdrop." />
      </div>
    </header>
  );
};

export default Hero;
