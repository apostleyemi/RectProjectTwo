import React, { Component } from 'react'
import { memo } from 'react/cjs/react.development'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'techspace'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Techspace'
            })
        },2000)
    }
    
    render() {
        console.log('****************Parent Comp************************************')
        return (
            <div>
                Parent Component

                <memo name={this.state.name}/>

                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
