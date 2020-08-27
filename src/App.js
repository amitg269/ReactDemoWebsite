import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toCamel} from './demoexport'
import {connect} from 'react-redux'
import Login from './component/Login'
import RestrictedContainer from './component/RestrictedContainer'

var _ = require("lodash");


class App extends Component {
 componentWillMount(){
  
}
render(){
  return (
    <div className="App">
      <RestrictedContainer/>
    </div>
  );

}
}



export default  connect() (App);
