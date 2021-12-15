import React, { Component } from 'react'

class LifecycleB extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          name:'techspace'
     }
     console.log('LifecycleB constructor')
 }

    static getDerivedStateFromProps(props, state){
       console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
 
    componentDidMount(){
        console.log('LifecycleB ComponentDidMount')
    }
    shouldComponentUpdate()
    {
        console.log('LifecycleB render shouldComponentUpdate')
        return true
    }

     getSnapshotBeforeUpdate(prevProps, preState){
         console.log('LifecycleB getSnapshotBeforeUpdate')
         return null
     }


     componentDidUpdate(){
         console.log('LifecycleB componentDidUpdate')
     }
    render() {

        console.log('LifecycleB render')
        return (
            <div>Lifecycle A</div>
                
            
        )
    }
}

export default LifecycleB
