import React from 'react';
import Info from './Info';

import egg from '../assets/img/egg.jpg';
import cup from '../assets/img/cup.jpg';

const Sections = () => {
  const sections = [
    {
     image: egg,
     heading: 'Transform your brand',
     text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
     color: "yellow"
    },
    {
      image: cup,
      heading: 'Stand out to the right audience',
      text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
      color: 'red' 
     },

  ];

  const renderInfo = () => {
    return sections.map(section => <Info image={section.image} heading={section.heading} text={section.text} color={'red'} />);
  };

  return (
    <article>
      {renderInfo()}
    </article>
  );
};

export default Sections;
