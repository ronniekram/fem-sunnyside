import React from 'react';

// STYLES
import styles from '../../assets/style/testimonials/testimonial.module.scss';

const Testimonial = ({ avatar, text, name, role }) => {
  return (
    <section>
      <img src={avatar} alt={`${name}'s profile avatar.`} />
      <p>{text}</p>
      <h1>{name}</h1>
      <p className={styles.role}>{role}</p>
    </section>
  );
}; 

export default Testimonial;
