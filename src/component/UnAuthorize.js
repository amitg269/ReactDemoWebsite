import React,{PureComponent} from 'react'

class UnAuthorize extends PureComponent{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div>
                <h1>
                    You are not Authorize to view this Page.

                </h1>
            </div>
        )
    }
}

export default UnAuthorize