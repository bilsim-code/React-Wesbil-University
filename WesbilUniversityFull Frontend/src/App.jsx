import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Library from "./Pages/MyLibrary/Library";
import ELearning from "./Pages/ELearning/ELearning";
import ERegistrar from "./Pages/ERegistrar/ERegistrar";
import Portals from "./Pages/Portals/Portals";
import Business from './Pages/Business/Business'
import Technology from './Pages/Technology/Technology'
import Medicine from './Pages/Medicine/Medicine'
import Maths_Stats from "./Pages/MathsNStats/Maths_Stats";
import Education from "./Pages/Education/Education";
import MainCampus from './Pages/Main Campus/MainCampus'
import AltCampus from './Pages/AltCampus/AltCampus'
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import Footer from "./Components/Footer/Footer";


const App = () => {
  const { showSearchBar, barOn, leftRef, rightRef } = useContext(AppContext);
  //const mainContent = useRef()

  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    if (barOn /* || showSearchBar */) {
      mainContent.classList.add("no-pointer-events");
      mainContent.classList.add("blurred");
      leftRef.current.classList.add("no-pointer-events");
      rightRef.current.classList.add("no-pointer-events");
    } else {
      mainContent.classList.remove("no-pointer-events");
      mainContent.classList.remove("blurred");
      leftRef.current.classList.remove("no-pointer-events");
      rightRef.current.classList.remove("no-pointer-events");
    }
    
  }, [barOn, showSearchBar, leftRef, rightRef]);

  return (
    <div>
      <Navbar />
      
      <div className="main-content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mylibrary" element={<Library />} />
          <Route path="/elearning" element={<ELearning />} />
          <Route path="/eregistrar" element={<ERegistrar />} /> 
          <Route path="/portal/:id" element={<Portals />} />
          <Route path="/sob" element={<Business/>} />
          <Route path="/tech" element={<Technology/>} />
          <Route path="/med" element={<Medicine/>} />
          <Route path="/mathsStats" element={<Maths_Stats/>} />
          <Route path="/edu" element={<Education/>} />
          <Route path="/mainCampus" element={<MainCampus/>} />
          <Route path="/altCampus" element={<AltCampus/>} />
        </Routes>
        <Footer/>
      </div>

    </div>
  );
};

export default App;