import React, { useContext, useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { fetchCitiesList, fetchFiveDaysForecastById } from '../requests';
import { findMatchCities, regroupWeatherListValues } from '../additional';

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [filteredCitiesList, setFilteredCitiesList] = useState([]);
  const [matchedCities, setMatchedCities] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [formattedWeatherData, setFormattedWeatherData] = useState([]);

  const prepareCitiesList = async () => {
    const data = await fetchCitiesList();
    const citiesList = data.data;

    setLoadingState(false);
    setFilteredCitiesList(citiesList);
  };

  const displayMatchedCities = () => {
    const tempCitiesArray = findMatchCities(searchValue, filteredCitiesList);

    setMatchedCities(tempCitiesArray);
  };

  const fetchWeatherData = async (cityId) => {
    const response = await fetchFiveDaysForecastById(cityId);
    const data = response.data;
    const weatherData = regroupWeatherListValues(data);

    setFormattedWeatherData(weatherData);
  };

  useEffect(() => {
    prepareCitiesList();
  }, []);

  const value = {
    searchValue,
    setSearchValue,
    matchedCities,
    displayMatchedCities,
    fetchWeatherData,
    formattedWeatherData,
  };

  return (
    <DataContext.Provider value={value}>{isLoading ? <Loader /> : children}</DataContext.Provider>
  );
};
