import React, { useState } from 'react';
import './App.css';
import Pagination from './Components/Pagination/Pagination';
import Results from './Components/Results/Results';
import Search from './Components/Search/Search';
import Sorting from './Components/Sorting/Sorting';

function App() {
  return (
    <div className="App">
      <div className="app_wrapper">
        <Search />
        <Results />
        <Sorting />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
