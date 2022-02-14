import React from "react";
import './Hero-Section.css';

const HeroSection = (props) => {
    return (
        <div className="background">
            <div className="hero-search-overlay">
                <div className="search-box">
                    <h1>Find your favorite movies, TV shows and more.</h1>
                </div>
                <div className="form">
                        <input onChange={props.updateSearch} type="text" placeholder="Search here..."/>
                        <button onClick={props.handleSearch}>Search</button>
                </div>
            </div>
            <div className="hero-image">
            </div>
        </div>
    )
}

export default HeroSection;