/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Search.module.css';
import SearchImg from '../../../assets/images/SearchBar/search.svg';
import * as action from '../../../store/actions/search';

const Search = () => {
  const {
    page, searchValue, countShowNews, sort, isLoad, error,
  } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const setSearchValue = (e) => {
    dispatch(action.setSearchValueAC(e.target.value));
  };

  useEffect(() => setData(), [sort, page, countShowNews]);

  const sendData = (e) => {
    e.preventDefault();
    setData();
  };

  const setData = () => {
    dispatch(action.setIsLoading());
    // const myApKey = '67174a0eb17a40fdb98e15abe64a8943';
    const newApi = 'e255430b001240abbe0a0ca24cc36486';
    fetch(`https://newsapi.org/v2/everything?q=${searchValue}&sortBy=${sort}&apiKey=${newApi}&pageSize=${countShowNews}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 'ok' && data.code !== 'parametersMissing') {
          dispatch(action.setStatsuServer(data.message));
        } else {
          dispatch(action.setStatsuServer(''));
        }
        dispatch(action.setDataAC(data.articles));
        dispatch(action.setIsLoading());
      });
  };

  return (
    <div className={styles.searchBar_wrapper}>
      {isLoad && <div className="loader" />}
      {error.length > 0 ? <div className="error">{error}</div> : ''}
      <div className={styles.searchBar}>
        <form action="" onSubmit={sendData}>
          <input
            className={styles.searchBar__input}
            type="text"
            placeholder="Search Google or type a URL"
            value={searchValue}
            onChange={setSearchValue}
          />
          <button type="submit" className={styles.searchBar__btn}>
            <img src={SearchImg} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Search;
