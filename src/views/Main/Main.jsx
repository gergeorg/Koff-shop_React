import { useDispatch, useSelector } from 'react-redux';
import { Goods } from '../../components/Goods/Goods';

import style from './Main.module.scss';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categories/categories.slice';
import { Catalog } from '../../components/Catalog/Catalog';

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loadingCategories) return <div>Loading categories</div>;
  if (errorCategories) return <div>Ошибка: {errorCategories}</div>;

  return (
    <main className={style.main}>
      <Catalog data={dataCategories} />
      <Goods />
    </main>
  );
};
