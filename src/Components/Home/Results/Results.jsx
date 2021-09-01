import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Results.module.css';
import ResultItem from './ResultItem/ResultItem';

const Results = () => {
  const { dataNews, searchValue } = useSelector((state) => state.search);

  return (
    <div className={s.results}>
      {dataNews.map((el) => (
        <Link Link to={`/detail/${searchValue}@${el.title}`}>
          <ResultItem
            author={el.author}
            content={el.description}
            title={el.title}
            date={el.publishedAt}
            sourceName={el.source.name}
            sourceLink={el.url}
            img={el.urlToImage}
            key={el.id}
          />
        </Link>
      ))}
    </div>
  );
};
export default Results;
