import './Testimonials.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import icon1 from '../../assets/program-icon-1.png'
import icon2 from '../../assets/program-icon-2.png'
import icon3 from '../../assets/program-icon-3.png'

const Testimonials = () => {
  return (
    <div className='test-cont'>

        <h2>Our Programs</h2>
        <div className='testimonials'>
        <div className="test">
            <img src={program1} alt="" />
            <div className="hover-cont">
                <img src={icon1} alt="" />
                <p>Undergraduate Degree</p>
            </div>
        </div>
        <div className="test">
            <img src={program2} alt="" />
            <div className="hover-cont">
                <img src={icon2} alt="" />
                <p>Masters Program</p>
            </div>
        </div>
        <div className="test">
            <img src={program3} alt="" />
            <div className="hover-cont">
                <img src={icon3} alt="" />
                <p>Doctorate Program</p>
            </div>
        </div>
    </div> 
    </div>

  )
}

export default Testimonials