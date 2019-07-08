import React from 'react';

const SingleCard = () => {
  return (
    <div>
      <div className='card-main'>
        <h1 className='card-title'>
          iPhone X<span id='card-special'>R</span>
        </h1>
        <p className='card-text'>
          All-screen design. The longest battery life ever in an iPhone.
        </p>
        <p className='card-text'>
          The fastest performance. Studio-quality photos
        </p>
        <button className='btn-card'>Learn more ></button>
        <button className='btn-card'>Buy ></button>
      </div>
      <img
        className='card-center'
        src={require('../../images/main1.png')}
        alt='main1'
      />
    </div>
  );
};

export default SingleCard;
