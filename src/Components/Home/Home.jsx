import React from 'react';
import { useSelector } from 'react-redux';
import Pagination from './Pagination/Pagination';
import Results from './Results';
import Search from './Search';
import Sorting from './Sorting';

const Home = () => {
  const { dataNews } = useSelector((state) => state.search);

  return (
    <div className="page">
      <Search />

      <Sorting />

      <Pagination />

      {dataNews ? (
        <Results />
      ) : (
        <div className="noData">Enter your request.</div>
      )}
    </div>
  );
};
export default Home;
