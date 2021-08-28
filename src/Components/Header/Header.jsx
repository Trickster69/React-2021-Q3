import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

const Header = () => (
  <nav className={s.header}>
    <NavLink className={s.link} activeClassName={s.active} exact to="/">
      Home
    </NavLink>
    <NavLink className={s.link} activeClassName={s.active} exact to="/about">
      About
    </NavLink>
  </nav>
);

export default Header;
