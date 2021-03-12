import React from 'react';
import css from './header.module.scss';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import LangSelect from './LangSelect/LangSelect';


const Header = (props) => {
  return (
    <header className={css.pageHeader}>
      <Logo />
      <Search />
      <LangSelect />
    </header>
  )
}

export default Header;