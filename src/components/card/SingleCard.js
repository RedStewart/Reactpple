import React from 'react';

// destructure props
const SingleCard = ({ card: { title, text, imageSrc, specialChar } }) => {
  return (
    <div className='card-contain'>
      <div className='card-main'>
        <h1 className='card-title'>
          {specialChar.text && specialChar.placement === 'left' ? (
            <span id='card-special'>{specialChar.text}</span>
          ) : (
            <i className={specialChar.className} />
          )}{' '}
          {title}{' '}
          {specialChar.text && specialChar.placement === 'right' ? (
            <span id='card-special'>{specialChar.text}</span>
          ) : (
            ''
          )}
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
