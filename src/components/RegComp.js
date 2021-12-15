import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('****************Reg Comp************************************')
        return (
            <div>
                Rgular Coponent {this.props.name}
            </div>
        )
    }
}

export default RegComp
