import { Link } from 'react-router-dom';
import style from './Logo.module.scss';
import logo from './logo.svg';

export const Logo = () => (
  <Link className={style.link} to='/'>
    <img
      className={style.img}
      src={logo}
      alt='Логотип мебельного магазина Koff'
    />
  </Link>
);
