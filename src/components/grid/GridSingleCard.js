import React from 'react';

const GridSingleCard = ({
  card: { cardStyle, title, text, imageSrc, buttonStyle, buttons }
}) => {
  const bgImage = require(`../../images/${imageSrc}`);
  const cardTheme =
    cardStyle === 'light' ? { color: '#FFFFFF' } : { color: '#111111' };

  const buttonTheme =
    buttonStyle === 'dark' ? { color: '#0070C9' } : { color: '#FFFFFF' };

  const style = {
    background: `no-repeat url(${bgImage}) 50% / 100%`,
    backgroundSize: 'unset',
    height: '580px',
    backgroundColor: '#FAFAFA',
    color: cardTheme.color
  };

  const btnStyle = {
    color: buttonTheme.color
  };

  return (
    <div style={style}>
      <h1 className=''>{title}</h1>
      <p>{text}</p>

      {buttons.map((btn, index) => (
        <button className='btn-card' key={index} style={btnStyle}>
          <span className='btn-card-text'>{btn}</span> >
        </button>
      ))}
    </div>
  );
};

export default GridSingleCard;
