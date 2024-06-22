import { Link } from 'react-router-dom'
import './Schools.css'

const Schools = () => {
  return (
    <div className='schools'>
      <h2>Join Our Schools to See What We Offer</h2>
      <div className="school-buttons">
        <Link to={'/school/business'}><button>School of Business</button></Link>
        <Link to={'/school/technology'}><button>School of Technology</button></Link>
        <Link to={'/school/medicine'}><button>School of Medicine</button></Link>
        <Link to={'/school/maths'}><button>School of Mathematics and Statistics</button></Link>
        <Link to={'/school/education'}><button>School of Education, Arts & Sciences</button></Link>
      </div>
    </div>
  )
}

export default Schools