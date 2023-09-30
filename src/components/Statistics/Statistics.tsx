import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={css.title}>Statistics</h2>
      <ul className={css.list}>
        <li className={css.listItem}>
          Good:<span className={css.number}>{good}</span>
        </li>

        <li className={css.listItem}>
          Neutral:<span className={css.number}>{neutral}</span>
        </li>

        <li className={css.listItem}>
          Bad:<span className={css.number}>{bad}</span>
        </li>

        <li className={css.listItem}>
          Total:<span className={css.number}>{total}</span>
        </li>

        <li className={css.listItem}>
          Positive feedback:
          <span className={css.number}>{positivePercentage || 0}%</span>
        </li>
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
