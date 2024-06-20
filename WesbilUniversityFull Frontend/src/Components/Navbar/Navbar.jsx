import './Navbar.css'
//import {Link} from 'react-scroll'
import {Link} from 'react-router-dom'
import logo from '../../assets/princeton badge.jpg'
const Navbar = () => {
  return (
    <nav className="nav">
        <img src={logo} alt="" />
        <ul>
            <li><Link>Home</Link></li>
            <li><Link>myLibrary</Link></li>
            <li><Link>Schools</Link></li>
            <li><Link>Schools</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar