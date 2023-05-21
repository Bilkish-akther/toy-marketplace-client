import React from 'react';
import './Doll.css'

const Doll = ({doll}) => {
    return (
        <div className='cardDesign'>
          <img src={doll.toyUrl} className='image'/>  <br />
          <div>
            <h3>{doll.toyName}</h3>
          <p>{doll.price}</p>
          <p>{doll.rating}</p>
          <p>Quantity:{doll.quantity}</p>
          </div>
          <button >View Details</button>
        </div>
    );
};

export default Doll;