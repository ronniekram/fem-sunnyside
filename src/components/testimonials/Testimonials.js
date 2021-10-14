import React from 'react';
import Testimonial from './Testimonial';

// AVATARS
import emily from '../../assets/img/image-emily.jpg';
import jennie from '../../assets/img/image-jennie.jpg';
import thomas from '../../assets/img/image-thomas.jpg';

// STYLE
import styles from '../../assets/style/testimonials/testimonials.module.scss';

const Testimonials = () => {
  const testimonials = [
    {
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      role: "Marketing Director",
      avatar: emily
    },
    {
      text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      role: "Chief Operating Officer",
      avatar: thomas
    },
    {
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      role: "Business Owner",
      avatar: jennie
    },
  ];

  const renderTestimonials = () => {
    return testimonials.map(tst => <Testimonial text={tst.text} name={tst.name} role={tst.role} avatar={tst.avatar} />)
  };

  return (
    <article className={styles.testimonialsContainer}>
      <h1 className={styles.title}>Client Testimonials</h1>
      
      <div className={styles.list}>
        {renderTestimonials()}
      </div>
    </article>
  );
};

export default Testimonials;
