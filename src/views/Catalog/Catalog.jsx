import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Container/Container';
import style from './Catalog.module.scss';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categories/categories.slice';
import { Link } from 'react-router-dom';

export const Catalog = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) return <div>Ошибка: {error}</div>;

  return (
    <nav className={style.catalog}>
      <Container className={style.container}>
        <ul className={style.list}>
          {data.map((item, i) => (
            <li key={i}>
              <Link className={style.link} to={`/category?category=${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
