import './Slider.css'
import PropTypes from 'prop-types'
import princeton1 from '../../assets/princeton2.jpg'
import princeton2 from  '../../assets/princeton cs.jpg'
import princeton3 from  '../../assets/princeton3.jpg'
import princeton4 from  '../../assets/hero.png'
import { useEffect } from 'react'


const Slider = ({index, setIndex}) => {

  useEffect(() => {
   let setInt = setInterval(() => {
    setIndex(prevIndex =>{ 
      return prevIndex < 3 ? prevIndex += 1: 0})
   }, 3000)

    return()=> clearInterval(setInt)
  }, [setIndex])


  if(index === 0) {
    return(
        <img src={princeton1} alt="" className='
        imgSlider' loading='lazy'/>
    )
  }
  else if(index === 1) {
    return(
        <img src={princeton2} alt="" className='
        imgSlider' loading='lazy'/>
    )
  }
  else if(index === 2) {
    return(
        <img src={princeton3} alt="" className='
        imgSlider' loading='lazy'/>
    )
  }
  else if(index === 3) {
    return(
        <img src={princeton4} alt="" className='
        imgSlider' loading='lazy'/>
    )
  }

}

Slider.propTypes = {
    index: PropTypes.number,
    setIndex: PropTypes.func
}

export default Slider