import React,{Component} from "react";
 class Welcome extends Component{

      render(props){

        // to extract the content of props
        //consr{name. heroName }=this.props
        //const {state1, state2} =this.state
          return <h1>{this.props.name}-{this.props.heroName}</h1>
      }
 }

 export default Welcome