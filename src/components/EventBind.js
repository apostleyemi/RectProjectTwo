import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello Binder'
        }
       // this.clickhandler=this.clickhandler.bind(this)
    }

   /*  clickhandler(){
        this.setState({
            message:'Goodby Safe journey'
        })
    } */
    
    clickhandler= () =>{
        this.setState({
            message:'Its awesome God is good.'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
               {/*  <button onClick={this.clickhandler.bind(this)}>Bind Click</button> or */}
               {/*  <button onClick={()=> this.clickhandler()}>Bind Click</button> or bind in the constructor */}
                <button onClick={this.clickhandler}>Bind Click</button> or bind in the constructor
            </div>
        )
    }
}

export default EventBind
