import React from "react";
import Home from "./Components/Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Navigation/Header";
import Footer from "./Components/Navigation/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;