import Navbar from "./Components/Navbar/Navbar"
import {Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Schools from "./Pages/Schools/Schools"
import Library from './Pages/MyLibrary/Library'
import ELearning from './Pages/ELearning/ELearning'
import ERegistrar from './Pages/ERegistrar/ERegistrar'
import Portals from './Pages/Portals/Portals'
import { useContext, useEffect,  } from "react"
import { AppContext } from "./Context/AppContext"
const App = () => {
  const {showSearchBar, barOn, leftRef, rightRef} = useContext(AppContext);
  //const mainContent = useRef()

  useEffect(() => {
    const mainContent = document.querySelector('.main-content');
        if (barOn || showSearchBar) {
            mainContent.classList.add('no-pointer-events');
            mainContent.classList.add('blurred');
            leftRef.current.classList.add('no-pointer-events')
            rightRef.current.classList.add('no-pointer-events')
        } else {
            mainContent.classList.remove('no-pointer-events');
            mainContent.classList.remove('blurred');
            leftRef.current.classList.remove('no-pointer-events')
            rightRef.current.classList.remove('no-pointer-events')
        }
  }, [barOn, showSearchBar, leftRef, rightRef])

  return (
    <div>
      <Navbar/>
      <div className='main-content'>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/school/:id" element={<Schools/>} />
        <Route path="/mylibrary" element={<Library/>} />
        <Route path='/elearning' element={<ELearning/>} />
        <Route path="/eregistrar" element={<ERegistrar/>} />
        <Route path="/portal/:id" element={<Portals/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App