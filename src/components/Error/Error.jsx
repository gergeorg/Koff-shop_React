import { Container } from '../../views/Container/Container';
import style from './Error.module.scss';

export const Error = ({ error }) => (
  <Container>
    <div className={style.error}>Ошибка: {error}</div>
  </Container>
);
