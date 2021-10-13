import React from 'react';
import styles from '../assets/style/info.module.scss';

const Info = ({ image, heading, text, color }) => {
  const anchorStyle = color === 'red' ? styles.red : styles.yellow;

  return (
    <section>

      <div>
        <img src={image} alt="" />
      </div>

      <div className={styles.text}>
        <h1>{heading}</h1>
        <p>{text}</p>
        <a href="#" className={anchorStyle}>Learn More</a>
      </div>

    </section>
  );
};

export default Info;
