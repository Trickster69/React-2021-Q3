import React from 'react';
import s from './Sorting.module.css';

const Sorting = ({ setSort }) => {
  function hadleChange(e) {
    setSort(e.target.value);
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
