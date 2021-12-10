import React, { Component } from 'react'

 class Counter extends Component {
 
    constructor(props) {
        super(props)
    
        this.state = {
                count: 0,
                dislike:0
        }
    }
    countIncrement()
    {
       /*  this.setState({
            count:this.state.count + 1
            
        }
        , 
            ()=>{
                console.log('Callback Value', this.state.count)

            })
            
        console.log(this.state.count) */
        this.setState(prevState =>({
            count:prevState.count + 1
        }), ()=>{console.log('callback', this.state.count)})
        

    }

    incrementFive()
    {
        this.countIncrement()
        this.countIncrement()
        this.countIncrement()
        this.countIncrement()
        this.countIncrement()
    }

    countDislike(){
        if(this.state.count >0)
        {
            this.setState({
           
                count:this.state.count - 1
            },
            ()=>{
                console.log('Callback Value', this.state.count)

            })
            
        }
        
    }

    render() {
        return (
            <div>
                <h1>Count --{this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Like </button>
                <button onClick={()=>this.countDislike()}>Dislike</button>
            </div>
        )
    }
}

export default Counter
