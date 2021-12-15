import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          name:'techspace'
     }
     console.log('LifecycleA constructor')
 }

    static getDerivedStateFromProps(props, state){
       console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
 


    componentDidMount(){
        console.log('LifecycleA ComponentDidMount')
    }

     shouldComponentUpdate()
     {
         console.log('LifecycleA render shouldComponentUpdate')
         return true
     }

      getSnapshotBeforeUpdate(prevProps, preState){
          console.log('LifecycleA getSnapshotBeforeUpdate')
          return null
      }


      componentDidUpdate(){
          console.log('LifecycleA componentDidUpdate')
      }

      chnageState=()=>{
          this.setState({
              name:'Techspace Code'
          })
      }
    render() {

        console.log('LifecycleA render')
        return (
            <div>            
            
            <div>Lifecycle A</div>
             <button onClick={this.chnageState}>Change State</button>
            <LifecycleB/>
                
            </div>
        )
    }
}

export default LifecycleA
