import React from 'react';
import styles from '../assets/style/info.module.scss';

const Info = ({ image, heading, text, color }) => {

  const renderInfo = () => {
    if (color === 'red') {
      return (
        <>
          <div>
            <img src={image} alt="" />
          </div>
  
          <div className={styles.text}>
            <h1>{heading}</h1>
            <p>{text}</p>
            <a href="#">Learn More</a>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.text}>
            <h1>{heading}</h1>
            <p>{text}</p>
            <a href="#">Learn More</a>
          </div>

          <div>
            <img src={image} alt="" />
          </div>
        </>
      );
    }
  }
  return (
    <section>
      {renderInfo()}
    </section>
  );
};

export default Info;
