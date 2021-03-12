import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, selectCountrySearchInput } from './searchInputSlice';
import css from './search.module.scss';

const Search = (props) => {

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => setInputValue(e.target.value);

  const handleBtnClick = () => dispatch(changeInput(inputValue));

  return (
    <div className={css.search}>
      <div className={css.search__inputBox}>
        <input type="text" className={css.search__input} value={inputValue} placeholder="Filter countries" onChange={handleInputChange} />
      </div>
      <div>
        <button className={css.search__btn} onClick={handleBtnClick} >Filter</button>
      </div>
    </div>
  )
}

export default Search;