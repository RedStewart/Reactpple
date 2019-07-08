import React, { Fragment } from 'react';

const Navbar = () => {
  return (
    <div className='navContainer'>
      <nav>
        <div className='navbar'>
          <ul>
            <li className='fab fa-apple' />
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>TV</li>
            <li>Music</li>
            <li>Support</li>
            <li className='fas fa-search' />
            <li className='fas fa-shopping-bag' />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
