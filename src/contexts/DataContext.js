import React, { useContext, useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { fetchCitiesList } from '../requests';

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [filteredCitiesList, setFilteredCitiesList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  const prepareCitiesList = async () => {
    const data = await fetchCitiesList();
    const citiesList = data.data;

    setLoadingState(false);
    console.log(citiesList);
  };

  useEffect(() => {
    prepareCitiesList();
  }, []);

  const value = {};

  return (
    <DataContext.Provider value={value}>{isLoading ? <Loader /> : children}</DataContext.Provider>
  );
};
