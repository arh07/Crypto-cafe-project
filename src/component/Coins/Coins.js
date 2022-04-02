import React, { useEffect, useState } from 'react';
import TotalCoin from '../totalCoin/TotalCoin';
import './Coins.css'

const Coins = () => {
    const [coins, setCoins] = useState([])
    console.log(coins)
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(response => response.json())
            .then(data => setCoins(data))
    }, [])
    return (
        <div>
            <h1>Available Crypto Currencies</h1>
            <p>Total Coins= {coins.length} </p>
            <div className='coinCard'>
                {
                    coins.map(coin => (<TotalCoin
                        key={coin.id}
                        coin={coin}
                    ></TotalCoin>))
                }
            </div>
        </div>
    );
};

export default Coins;