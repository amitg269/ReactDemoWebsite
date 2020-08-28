export const SELECT_ROLE="SELECT_ROLE";
export const LOGIN_INFO="LOGIN_INFO";
export const LOGOUT="LOGOUT";
export const selectRole=(role)=>{
  return {
      type:SELECT_ROLE,
      payload:role
  }
}

export const loginData=(Obj)=>{
  return {
      type:LOGIN_INFO,
      payload:Obj
  }
}


export const LogoutUser=(obj)=>{
  debugger;
 return{
   type:LOGOUT,
   payload:{}
 } 
}