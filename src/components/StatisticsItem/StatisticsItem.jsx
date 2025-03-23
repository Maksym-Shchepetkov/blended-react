import style from './StatisticsItem.module.css';

const StatisticsItem = () => {
  return (
    <>
      <img className={style.img} src="" alt="" />
      <span className={style.counter}>214</span>
      <p className={style.text}>Happy Customers</p>
    </>
  );
};

export default StatisticsItem;
