import React, { useState } from 'react';
import Card from './GridSingleCard';

const GridCards = () => {
  const [gridCards] = useState({
    currentCards: [
      {
        id: 1,
        cardStyle: 'dark',
        title: 'MacBook Air',
        text: 'Lightness strikes again.',
        imageSrc: 'grid1.png',
        buttonStyle: 'dark',
        buttons: ['Learn more', 'Buy']
      },
      {
        id: 2,
        cardStyle: 'dark',
        title: 'iPad Pro',
        text: 'All new. All screen. All powerful.',
        imageSrc: 'grid2.png',
        buttonStyle: 'dark',
        buttons: ['Learn more', 'Buy']
      },
      {
        id: 3,
        cardStyle: 'light',
        title: 'Meet the closers.',
        text: 'See how Apple Watch owners close their Activity rings.',
        imageSrc: 'grid3.png',
        buttonStyle: 'light',
        buttons: ['Watch the films']
      },
      {
        id: 4,
        cardStyle: 'light',
        title: 'MacBook Pro',
        text: 'More power. More performance. More pro.',
        imageSrc: 'grid4.png',
        buttonStyle: 'dark',
        buttons: ['Learn more', 'Buy']
      },
      {
        id: 5,
        cardStyle: 'light',
        title: 'Music',
        text: 'Lose yourself in 50 million songs.',
        imageSrc: 'grid5.png',
        buttonStyle: 'light',
        buttons: ['Try it for free*', 'Learn more']
      },
      {
        id: 6,
        cardStyle: 'dark',
        title: 'AirPods',
        text:
          'Wireless charging. Voice-activated Siri. More magical than ever.',
        imageSrc: 'grid6.png',
        buttonStyle: 'light',
        buttons: ['Learn more', 'Buy']
      }
    ]
  });

  return (
    <div className='grid'>
      {gridCards.currentCards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default GridCards;
