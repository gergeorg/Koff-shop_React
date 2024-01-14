import style from './Logo.module.scss';
import logo from './logo.svg';

export const Logo = () => (
  <a className={style.link} href='/'>
    <img
      className={style.img}
      src={logo}
      alt='Логотип мебельного магазина Koff'
    />
  </a>
);
