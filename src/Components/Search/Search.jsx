import React from 'react';
import styles from './Search.module.css';
import SearchImg from '../../assets/images/SearchBar/search.svg';

const Search = ({ searchValue, setSearchValue, sendData }) => (
  <div className={styles.searchBar_wrapper}>
    <div className={styles.searchBar}>
      <form action="" onSubmit={sendData}>
        <input
          className={styles.searchBar__input}
          type="text"
          placeholder="Search Google or type a URL"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" className={styles.searchBar__btn}>
          <img src={SearchImg} alt="" />
        </button>
      </form>
    </div>
  </div>
);
export default Search;
