import React, { useState } from 'react';
import style from './Nav.module.scss';
import { fetchCitiesList } from '../../requests';
import SearchBar from '../SearchBar/SearchBar';
import CitiesList from '../CitiesList/CitiesList';

const Nav = () => {
  return (
    <nav className={style.nav}>
      <SearchBar />
      <CitiesList style={{ position: 'absolute' }} />
    </nav>
  );
};

export default Nav;
