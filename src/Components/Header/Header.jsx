import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.css';

const Header = () => (
  <nav className={s.header}>
    <Link className={s.link} to="/">
      Home
    </Link>
    <Link className={s.link} to="/about">
      About
    </Link>
  </nav>
);

export default Header;
