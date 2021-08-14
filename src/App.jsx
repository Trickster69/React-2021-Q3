import React, { useState } from 'react';
import './App.css';
import Pagination from './Components/Pagination/Pagination';
import Results from './Components/Results/Results';
import Search from './Components/Search/Search';
import Sorting from './Components/Sorting/Sorting';

function App() {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  return (
    <div className="App">
      <div className="app_wrapper">
        <Search setArticles={setArticles} />
        <Results data={articles} />
        <Sorting />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
