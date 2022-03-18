import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../assets/images/logo_v4.svg';

const Header = () => (
  <div>
    <Navbar className={styles.header}>
      <Link to="/">
        <Navbar.Brand>
          <img src={logo} className={styles.brandImage} alt="logo" />
        </Navbar.Brand>
      </Link>
      <Nav bg="dark" expand="lg">
        <Nav.Link>
          <NavLink className={styles.link} to="/">Home</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink className={styles.link} to="/favorites">Favorites</NavLink>
        </Nav.Link>
      </Nav>
    </Navbar>
    <Outlet />
  </div>
);

export default Header;
