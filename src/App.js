import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';

class App extends Component{


  render()
  {
    return(
    <div className="APP">
      <Greet /> 

    </div>
    );
  }

}
  

export default App;
