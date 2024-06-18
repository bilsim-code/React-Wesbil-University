import './Navbar.css'
import {Link} from 'react-scroll'
import princeton_badge from '../../assets/princeton badge.jpg'
import menuIcon from '../../assets/menu-icon.png'
//import closeIcon from '../../assets/close.png'
import contactIcon from '../../assets/contact.png'
import { FaCircleXmark} from 'react-icons/fa6'
import {FaChevronUp, FaChevronDown} from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
const Navbar = () => {
  const [dropdownOn, setDropdownOn] = useState(false)
  const [showSide,setShowSide] = useState(false)
  useEffect(() => {
    let body = document.body;
    if(showSide) {
      body.classList.add('bodyBlur')
    }
    else {
      body.classList.remove('bodyBlur')
    }
   
  })

  const navRef = useRef();
  const searchRef = useRef(); 

  useEffect(() => {
   let scroll =  window.addEventListener('scroll', () => {
      if(window.scrollY > 50) {
          searchRef.current.classList.add('nav-hide')
      }
      else {
        searchRef.current.classList.add('nav-search');
        searchRef.current.classList.remove('nav-hide');
      }

      if(window.scrollY > 80) {
        navRef.current.classList.add('nav-scroll')
      }
      else {
        navRef.current.classList.remove('nav-scroll')
        navRef.current.classList.add('nav')
      }

    })
    return() =>  window.removeEventListener('scroll', scroll)
  }, [])
  return (
    <nav ref={navRef} className={`nav ${showSide ? 'navBlur' : ''}`}>
        <div className="left">
          <img src={princeton_badge} alt="princeton-logo" title='princeton-logo'/>
          <span>Welcome to Princeton</span>
        </div>
        <ul className={`nav-items ${showSide ? 'show' : ''}`}>
          <li><Link className="link">Home</Link></li>
          <li><Link className="link">myLibrary</Link></li>
          <li><Link className="link">Schools</Link></li>
          {/* update portals to include dropdowns for student portal, staff portal and guest */}
          <li className='dropdown' >
            <Link className={dropdownOn ? 'removeStyles' : 'link'}>
            <span onClick={() => setDropdownOn(!dropdownOn)}>Portals 
              {dropdownOn ? <FaChevronDown
              /> :   <FaChevronUp/>}
          
              </span> 
            </Link>
            <div className={dropdownOn ? 'drop-items' : 'drop-show'}>
              <Link className="drop-item nowrapStudent">Student Portal</Link>
              <Link className="drop-item">Staff Portal</Link>
              <Link className="drop-item guest">Guest</Link>
            </div>
            </li>
          <li>
            <button className='contact-btn'><span className='nowrap'>Contact us</span><img src={contactIcon} alt="" className='contact-icon'/></button>
          </li>
        </ul>
        <div className="nav-search" ref={searchRef}>
        <input  type="search" name="search" id="search" placeholder='Search'/>
        <button type="submit" id='btn-search'>Search</button>
        </div>
        {showSide ? <FaCircleXmark className='close-icon' onClick={() => setShowSide(false)}/> : 
          <img src={menuIcon} alt="" className='menu-icon' onClick={() => setShowSide(true)}/>
           }
       
        
    </nav>
  )
}

export default Navbar