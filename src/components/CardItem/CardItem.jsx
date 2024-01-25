import { Link } from 'react-router-dom';
import { API_URL } from '../../const';
import style from './CardItem.module.scss';
import { FavoriteBtn } from '../FavoriteBtn/FavoriteBtn';

export const CardItem = ({ name, price, images: [image], id }) => (
  <article className={style.card}>
    <Link to={`/product/${id}`} className={style.link}>
      <img
        className={style.img}
        src={`${API_URL}/${image}`}
        alt={name}
        width='302'
        height='250'
      />
    </Link>

    <div className={style.info}>
      <h3 className={style.title}>
        <Link className={style.titleLink} to={`/product/${id}`}>
          {name}
        </Link>
      </h3>
      <p className={style.price}>{price.toLocaleString()}&nbsp;₽</p>
    </div>

    <button className={style.btn}>В корзину</button>
    <FavoriteBtn className={style.favorite} id={id} name={name} />
  </article>
);
