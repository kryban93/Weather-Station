import React from 'react';
import icons from '../../assets/icons';
import style from './SearchView.module.scss';

const SearchView = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h1>What's the place?</h1>
        <div className={style.search}>
          <input className={style.input} />
          <button className={style.btn}>
            <img src={icons.search_black} alt='search button' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchView;
