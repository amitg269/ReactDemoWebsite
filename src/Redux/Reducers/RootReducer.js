import {LoginReducer} from './LoginReducer'
import {PurchaseReducer} from './PurchaseReducer'
import {combineReducers} from 'redux'

const RootReducer=combineReducers({
    PurchaseReducer,
    LoginReducer
})

export default RootReducer


