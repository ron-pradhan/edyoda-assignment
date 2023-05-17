import React from 'react';
import './Form.css';
import button1 from '../../assests/button1.svg';
import button2 from '../../assests/button2.svg';
import subscription from '../../assests/subscription.svg';
import razor from '../../assests/razor.svg';
import { useState } from 'react';

function Form() {
  const subscriptionAmount = [
    {
      id: 1,
      offerExpired: true,
      recommend: false,
      name: 'first',
      text: '12 Months Subscription',
      total_rs: 99,
      perMonth_rs: 8,
    },
    {
      id: 2,
      offerExpired: false,
      recommend: true,
      name: 'second',
      text: '12 Months Subscription',
      total_rs: 179,
      perMonth_rs: 15,
    },
    {
      id: 3,
      offerExpired: false,
      recommend: false,
      name: 'third',
      text: '6 Months Subscription',
      total_rs: 149,
      perMonth_rs: 25,
    },
    {
      id: 4,
      offerExpired: false,
      recommend: false,
      name: 'four',
      text: '3 Months Subscription',
      total_rs: 99,
      perMonth_rs: 33,
    },
  ];

  const [list, setList] = useState(subscriptionAmount);
  const [value, setValue] = useState(149);
  function handleChange(event, el) {
    //console.log(event.target.value - (event.target.value * 16.7) / 100);
    setValue(
      Math.floor(event.target.value - (event.target.value * 16.7) / 100)
    );
    list.forEach((x) => {
      x.recommend = false;
    });
    el.recommend = true;
    setList([...list]);
  }
  return (
    <div className='container'>
      <div className='head'>
        <div className='button'>
          <img src={button1} alt='button1' />
          <span>Sign Up</span>
        </div>

        <div className='button'>
          <img src={button2} alt='button2' />
          <span>Subscribe</span>
        </div>
      </div>
      <p className='plan'>Select your subcription plan</p>

      {list.map((el, index) => (
        <div
          id={el.name}
          key={index}
          className={
            el.recommend
              ? 'recommend'
              : el.offerExpired
              ? 'expire'
              : 'inputBorder'
          }
        >
          <label htmlFor={el.id}>
            <div>
              <input
                checked={el.recommend}
                disabled={el.offerExpired}
                onChange={(event) => handleChange(event, el)}
                id={el.id}
                type='radio'
                value={el.total_rs}
                name='subscriptionAmountOption'
                style={{ backgroundColor: 'black' }}
              />
              <span>{el.text}</span>
            </div>
            <div className='totalRupees'>
              <span>Total ₹{el.total_rs}</span>
              <span className='month'>
                ₹{el.perMonth_rs}/<span className='mo'>mo</span>
              </span>
            </div>
          </label>
        </div>
      ))}
      <div className='expired_flag'>
        <p>Offer expired</p>
      </div>
      <div className='recommend_flag'>
        <p>Recommended</p>
      </div>
      <div className='subscription_Container'>
        <p className='subscription'>Subscription Fee</p>
        <p className='fee'>₹18,500</p>
      </div>
      <img src={subscription} alt='sub' style={{ width: '100%' }} />
      <div className='total'>
        <p>
          <span style={{ fontWeight: '600' }}>Total </span>(Incl. of 18% GST)
        </p>
        <p style={{ fontWeight: '600', fontSize: '1.2rem' }}>₹{value}</p>
      </div>

      <div className='button__container'>
        <button className='button__blueprint cancel'>CANCEL</button>
        <button
          className='button__blueprint pay'
          onClick={() => {
            alert(`Subscribed Amount: ₹${value}`);
          }}
        >
          PROCEED TO PAY
        </button>
      </div>
      <div className='razorContainer'>
        <img src={razor} alt='razorPay' />
      </div>
    </div>
  );
}

export default Form;
