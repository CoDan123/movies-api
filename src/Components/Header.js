import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-section'>
            <div className="logo-container">
                <h1><i class="fas fa-film"></i>Movies</h1>
            </div>
            <div className="navigation">
                <h3>Movies</h3>
                <h3>TV Shows</h3>
                <h3>Genres</h3>
                <h3>Trending</h3>
            </div>
            <div className="sign-in">
                <button className="sign-in-button">Sign In</button>
                <button className="options-button">Options<i class="fas fa-sort-down"></i></button>
            </div>
            
        </div>
    )
}

export default Header;