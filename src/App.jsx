import Navbar from "./components/Navbar";
import CenterImg from "./components/CenterImg";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Biography from "./components/Biography"
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
   
      <Navbar />
      <div className=''>
      <Routes>
        <Route path='/' element={<CenterImg />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/bio' element={<Biography />}/>

      </Routes>

      </div>
    </div>
  );
}

export default App;
