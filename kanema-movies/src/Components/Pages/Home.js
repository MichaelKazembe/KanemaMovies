import React from "react";
import HeroSection from "../Sections/HeroSection";
import Trending from "../Pages/Trending";
import MovieList from "../Sections/MovieList";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Trending />
            <MovieList />
            <Footer />
        </div>
    );

};

export default Home;