// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Thumbs } from 'swiper/modules';
// import 'swiper/css';
import style from './Card.module.scss';
import { useEffect } from 'react';
import { Container } from '../../views/Container/Container';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/product/product.slice';
import { Slider } from '../Slider/Slider';
// import { API_URL } from '../../const';

export const Card = () => {
  // const [mainSwiper, setMainSwiper] = useState(null);
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const { product, loading, error } = useSelector((state) => state.product);
  console.log('product: ', product);
  // const { name, article, price, characteristics, images } = product;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={style.card}>
      <Container className={style.container}>
        <h2 className={style.title}>{name}</h2>

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
              <button
                className={style.like}
                type='button'
                aria-label={`Добавить товар ${product?.name} в избранное`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'>
                  <path
                    // eslint-disable-next-line max-len
                    d='M8.41325 13.8733C8.18658 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32658 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z'
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
