
import { useState } from "react"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Schools from "./Components/Schools/Schools"
import Slider from "./Components/ViewsSlider/Slider"
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import Footer from "./Components/Footer/Footer"
import Alumni from "./Components/Alumni/Alumni"
import Join from "./Components/Join/Join"
import Testimonials from "./Components/Testimonials/Testimonials"
const App = () => {
  const [index, setIndex] = useState(3);
  function handleRight() {
      setIndex(prevIndex => {
          return prevIndex < 3 ? prevIndex += 1 : 0;
      })
  }

  function handleLeft() {
      setIndex(prevIndex => prevIndex > 0 ? prevIndex -= 1 : 3)  
  }
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Schools/>
      <div className="slider">
        <h1>Cinematic Views</h1> 
      <Slider index={index} setIndex={setIndex}/>
      
      <div className="slider-icons">
        <FaChevronLeft className='chevronLeft' onClick={handleLeft}/>
        <FaChevronRight className='chevronRight'onClick={handleRight}/>
    </div>
    <ul className="ul dots">
      <span onClick={() => setIndex(0)} className={index === 0 ? 'dot active' : 'dot'}></span>
      <span onClick={() => setIndex(1)} className={index === 1 ? 'dot active' : 'dot'}></span>
      <span onClick={() => setIndex(2)} className={index === 2 ? 'dot active' : 'dot'}></span>
      <span onClick={() => setIndex(3)} className={index === 3 ? 'dot active' : 'dot'}></span>
    </ul>
      </div>
      <Testimonials/>
      <Alumni/>
      <Join/>
      <Footer/>
    
    </div>
  )
}

export default App