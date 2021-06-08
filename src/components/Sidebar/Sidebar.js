import React, { useState } from 'react';
import style from './Sidebar.module.scss';
import { fetchCitiesList } from '../../requests';
import SearchBar from '../SearchBar/SearchBar';

const Sidebar = () => {
  const [filteredCitiesList, setFilteredCitiesList] = useState([]);

  const filterCititesList = async () => {
    const data = await fetchCitiesList();
  };
  return (
    <nav className={style.nav}>
      <SearchBar />
    </nav>
  );
};

export default Sidebar;
