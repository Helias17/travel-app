import React from 'react';
import css from './logo.module.scss';

const Logo = (props) => {
  return (
    <div className={css.logo}>
      <div>
        <img src="/assets/logo.jpg" alt="Island Exotic Countries Guide" className={css.logo__image} />
      </div>
      <p className={css.logo__name}>Exotic Island Countries Guide</p>
    </div>
  )
}

export default Logo;