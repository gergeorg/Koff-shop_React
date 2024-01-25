import style from './CartProducts.module.scss';

export const CartProducts = () => {
  console.log();

  return (
    <ul className={style.products}>
      <li className={style.product}>
        <img className={style.img} src='' alt='' />
        <h3 className={style.titleProduct}>Кресло с подлокотниками</h3>
        <p className={style.price}>{(5000).toLocaleString()}&nbsp;₽</p>
        <p className={style.article}>арт. {84348945757}</p>
        <div className={style.productControl}>
          <button className={style.productBtn}>-</button>
          <span className={style.productCount}>1</span>
          <button className={style.productBtn}>+</button>
        </div>
      </li>
    </ul>
  );
};
