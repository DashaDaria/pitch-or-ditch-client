import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import PDlogo from '../PDlogo.png'

const NavBar = () => {
  return (
    <div style={{ borderBottom: '1px solid black'}}>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">{PDlogo}</a>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              <NavLink to="/">Home</NavLink>
            </NavItem>

            <NavItem eventKey={2} href="#">
              <NavLink to="/ideas">Ideas</NavLink>
            </NavItem>

            <NavItem eventKey={3} href="#">
              <NavLink to="/new">Submit Idea</NavLink>
            </NavItem>

            <NavItem eventKey={4} href="#">
                <NavLink to="/team">Team</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
    </div>
  );
}

export default NavBar;
