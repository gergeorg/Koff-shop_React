import style from './Breadcrumbs.module.scss';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from '../../views/Container/Container';

export const Breadcrumbs = () => {
  const [searchParam] = useSearchParams();
  const category = searchParam.get('category');
  const { product } = useSelector((state) => state.product);

  if (category || product?.category) {
    return (
      <div className={style.breadcrumbs}>
        <Container>
          <ul className={style.list}>
            <li className={style.item}>
              <Link to='/'>Главная</Link>
              <span className={style.separator}>&gt;</span>
            </li>

            <li className={style.item}>
              <Link to={`/category?category=${category || product?.category}`}>
                {category || product?.category}
              </Link>
              <span className={style.separator}>&gt;</span>
            </li>

            {product?.name && (
              <li className={style.item}>
                <a>{product?.name}</a>
                <span className={style.separator}>&gt;</span>
              </li>
            )}
          </ul>
        </Container>
      </div>
    );
  }
};
