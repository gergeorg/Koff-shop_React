import { Link, useParams } from 'react-router-dom';
import style from './Order.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearOrder, fetchOrder } from '../../store/order/orderSlice';
import { Container } from '../../views/Container/Container';
import { Error } from '../Error/Error';
import { Spinner } from '../Spinner/Spinner';
import { fetchCart } from '../../store/cart/cart.slice';

export const Order = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { orderData, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchCart());
  });

  useEffect(() => {
    dispatch(fetchOrder(orderId));

    return () => {
      dispatch(clearOrder());
    };
  }, [dispatch, orderId]);

  if (loading) {
    return (
      <Container className={style.spinner}>
        <Spinner color='#780096' />
      </Container>
    );
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!orderData) {
    return (
      <Container>
        <p>Заказ не найден</p>
      </Container>
    );
  }

  return (
    <section className={style.order}>
      <Container className={style.container}>
        <div className={style.content}>
          <div className={style.header}>
            <h2 className={style.title}>Заказ успешно размещен</h2>
            <p className={style.price}>
              {orderData.totalPrice.toLocaleString()}&nbsp;₽
            </p>
          </div>

          <p className={style.number}>№{orderData.id}</p>

          <div className={style.tableWrapper}>
            <h3 className={style.tableTitle}>Данные доставки</h3>
            <table className={style.table}>
              <tbody>
                <tr className={style.row}>
                  <td className={style.field}>Получатель</td>
                  <td className={style.value}>{orderData.name}</td>
                </tr>
                <tr className={style.row}>
                  <td className={style.field}>Телефон</td>
                  <td className={style.value}>{orderData.phone}</td>
                </tr>
                <tr className={style.row}>
                  <td className={style.field}>E-mail</td>
                  <td className={style.value}>{orderData.email}</td>
                </tr>
                <tr className={style.row}>
                  <td className={style.field}>Адрес доставки</td>
                  <td className={style.value}>{orderData.address}</td>
                </tr>
                <tr className={style.row}>
                  <td className={style.field}>Способ оплаты</td>
                  <td className={style.value}>{orderData.paymentType}</td>
                </tr>
                <tr className={style.row}>
                  <td className={style.field}>Способ получения</td>
                  <td className={style.value}>{orderData.deliveryType}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link className={style.back} to='/'>
            На главную
          </Link>
        </div>
      </Container>
    </section>
  );
};
