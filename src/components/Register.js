import React from 'react';
import { NavLink} from 'react-router-dom'; 
import {Link} from "react-scroll";
import decoration from '../assets/decoration.svg';
const Register = ()=> {
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
                    <div className="register-container">
                        <div>
                            <h1 className="main-title">Załóż konto</h1>
                            <img src={decoration} alt='home-decoration'></img>
                        </div>
                        <div className="register-content">
                            <form>
                                <div className="register-form-element">
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email"></input>
                                </div>
                                <div className="register-form-element">
                                    <label htmlFor="password">Hasło</label>
                                    <input id="password"></input>
                                </div>
                                <div className="register-form-element">
                                    <label htmlFor="password-repeat">Powtórz hasło</label>
                                    <input id="password-repeat"></input>
                                </div>
                            </form>
                        </div>
                        <div className="register-buttons">
                            <button><NavLink to="/logowanie">Zaloguj się</NavLink></button>
                            <button className="register-btn">Załóż konto</button>
                        </div>
                    </div>
                    </div>
        </>
    )
}
export default Register