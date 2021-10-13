import React from 'react';
import styles from '../assets/style/graphic.module.scss';

const Graphic = ({ image, heading, text, color }) => {
  const colorStyle = color === 'blue' ? styles.blue : styles.green;

  return (
    <section className={colorStyle}>
      <div className={styles.text}>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default Graphic;
