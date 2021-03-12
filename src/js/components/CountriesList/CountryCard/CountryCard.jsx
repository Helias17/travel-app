import React from 'react';
import css from './countryCard.module.scss';

const CountryCard = (props) => {

  const photo = props.country.photos[0];

  return (
    <div className={`${css.countryCard} animate__animated animate__backInUp`}>
      <img src={photo} alt={props.country.name} className={css.countryCard__image} />
      <div className={css.countryCard__title}>
        <p className={css.countryCard__name}>{props.country.name}</p>
        →
        <p className={css.countryCard__capital}>{props.country.capital}</p>
      </div>
    </div>
  )
}

export default CountryCard;