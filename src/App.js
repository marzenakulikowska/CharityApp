import React from 'react';
import {  HashRouter as Router ,  Route, NavLink} from 'react-router-dom'; 
import './scss/main.scss';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/oddaj-rzeczy" component={Form}/>
        <Route path="/logowanie" component={Login}/>
        <Route path="/wylogowano" component={Logout}/>
        <Route path="/rejestracja" component={Register}/>
      </Router>
    </>
  )
  
 
}
export default App;
