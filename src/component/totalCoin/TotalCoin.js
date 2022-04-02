import React from 'react';
import './TotalCoin.css'

const TotalCoin = ({ coin }) => {
    const { id, symbol, image } = coin;
    return (
        <div className='totalCard-container'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3>{id}</h3>
                <p>{symbol}</p>
            </div>
        </div>
    );
};

export default TotalCoin;