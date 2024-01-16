import { useDispatch, useSelector } from 'react-redux';
import { Goods } from '../../components/Goods/Goods';

import style from './Main.module.scss';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categories/categories.slice';
import { fetchProducts } from '../../store/products/products.slice';
import { Catalog } from '../../components/Catalog/Catalog';

export const Main = () => {
  const dispatch = useDispatch();

  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loadingCategories) return <div>Loading categories</div>;
  if (errorCategories) return <div>Ошибка: {errorCategories}</div>;

  if (loadingProducts) return <div>Loading products</div>;
  if (errorProducts) return <div>Ошибка: {errorProducts}</div>;

  return (
    <main className={style.main}>
      <Catalog data={dataCategories} />
      <Goods data={dataProducts} />
    </main>
  );
};
