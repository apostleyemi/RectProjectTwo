import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import MyGreet from './components/Greet';
import Welcome from  './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClickClass from './components/ClickClass';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';


class App extends Component{


  render()
  {
    return( 
    <div className="APP">

      <UserGreeting/>
      <ParentComponent/>
    {/*   <FunctionClick/>  
      <ClickClass/>
      <EventBind/>
 */}
   {/*  <Message/>
    <Counter/> */}

    {/*  <MyGreet name="Peter"  heroName="Rock">
       <p>Thisnisnjust a simple greetings</p>
       </MyGreet> 
     <MyGreet name="John" heroName="Brother of Jesus" /> 
     <button>Click</button>
     <MyGreet name="Andrew" heroName="One of the deciples" /> 
    

      <Welcome name="Ifeoluwa"  heroName="Sweetheart"/>
      <Welcome name="Adegbenro"  heroName="Surname"/>
      <Welcome name="Emmanuel"  heroName="Akorede"/>
      <Hello/> */}

    </div>
    );
  }

}
  

export default App;
