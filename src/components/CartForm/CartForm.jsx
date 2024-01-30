import { useDispatch, useSelector } from 'react-redux';
import style from './CartForm.module.scss';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitCartForm } from '../../store/formCart/formCartSlice';

export const CartForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const orderStatus = useSelector((state) => state.formCart);

  useEffect(() => {
    if (orderStatus.success) {
      navigate(`/order/${orderStatus.orderId}`);
    }
  }, [orderStatus, navigate]);

  const onSubmit = (data) => {
    dispatch(submitCartForm(data));
  };

  return (
    <form
      className={style.form}
      id='orderForm'
      onSubmit={handleSubmit(onSubmit)}>
      <h4 className={style.subtitle}>Данные для доставки</h4>

      <fieldset className={style.fieldsetInput}>
        <label>
          <input
            className={style.input}
            type='text'
            placeholder='Фамилия Имя Отчество'
            {...register('name', { required: true })}
          />
          {errors.name && <p className={style.error}>Это поле обязательно</p>}
        </label>

        <label>
          <input
            className={style.input}
            type='text'
            placeholder='Телефон'
            {...register('phone', { required: true })}
          />
          {errors.phone && <p className={style.error}>Это поле обязательно</p>}
        </label>

        <label>
          <input
            className={style.input}
            type='email'
            placeholder='E-mail'
            {...register('email', { required: true })}
          />
          {errors.email && <p className={style.error}>Это поле обязательно</p>}
        </label>

        <label>
          <input
            className={style.input}
            type='text'
            placeholder='Адрес доставки'
            {...register('address', { required: true })}
          />
          {errors.address && (
            <p className={style.error}>Это поле обязательно</p>
          )}
        </label>

        <label className={style.labelTextarea}>
          <textarea
            className={style.textarea}
            placeholder='Комментарий к заказу'
            {...register('comments')}
          />
        </label>
      </fieldset>

      <fieldset className={style.fieldsetRadio}>
        <legend className={style.legend}>Доставка</legend>
        <label className={style.radio}>
          <input
            className={style.radioInput}
            type='radio'
            value='delivery'
            {...register('deliveryType', { required: true })}
          />
          Доставка
        </label>

        <label className={style.radio}>
          <input
            className={style.radioInput}
            type='radio'
            value='pickup'
            {...register('deliveryType', { required: true })}
          />
          Самовывоз
        </label>
        {errors.deliveryType && (
          <p className={style.error}>Выберите тип доставки</p>
        )}
      </fieldset>

      <fieldset className={style.fieldsetRadio}>
        <legend className={style.legend}>Оплата</legend>
        <label className={style.radio}>
          <input
            className={style.radioInput}
            type='radio'
            value='card'
            {...register('paymentType', { required: true })}
          />
          Картой при получении
        </label>

        <label className={style.radio}>
          <input
            className={style.radioInput}
            type='radio'
            value='cash'
            {...register('paymentType', { required: true })}
          />
          Наличными при получении
        </label>
        {errors.paymentType && (
          <p className={style.error}>Выберите тип оплаты</p>
        )}
      </fieldset>
    </form>
  );
};
