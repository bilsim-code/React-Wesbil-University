import { Link, useParams } from 'react-router-dom'
import './Schools.css'

const Schools = () => {
  const {id} = useParams()
  return (
    <div className='schools' id='schools'>
      <h2>Join Our Schools to See What We Offer</h2>
      <div className="school-buttons">
        <Link to={'/sob'}><button>School of Business</button></Link>
        <Link to={'/tech'}><button>School of Technology</button></Link>
        <Link to={'/med'}><button>School of Medicine</button></Link>
        <Link to={'/mathsStats'}><button>School of Mathematics and Statistics</button></Link>
        <Link to={'/edu'}><button>School of Education, Arts & Sciences</button></Link>
      </div>
    </div>
  )
}

export default Schools