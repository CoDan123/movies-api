import React from "react";
import './Hero-Section.css';
import logo from "../Images/movies_background.png";

const HeroSection = () => {
    return (
        <div className="background">
            <div className="hero-image">
            </div>
            <div className="search-box">
                <h1>Find your favorite movies, TV shows and more.</h1>
                <form>
                    <input type="text" />
                    <button>Search</button>
                </form>
            </div>
        </div>
    )
}

export default HeroSection;