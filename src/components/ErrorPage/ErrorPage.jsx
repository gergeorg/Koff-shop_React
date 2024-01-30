import { useEffect } from 'react';
import style from './ErrorPage.module.scss';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => navigate('/'), 5000);
    return () => clearTimeout(id);
  }, [navigate]);

  return (
    <div className={style.error}>
      <h1>Упс! Возникла ошибка</h1>

      <p>Через 5 секунд вы автоматически вернетесь на главную</p>
    </div>
  );
};
