import React from 'react';
import { NavLink} from 'react-router-dom'; 
import {Link,Element} from "react-scroll";
import home_package from '../assets/home_package.jpg';
import decoration from '../assets/decoration.svg';
const HomeHeader = ()=> {
    return (
        <>
            <div className="main-view-container">
                    <img src={home_package} alt="header-photo"></img>
                    <div className="header-container">
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
                        <div className="header-main-info">
                            <div className="title">Zacznij pomagać! <br></br> Oddaj niechciane rzeczy w zaufane ręce</div>
                            <div className="decoration">
                                <img src={decoration} alt='home-decoration'></img>
                            </div>
                            <div className="btns">
                                <NavLink to="/logowanie"><button>ODDAJ <br></br>RZECZY</button></NavLink>
                                <button>ZORGANIZUJ ZBIÓRKĘ</button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

const Home = ()=> {
    return (
        <>
        <Element name="start"><HomeHeader/></Element>        
        </>
    )
}
export default Home