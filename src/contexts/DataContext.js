import React, { useContext, useEffect, useState } from 'react';
import { fetchCitiesList } from '../requests';

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [filteredCitiesList, setFilteredCitiesList] = useState([]);

  const prepareCitiesList = async () => {
    const data = await fetchCitiesList();
    const citiesList = data.data;

    console.log(citiesList);
  };

  useEffect(() => {
    prepareCitiesList();
  }, []);

  const value = {};

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
