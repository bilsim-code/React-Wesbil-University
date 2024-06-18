import './Alumni.css'
import mithcell from '../../assets/princeton mitchell.jpg'
import jeff from '../../assets/princeton alumni jeff.jpg'; 
import {FaFacebook, FaInstagram, FaLinkedin, } from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'

const Alumni = () => {
  return (
    <div className='alumni'>
        <h1>Some of our notable Alumni</h1>
        <div className="alumni-cards">
            <div className="card">
                <img src={jeff} alt="jeff" title='jeff bezos' loading='lazy'/>
                <h2>Jeff Bezos</h2>
                <div className="card-text">One of the richest people in the world for over a decade is a proud alumnus of the School of Engineering and Technology.Jeff Bezos is the CEO and founder of Amazon.</div>
                <div className="social-icons">
                    <FaInstagram/>
                    <FaFacebook/>
                    <FaXTwitter/>
                    <FaLinkedin/>
                </div>
            </div>
            <div className="card">
                <img src={mithcell} alt="mitchell" title='Mitchell Obama' loading='lazy'/>
                <h2>Mitchell Obama</h2>
                <div className="card-text">Mitchell is the first black first lady of the United States of America and an alumnus of the School of Law.She is an inspiration to many young girls to chase their dreams.</div>
                <div className="social-icons">
                    <FaInstagram/>
                    <FaFacebook/>
                    <FaXTwitter/>
                    <FaLinkedin/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Alumni