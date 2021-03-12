import React from 'react';
import css from './langSelect.module.scss';

const LangSelect = (props) => {
  return (
    <select name="" id="" className={css.langSelect}>
      <option value="EN">EN</option>
      <option value="RU">RU</option>
      <option value="BY">BY</option>
    </select>
  )
}

export default LangSelect;