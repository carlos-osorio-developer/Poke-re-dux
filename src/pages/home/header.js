import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './header.module.css';
import logo from '../../assets/images/logo_v4.svg';
import { searchPokemon } from '../../redux/slices/pokemonListSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => (
    dispatch(searchPokemon(''))
  );

  return (
    <div>
      <Navbar className={styles.header}>
        <Link to="/" onClick={handleClick}>
          <Navbar.Brand>
            <img src={logo} className={styles.brandImage} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Nav bg="dark" expand="lg">
          <Nav.Link>
            <NavLink className={styles.link} to="/" onClick={handleClick}>Home</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink className={styles.link} to="/favorites">Favorites</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Header;
