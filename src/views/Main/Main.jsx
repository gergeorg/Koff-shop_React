import { Goods } from '../../components/Goods/Goods';

import style from './Main.module.scss';

export const Main = () => (
  <main className={style.main}>
    {/* <Catalog /> */}
    <Goods />
  </main>
);
