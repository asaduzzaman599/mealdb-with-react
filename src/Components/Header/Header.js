import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <nav className='nav'>
                <h2>Meal DB</h2>
                <ul>
                    <a href="">DEMOS</a>
                    <a href="">FEATURES</a>
                    <a href=""> SHOWCASE</a>
                    <a href=""> ELEMENTS</a>
                    <button>PURCHASE NOW</button>
                </ul>
            </nav> 
        </div>
    );
};

export default Header;