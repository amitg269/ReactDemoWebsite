import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import RootReducer  from './Redux/Reducers/RootReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

export const  store = createStore(persistedReducer);
export const persistor = persistStore(store)
