import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import {LoginReducer} from './Redux/Reducers/LoginReducer'
import {PurchaseReducer} from './Redux/Reducers/PurchaseReducer'
import {combineReducers} from 'redux' 

const persistConfig = {
  key: 'root',
  storage,
}

//blacklist: ['LoginReducer'] ADD REDUCER NAME TO NOT PERSISIT THE STATE OF REDUCER

const RootReducer=combineReducers({
     PurchaseReducer,
      LoginReducer
})
   
const persistedReducer = persistReducer(persistConfig, RootReducer)
export const  store = createStore(persistedReducer);
export const persistor = persistStore(store)
