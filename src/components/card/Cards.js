import React, { useState } from 'react';
import SingleCard from './SingleCard';

const Cards = () => {
  const [productCards] = useState({
    currentCards: [
      {
        id: 1,
        title: 'iPhone X',
        text:
          'All-screen design. The longest battery life ever in an iPhone. Thefastest performance. Studio-quality photos.',
        imageSrc: 'main1.png',
        specialChar: { text: 'R', placement: 'right' }
      },
      {
        id: 2,
        title: 'iPhone X',
        text:
          'The largest Super Retina display. The fastest performance with A12 Bionic. The most secure facial authentication with Face ID. Breakthrough dual cameras with Depth Control.',
        imageSrc: 'main2.png',
        specialChar: { text: 'S', placement: 'right' }
      },
      {
        id: 3,
        title: 'WATCH',
        text: 'More powerful, more colourful.',
        imageSrc: 'main3.png',
        specialChar: { placement: 'left', className: 'fab fa-apple' }
      }
    ]
  });

  return (
    <div>
      {productCards.currentCards.map(card => (
        <SingleCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
