import style from './Card.module.scss';
import { useEffect } from 'react';
import { Container } from '../../views/Container/Container';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/product/product.slice';
import { Slider } from '../Slider/Slider';
import { FavoriteBtn } from '../FavoriteBtn/FavoriteBtn';
import { Error } from '../Error/Error';
import { Spinner } from '../Spinner/Spinner';

export const Card = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const { product, loading, error } = useSelector((state) => state.product);

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;
  if (!product) return <div>Продукт не найден. Попробуйте позже</div>;

  return (
    <section className={style.card}>
      <Container className={style.container}>
        <h2 className={style.title}>{product?.name}</h2>

        <Slider images={product?.images} name={product?.name} />

        <div className={style.info}>
          <p className={style.price}>
            {product?.price?.toLocaleString()}&nbsp;₽
          </p>
          <p className={style.article}>арт. {product?.article}</p>

          <div className={style.characteristics}>
            <h3 className={style.tableTitle}>Общие характеристики</h3>

            <table className={style.table}>
              <tbody>
                {product?.characteristics?.map((item, i) => (
                  <tr className={style.row} key={i}>
                    <td className={style.field}>{item[0]}</td>
                    <td className={style.value}>{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={style.btns}>
              <button className={style.btn} type='button'>
                В корзину
              </button>
              <FavoriteBtn
                className={style.favorite}
                id={product?.id}
                name={product.name}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
