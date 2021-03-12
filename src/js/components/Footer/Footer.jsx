import React from 'react';
import css from './footer.module.scss';

const Footer = (props) => {
  return (
    <div className={css.pageFooter}>
      <div className={css.pageFooter__item}>
        © 2021
      </div>
      <div className={css.pageFooter__item}>
        <a href="https://rs.school/" target="_blank"><img src="/assets/rs-school-logo.svg" width="50" height="19" alt="" /></a>
      </div>
      <div className={css.pageFooter__item}>
        <a href="https://github.com/Helias17/" target="_blank" className={css.pageFooter__authorLink}><img src="/assets/icon-github.svg" width="18" height="18" alt="" />Helias</a>
      </div>
      <div className={css.pageFooter__item}>
        <img src="/assets/icon-react.svg" width="18" height="18" alt="" />
      </div>
    </div>
  )
}

export default Footer;