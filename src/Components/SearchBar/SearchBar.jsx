import React from 'react';
import styles from './SearchBar.module.css';
import MicImg from '../../assets/images/SearchBar/mic.svg';
import SearchImg from '../../assets/images/SearchBar/search.svg';

export default function SearchBar() {
  return (
    <div className={styles.searchBar_wrapper}>
      <div className={styles.searchBar}>
        <div className={styles.searchBar__btn}>
          <img src={SearchImg} alt="" />
        </div>
        <input
          className={styles.searchBar__input}
          type="text"
          placeholder="Search Google or type a URL"
        />
        <div className={styles.searchBar__btn}>
          <img src={MicImg} alt="" />
        </div>
      </div>
    </div>
  );
}
