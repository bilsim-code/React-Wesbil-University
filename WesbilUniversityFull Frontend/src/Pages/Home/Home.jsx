import Hero from '../../Components/Hero/Hero'
import Schools from '../../Components/Schools/Schools'
import Views from '../../Components/ViewsSec/Views'
import './Home.css'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'

const Home = () => {

  return (
    <div className='home'>
        <Hero/>
        <Schools/>
        <div className="views-container">
          <h1>Cinematic Views</h1>
          <Views/>
          <div className="arrows">
            <FaArrowCircleLeft className="left-arrow"/>
            <FaArrowCircleRight className='right-arrow'/>
          </div>
          <div className="dots">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        
    </div>
  )
}

export default Home