import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-section'>
            <div className="logo-container">
                <h1>Movies<i class="fas fa-film"></i></h1>
            </div>
            <div className="navigation">
                <h3>Movies</h3>
                <h3>TV Shows</h3>
                <h3>Genres</h3>
                <h3>Trending</h3>
            </div>
        </div>
    )
}

export default Header;