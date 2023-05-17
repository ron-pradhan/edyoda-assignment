import React from 'react';
import './Home.css';
import book from '../../assests/book.svg';
import clock from '../../assests/clock.svg';
import live from '../../assests/live.svg';
import graduate from '../../assests/graduate.svg';
import ads from '../../assests/ads.svg';

function Home() {
  return (
    <div className='main'>
      <h1>
        Access curated courses worth ₹{' '}
        <span style={{ color: 'red', textDecoration: 'line-through' }}>
          <span style={{ color: 'white', fontFamily: "'Roboto', sans-serif" }}>
            18,500
          </span>
        </span>{' '}
        at just{' '}
        <span style={{ color: ' #0096FF', fontFamily: "'Roboto', sans-serif" }}>
          ₹ 99
        </span>{' '}
        per year!
      </h1>
      <div className='contentContainer'>
        <div className='content'>
          <img src={book} alt='' />
          <p>
            <span>100+</span> Job relevant courses
          </p>
        </div>
        <div className='content'>
          <img src={clock} alt='' />
          <p>
            <span>20,000+ </span>Hours of content
          </p>
        </div>
        <div className='content'>
          <img src={live} alt='' />
          <p>
            <span>Exclusive </span>webinar access
          </p>
        </div>
        <div className='content'>
          <img src={graduate} alt='' />
          <p>
            Scholarship worth<span> ₹94,500</span>
          </p>
        </div>
        <div className='content'>
          <img src={ads} alt='' />
          <p>
            <span>Ad Free </span>learning experience
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
