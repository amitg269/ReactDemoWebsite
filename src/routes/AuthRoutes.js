import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from '../common/navbar'
var _ = require('lodash');

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        RouteAuthention({ component: Component, ...rest },props)
      }
    />
  );
};



const RouteAuthention = ({ component: Component, ...rest },props) => {
  var data=JSON.parse(localStorage.getItem("UserData"));
  if(data){
    var role=rest.Role.split(",");
    var indexrole=_.indexOf(role,data.role.toUpperCase())
    if(indexrole>-1){
        const datat= <div><NavBar/><Component {...props} /></div> ; 
        return   datat;     
    }
    else{
        return <Redirect to="/forbidden" />;
    }
  }
  else{
      return <Redirect to="/login" />;
  }
};
