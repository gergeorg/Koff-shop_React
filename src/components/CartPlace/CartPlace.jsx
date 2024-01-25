import style from './CartPlace.module.scss';

export const CartPlace = () => {
  console.log();

  return (
    <div className={style.place}>
      <h4 className={style.subtitle}>Оформление</h4>
      <div className={style.placeInfo}>
        <p>4 товара на сумму:</p>
        <p>20 000 ₽</p>
      </div>

      <p className={style.placeDelivery}>Доставка 0 ₽</p>
      <button className={style.placeBtn}>Оформить заказ</button>
    </div>
  );
};
