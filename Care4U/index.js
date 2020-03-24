import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import rootReducer from './src/Redux/rootReducer';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './src/App'

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root"))