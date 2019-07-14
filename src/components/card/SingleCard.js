import React from 'react';

// destructure props
const SingleCard = ({ card: { title, text, imageSrc } }) => {
  return (
    <div className='card-contain'>
      <div className='card-main'>
        <h1 className='card-title'>
          {title} <span id='card-special'>R</span>
        </h1>
        <p className='card-text'>{text}</p>
        <button className='btn-card'>
          <span className='btn-card-text'>Learn more</span> >
        </button>
        <button className='btn-card'>
          <span className='btn-card-text'>Buy</span> >
        </button>
      </div>
      {/* <img className='card-img' src={require(`../../images/${imageSrc}`)} /> */}
      <img
        className='card-img'
        alt=''
        src={require(`../../images/${imageSrc}`)}
      />
    </div>
  );
};

export default SingleCard;
