import { fetchFiveDaysForecast } from './requests/index';

const App = () => {
  const handleClick = async () => {
    const data = await fetchFiveDaysForecast();
    console.log(data);
  };

  return (
    <main>
      <h1>weather app</h1>
      <button onClick={handleClick}>fetch </button>
    </main>
  );
};

export default App;
