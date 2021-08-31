import React from 'react';
import s from './Sorting.module.css';
import * as action from '../../store/actions/search';
import { useDispatch } from 'react-redux';

const Sorting = () => {
  const dispatch = useDispatch();
  function hadleChange(e) {
    dispatch(action.setSortingAC(e.target.value));
  }
  return (
    <select className={s.select} onChange={(e) => hadleChange(e)}>
      <option defaultValue="relevancy" hidden>
        Select the sorting type
      </option>
      <option value="popularity">Popularity</option>
      <option value="publishedAt">Date</option>
      <option value="relevancy">Relevancy</option>
    </select>
  );
};

export default Sorting;
