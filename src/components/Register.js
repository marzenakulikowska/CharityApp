import React, {useState} from 'react';
import { NavLink} from 'react-router-dom'; 
import {Link} from "react-scroll";
import decoration from '../assets/decoration.svg';
const Register = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordRepeatError, setPasswordRepeatError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailError!=="" ) {
            setEmailError("Podany e-mail jest nieprawidłowy!")
        }
        if (passwordError!=="") {
            setPasswordError("Podane hasło jest za krótkie!")
        }
        if (passwordRepeatError!=="") {
            setPasswordRepeatError("Podane hasła nie są takie same!")
        }
        else {
            setEmailError("");
            setPasswordError("");
            setPasswordRepeatError("");
            setEmail("");
            setPassword("");
            setPasswordRepeat("")
            console.log("wszystko gicio")
        }
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(e.target.value)) {
            setEmailError("Podany e-mail jest nieprawidłowy!")
        } else {
            setEmailError("")
        }
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if(password.length <= 4) { //SPYTAĆ O TO
            setPasswordError("Podane hasło jest za krótkie!")
        } else {
            setPasswordError("")
        }
    }
    const handlePasswordRepeatChange = (e) => {
        setPasswordRepeat(e.target.value);
        if(passwordRepeat !== password) { // I O TO
            setPasswordRepeatError("Podane hasła nie są takie same!")
        } else {
            setPasswordRepeatError("")
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
                            <h1 className="main-title">Załóż konto</h1>
                            <img src={decoration} alt='home-decoration'></img>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="login-register-content" style={{height:"30rem"}}>
                                <div className="login-register-form-element">
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" value={email} onChange={handleEmailChange}></input>
                                    <p className="error">{emailError}</p>
                                </div>
                                <div className="login-register-form-element">
                                    <label htmlFor="password">Hasło</label>
                                    <input type="password" id="password" value={password} onChange={handlePasswordChange}></input>
                                    <p className="error">{passwordError}</p>
                                </div>
                                <div className="login-register-form-element">
                                    <label htmlFor="password-repeat">Powtórz hasło</label>
                                    <input type="password" id="password-repeat" value={passwordRepeat} onChange={handlePasswordRepeatChange} ></input>
                                    <p className="error">{passwordRepeatError}</p>
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