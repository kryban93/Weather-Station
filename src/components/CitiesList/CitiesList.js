import { useEffect, useState } from 'react';
import { useData } from '../../contexts/DataContext';
import style from './CitiesList.module.scss';
import { useHistory } from 'react-router';
import Loader from '../Loader/Loader';

const CitiesList = () => {
  const { matchedCities, searchValue, displayMatchedCities, setSearchValue, fetchWeatherData } =
    useData();
  const history = useHistory();
  const [isLoading, setLoadingState] = useState(false);

  const handleClickListElement = async (event) => {
    setLoadingState(true);
    const cityName = event.target.dataset.name;
    const cityId = event.target.dataset.id;

    setSearchValue('');
    console.log(cityName + cityId);

    await fetchWeatherData(cityId);
    setLoadingState(false);
    history.push(`/search/${cityName}`);
  };

  useEffect(() => {
    displayMatchedCities();
  }, [searchValue]);

  return (
    <>
      <ul className={style.list}>
        {matchedCities
          ? matchedCities.map((city, index) => (
              <li
                key={`${city.name}${city.country}${city.state}${index}`}
                className={style.list__element}
                onClick={(event) => handleClickListElement(event)}
                data-id={city.id}
                data-name={city.name}
              >
                {city.name}, {city.country}, {city.state ? city.state : null}
              </li>
            ))
          : null}
      </ul>
      {isLoading && <Loader />}
    </>
  );
};

export default CitiesList;
