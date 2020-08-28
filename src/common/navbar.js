import React,{PureComponent} from 'react'
import {LogoutUser} from '../Redux/Action/LoginAction'
import {PropTypes} from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router'
class NavBar extends PureComponent{
    constructor(props){
        super(props);
        this.state={}
    }

    Logout=()=>{
        var obj={};
        localStorage.clear();
        this.props.history.push('/login')         
    }

    render(){
        return(<div>
            <button onClick={this.Logout}>Logout</button>
            </div>)
    }
}

const mapStateToProps = state => ({
    storeDATA : state 
  })
  
  const mapDispatchToProps = dispatch => ({
    LogoutUser: obj => dispatch(LogoutUser(obj)),
  })

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (NavBar));

