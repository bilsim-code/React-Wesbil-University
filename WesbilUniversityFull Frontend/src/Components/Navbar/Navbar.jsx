import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
/* How you import both link from react-scroll and react-router-dom:
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; 

<li>
    <RouterLink to="/contact">Contact</RouterLink>
</li>
<li>
    <ScrollLink to="section1" smooth={true} duration={500}>Section 1</ScrollLink>
</li>
*/

import logo from "../../assets/princeton badge.jpg";
import contact_icon from "../../assets/contact.png";
import { FaSearch, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../Context/AppContext";

const Navbar = () => {
  const { barOn, setBarOn } = useContext(AppContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    let body = document.body;
    if (barOn) {
      body.classList.add("no-pointer-events");
      body.style.transition = "background 2s";
      //navRef.style.pointerEvents='visible'
      //navRef.classList.add('bodyBarOn')
    } else {
      body.classList.remove("no-pointer-events");
    }
  }, [barOn]);

  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLink className="nav-welcome">
          <img src={logo} alt="" className="logo" />
          <h3>Princeton University</h3>
        </NavLink>
      </div>
      <ul className={`nav-ul ${barOn ? "nav-ul-show" : ""}`} ref={navRef}>
        <li>
          <NavLink className="nav-link">Home</NavLink>
        </li>
        <li>
          {/* react-scroll */}
          <Link className="nav-link">Schools</Link>
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
          {/* react-scroll */}
          <Link className="nav-link">Quick links</Link>
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

      <div className="nav-form-small">
        {showSearchBar && !barOn ? (
          <form className="form-small" onBlur={() => setShowSearchBar(false)}>
            <div className="input-container">
              <input type="search" placeholder="Search" />
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

      {/*   <FaSearch className="searchalt" onClick={() => setShowSearchBar(true)}/>
       */}

      <div className="bar-icons">
        <FaBars onClick={() => setBarOn(!barOn)} />
      </div>
    </nav>
  );
};

export default Navbar;
