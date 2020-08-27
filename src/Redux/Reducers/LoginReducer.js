import {SELECT_ROLE,LOGIN_INFO} from '../Action/LoginAction' 


const InitialState={
    ROLE:"",
    loginInfo:{},
}

export function LoginReducer(state=InitialState,action){
    switch(action.type){
        case SELECT_ROLE:
            return{
                ...state,
                ROLE:action.payload
            }
            break
            case LOGIN_INFO:
                return{
                ...state,
                loginInfo:action.payload
            }
            default: return state
    }
}