import SearchIcon from './search.svg?react';

import style from './SearchForm.module.scss';

export const SearchForm = () => (
  <form className={style.form}>
    <input
      className={style.input}
      type='search'
      name='search'
      placeholder='Введите запрос'
    />
    <button className={style.button} type='submit'>
      <SearchIcon />
    </button>
  </form>
);
