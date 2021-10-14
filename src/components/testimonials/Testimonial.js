import React from 'react';

// STYLES
import styles from '../../assets/style/testimonials/testimonial.module.scss';

const Testimonial = ({ avatar, text, name, role }) => {
  return (
    <div className={styles.testimonial}>
      <img src={avatar} alt={`${name}'s profile avatar.`} />
      <p>{text}</p>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.role}>{role}</p>
    </div>
  );
}; 

export default Testimonial;
