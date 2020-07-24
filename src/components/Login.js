import React, {useState} from 'react';
import { NavLink} from 'react-router-dom'; 
import {Link} from "react-scroll";
import decoration from '../assets/decoration.svg';
const Login = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = (e) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        e.preventDefault();
        if(!re.test(email)) {
            setEmailError("Podany e-mail jest nieprawidłowy!")
        }
        else if(password.length <= 5) {
            setPasswordError("Podane hasło jest za krótkie!")
        }
        else {
            setEmailError("");
            setPasswordError("");
            setEmail("");
            setPassword("");
            console.log("wszystko gicio")
        }
    }
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
                            <h1 className="main-title">Zaloguj się</h1>
                            <img src={decoration} alt='home-decoration'></img>
                        </div>
                        
                        <form onSubmit ={handleSubmit}>
                            <div className="login-register-content" style={{height:"22rem"}}>
                                <div className="login-register-form-element">
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                                    <p className="error">{emailError}</p>
                                </div>
                                <div className="login-register-form-element">
                                    <label htmlFor="password">Hasło</label>
                                    <input type="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                                    <p className="error">{passwordError}</p>
                                </div>
                            </div>
                                 <div className="login-register-buttons">
                                    <button><NavLink to="/rejestracja">Załóż konto</NavLink></button>
                                    <button type="submit" className="login-register-btn">Zaloguj się</button>
                                </div>
                                
                            </form>
                        
                       
                    </div>
                    </div>
        </>
    )
}
export default Login