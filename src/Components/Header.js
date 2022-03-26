import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header-section'>
            <div className="logo-container" onClick={props.logoToHome}>
                <h1><i className="fas fa-film"></i>Movies</h1>
            </div>

            <div className="navigation">
                <h3 onClick={props.getTrending}>Trending <i className="fas fa-fire"></i></h3>
            </div>

            <div className="form">
                        <input onChange={props.updateSearch} type="text" placeholder="Search here..."/>
                        <button onClick={props.handleSearch}>Search</button>
                </div>
            
            <div className="sign-in">
                <button className="sign-in-button">Sign In</button>
                <button className="options-button">Options<i className="fas fa-sort-down"></i></button>
            </div>
            
        </div>
    )
}

export default Header;