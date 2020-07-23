import React from 'react';
import { NavLink} from 'react-router-dom'; 
import {Link} from "react-scroll";
import decoration from '../assets/decoration.svg';
const Logout = ()=> {
    return (
        <>
            <div className="header-container">
                    <div className="section_top">
                        <div className="login_out">
                            <NavLink to="/logowanie">Zaloguj</NavLink>
                            <NavLink to="/rejestracja" className="second_navlink">Załóż konto</NavLink>
                        </div>
                        <div className="header_nav">
                            <NavLink to="/">Start</NavLink>
                            <NavLink to="/"><Link to="simple_steps" smooth={true}  duration={1500} >O co chodzi?</Link></NavLink>
                            <Link to="about" smooth={true} duration={1500}>O nas</Link>
                            <Link to="who_we_help"  smooth={true} duration={1500}>Fundacja i organizacje</Link>
                            <Link to="contact"  smooth={true} duration={1500}>Kontakt</Link>
                        </div>
                    </div>
                    <div className="logout-container">
                        <div>
                            <h1 className="main-title">Wylogowanie nastąpiło<br></br>poprawnie!</h1>
                            <img src={decoration} alt='home-decoration'></img>
                        </div>
                        <button><NavLink to="/">Strona główna</NavLink></button>
                    </div>
            </div>
        </>
    )
}
export default Logout