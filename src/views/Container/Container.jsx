/* eslint-disable no-confusing-arrow */
import style from './Container.module.scss';

export const Container = ({ className, children }) =>
  className ? (
    <div className={`${style.container} ${className}`}>{children}</div>
  ) : (
    <div className={style.container}>{children}</div>
  );
