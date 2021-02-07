import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import tasks from './reducers'
import './index.css';
import App from './App';

const store = createStore(tasks)

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
  