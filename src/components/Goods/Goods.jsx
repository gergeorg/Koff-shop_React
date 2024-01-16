import { Container } from '../../views/Container/Container';
import { CardItem } from '../CardItem/CardItem';
import style from './Goods.module.scss';

export const Goods = ({ data }) => {
  console.log('data: ', data);

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={`${style.title} visually-hidden`}>Список товаров</h2>

        <ul className={style.list}>
          {data.map((item) => (
            <li key={item.id}>
              <CardItem
                name={item.name}
                price={item.price}
                image={item.images[0]}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
