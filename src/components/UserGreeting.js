import React, { Component } from 'react'

export class UserGreeting extends Component {

 /*    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    } */
    
    render() {
       
        let isLoggedIn=true
         if(isLoggedIn)
         {
             return <div>Welcome Techspace</div>
         }
         else{
             return <div>Welcome Guest</div>
         }
            
              /*   if (this.state.isLoggedIn)
                {
                  return  <div>welcome TechSpace Solutions</div>
                } else
                {
                  return   <div>Welcome Guest</div>
                } */
            
        
    }
}

export default UserGreeting
