import React from 'react';
import arrow from '../../assets/svg/icon-arrow-down.svg';
import styles from '../../assets/style/layout/hero.module.scss';


const Hero = () => {
  return (
    <header>

      <div>
        <h1> We are creatives </h1>
        <img src={arrow} alt="" />
      </div>

    </header>
  );
};

export default Hero;
