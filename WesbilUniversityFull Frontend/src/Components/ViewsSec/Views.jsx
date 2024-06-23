import './Views.css'
import image1 from '../../assets/princeton cs.jpg'
import image2 from '../../assets/princeton2.jpg'
import image3 from '../../assets/hero.png'
import image4 from '../../assets/princeton3.jpg'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

const Views = () => {
    const {imageCount} = useContext(AppContext)
    if(imageCount === 0) {
        return (
            <img src={image1} className='carousel-img' />
        )
    }
    else if(imageCount === 1) {
        return (
            <img src={image2} className='carousel-img' />
        )
    }
    else if(imageCount === 2) {
        return (
            <img src={image3} className='carousel-img' />
        )
    }
    else if(imageCount === 3) {
        return(
            <img src={image4} className='carousel-img' />
        )
    }

}

export default Views