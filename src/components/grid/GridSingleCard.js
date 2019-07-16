import React from 'react';

const GridSingleCard = ({
  card: { cardStyle, title, text, imageSrc, buttons }
}) => {
  console.log(buttons);

  const bgImage = require(`../../images/${imageSrc}`);
  const cardTheme =
    cardStyle === 'light' ? { color: '#FFFFFF' } : { color: '#111111' };

  let style = {
    background: `no-repeat url(${bgImage}) 50% / 100%`,
    backgroundSize: 'unset',
    height: '580px',
    backgroundColor: '#FAFAFA',
    color: cardTheme.color
  };

  return (
    <div style={style}>
      <h1 className=''>{title}</h1>
      <p>{text}</p>

      <button className='btn-card'>
        <span className='btn-card-text'>Learn more</span> >
      </button>
      <button className='btn-card btn-grid'>
        <span className='btn-card-text'>Buy</span> >
      </button>
    </div>
  );
};

export default GridSingleCard;
