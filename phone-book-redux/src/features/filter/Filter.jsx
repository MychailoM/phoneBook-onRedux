import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "./filterSlice";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <label className={styles.filter}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter your name"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

export default Filter;
