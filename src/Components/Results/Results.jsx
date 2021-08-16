import React from 'react';
import s from './Results.module.css';
import ResultItem from './ResultItem/ResultItem';

const Results = ({ data }) =>
  //   console.log('sdfds');
  (
    <div className={s.results}>
      {data.map((key) =>
        // console.log(key);
        (
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
        ))}
    </div>
  );
export default Results;
