import { useDispatch } from 'react-redux';
import style from './CartProducts.module.scss';
import { API_URL } from '../../const';
import { Link } from 'react-router-dom';
import {
  removeProductFromCart,
  updateProductToCart,
} from '../../store/cart/cart.slice';

export const CartProducts = ({ products }) => {
  const dispatch = useDispatch();

  const handleAdd = (id, quantity) => {
    dispatch(
      updateProductToCart({
        productId: id,
        quantity: quantity + 1,
      }),
    );
  };

  const handleRemove = (id, quantity) => {
    if (quantity > 1) {
      dispatch(
        updateProductToCart({
          productId: id,
          quantity: quantity - 1,
        }),
      );
    } else {
      dispatch(removeProductFromCart(id));
    }
  };

  return (
    <ul className={style.products}>
      {products.map(
        ({ id, images: [image], name, price, article, quantity }) => (
          <li className={style.product} key={id}>
            <img className={style.img} src={`${API_URL}/${image}`} alt={name} />
            <Link className={style.titleProduct} to={`/product/${id}`}>
              {name}
            </Link>
            {/* <h3 className={style.titleProduct}>{name}</h3> */}
            <p className={style.price}>{price.toLocaleString()}&nbsp;₽</p>
            <p className={style.article}>арт. {article}</p>
            <div className={style.productControl}>
              <button
                className={style.productBtn}
                onClick={() => handleRemove(id, quantity)}>
                -
              </button>
              <span className={style.productCount}>{quantity}</span>
              <button
                className={style.productBtn}
                onClick={() => handleAdd(id, quantity)}>
                +
              </button>
            </div>
          </li>
        ),
      )}
    </ul>
  );
};
