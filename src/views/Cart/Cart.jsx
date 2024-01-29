import { useSelector } from 'react-redux';
import { CartForm } from '../../components/CartForm/CartForm';
import { CartPlace } from '../../components/CartPlace/CartPlace';
import { CartProducts } from '../../components/CartProducts/CartProducts';
import { Container } from '../Container/Container';

import style from './Cart.module.scss';

export const Cart = () => {
  const { products, totalCount, totalPrice } = useSelector(
    (state) => state.cart,
  );

  if (!totalCount) {
    return (
      <section className={style.cart}>
        <Container className={style.container}>
          <h2 className={style.title}>Корзина пуста</h2>
        </Container>
      </section>
    );
  }

  return (
    <section className={style.cart}>
      <Container className={style.container}>
        <h2 className={style.title}>Корзина</h2>
        <CartProducts products={products} />
        <CartPlace totalPrice={totalPrice} totalCount={totalCount} />
        <CartForm />
      </Container>
    </section>
  );
};
