import React from 'react';
import Pagination from '../../Components/Pagination/Pagination';
import Results from '../../Components/Results/Results';
import Search from '../../Components/Search/Search';
import Sorting from '../../Components/Sorting/Sorting';

const Home = ({
  renderData,
  searchValue,
  setSearchValue,
  setSort,
  page,
  setPage,
  resultCount,
  setResultCount,
  articlesCount,
  articles,
  load,
  status,
}) => {
  console.log('dssdf');
  return (
    <div className="page">
      <Search sendData={renderData} searchValue={searchValue} setSearchValue={setSearchValue} />

      <Sorting setSort={setSort} />

      <Pagination
        page={page}
        setPage={setPage}
        resultCount={resultCount}
        setResultCount={setResultCount}
        articlesCount={articlesCount}
      />

      {articles.length > 0 ? (
        <Results articles={articles} searchValue={searchValue} />
      ) : (
        <div className="noData">Enter your request.</div>
      )}

      {load && <div className="loader" />}
      {status.status === 'error' && <div className="error">{status.message}</div>}
    </div>
  );
};

export default Home;
