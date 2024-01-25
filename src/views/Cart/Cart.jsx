import { CartForm } from '../../components/CartForm/CartForm';
import { CartPlace } from '../../components/CartPlace/CartPlace';
import { CartProducts } from '../../components/CartProducts/CartProducts';
import { Container } from '../Container/Container';

import style from './Cart.module.scss';

export const Cart = () => {
  console.log();

  return (
    <section className={style.cart}>
      <Container className={style.container}>
        <h2 className={style.title}>Корзина</h2>
        <CartProducts />
        <CartPlace />
        <CartForm />
      </Container>
    </section>
  );
};
