import React, { useEffect, useState } from 'react';
import s from './Details.module.css';

const Details = ({ match }) => {
  const [curData, setCurData] = useState('');
  const newApi = 'a51463898d2a4cd2b0818abc2581450d';
  const [searchValue, id] = match.params.id.split('@');
  const [load, setLoad] = useState(false);
  const [statusResp, setStatusResp] = useState('');

  useEffect(() => {
    getObj();
  }, []);

  const getObj = () => {
    setLoad(true);
    fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${newApi}&pageSize=100`)
      .then((data) => data.json())
      .then((data) => {
        setStatusResp(data.status);
        data.articles.forEach((key) => {
          if (key.publishedAt === id) {
            setCurData(key);
            setLoad(false);
          }
        });
      });
    setTimeout(() => {
      setLoad(false);
    }, 500);
  };

  return (
    <div className="page">
      {load && <div className="loader" />}
      <h2 className={s.title}>Details about item</h2>
      {curData && statusResp === 'ok' ? (
        <div div className={s.details_wrapper}>
          <div className={s.details__row}>
            <span className={s.details__title}>Author:</span>
            {' '}
            <span className={s.details__content}>{curData.author}</span>
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Content:</span>
            {' '}
            <span className={s.details__content}>{curData.content}</span>
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Description:</span>
            {' '}
            <span className={s.details__content}>{curData.description}</span>
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Date was published:</span>
            {' '}
            <span className={s.details__content}>{curData.publishedAt}</span>
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Title:</span>
            {' '}
            <span className={s.details__content}>{curData.title}</span>
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Url:</span>
            {' '}
            <a href={curData.url} className={s.details__content}>
              {curData.url}
            </a>
          </div>

          <div className={s.details__row}>
            <img src={curData.urlToImage} alt="detail_img" />
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Img URL:</span>
            {' '}
            <a href={curData.urlToImage} className={s.details__content}>
              {curData.urlToImage}
            </a>
          </div>
        </div>
      ) : (
        <div className={s.wait}>Sorry, we don`t have any data.</div>
      )}
    </div>
  );
};

export default Details;
