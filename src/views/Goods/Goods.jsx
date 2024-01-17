import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../../components/CardItem/CardItem';
import { Container } from '../Container/Container';

import style from './Goods.module.scss';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/products/products.slice';

export const Goods = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={`${style.title} visually-hidden`}>Список товаров</h2>

        <ul className={style.list}>
          {data.map((item) => (
            <li key={item.id}>
              <CardItem {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
