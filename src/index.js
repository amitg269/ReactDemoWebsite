import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import * as serviceWorker from './serviceWorker';
import RootReducer  from './Redux/Reducers/RootReducer'
import { BrowserRouter} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";
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
