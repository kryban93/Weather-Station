import React, { useContext, useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { fetchCitiesList } from '../requests';
import { findMatchCities } from '../additional';

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [filteredCitiesList, setFilteredCitiesList] = useState([]);
  const [matchedCities, setMatchedCities] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const prepareCitiesList = async () => {
    const data = await fetchCitiesList();
    const citiesList = data.data;

    setLoadingState(false);
    setFilteredCitiesList(citiesList);
  };

  const displayMatchedCities = () => {
    const tempCitiesArray = findMatchCities(searchValue, filteredCitiesList);
    console.log(tempCitiesArray);
    setMatchedCities(tempCitiesArray);
  };

  useEffect(() => {
    prepareCitiesList();
  }, []);

  const value = {
    searchValue,
    setSearchValue,
    matchedCities,
    displayMatchedCities,
  };

  return (
    <DataContext.Provider value={value}>{isLoading ? <Loader /> : children}</DataContext.Provider>
  );
};
