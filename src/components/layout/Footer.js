import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#f2f2f2' }}>
      <footer>
        <p style={{ paddingTop: '15px', marginTop: '0' }}>
          * New subscribers only. Sign-up is required. Subscription
          automatically renews monthly at standard price after the trial period.
        </p>

        <p>Some bands are sold separately.</p>

        <hr />

        <div className='footGrid'>
          <div>
            <h3>Shop and Learn</h3>
            <ul>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>TV</li>
              <li>Music</li>
              <li>iTunes</li>
              <li>iPod touch</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          <div>
            <h3>Apple Store</h3>
            <ul>
              <li>Apple Store App</li>
              <li>Refurbished and Clearance</li>
              <li>Financing</li>
              <li>Apple Recycling Program</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
              <li>Consumer Law</li>
            </ul>
          </div>

          <div>
            <h3>For Education</h3>
            <ul>
              <li>Apple and Education</li>
              <li>Shop for University</li>
            </ul>

            <h3>For Business</h3>
            <ul>
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>

            <h3>For Healthcare</h3>
            <ul>
              <li>Apple in Healthcare</li>
            </ul>
          </div>

          <div>
            <h3>Account</h3>
            <ul>
              <li>Manage Your Apple ID</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>

            <h3>Apple Values</h3>
            <ul>
              <li>Accessibility</li>
              <li>Environment</li>
              <li>Privacy</li>
              <li>Supplier Responsibility</li>
            </ul>
          </div>

          <div>
            <h3>About Apple</h3>
            <ul>
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Job Opportunities</li>
              <li>Investors</li>
              <li>Events</li>
              <li>Contact Apple</li>
            </ul>
          </div>
        </div>

        <p>
          More ways to shop: <span>Find a retailer</span> near you. Or call
          0800-692-7753.
        </p>

        <hr />

        <div className='finalFoot'>
          <p style={{ marginRight: '30px' }}>
            Copyright © 2019 Apple Inc. All rights reserved.{' '}
          </p>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Sales and Refunds</li>
            <li>Legal</li>
            <li>Site Map</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
