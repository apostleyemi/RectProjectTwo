import React from "react";
//export as a constant 
 //export const Greet=() => <h1>Hello Techspace</h1>
 //const Grett=({name, heroName})=>
 //or const {name, heroName}=props
  const Greet= props   =>
  {
      console.log(props);

      return(
          <div>
              <h1>Hello {props.name}: {props.heroName}</h1>
              {props.children}

              


          </div>
      
      
      
      );


  }
  //default export 
export default Greet