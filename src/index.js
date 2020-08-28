import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor,store } from "./configureStore"

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <BrowserRouter>
      <React.StrictMode>
          <App />       
      </React.StrictMode>
    </BrowserRouter>
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);
serviceWorker.unregister();
