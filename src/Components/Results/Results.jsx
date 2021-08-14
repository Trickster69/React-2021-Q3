import React from 'react';
import s from './Results.module.css';
import ResultItem from './ResultItem/ResultItem';

const Results = () => {
  return (
    <div>
      {' '}
      Резалты
      <ResultItem />
      <ResultItem />
      <ResultItem />
    </div>
  );
};

export default Results;
