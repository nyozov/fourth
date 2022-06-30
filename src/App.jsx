import Navbar from "./components/Navbar";
import CenterImg from "./components/CenterImg";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className=''>
      <Routes>
        <Route path='/' element={<CenterImg />}/>
        <Route path='/projects' element={<Projects />}/>

      </Routes>
      </div>
    </div>
  );
}

export default App;
