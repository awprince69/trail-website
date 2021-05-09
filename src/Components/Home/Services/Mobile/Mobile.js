import React from 'react';
import './Mobile.css'
import phone from '../../../../images/phone.png'
import card from '../../../../images/card.png'
const Mobile = () => {
    return (
        <div className='mobile-container d-flex justify-content-center'>
            <div>
                <div className='img1-animation' >
                    <img src={card} alt="" width='200' />
                </div>
                <div className='img1-animation'>
                    <img src={phone} alt="" width='300' />
                </div>
            </div>
        </div>
    );
};

export default Mobile;