import { declOfNum } from '../../helpers/declOfNum';
import style from './CartPlace.module.scss';

export const CartPlace = ({ totalPrice, totalCount }) => {
  console.log();

  return (
    <div className={style.place}>
      <h4 className={style.subtitle}>Оформление</h4>
      <div className={style.placeInfo}>
        <p>
          {totalCount}{' '}
          {declOfNum(totalCount, ['товар ', 'товара ', 'товаров '])}
          на сумму:
        </p>
        <p>{totalPrice.toLocaleString()}&nbsp;₽</p>
      </div>

      <p className={style.placeDelivery}>Доставка 0&nbsp;₽</p>
      <button className={style.placeBtn}>Оформить заказ</button>
    </div>
  );
};
