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

const store = createStore(RootReducer);
const persistor = persistStore(store);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <React.StrictMode>
    <PersistGate persistor={persistor}>
         <App />
    </PersistGate>
  </React.StrictMode></BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
