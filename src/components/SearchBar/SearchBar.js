import style from './SearchBar.module.scss';
import { useData } from '../../contexts/DataContext';
import icons from '../../assets/icons';

const SearchBar = () => {
  const { searchValue, setSearchValue } = useData();

  return (
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
  );
};

export default SearchBar;
