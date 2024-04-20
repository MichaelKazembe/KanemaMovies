import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Kanema Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#movies">Movies</Nav.Link>
          <Nav.Link href="#tvShows">TV Shows</Nav.Link>
          <Nav.Link href="#actors">Actors</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;