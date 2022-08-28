import React, { useState } from 'react';
import homestyle from '../homestyles/pastlooking.module.css';

const data = [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-1-min_570x.png?v=1614338437',
      title: 'ALL FRUITS',
      description: 'Pick and choose from a wide range of delicious fruits',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_570x.png?v=1614338730',
      title: 'FRESH CUTS',
      description: 'We want to spoon-feed you… quite literally',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_570x.jpg?v=1614339080',
      title: 'FRUIT COMBOS',
      description: 'Indulge in fruit combinations created by us',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0449/5225/6667/files/2I8A6078_570x.jpg?v=1631516874',
      title: 'GIFTS BY KIMAYE',
      description: 'Healthy & memorable gifts for your loved ones',
    },

  ];

const PastLooking = () => {
  return (
    <div className={homestyle.pastContainer}>
      <div className={homestyle.heading}>
        <h1>PSST… LOOKIN’ FOR US?</h1>
        <h3>We are here</h3>
      </div>
      <div className={homestyle.griddiv}>
        {data.map((item) => (
          <div >
            <img className={homestyle.pastimg} src={item.image} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastLooking;
