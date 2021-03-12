import React from 'react';
import { useSelector } from 'react-redux';
import css from './countriesList.module.scss';
import CountryCard from './CountryCard/CountryCard';
import countries from '@js/countries-en.js';
import { selectCountrySearchInput } from '@js/components/Header/Search/searchInputSlice.js';


const CountriesList = (props) => {

  const inputFilterText = useSelector(selectCountrySearchInput).toLowerCase();

  const countriesCards = countries.map((country, index) => {
    if (!inputFilterText) {
      return <CountryCard country={country} key={index} />
    } else if (country.name.toLowerCase().includes(inputFilterText)) {
      return <CountryCard country={country} key={index} />
    }
  })


  return (
    <div className={css.countriesList}>
      {countriesCards}
    </div>
  )
}

export default CountriesList;