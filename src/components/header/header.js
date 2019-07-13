import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/favorites'>Favorites</Link>
      <Link to='/'>Search</Link>
    </header>
  )
};

export default Header;