import React, {useState} from 'react';
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
                    <div className="login-register-container">
                        <div>
                            <h1 className="main-title">Załóż konto</h1>
                            <img src={decoration} alt='home-decoration'></img>
                    </div>
                    <form >
                        <div className="login-register-content" style={{height:"30rem"}}>
                                <div className="login-register-form-element">
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" ></input>
                                </div>
                                <div className="login-register-form-element">
                                    <label htmlFor="password">Hasło</label>
                                    <input type="password" id="password" ></input>
                                </div>
                                <div className="login-register-form-element">
                                    <label htmlFor="password-repeat">Powtórz hasło</label>
                                    <input type="password" id="password-repeat" ></input>
                                </div>
                        </div>
                        <div className="login-register-buttons">
                            <button><NavLink to="/logowanie">Zaloguj się</NavLink></button>
                            <button type="submit" className="login-register-btn">Załóż konto</button>
                        </div>    
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register