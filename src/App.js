import { DataProvider } from './contexts/DataContext';
import { fetchFiveDaysForecast, fetchCitiesList } from './requests/index';

const App = () => {
  const handleClick = async () => {
    const data = await fetchFiveDaysForecast('Cieszyn');
    console.log(data);
  };

  const handleCitiesClick = async () => {
    const data = await fetchCitiesList();
    console.log(data);
  };

  return (
    <DataProvider>
      <main>
        <h1>weather app</h1>
        <button onClick={handleClick}>fetch </button>
        <button onClick={handleCitiesClick}>cities</button>
      </main>
    </DataProvider>
  );
};

export default App;
