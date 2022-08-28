import React from 'react';
import { Link } from 'react-router-dom';
import homestyles from '../homestyles/recommended.module.css';
const Recommeded = () => {
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
    {
        image:
          'https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_570x.png?v=1614338730',
        title: 'FRESH CUTS',
        description: 'We want to spoon-feed you… quite literally',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_570x.png?v=1614338730',
        title: 'FRESH CUTS',
        description: 'We want to spoon-feed you… quite literally',
      },

  ];
  return (
    <div className={homestyles.container}>
      <div className={homestyles.heading}>
        <h1>KIMAYE RECOMMENDS</h1>
        <h3>A Handpicked and Curated Fruit offering</h3>
      </div>
           
      <div className={homestyles.shop}>
        {data.map((el) => (
          <div className={homestyles.shop_cart}>
            <div className={homestyles.image}>
              <img src={el.image} alt="" />
            </div>
            <h2>{el.title}</h2>
            <p>{el.description}</p>
            <Link className={homestyles.link} to="/collections/all-fruits">
              <button> Shop Now </button>
            </Link>
          </div>
        ))}
      </div>
     
      <div className={homestyles.know_more}>
        <img
          className={homestyles.top_img}
          src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi-top-cut.png?v=1599122573"
          alt=""
        />
        <div className={homestyles.more_data}>
          <span>
            <div className={homestyles.inner_more_data}>
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi_570x_2db87855-9260-47c2-a80e-3759af77dbea_570x.png?v=1622009438"
                alt=""
              />
              <div>
                <h1>WE’D LIKE TO SAY <span className={homestyles.red}>KIMA</span>HI…</h1>
                <p>
                  Many of us share common safety concerns about the food we eat.
                </p>
                <br />
                <p>
                  When it comes to fruits, these concerns are even more serious
                  in terms of the way they are grown and handled throughout
                  their farm-to-home journey. We make eating fruits a worry-free
                  and enjoyable experience for you.
                </p>
                <p>
                  Since 2009, we have set the benchmark for fruit safety and
                  quality in 35 countries. Kimaye is now expanding its footprint
                  in India, bringing you multiple varieties of fruit that are
                  grown, packaged, and delivered in the safest and most socially
                  responsible manner.
                </p>
                <h2 className={homestyles.safe}>Kimaye is #allSafe#allGood</h2>
                <div className={homestyles.btn_knowmore}><button>KNOW MORE</button></div>
                
              </div>
            </div>
          </span>
        </div>
        <img
          className={homestyles.bimg}
          src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi-bottom-cut.png?v=1599122574"
          alt=""
        />
      </div>
    </div>
  );
};

export default Recommeded;
