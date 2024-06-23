import { useContext, useEffect } from 'react'
import Hero from '../../Components/Hero/Hero'
import Schools from '../../Components/Schools/Schools'
import Views from '../../Components/ViewsSec/Views'
import './Home.css'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import { AppContext } from '../../Context/AppContext'

const Home = () => {
  const {imageCount, setImageCount} = useContext(AppContext)

  useEffect(() => {
    let count = setInterval(() => {
      setImageCount(prevCount => prevCount < 3 ? prevCount += 1 : 0)
    }, 5000)

    return() => clearInterval(count)
  }, [setImageCount])

  function handleRight() {
    setImageCount(prevCount => prevCount < 3 ? prevCount += 1 : 0)
  }

  function handleLeft() {
    setImageCount(prevCount => prevCount > 0 ? prevCount -= 1 : 3)
  }
  return (
    <div className='home'>
        <Hero/>
        <Schools/>
        <div className="views-container">
          <h1>Cinematic Views</h1>
          <Views/>
          <div className="arrows">
            <FaArrowCircleRight className='right-arrow' onClick={handleRight}/>
            <FaArrowCircleLeft className="left-arrow" onClick={handleLeft}/>
          </div>
          <div className="dots">
            <ul>
              <li className={imageCount === 0 ? 'active' : ''} onClick={() => setImageCount(0)}></li>
              <li className={imageCount === 1 ? 'active' : ''} onClick={() => setImageCount(1)}></li>
              <li className={imageCount === 2? 'active' : ''} onClick={() => setImageCount(2)}></li>
              <li className={imageCount === 3 ? 'active' : ''} onClick={() => setImageCount(3)}> </li>
            </ul>
          </div>
        </div>
        
        
    </div>
  )
}

export default Home