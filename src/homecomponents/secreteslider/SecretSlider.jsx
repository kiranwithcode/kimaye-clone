import React from 'react';
import Secret from './Secret';

const SecretSlider = () => {
  return (
    <div style={{marginTop:"5rem",marginBottom:"5rem"}}>
        <div>
          <h1 style={{textAlign:"center", fontSize:"2rem"}}>THE SECRET’S OUT: WE’RE SUPER SAFE</h1>
          <h3 style={{textAlign:"center", fontSize:"1.5rem"}}>Witness Our Journey</h3>
        </div>
      
        <Secret />

        </div>
  );
};

export default SecretSlider;
