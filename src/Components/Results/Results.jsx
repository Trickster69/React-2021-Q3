import React from 'react';
import { Link } from 'react-router-dom';
import s from './Results.module.css';
import ResultItem from './ResultItem/ResultItem';

const Results = ({ data }) => (
  <div className={s.results}>
    {data.map((key) => (
      <Link to={`/result/${key.url}`}>
        <ResultItem
          author={key.author}
          content={key.description}
          title={key.title}
          date={key.publishedAt}
          sourceName={key.source.name}
          sourceLink={key.url}
          img={key.urlToImage}
          key={key.id}
        />
      </Link>

    ))}
  </div>
);
export default Results;
