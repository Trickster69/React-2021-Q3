import React from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../Components/Pagination/Pagination';
import Results from '../../Components/Results/Results';
import Search from '../../Components/Search/Search';
import Sorting from '../../Components/Sorting/Sorting';

const Home = () => {
  const { dataNews, status } = useSelector((state) => state.search);
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

      {/* {load && <div className="loader" />} */}
      {/* {status === 'error' && <div className="error">{status.message}</div>} */}
    </div>
  );
};
export default Home;
