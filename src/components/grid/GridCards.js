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
        buttons: ['Learn more', 'Buy']
      },
      {
        id: 2,
        cardStyle: 'dark',
        title: 'iPad Pro',
        text: 'All new. All screen. All powerful.',
        imageSrc: 'grid2.png',
        buttons: ['Learn more', 'Buy']
      },
      {
        id: 3,
        cardStyle: 'light',
        title: 'Meet the closers.',
        text: 'See how Apple Watch owners close their Activity rings.',
        imageSrc: 'grid3.png',
        buttons: ['Watch the films']
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
