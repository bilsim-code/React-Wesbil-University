import "./Footer.css";
import footer_logo from "../../assets/princeton badge.png";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaCircleChevronUp,
} from "react-icons/fa6";

const Footer = () => {
  const location = useLocation()
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <span>Making World Leaders</span>
        </div>
        <div className="footer-schools">
          <h2>Schools</h2>
          <Link to="/sob" className={`footer-link ${location.pathname === '/sob' ? 'active-class-footer' : ''}`}>
            School of Business
          </Link>
          <Link to="/tech" className={`footer-link ${location.pathname === '/tech' ? 'active-class-footer' : ''}`}>
            School of Technology
          </Link>
          <Link to="/med" className={`footer-link ${location.pathname === '/med' ? 'active-class-footer' : ''}`}>
            School of medicine
          </Link>
          <Link to="/mathsStats" className={`footer-link ${location.pathname === '/mathsStats' ? 'active-class-footer' : ''}`}>
            School of Mathematics and Statistics
          </Link>
          <Link to="/edu" className={`footer-link ${location.pathname === '/edu' ? 'active-class-footer' : ''}`}>
            School of Education, Arts & Social Sciences
          </Link>
        </div>
        <div className="footer-campuses">
          <h2>Campuses</h2>
          <Link to="/mainCampus" className={`footer-link ${location.pathname === '/mainCampus' ? 'active-class-footer' : ''}`}>
            Main Campus
          </Link>
          <Link to="/altCampus" className={`footer-link ${location.pathname === '/altCampus' ? 'active-class-footer' : ''}`}>
            Alt Campus
          </Link>
        </div>
        <div className="footer-quick-links">
          <h2>Quick Links</h2>
          <Link className="footer-link">Virtual Campus</Link>
          <Link className="footer-link">Student Portal</Link>
          <Link className="footer-link">Staff Portal</Link>
          <Link className="footer-link">Student Email Activation Guide</Link>
          <Link className="footer-link">Tenders</Link>
          <Link className="footer-link">Careers</Link>
        </div>
      </div>
      <footer>
        <div className="footer-left">
          <p>
            &copy;Copyright All Rights Reserved {new Date().getFullYear()}
            Wesbil University
          </p>
        </div>
        <div className="footer-right">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaEnvelope />
          </a>
        </div>
        <a href="#" className="go-to-top">
          <FaCircleChevronUp />
        </a>
      </footer>
    </>
  );
};

export default Footer;
