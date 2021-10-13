import React from 'react';
import styles from '../assets/style/graphic.module.scss';

const Graphic = ({ image, heading, text, color }) => {
  const colorStyle = color === 'blue' ? styles.blue : styles.green;

  return (
    <section>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>

      <div className={styles.text}>
        <h1 className={colorStyle}>{heading}</h1>
        <p className={colorStyle}>{text}</p>
      </div>
    </section>
  );
};

export default Graphic;
