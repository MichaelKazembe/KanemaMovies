import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hero-content">
            <h1>Welcome to Kanema Movies</h1>
            <p>Discover the latest movies and TV shows</p>
            <button className="btn btn-primary">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;