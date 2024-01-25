import style from './CartForm.module.scss';

export const CartForm = () => {
  console.log();

  return (
    <form className={style.form}>
      <h4 className={style.subtitle}>Данные для доставки</h4>

      <fieldset className={style.fieldsetInput}>
        <input
          className={style.input}
          type='text'
          placeholder='Фамилия Имя Отчество'
          name='name'
        />
        <input
          className={style.input}
          type='text'
          placeholder='Телефон'
          name='phone'
        />
        <input
          className={style.input}
          type='email'
          placeholder='E-mail'
          name='email'
        />
        <input
          className={style.input}
          type='text'
          name='address'
          placeholder='Адрес доставки'
        />
        <textarea
          className={style.textarea}
          name='comments'
          placeholder='Комментарий к заказу'
        />
      </fieldset>

      <fieldset className={style.fieldsetRadio}>
        <legend className={style.legend}>Доставка</legend>
        <label className={style.radio}>
          <input
            className={style.radioInput}
            type='radio'
            name='deliveryType'
            value='delivery'
            required
          />
          Доставка
        </label>

        <label className={style.radio}>
          <input
            className={style.radioInput}
            type='radio'
            name='deliveryType'
            value='pickup'
            required
          />
          Самовывоз
        </label>
      </fieldset>

      <fieldset className={style.fieldsetRadio}>
        <legend className={style.legend}>Оплата</legend>
        <label>
          <input
            className={style.radioInput}
            type='radio'
            name='paymentType'
            value='card'
            required
          />
          Картой при получении
        </label>

        <label className={style.radio}>
          <input
            className={style.radioInput}
            type='radio'
            name='paymentType'
            value='cash'
            required
          />
          Наличными при получении
        </label>
      </fieldset>
    </form>
  );
};
