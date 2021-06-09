import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import Loader from '../../components/Loader/Loader';
import { useData } from '../../contexts/DataContext';

const MainView = () => {
  const { formattedWeatherData } = useData();
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    //formattedWeatherData ? setLoadingState(false) : setLoadingState(true);
    console.log(formattedWeatherData);
  }, [formattedWeatherData]);
  return (
    <>
      <section>
        <Nav />
        <h1>{formattedWeatherData.cityName}</h1>
      </section>
    </>
  );
};

export default MainView;
