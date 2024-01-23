// import style from './FavoriteBtn.module.scss';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../store/favorite/favorite.slice';

export const FavoriteBtn = ({ className, id, name }) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);

  const isFavorite = favoriteList.includes(id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <button
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleFavoriteClick}
      aria-label={`Добавить товар ${name} в избранное`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'>
        <path
          // eslint-disable-next-line max-len
          d='M8.41325 13.8733C8.18658 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32658 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z'
          fill={hover !== isFavorite ? '#780096' : '#ffffff'}
          stroke={hover !== isFavorite ? '#780096' : '#1c1c1c'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};
