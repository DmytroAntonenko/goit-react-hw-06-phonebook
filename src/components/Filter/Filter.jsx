import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filtersSlice';

import css from './Filter.module.css';
const Filter = () => {
  const dispatch = useDispatch();
  const onInputChange = event => dispatch(changeFilter(event.target.value));
  return (
  <label className={css.filter__label}>
    Find contacts by name
    <input
      className={css.filter__input}
      type="text"
      name="filter"
      onChange={onInputChange}
    ></input>
  </label>
  )
};


  
export default Filter;