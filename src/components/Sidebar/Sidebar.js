import React, { useState } from 'react';
import style from './Sidebar.module.scss';
import { fetchCitiesList } from '../../requests';

const Sidebar = () => {
  const [filteredCitiesList, setFilteredCitiesList] = useState([]);

  const filterCititesList = async () => {
    const data = await fetchCitiesList();
  };
  return (
    <nav className={style.nav}>
      <input className={style.input} />
      <button className={style.btn}>search</button>
    </nav>
  );
};

export default Sidebar;
