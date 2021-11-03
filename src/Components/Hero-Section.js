import React from "react";
import './Hero-Section.css';

const HeroSection = (props) => {
    return (
        <div className="background">
            <div className="hero-image">
                <div className="top-gradient"></div>
                <div className="bottom-gradient"></div>
            </div>
            <div className="hero-search-overlay">
                <div className="search-box">
                    <h1>Find your favorite movies, TV shows and more.</h1>
                    <form>
                        <input type="text" placeholder="Search here..."/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;