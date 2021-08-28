import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import s from './Header.module.css';

const Header = () => (
  <nav className={s.header}>
    <NavLink className={s.link} exact activeClassName={s.active} to="/">
      Home
    </NavLink>
    <NavLink className={s.link} exact activeClassName={s.active} to="/about">
      About
    </NavLink>
  </nav>
);

export default Header;
