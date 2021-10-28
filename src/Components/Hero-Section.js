import React from "react";
import './Hero-Section.css';
import logo from "../Images/movies_background.png";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="search-box">
                <form>
                    <input type="text" />
                    <button></button>
                </form>
            </div>
        </div>
    )
}

export default HeroSection;