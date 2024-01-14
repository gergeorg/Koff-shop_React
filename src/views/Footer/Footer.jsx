import { Contacts } from '../../components/Contacts/Contacts';
import { Developer } from '../../components/Developer/Developer';
import { Logo } from '../../components/Logo/Logo';
import { Container } from '../Container/Container';

import style from './Footer.module.scss';

export const Footer = () => (
  <footer className={style.footer}>
    <Container className={style.container}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.contacts}>
        <Contacts />
      </div>
      <div className={style.developer}>
        <Developer />
      </div>

      <p className={style.copyright}>© Koff, 2024</p>
    </Container>
  </footer>
);
