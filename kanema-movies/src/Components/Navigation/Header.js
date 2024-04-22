import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header className="header-container">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="movie-icon"
    >
        <path
            fill="currentColor"
            d="M12 2c-1.3 0-2.4.8-2.8 2H4c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h5.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2h5c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-5.2c-.4-1.2-1.5-2-2.8-2zM5 18V6h2v12H5zm5-2c0 .6-.4 1-1 1s-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1v8zm9-2c0 .6-.4 1-1 1s-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1v6z"
        />
    </svg>
    <h1>Kanema Movies</h1>
</header>

    </div>
  )
}

export default Header
