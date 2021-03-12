import React from 'react';
import css from './search.module.scss';

const Search = (props) => {
  return (
    <div className={css.search}>
      <div className={css.search__inputBox}>
        <input type="text" className={css.search__input} placeholder="Filter countries" />
      </div>
      <div>
        <button className={css.search__btn}>Filter</button>
      </div>
    </div>
  )
}

export default Search;