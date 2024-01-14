import style from './Developer.module.scss';

export const Developer = () => (
  <div className={style.developers}>
    <ul className={style.list}>
      <li>
        Designer:&nbsp;
        <a
          className={style.link}
          href='https://t.me/Mrshmallowww'
          target='_blank'
          rel='noreferrer'>
          Anastasia Ilina
        </a>
      </li>
      <li>
        Developer:&nbsp;
        <a
          className={style.link}
          href='https://t.me/gergeorg'
          target='_blank'
          rel='noreferrer'>
          Georgey Gerasimov
        </a>
      </li>
    </ul>
  </div>
);
