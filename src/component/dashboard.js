import React,{PureComponent} from 'react'
import {connect} from 'react-redux'; 


class Dashboard extends PureComponent{
constructor(props){
    super(props);
    this.state={}
}
componentDidMount(){
    
}

render(){
    return(
        <div>
            <h2>Hello This is Dashboard</h2>
            
        </div>
    )
}
}

const mapStateToProps = state => ({
    storeDATA : state 
  })
  
  const mapDispatchToProps = dispatch => ({
    
  })

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);