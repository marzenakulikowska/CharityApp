import React, {useState, useEffect} from 'react';
import { NavLink} from 'react-router-dom'; 
import {Link,Element} from "react-scroll";
import home_package from '../assets/home_package.jpg';
import decoration from '../assets/decoration.svg';
import icon_1 from '../assets/icon-1.svg';
import icon_2 from '../assets/icon-2.svg';
import icon_3 from '../assets/icon-3.svg';
import icon_4 from '../assets/icon-4.svg';
import signature from '../assets/signature.svg'
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
const HomeHeader = ()=> {
    return (
        <>
            <div className="main-view-container" style={{minWidth:"1200px"}}>
                    <img src={home_package} alt="header-photo"></img>
                    <div className="header-container">
                    <div className="section_top">
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
                    </div>
                        <div className="header-main-info">
                            <div>
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
                    <h1 className="main-title">Wystarczą 4 proste kroki</h1>
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
  const HomeAbout = () => {
    return (
        <>
            <div className="about-container">
                <div className="about-us">
                    <h1 className="main-title">O nas</h1>
                    <img src={decoration} alt='home-decoration'></img>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div>
                        <img src={signature} alt='signature'></img>
                    </div>
                </div>
                <div className="people-img">
                </div>
            </div>
        </>
    )
  }
  const HomeWhoWeHelp = () => {     
    return (
        <>
            <div className="who-we-help-container">
                <div className="who-we-help">
                    <h1 className="main-title">Komu pomagamy?</h1>
                    <img src={decoration} alt='home-decoration'></img>
                </div>
                <Section/>
            </div>
        </>
    )
  }
//   -----------------
  const Pagination = ({data}) => {
      
      const [currentPage, setCurrentPage]=useState(1);

      const indexOfLast = currentPage*3;
      const indexOfFirst = indexOfLast - 3;
      const currentArray = data.slice(indexOfFirst, indexOfLast)
      const handleClick = (event, i)=> {
        setCurrentPage(i)
      }
      useEffect(() => {
         console.log("nowe dane")
         setCurrentPage(1)         
      }, [data])
      const pageNumbers = [];
    //   if(data.length >3) { => nie wyrederyje wtedy numeru strony
            for(let i = 1; i <= Math.ceil(data.length/3); i++) {
                const element = <p key={i} 
                                    onClick={e=>handleClick(e,i)}
                                    className={currentPage === i ? "active" : ""}
                                    >{i}
                                </p>
                pageNumbers.push(element)
            }
    // }
    return (
        <>
            <div className="types">
                <div className="types-main-info">{data[0].header}</div>
                <div className="types-inf">
                    
                        {currentArray.map((item, i) => {
                            return(
                                <>  <div className="one-of-type">
                                        <h1 key={i}>{item.name}</h1>
                                        <div className="purpose">
                                            <p key={i}>{item.description}</p>
                                            <p key={i}>{item.tags}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="page">
                    {pageNumbers}
                </div>
            </>
    );
  };
  
  const Section = () => {
    const [selectedCategory, setSelectedCategory] = useState("foundations");
  
    let data;
    if (selectedCategory === "foundations") {
      data = [
        {
          header:"W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
          name: "Fundacja “Dbam o Zdrowie”",
          description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          tags: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
          name: "Fundacja “Dla dzieci”",
          description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
          tags: "ubrania, meble, zabawki"
        },
        {
          name: "Fundacja “Bez domu”",
          description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
          tags: "ubrania, jedzenie, ciepłe koce"
        },
        {
            name: "Fundacja “Dla nas”",
            description: "Cel i misja: Nieść pomoc każdemu.",
            tags: "ubrania, meble, jedzonko"
          },
          {
            name: "Fundacja “Wyrównać szanse”",
            description: "Cel i misja: Pomoc dla dzieci w wieku szkolnym z ubogich rodzin.",
            tags: "podręczniki, zeszyty, przybory piśmiennicze"
          },
          {
            name: "Fundacja “6”",
            description: "Cel i misja: Pomoc dla dzieci w wieku szkolnym z ubogich rodzin.",
            tags: "podręczniki, zeszyty, przybory piśmiennicze"
          },
          {
            name: "Fundacja “7”",
            description: "Cel i misja: Pomoc dla dzieci.",
            tags: "podręczniki, zeszyty"
          },
          {
            name: "Fundacja “8”",
            description: "Cel i misja: Pomoc dla dzieci.",
            tags: "podręczniki, zeszyty"
          },
          {
            name: "Fundacja “9”",
            description: "Cel i misja: Pomoc dla dzieci.",
            tags: "podręczniki, zeszyty"
          },
      ];
    } else if (selectedCategory === "organizations") {
      data = [
        {
          header:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
          name: "Organizacja “Lorem Ipsum 1”",
          description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
          tags: ["Egestas, sed, tempus"]
        },
        {
          name: "Organizacja “Lorem Ipsum 2”",
          description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
          tags: "Ut, aliquam, purus, sit, amet"
        },
        {
          name: "Organizacja “Lorem Ipsum 3”",
          description: "Scelerisque in dictum non consectetur a erat nam.",
          tags: "Mi, quis, hendrerit, dolor"
        },
        {
            name: "Organizacja “Lorem Ipsum 4”",
            description: "Scelerisque in dictum non consectetur a erat nam.",
            tags: "Mi, quis, hendrerit, dolor"
          },
          {
            name: "Organizacja “Lorem Ipsum 5”",
            description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            tags: "Ut, aliquam, purus, sit, amet"
          },
          {
            name: "Organizacja “Lorem Ipsum 6”",
            description: "Scelerisque in dictum non consectetur a erat nam.",
            tags: "Mi, quis, hendrerit, dolor"
          },
        ];
    } else {
        data= [
          {
              header:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
              name: "Zbiórka “Lorem Ipsum 1”",
              description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
              tags: "Egestas, sed, tempus"
            },
            {
              name: "Zbiórka “Lorem Ipsum 2”",
              description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
              tags: "Ut, aliquam, purus, sit, amet"
            },
            {
              name: "Zbiórka “Lorem Ipsum 3”",
              description: "Scelerisque in dictum non consectetur a erat nam.",
              tags: "Mi, quis, hendrerit, dolor"
            }
          ];
    }
  
    return (
      <>
        <div className="type-of-help">
        <div
            style={{
              border: selectedCategory === "foundations" && "1px solid #3C3C3C"
            }}
            onClick={() => setSelectedCategory("foundations")}
          >
            Fundacjom
          </div>
          <div
            style={{
              border: selectedCategory === "organizations" && "1px solid #3C3C3C"
            }}
            onClick={() => setSelectedCategory("organizations")}
          >
            Organizacjom pozarządowym
          </div>
          <div
            style={{
              border: selectedCategory === "collections" && "1px solid #3C3C3C"
            }}
            onClick={() => setSelectedCategory("collections")}
          >
            Lokalnym zbiórkom
          </div>
        </div>
        <Pagination data={data}/>
      </>
    );
  };
  
  const HomeContact = ()=> {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorName, setErrorsName] = useState("");
    const [errorEmail, setErrorsEmail] = useState("");
    const [errorMessage, setErrorsMessage] = useState("");
    const [sendMsg, setSendMsg] = useState("none");
    const handleSubmit = (e) => {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      e.preventDefault(); 
      if(name.length === 0 || name.indexOf(" ")!==-1) {
        setErrorsName("Imię jest wymagane i musi być 1 wyrazem")
      }
      else if(!re.test(email)) {
        setErrorsEmail("E-mail nieprawidłowy")
      }
      else if (message.length < 120) {
          setErrorsMessage("Wiadomość musi mieć minimum 120 znaków")
      }
      else {
          setErrorsName("");
          setErrorsMessage("");
          setErrorsEmail("");
          const data = {
            name: name,
            email: email,
            message: message
          }
          console.log(data);
          fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((response) => {
              setName("");
              setEmail("");
              setMessage("");
              setSendMsg("block");
              let timeout = setTimeout(() => setSendMsg("none"),2000);
              console.log(response);
          }).catch((error) => {
            console.log(error)
          })
        
      }
  }
     return (
          <>
                <div className="contact-container" style={{minWidth:"1200px"}}> 
                <div className="overlay">
                    <div className="contact">
                        <h1 className="main-title">Skontaktuj się z nami</h1>
                        <img src={decoration} alt='home-decoration'></img>
                        <div className="success" style={{display:sendMsg}}>Wiadomość została wysłana!<br></br>Wkrótce się skontaktujemy.</div>
                        <div className="formularz">
                          <form onSubmit ={handleSubmit}>
                            <div className="name-email-container">
                                <div className="form-element">
                                    <label htmlFor="name">Wpisz swoje imię</label>
                                    <input className="normal-input" id="name" placeholder={"Krzysztof"} value={name} onChange={(e) => setName(e.target.value)}></input>
                                    <p className="error">{errorName}</p>
                                </div>
                                <div className="form-element">
                                    <label htmlFor="email">Wpisz swój email</label>
                                    <input className="normal-input" id="email" placeholder={"abc@xyz.pl"} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                    <p className="error">{errorEmail}</p>
                                </div>
                            </div>
                            <div className="form-element">
                                <label htmlFor="message">Wpisz swoją wiadomość</label>
                                <textarea className="normal-textarea" id="message" placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                <p className="error">{errorMessage}</p>
                            </div>
                            <div className="form-btn">
                                <button type="submit">Wyślij</button>
                            </div>
                          </form>
                        </div>
                    </div>
                    <footer>
                            <div className="contact-footer">
                              <p>Copyright by Coders Lab</p>
                              <div className="footer-icons">
                                <img src={facebook} style={{marginRight:"10px"}}alt="facebook-icon"></img>
                                <img src={instagram} alt="instagram-icon"></img>
                              </div>
                            </div>
                    </footer>
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
        <Element name="about"><HomeAbout/></Element>
        <Element name="who_we_help"><HomeWhoWeHelp/></Element>
        <Element name="contact"><HomeContact/></Element>
        </>
    )
}
export default Home