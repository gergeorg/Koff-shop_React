import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../../components/CardItem/CardItem';
import { Container } from '../Container/Container';

import style from './Goods.module.scss';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/products/products.slice';
import { useSearchParams, useLocation } from 'react-router-dom';

export const Goods = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const { pathname } = useLocation();
  const { data, loading, error } = useSelector((state) => state.products);
  const favoriteList = useSelector((state) => state.favorite.favoriteList);
  const category = searchParam.get('category');
  const search = searchParam.get('search');

  useEffect(() => {
    if (pathname !== '/favorite') {
      dispatch(
        fetchProducts({
          category,
          search,
        }),
      );
    }
  }, [dispatch, pathname, category, search]);

  useEffect(() => {
    if (pathname === '/favorite') {
      dispatch(fetchProducts({ list: favoriteList.join(',') }));
    }
  }, [dispatch, pathname, favoriteList]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={`${style.title} visually-hidden`}>Список товаров</h2>
        {data.length ? (
          <ul className={style.list}>
            {data.map((item) => (
              <li key={item.id}>
                <CardItem {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <div>По вашему запросу товаров не найдено</div>
        )}
      </Container>
    </section>
  );
};
