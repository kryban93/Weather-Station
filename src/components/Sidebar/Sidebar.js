import React, { useState } from 'react';
import style from './Sidebar.module.scss';
import { fetchCitiesList } from '../../requests';

const Sidebar = () => {
  const [filteredCitiesList, setFilteredCitiesList] = useState([]);

  const filterCititesList = async () => {
    const data = await fetchCitiesList();
  };
  return (
    <nav>
      <input />
    </nav>
  );
};

export default Sidebar;
