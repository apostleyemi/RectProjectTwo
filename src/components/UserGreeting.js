import React, { Component } from 'react'

export class UserGreeting extends Component {

   constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    } 
    
    render() {
       

        //third method

        return this.state.isLoggedIn &&<div>welcome vishwas</div>

          /*  return(
           


         this.state.isLoggedIn ? 
            (<div>Welcome Techspace Solutions</div>):
            (<div>Welcome Guest</div>) 
        )
         */

        // second method
       /*  let isLoggedIn=true
         if(isLoggedIn)
         {
             return <div>Welcome Techspace</div>
         }
         else{
             return <div>Welcome Guest</div>
         }
 */
         //first method 
            
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
