import React from 'react';
import css from './countriesList.module.scss';
import CountryCard from './CountryCard/CountryCard';
import countries from '@js/countries-en.js';

const CountriesList = (props) => {

  const countriesCards = countries.map((country, index) => <CountryCard country={country} key={index} />)


  return (
    <div className={css.countriesList}>
      {countriesCards}
    </div>
  )
}

export default CountriesList;