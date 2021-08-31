import React, { useEffect, useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import store from './store/store';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home';

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
    fetchData();
  }

  function fetchData() {
    if (searchValue) {
      try {
        setLoad(true);
        fetch(
          `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=${sort}&apiKey=${newApi}&pageSize=${resultCount}&page=${page}`,
        )
          .then((res) => res.json())
          .then((data) => {
            setStatus({ status: data.status, message: data.message });
            data.articles.forEach((key) => {
              key.id = Math.floor((Date.now() * Math.random()) / 100000);
            });
            SetArticlesCount(data.totalResults);
            setArticles(data.articles);
            setLoad(false);
          });
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoad(false);
        }, 1000);
      }
    }
  }

  useEffect(() => fetchData(), [sort, page, resultCount]);

  return (
    <Provider store={store}>
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
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <Home
                          renderData={renderData}
                          articles={articles}
                          setSort={setSort}
                          articlesCount={articlesCount}
                          load={load}
                          status={status}
                          resultCount={resultCount}
                          setResultCount={setResultCount}
                          page={page}
                          setPage={setPage}
                        />
                      )}
                    />
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
    </Provider>

  );
}

export default App;
