import React from 'react';

// destructure props
const SingleCard = () => {
  return (
    <div className='card-contain'>
      <div className='card-main'>
        <h1 className='card-title'>
          iPhone X <span id='card-special'>R</span>
        </h1>
        <p className='card-text'>
          All-screen design. The longest battery life ever in an iPhone.
        </p>
        <p className='card-text'>
          The fastest performance. Studio-quality photos
        </p>
        <button className='btn-card'>
          <span className='btn-card-text'>Learn more</span> >
        </button>
        <button className='btn-card'>
          <span className='btn-card-text'>Buy</span> >
        </button>
      </div>
      <img
        className='card-img'
        src={require('../../images/main1.png')}
        alt='main1'
      />
    </div>
  );
};

export default SingleCard;
