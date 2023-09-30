import PropTypes from 'prop-types';
import css from './Controls.module.css';

const Controls = ({ title, onControlClick }) => {
  return (
    <button
      className={css.control__button}
      onClick={() => {
        onControlClick(title);
      }}
    >
      {title}
    </button>
  );
};
export default Controls;

Controls.propTypes = {
  title: PropTypes.string.isRequired,
};
