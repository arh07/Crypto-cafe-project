import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='crypto-cafe'>
            <h1>WELCOME TO CRYPTO CAFE</h1>
            <button onClick={() => navigate("/coins")} className='btn'>Explore Coins</button>
        </div>
    );
};

export default Home;