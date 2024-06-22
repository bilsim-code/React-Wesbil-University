import './Schools.css'

const Schools = () => {
  return (
    <div className='schools' id='schoolsid'>
        <h1>Join Our Schools to pursue your passions</h1>
        <div className="school-buttons">
            <a href="#"><button>School of Technology</button>
            <span className='buttonbg'></span>
            </a>
            <a href="#"><button>School of Business</button>
            <span className='buttonbg'></span>
            </a>
            <a href="#"><button>School of Education, Arts and Social Sciences</button>
            <span className='buttonbg'></span>
            </a>
            <a href="#"><button>School of Statistics and Mathematics</button>
            <span className='buttonbg'></span>
            </a>
            <a href="#"><button>School of Medicine</button>
            <span className='buttonbg'></span>
            </a>
        </div>
    </div>
  )
}

export default Schools