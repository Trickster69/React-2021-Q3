import React from 'react';
import { Link } from 'react-router-dom';
import s from './Results.module.css';
import ResultItem from './ResultItem/ResultItem';

const Results = ({ data, searchValue }) => {
  console.log('');
  return (
    <div className={s.results}>
      {data.map((key) => (
        <Link Link to={`/result/${searchValue}--${key.title}`}>
          <ResultItem
            author={key.author}
            content={key.description}
            title={key.title}
            date={key.publishedAt}
            sourceName={key.source.name}
            sourceLink={key.url}
            img={key.urlToImage}
            keyId={key.id}
          />
        </Link>

      ))}
    </div>
  );
}



  ;
export default Results;
