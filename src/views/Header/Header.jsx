import { Logo } from '../../components/Logo/Logo';
import { Navigation } from '../../components/Navigation/Navigation';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Container } from '../Container/Container';

import style from './Header.module.scss';

export const Header = () => (
  <header className={style.header}>
    <Container className={style.container}>
      <div className={style.logo}>
        <Logo className={style.logo} />
      </div>

      <div className={style.search}>
        <SearchForm className={style.search} />
      </div>

      <div className={style.navigation}>
        <Navigation className={style.navigation} />
      </div>
    </Container>
  </header>
);
