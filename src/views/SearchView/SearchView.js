import style from './SearchView.module.scss';
import CitiesList from '../../components/CitiesList/CitiesList';
import SearchBar from '../../components/SearchBar/SearchBar';

const SearchView = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h1>What's the place?</h1>
        <SearchBar />
      </div>
      <CitiesList />
    </section>
  );
};

export default SearchView;
