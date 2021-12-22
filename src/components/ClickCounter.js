import React, { Component } from 'react'

import WithCounter from './withCounter'


class ClickCounter extends Component {
// constructor(props) {
//     super(props)

//     this.state = {
//          count:0
//     }
// }

// increamentCount=()=>{

//     this.setState(prevState =>{
//         return {count:prevState.count + 1 }
//     })
// }



    render() {
        const {count, increamentCount} =this.props
        return (
            <div>
                
                <button  onClick={increamentCount} >{this.props.name} Click {count} times</button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter, 5)
