import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Details.module.css';
import * as actions from '../../store/actions/deetails';

const Details = ({ match }) => {
  const dispatch = useDispatch();
  const {
    detailsData, load, statusResp, errorMessage,
  } = useSelector((state) => state.details);

  const newApi = 'a51463898d2a4cd2b0818abc2581450d';
  const [searchValue, id] = match.params.id.split('@');

  useEffect(() => {
    getObj();
  }, []);

  const getObj = () => {
    dispatch(actions.setDetailsIsLoading());

    fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${newApi}&pageSize=100`)
      .then((data) => data.json())
      .then((data) => {
        dispatch(actions.setErrorMessage(data.message));
        dispatch(actions.setStatusDetailsServer(data.status));
        data.articles.forEach((key) => {
          if (key.title === id) {
            dispatch(actions.setDetailsData(key));
            dispatch(actions.setDetailsIsLoading());
          }
        });
      });
  };

  return (
    <div className="page">
      {load && <div className="loader" />}
      <h2 className={s.title}>Details about item</h2>
      {Object.keys(detailsData).length > 0 && statusResp === 'ok' ? (
        <div div className={s.details_wrapper}>
          <div className={s.details__row}>
            <span className={s.details__title}>Author:</span>
            {' '}
            <span className={s.details__content}>{detailsData.author}</span>
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Content:</span>
            {' '}
            <span className={s.details__content}>{detailsData.content}</span>
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Description:</span>
            {' '}
            <span className={s.details__content}>{detailsData.description}</span>
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Date was published:</span>
            {' '}
            <span className={s.details__content}>{detailsData.publishedAt}</span>
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Title:</span>
            {' '}
            <span className={s.details__content}>{detailsData.title}</span>
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Url:</span>
            {' '}
            <a href={detailsData.url} className={s.details__content}>
              {detailsData.url}
            </a>
          </div>

          <div className={s.details__row}>
            <img src={detailsData.urlToImage} alt="detail_img" />
          </div>

          <div className={s.details__row}>
            <span className={s.details__title}>Img URL:</span>
            {' '}
            <a href={detailsData.urlToImage} className={s.details__content}>
              {detailsData.urlToImage}
            </a>
          </div>
        </div>
      ) : (
        <div className={s.wait}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Details;
