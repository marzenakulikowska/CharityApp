import React from 'react';
import {  HashRouter as Router ,  Route, NavLink} from 'react-router-dom'; 
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";
import './scss/main.scss';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

const Header = () => {
  return (
      <header className="section_top">
          <div className="login_out">
              <NavLink to="/logowanie">Zaloguj</NavLink>
              <NavLink to="/rejestracja" className="second_navlink">Załóż konto</NavLink>
          </div>
          <div className="header_nav">
              <Link to="start" smooth={true} duration={1500} >Start</Link>
              <Link to="simple_steps" smooth={true}  duration={1500} >O co chodzi?</Link>
              <Link to="about" smooth={true} duration={1500}>O nas</Link>
              <Link to="who_we_help"  smooth={true} duration={1500}>Fundacja i organizacje</Link>
              <Link to="contact"  smooth={true} duration={1500}>Kontakt</Link>
          </div>
      </header>
  )
}
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
