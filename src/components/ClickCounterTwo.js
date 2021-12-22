import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
   

    render() {
        const{count, incrementCount}=this.props
        return (
            <button onClick={incrementCount}>CLock {count} Times </button>
        )
    }
}

export default ClickCounterTwo
