import { Container } from '../../views/Container/Container';
import { CardItem } from '../CardItem/CardItem';
import style from './Goods.module.scss';

export const Goods = () => (
  <section className={style.goods}>
    <Container>
      <h2 className={`${style.title} visually-hidden`}>Список товаров</h2>

      <ul className={style.list}>
        <li>
          <CardItem />
        </li>
      </ul>
    </Container>
  </section>
);
