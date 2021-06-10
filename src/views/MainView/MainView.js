import { useEffect } from 'react';
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo';
import Nav from '../../components/Nav/Nav';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { useData } from '../../contexts/DataContext';
import style from './MainView.module.scss';

const MainView = () => {
  const { formattedWeatherData } = useData();

  useEffect(() => {}, [formattedWeatherData]);
  return (
    <>
      <section className={style.wrapper}>
        <Nav />
        <header className={style.header}>
          <h1 className={style.header__title}>
            {formattedWeatherData.name}, {formattedWeatherData.country}
          </h1>
        </header>
        <WeatherCard />
        <AdditionalInfo actualforecast={formattedWeatherData.actual} />
      </section>
    </>
  );
};

export default MainView;
