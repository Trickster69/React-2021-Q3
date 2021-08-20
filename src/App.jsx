import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './Components/Header/Header';
import Pagination from './Components/Pagination/Pagination';
import Results from './Components/Results/Results';
import Search from './Components/Search/Search';
import Sorting from './Components/Sorting/Sorting';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/Details/Details';

function App() {
  // const myApKey = '67174a0eb17a40fdb98e15abe64a8943';
  const newApi = 'a51463898d2a4cd2b0818abc2581450d';
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState('relevancy');
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [resultCount, setResultCount] = useState(5);
  const [articlesCount, SetArticlesCount] = useState('');

  const [load, setLoad] = useState(false);

  const [status, setStatus] = useState({ status: 'ok', message: '' });
  function renderData(e) {
    e.preventDefault();

    setPage(1);
    getData();
  }

  function getData() {
    if (searchValue) {
      try {
        setLoad(true);
        fetch(
          `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=${sort}&apiKey=${newApi}&pageSize=${resultCount}&page=${page}`,
        )
          .then((res) => res.json())
          .then((data) => {
            setStatus({ ...status, status: data.status, message: data.message });
            data.articles.forEach((key) => {
              key.id = Math.floor((Date.now() * Math.random()) / 100000);
            });
            SetArticlesCount(data.totalResults);
            setArticles(data.articles);
            setLoad(false);
          });
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => getData(), [sort, page, resultCount]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app_wrapper">
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/">
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
                        <Results data={articles} searchValue={searchValue} />
                      ) : (
                        <div className="noData">Enter your request.</div>
                      )}

                      {load && <div className="loader" />}
                      {status.status === 'error' && <div className="error">{status.message}</div>}
                    </div>

                  </Route>
                  <Route path="/detail/:id" component={Details} />
                  <Route exact path="/about" component={About} />
                  <Route path="/*" component={NotFound} />
                </Switch>
              </CSSTransition>

            </TransitionGroup>
          )}
          />

        </div>
      </div>
    </Router>
  );
}

export default App;
