import {
    BUY_LUMPSUM,
    BUY_SIP
} from '../Action/PurchaseAction';

const initialState={
    SIPInfo:{},
    LumpsumInfo:{}
}

export function PurchaseReducer(state=initialState,action){
  switch(action.type){
      case BUY_SIP:
          return{
              ... state,
              SIPInfo:action.payload
            }
            break
      case BUY_LUMPSUM:
          return{
            ...state,
            LumpsumInfo:action.payload
          }
          break
          default:
              return state
  }
}