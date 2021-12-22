import React from 'react'


const withCounter =(WrappedComponent, incrementNum) =>{

    class WithCounter extends React.Component{
        
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
        increamentCount=()=>{
        
            this.setState(prevState =>{
                return {count:prevState.count + incrementNum }
            })
        }
        
        
        render(){

            return <WrappedComponent  count={this.state.count} increamentCount={this.increamentCount} {... this.props}/>
        }
    }

    return WithCounter
}

export default withCounter