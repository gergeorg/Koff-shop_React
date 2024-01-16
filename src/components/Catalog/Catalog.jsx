import { Container } from '../../views/Container/Container';
import style from './Catalog.module.scss';

export const Catalog = ({ data }) => (
  <nav className={style.catalog}>
    <Container className={style.container}>
      <ul className={style.list}>
        {data.map((item, i) => (
          <li key={i}>
            <a className={style.link} href={`/category?slug=${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </nav>
);
