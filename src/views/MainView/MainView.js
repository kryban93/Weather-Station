import React from 'react';
import { fetchFiveDaysForecast, fetchCitiesList } from '../../requests';
import Sidebar from '../../components/Sidebar/Sidebar';

const MainView = () => {
  const handleClick = async () => {
    const data = await fetchFiveDaysForecast('Cieszyn');
    console.log(data);
  };

  const handleCitiesClick = async () => {
    const data = await fetchCitiesList();
    console.log(data);
  };

  return (
    <section>
      <Sidebar />
      <h1>weather app</h1>
      <button onClick={handleClick}>fetch </button>
      <button onClick={handleCitiesClick}>cities</button>
    </section>
  );
};

export default MainView;
