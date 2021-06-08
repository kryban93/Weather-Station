import { useEffect } from 'react';
import { useData } from '../../contexts/DataContext';
import style from './CitiesList.module.scss';
import { useHistory } from 'react-router';

const CitiesList = () => {
  const { matchedCities, searchValue, displayMatchedCities } = useData();
  const history = useHistory();

  const handleClickListElement = (event) => {
    const cityName = event.target.dataset.name;
    const cityId = event.target.dataset.id;

    console.log(cityName + cityId);
    history.push(`/search/${cityName}`);
  };

  useEffect(() => {
    displayMatchedCities();
  }, [searchValue]);

  return (
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
  );
};

export default CitiesList;
