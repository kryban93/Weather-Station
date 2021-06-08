import { useData } from '../../contexts/DataContext';
import icons from '../../assets/icons';
import style from './SearchView.module.scss';
import { useEffect } from 'react';

const SearchView = () => {
  const { searchValue, setSearchValue, displayMatchedCities, matchedCities } = useData();

  useEffect(() => {
    displayMatchedCities();
  }, [searchValue]);

  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h1>What's the place?</h1>
        <div className={style.search}>
          <input
            value={searchValue}
            className={style.input}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button className={style.btn}>
            <img src={icons.search_black} alt='search button' />
          </button>
        </div>
      </div>
      <div>
        {matchedCities
          ? matchedCities.map((city) => (
              <p>
                {city.name} , {city.country}, {city.state ? city.state : null}
              </p>
            ))
          : null}
      </div>
    </section>
  );
};

export default SearchView;
