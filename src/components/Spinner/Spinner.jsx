import { PuffLoader } from 'react-spinners';
import { Container } from '../../views/Container/Container';

import style from './Spinner.module.scss';

export const Spinner = () => (
  <Container className={style.spinner}>
    <PuffLoader color='#780096' />
  </Container>
);
