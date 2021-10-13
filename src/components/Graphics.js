import React from 'react';
import Graphic from './Graphic';

// Images
import cherry from '../assets/img/cherry.jpg';
import orange from '../assets/img/orange.jpg';

// Styling
import styles from '../assets/style/graphics.module.scss';

const Graphics = () => {
  const graphics = [
    {
      image: cherry,
      heading: "Graphic Design",
      text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
      color: "green"
    },
    {
      image: orange,
      heading: "Photography",
      text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
      color: "blue"
    },
  ];

  const renderGraphics = () => {
    return graphics.map(graphic => <Graphic image={graphic.image} heading={graphic.text} color={graphic.color} />);
  };

  return (
    <article>
      {renderGraphics()}
    </article>
  );
};

export default Graphics;
