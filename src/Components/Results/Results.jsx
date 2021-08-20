import React from 'react';
import { Link } from 'react-router-dom';
import s from './Results.module.css';
import ResultItem from './ResultItem/ResultItem';

const Results = ({ articles, searchValue }) => (
  <div className={s.results}>
    {articles.map((el) => (
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

export default Results;
