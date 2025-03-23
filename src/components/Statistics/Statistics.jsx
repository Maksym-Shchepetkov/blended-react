// import { FaRegThumbsUp } from 'react-icons/fa';
// import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
// import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title = '', stats }) => {
  const result = stats.map(stat => {
    return;
    <li className={style.item}>
      <StatisticsItem />
    </li>;
  });

  return (
    <>
      <h3 className={style.title}>Main Statistics</h3>

      <ul className={style.list}>
        <li className={style.item}>
          <StatisticsItem />
        </li>
        <li className={style.item}>
          <StatisticsItem />
        </li>
        <li className={style.item}>
          <StatisticsItem />
        </li>
        <li className={style.item}>
          <StatisticsItem />
        </li>
        {/* Довільна кіл-сть
    <li className={style.item}>
      <StatisticsItem/>
    </li>
*/}
      </ul>
    </>
  );
};

export default Statistics;
