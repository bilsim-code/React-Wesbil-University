import Hero from '../../Components/Hero/Hero'
import Schools from '../Schools/Schools'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <Schools/>
    </div>
  )
}

export default Home