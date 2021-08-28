import { createStore } from 'redux';
// import reducers from './reducers/reducers';
const stateItem = {
  b: '2',
};
const reducer = (action, state = stateItem) => state;
export default createStore(reducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
