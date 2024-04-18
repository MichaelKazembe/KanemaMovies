import React from 'react';
import './App.css';
import Movies from './Components/Movies/movieList';
import Header from './Components/Header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
    </div>
  );
}

export default App;
