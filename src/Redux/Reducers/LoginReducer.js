import {SELECT_ROLE,LOGIN_INFO,LOGOUT} from '../Action/LoginAction' 


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
            break
            case LOGOUT:{
                localStorage.clear();
                    return{
                        state
                    }
            }
            default: return state
    }
}