import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/images/logo_v4.svg';

const Header = () => (
  <div>
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </div>
);

export default Header;
