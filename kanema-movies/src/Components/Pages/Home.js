import React from "react";
import HeroSection from "../Sections/HeroSection";
import Trending from "../Pages/Trending";
import MovieList from "../Sections/MovieList";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Trending />
            <MovieList />
        </div>
    );

};

export default Home;