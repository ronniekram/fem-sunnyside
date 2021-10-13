import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Hamburger } from '../../assets/svg/icon-hamburger.svg';

const Navigation = () => {
  return (
    <nav>
      <div>
        <Logo className="" />
      </div>

      <div className="desktop">
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
      </div>
    </nav>
  );
};

export default Navigation;
