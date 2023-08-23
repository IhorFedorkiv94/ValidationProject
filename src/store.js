import { createStore } from 'redux';
import userReducer from './reducer';

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // This line is to enable the Redux DevTools extension in the browser.
);

export default store;
