import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Navbar</Link>
        <form className="d-flex flex-grow-1">
          <input
            type="search"
            className="form-control rounded-start"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </form>
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link">Movies</Link>
          </li>
          <li className="nav-item">
            <Link to="/trending" className="nav-link">Trending</Link>
          </li>
          <li className="nav-item">
            <Link to="/genres" className="nav-link">Genres</Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
