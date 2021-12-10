import React, { Component } from 'react'

 class ClickClass extends Component {

     clickHandler() {
        console.log('You clicked me')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>click me</button>
            </div>
        )
    }
}

export default ClickClass
