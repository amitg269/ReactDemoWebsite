import { render } from "@testing-library/react"
import {PropTypes} from 'react'
import React, { PureComponent } from "react";
import {Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {loginData,selectRole} from '../Redux/Action/LoginAction'


class Login extends PureComponent{
    constructor(props){
        super(props);
         this.state={
            pan:"",
            username:"",
            city:"",
            role:""
        }
    }
   
    componentDidMount(){
        localStorage.clear();
    }
  

    setText=(e)=>{

        if(e.target.id=="pan"){
            this.setState({
                pan:e.target.value
            })
        }
        else if(e.target.id=="username"){
            this.setState({
                username:e.target.value
            })
        }
        else if(e.target.id=="role"){
           
            this.setState({
                role:e.target.value
            })
        }
        else if(e.target.id=="city"){
            this.setState({
                city:e.target.value
            })
        }
    }

    login=(e)=>{
        var t=this.state;
        var data={};
        data.username=t.username;
        data.role=t.role;
        localStorage.setItem('UserData',JSON.stringify(data));
        this.props.loginData(data);
        this.props.history.push('/dashboard')
    }
    render(){
      return(
      <div>
           <div className="row">
               <div className="col-lg-4">
               <input type="text" value={this.state.role} onChange={this.setText} id="role" placeholder="Enter Role"/>
               </div>
           </div>
           <div className="row">
               <div className="col-lg-4">
               <input type="text" value={this.state.username} onChange={this.setText} id="username" placeholder="EnterUserName"/>
               </div>
           </div>
           <div className="row">
               <div className="col-lg-4">
               <button className="btn btn-info" onClick={this.login}>Login</button>
               </div>
           </div>
       </div>
            
      )
    }
} ;

const mapStateToProps = state => ({
    storeDATA : state 
  })
  
  const mapDispatchToProps = dispatch => ({
    selectRole: text => dispatch(selectRole(text)),
    loginData:text=>dispatch(loginData(text))
  })

export default connect(mapStateToProps, mapDispatchToProps) (Login);

