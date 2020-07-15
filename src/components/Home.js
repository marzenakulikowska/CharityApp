import React from 'react';
import { NavLink} from 'react-router-dom'; 
import {Link,Element} from "react-scroll";
import home_package from '../assets/home_package.jpg';
import decoration from '../assets/decoration.svg';
import icon_1 from '../assets/icon-1.svg';
import icon_2 from '../assets/icon-2.svg';
import icon_3 from '../assets/icon-3.svg';
import icon_4 from '../assets/icon-4.svg';
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
                            <div className="btn">
                                <NavLink to="/logowanie"><button>ODDAJ <br></br>RZECZY</button></NavLink>
                                <button>ZORGANIZUJ ZBIÓRKĘ</button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
const HomeTreeColumns = () => {
    return (
        <>
            <div className="tree-columns-container">
                <div className="informations">
                    <div className="info">
                        <h1>10</h1>
                        <h2>ODDANYCH WORKÓW</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className="info">
                        <h1>5</h1>
                        <h2>WSPARTYCH ORGANIZACJI</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className="info">
                        <h1>7</h1>
                        <h2>ZOGRANIZOWANYCH ZBIÓREK</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
        </>
    )
  }
  const HomeSimpleSteps = () => {
    return (
        <>
            <div className="simple-steps-container">
                <div className="simple-steps-title">
                    <p>Wystarczą 4 proste kroki</p>
                    <img src={decoration} alt='home-decoration'></img>
                </div>
                <div className="steps-grey-container">
                    <div className="step">
                        <img src={icon_1} alt="icon-1"></img>
                        <h2>Wybierz rzeczy</h2>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="step">
                        <img src={icon_2} alt="icon-2"></img>
                        <h2>Spakuj je</h2>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="step">
                        <img src={icon_3} alt="icon-3"></img>
                        <h2>Zdecyduj komu chcesz pomóc</h2>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="step">
                        <img src={icon_4} alt="icon-4"></img>
                        <h2>Zamów kuriera</h2>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className="btn btn-steps">
                    <NavLink to="/logowanie"><button>ODDAJ <br></br>RZECZY</button></NavLink>
                </div>
            </div>
        </>
    )
  }
const Home = ()=> {
    return (
        <>
        <Element name="start"><HomeHeader/></Element>
        <HomeTreeColumns/>  
        <Element name="simple_steps"><HomeSimpleSteps/></Element>
        </>
    )
}
export default Home