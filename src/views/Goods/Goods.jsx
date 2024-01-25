import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../../components/CardItem/CardItem';
import { Container } from '../Container/Container';

import style from './Goods.module.scss';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/products/products.slice';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Pagination } from '../../components/Pagination/Pagination';
import { Error } from '../../components/Error/Error';
import { Spinner } from '../../components/Spinner/Spinner';

export const Goods = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const { pathname } = useLocation();
  const { data, loading, error, pagination } = useSelector(
    (state) => state.products,
  );
  const favoriteList = useSelector((state) => state.favorite.favoriteList);
  const category = searchParam.get('category');
  const search = searchParam.get('search');
  const page = searchParam.get('page');

  useEffect(() => {
    if (pathname !== '/favorite') {
      dispatch(
        fetchProducts({
          category,
          search,
          page,
        }),
      );
    }
  }, [dispatch, pathname, category, search, page]);

  useEffect(() => {
    if (pathname === '/favorite') {
      dispatch(fetchProducts({ list: favoriteList.join(','), page }));
    }
  }, [dispatch, pathname, favoriteList, page]);

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;
  if (pathname === '/favorite' && favoriteList.length === 0) {
    return (
      <Container>
        <div className={style.text}>Вы ничего не добавили в избранное</div>
      </Container>
    );
  }

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={`${style.title} visually-hidden`}>Список товаров</h2>
        {data.length ? (
          <>
            <ul className={style.list}>
              {data.map((item) => (
                <li key={item.id}>
                  <CardItem {...item} />
                </li>
              ))}
            </ul>

            {pagination ? <Pagination pagination={pagination} /> : ''}
          </>
        ) : (
          <div className={style.text}>По вашему запросу товаров не найдено</div>
        )}
      </Container>
    </section>
  );
};
