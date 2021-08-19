import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.css';

const Header = () => (
    <nav className={s.header}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </nav>
);

export default Header;
