import React, { useState } from 'react';
import s from './Search.module.css';

const Search = ({ setArticles }) => {
  const [searchValue, setSearchValue] = useState('');
  function sendData(e) {
    e.preventDefault();
    fetch(
      `https://newsapi.org/v2/everything?q=${searchValue}&from=2021-07-14&sortBy=publishedAt&apiKey=67174a0eb17a40fdb98e15abe64a8943`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }
  return (
    <div className={s.search}>
      <form action="" onSubmit={sendData}>
        <input
          value={searchValue}
          type="text"
          placeholder="What would you like to find?"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
