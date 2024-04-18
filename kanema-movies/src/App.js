import React from "react";
import "./App.css";
import Movies from "./Components/Movies/movieList";
import HeroSection from "./Components/HeroSection";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Trending from "./Components/Pages/Trending";
// import Movies from "./Components/Pages/Movies";
// import Genres from "./Components/Pages/Genres";
// import Search from "./Components/Pages/Search";
// // import SingleMovie from "./Components/Pages/SingleMovie";
// import Error from "./Components/Pages/Error";

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <Movies />
    </div>
  );
};

export default App;