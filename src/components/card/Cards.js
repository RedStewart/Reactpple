import React, { useState } from 'react';
import SingleCard from './SingleCard';

const Cards = () => {
  const [cardArea] = useState({
    currentCards: [{}, {}, {}]
  });

  return (
    <div>
      {cardArea.currentCards.map(card => (
        <SingleCard props={card} />
      ))}
    </div>
  );
};

export default Cards;
