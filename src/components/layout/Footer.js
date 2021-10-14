import React from 'react';

// JPGS
import milk from '../../assets/img/milk.jpg';
import orange from '../../assets/img/orange.jpg';
import cone from '../../assets/img/cone.jpg';
import sugar from '../../assets/img/sugar.jpg';

// SVGS
import logo from '../../assets/svg/logo.svg';
import facebook from '../../assets/svg/facebook.svg';
import insta from '../../assets/svg/insta.svg';
import pinterest from '../../assets/svg/pinterest.svg';
import twitter from '../../assets/svg/twitter.svg';

// STYLES
import styles from '../../assets/style/layout/footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.photos}>

        <div>
          <img src={milk} alt="" />
          <img src={orange} alt="" />
        </div>

        <div className={styles.bottom}>
          <img src={cone} alt="" />
          <img src={sugar} alt="" />
        </div>

      </div>

      <div className={styles.info}>
        <img src={logo} className={styles.logo} alt="" />

        <div className={styles.links}>
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
        </div>

        <div className={styles.social}>
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
          <img src={pinterest} alt="" />
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
