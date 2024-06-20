import "./Navbar.css";
import { NavLink } from "react-router-dom";
//download react scroll
//import {Link} from 'react-scroll'

import logo from "../../assets/princeton badge.jpg";
import contact_icon from "../../assets/contact.png";
import { FaSearch, FaBars } from "react-icons/fa";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../Context/AppContext";

const Navbar = () => {
  const {barOn, setBarOn} = useContext(AppContext);
  const navRef = useRef()

  useEffect(() => {
    let body = document.body;
    if(barOn) {
      body.classList.add('bodyBarOn')
      body.style.transition = 'background 2s';
      //navRef.style.pointerEvents='visible'
      //navRef.classList.add('bodyBarOn')
    }
    else {
      body.classList.remove('bodyBarOn')
    }
  }, [barOn])

  return (
    <nav className="nav" >
      <div className="nav-left">
        <NavLink className="nav-welcome">
          <img src={logo} alt="" className="logo" />
        </NavLink>
      </div>
      <ul className={`nav-ul ${barOn ? 'nav-ul-show' : ''}`}ref={navRef}>
        <li>
          <NavLink className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink className="nav-link">Schools</NavLink>
        </li>
        <li>
          <NavLink className="nav-link">myLibrary</NavLink>
        </li>
        <li>
          <NavLink className="nav-link">E-registrar</NavLink>
        </li>
        <li>
          <NavLink className="nav-link">E-learning</NavLink>
        </li>
        <li>
          <NavLink className="nav-link">Quick links</NavLink>
        </li>
        <li>
          <NavLink className="nav-link">Portals</NavLink>
        </li>
        <button className="contact-btn">
          <span>Contact us</span>
          <img src={contact_icon} alt="" />
        </button>
      </ul>
      <form className="nav-form">
        <input type="search" placeholder="Search" />
        <button>
          <FaSearch />
        </button>
      </form>
      <div className="bar-icons">
        <FaBars  onClick={() => setBarOn(!barOn)}/>
      </div>
    </nav>
  );
};

export default Navbar;
