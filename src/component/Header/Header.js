import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <div className='crypto'>
                    <Link to='/crypto'>Crypto Cafe</Link>
                </div>
                <div className='header'>
                    <Link to='/home'>Home</Link>
                    <Link to='/coins'>Coins</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>

                </div>
            </nav>
        </div>
    );
};

export default Header;