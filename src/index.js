import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
// import About from './pages/About';

import './index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, createLogger());
export const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <Routes />
  </Provider>,
  document.getElementById('root')
);
