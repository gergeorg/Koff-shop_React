import { Link } from 'react-router-dom';
import style from './Navigation.module.scss';

// import FavoriteIcon from './img/search.svg?react';
// import CartIcon from './img/cart.svg?react';

export const Navigation = () => (
  <nav className={style.navigation}>
    <Link className={style.link} to='/favorite'>
      <span className={style.text}>Избранное</span>
      {/* <FavoriteIcon /> */}
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          // eslint-disable-next-line max-len
          d='M8.4135 13.8733C8.18683 13.9533 7.8135 13.9533 7.58683 13.8733C5.6535 13.2133 1.3335 10.46 1.3335 5.79332C1.3335 3.73332 2.9935 2.06665 5.04016 2.06665C6.2535 2.06665 7.32683 2.65332 8.00016 3.55998C8.6735 2.65332 9.7535 2.06665 10.9602 2.06665C13.0068 2.06665 14.6668 3.73332 14.6668 5.79332C14.6668 10.46 10.3468 13.2133 8.4135 13.8733Z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Link>

    <Link className={style.link} to='/cart'>
      <span className={style.text}>Корзина</span>
      <span>(5)</span>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M5.87329 1.33325L3.45996 3.75325'
          stroke='currentColor'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.1267 1.33325L12.54 3.75325'
          stroke='currentColor'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          // eslint-disable-next-line max-len
          d='M1.33325 5.23324C1.33325 3.9999 1.99325 3.8999 2.81325 3.8999H13.1866C14.0066 3.8999 14.6666 3.9999 14.6666 5.23324C14.6666 6.66657 14.0066 6.56657 13.1866 6.56657H2.81325C1.99325 6.56657 1.33325 6.66657 1.33325 5.23324Z'
          stroke='currentColor'
        />
        <path
          d='M6.50659 9.33325V11.6999'
          stroke='currentColor'
          strokeLinecap='round'
        />
        <path
          d='M9.57324 9.33325V11.6999'
          stroke='currentColor'
          strokeLinecap='round'
        />
        <path
          // eslint-disable-next-line max-len
          d='M2.33325 6.66675L3.27325 12.4267C3.48659 13.7201 3.99992 14.6667 5.90658 14.6667H9.92659C11.9999 14.6667 12.3066 13.7601 12.5466 12.5067L13.6666 6.66675'
          stroke='currentColor'
          strokeLinecap='round'
        />
      </svg>
      {/* <CartIcon /> */}
    </Link>
  </nav>
);
