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
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import InlineStyle from './components/InlineStyle';
import './appStyle.css';
import styles from './appStyle.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import ShareCounter from './components/ShareCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';


class App extends Component{


  render()
  {
    return(         
      <div className="APP"> 
      <UserProvider value="Techspace Solution">
      <ComponentC />
      </UserProvider>
 
   
   {/* <ShareCounter render={ (count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount}/>)}/>

   <ShareCounter render={ (count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount}/>)}/> */}
   {/* <User render={(isLoggedIn)=>isLoggedIn ? 'Techspace Solution by Dayo' : 'Visitor'}/> */}
    {/* <ClickCounterTwo/>
    <HoverCounterTwo/> */}
    
    
     {/* <ClickCounter name='Techsace Solutions'/> */}

    {/* <HoverCounter/> */}
     
       {/* <ClickCounter name='Techsace Solutions'/>

       <HoverCounter/> */}
  {/* <ErrorBoundary>
      <Hero heroName="Peter"/>
   </ErrorBoundary>
  <ErrorBoundary>    
      <Hero heroName="John"/> */}
  {/* </ErrorBoundary> */}
  {/* <ErrorBoundary> */}
      {/* <Hero heroName="Judas"/> */}
  {/* </ErrorBoundary> */}

      {/* <PortalDemo/> */}

      {/* <FRParentInput/> */}
       
      {/* <FocusInput/> */}

  {/* <RefsDemo/> */}

{/* <ParentComp/> */}
{/* <PureComp/> */}

      {/* <FragmentDemo/>
      <Table/> */}

      {/* <LifecycleA/> */}

    {/* <Form/> */}

    {/*   <h1 className='error'>Error occured somewhere</h1>
      <h1 className={styles.success}>Great Success Always</h1>

      <InlineStyle/>
      <Stylesheet primary={true}/>
      <NameList/>
      <UserGreeting/>
      <ParentComponent/> */}
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
