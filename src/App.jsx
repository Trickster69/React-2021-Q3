import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import store from './store/store';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';

function App() {
  return (
    <Provider store={store}>
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
                      <Home />
                    )}
                  />
                  <Route exact path="/about" component={About} />
                  <Route path="/detail/:id" component={Details} />
                  <Route path="/*" component={NotFound} />
                </Switch>
              </CSSTransition>

            </TransitionGroup>
          )}
          />
        </div>
      </div>
    </Provider>
  );
}

export default App;
