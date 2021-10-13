import React from 'react';

// Styles
import styles from '../../assets/style/layout/nav.module.scss';

// Images
import logo from '../../assets/svg/logo.svg';
import hamburger from '../../assets/svg/icon-hamburger.svg';

const Navigation = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>

      <div>
        <img src={hamburger} alt="" />
      </div>

      {/* <div className="desktop">
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="mobile">
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navigation;
