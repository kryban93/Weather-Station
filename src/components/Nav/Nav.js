import style from './Nav.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import CitiesList from '../CitiesList/CitiesList';

const Nav = () => {
  return (
    <>
      <nav className={style.nav}>
        <SearchBar />
      </nav>
      <CitiesList style={{ position: 'absolute' }} />
    </>
  );
};

export default Nav;
