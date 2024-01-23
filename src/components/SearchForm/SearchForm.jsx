import { useNavigate } from 'react-router-dom';
import SearchIcon from './search.svg?react';

import style from './SearchForm.module.scss';

export const SearchForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;

    if (searchQuery.trim()) {
      navigate(`/search?search=${encodeURIComponent(searchQuery)}`);
      e.target.reset();
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
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
};
