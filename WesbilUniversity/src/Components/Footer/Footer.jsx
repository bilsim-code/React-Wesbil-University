import './Footer.css'
import {FaFacebook, FaLinkedin,FaInstagram, FaEnvelope} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import badge from '../../assets/princeton badge.png'
const Footer = () => {
  return (
    <>
    <div className="above-footer">
      <div className="logo">
        <img src={badge} alt="logo" />
        <p>Making World Leaders</p>
      </div>
      <div className="footer-schools">
        <h2>Schools</h2>
        <p><a href="#">School of Business</a></p>
        <p><a href="#">School of Technology</a></p>
        <p><a href="#">School of Education, Arts & Social Science</a></p>
        <p><a href="#">School of Statistics and Mathematics</a></p>
        <p><a href="#">School of Medicine</a></p>
      </div>
      <div className="footer-campuses">
        <h2>Campuses</h2>
        <p><a href="#">Town Campus - Nairobi CBD</a></p>
        <p><a href="#">Western Campus - Kisumu</a></p>
        <p><a href="#">Kitengela Campus - Kitengela</a></p>
      </div>
      <div className="footer-links">
        <h2>Quick Links</h2>
        <p><a href="#">Virtual Campus</a></p>
        <p><a href="#">Student Portal</a></p>
        <p><a href="#">Lecturer Login</a></p>
        <p><a href="#">Staff Login</a></p>
        <p><a href="#">Students Email Activation Guide</a></p>
        <p className='anime'><a href="#">Tenders</a><div className="animation"></div></p>
      </div>
    </div>
     <footer>
        <span className='year'> &copy;Copyright All Rights reserved {new Date().getFullYear()} Wesbil University</span>
        <span className='icons'>
          <a href="mailto: 'bildadsimiyu6@gmail.com'"></a><FaEnvelope />
          <FaFacebook/>
          <FaInstagram/>
          <FaLinkedin/>
          <FaXTwitter/>
        </span>
    </footer>
    </>
   
  )
}

export default Footer