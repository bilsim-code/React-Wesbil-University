import "./Navbar.css";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; 
import logo from "../../assets/princeton badge.jpg";
import contact_icon from "../../assets/contact.png";
import { FaSearch, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useContext, useEffect,  } from "react";
import { AppContext } from "../../Context/AppContext";

const Navbar = () => {
  const location = useLocation()
  const { barOn, setBarOn,showSearchBar, setShowSearchBar, navRef, leftRef, rightRef, searchValue, setSearchValue } = useContext(AppContext);

 /*  useEffect(() => {
    let body = document.body;
    if (barOn) {
      body.classList.add("no-pointer-events");
      body.style.transition = "background 2s";
      //navRef.style.pointerEvents='visible'
      //navRef.classList.add('bodyBarOn')
    } else {
      body.classList.remove("no-pointer-events");
    }
  }, [barOn]); */

  useEffect(() => {


    let scroll = window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        navRef.current.classList.add('nav-white')
        navRef.current.classList.add('nav')
      }
      else {
        navRef.current.classList.remove('nav-white')
      }
    })
   return() => window.removeEventListener('scroll', scroll)
  }, [navRef])

  

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-left" ref={leftRef}>
        <RouterLink exact to={'/'} className="nav-welcome">
          <img src={logo} alt="" className="logo" />
          <h3>Princeton University</h3>
        </RouterLink>
      </div>
      <ul className={`nav-ul ${barOn ? "nav-ul-show" : ""}`} >
        <li>
          <RouterLink to={'/'} className={`nav-link ${location.pathname === '/' ? 'active-class' : ''}`}>Home</RouterLink>
        </li>
        <li>
          {/* react-scroll */}
          <ScrollLink activeClass="active-class" to="schools" spy={true} smooth={true} offset={-130} duration={500} className="nav-link">Schools</ScrollLink>
        </li>
        <li>
          <RouterLink to={'/mylibrary'} className={`nav-link ${location.pathname === '/mylibrary' ? 'active-class' : ''}`}>myLibrary</RouterLink>
        </li>
        <li>
          <RouterLink to={'/eregistrar'} className={`nav-link ${location.pathname === '/eregistrar' ? 'active-class' : ''}`}>E-registrar</RouterLink>
        </li>
        <li>
          <RouterLink to={'/elearning'} className={`nav-link ${location.pathname === '/elearning' ? 'active-class' : ''}`}>E-learning</RouterLink>
        </li>
        <li>
          {/* react-scroll */}
          <p className="nav-link">Quick links</p>
        </li>
        <li>
          <RouterLink className="nav-link">Portals</RouterLink>
        </li>
        <button className="contact-btn">
          <span>Contact us</span>
          <img src={contact_icon} alt="" />
        </button>
      </ul>
      <form className="nav-form">
        <input type="search" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        <button>
          <FaSearch />
        </button>
      </form>

      <div className="nav-form-small" ref={rightRef}>
        {showSearchBar && !barOn ? (
          <form className="form-small" onBlur={() => setShowSearchBar(false)}>
            <div className="input-container">
              <input type="search" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
              <button>
                <FaSearch />
                <FaXmark
                  className="x"
                  onClick={() => setShowSearchBar(false)}
                />
              </button>
            </div>
          </form>
        ) : (
          <FaSearch
            className="searchalt"
            onClick={() => setShowSearchBar(true)}
          />
        )}
      </div>

      <div className="bar-icons">
        {barOn ? <FaXmark onClick={() => setBarOn(false)}/> : <FaBars onClick={() => setBarOn(true)} />}
        
      </div>
    </nav>
  );
};

export default Navbar;
