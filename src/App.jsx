import Navbar from "./components/Navbar";
import CenterImg from "./components/CenterImg";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Biography from "./components/Biography";
import LightButton from "./components/LightButton";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [lightMode, setLightMode] = useState("light");
  return (
    <div className={lightMode}>
      <Navbar lightMode={lightMode}/>
      <LightButton lightMode={lightMode} setLightMode={setLightMode} />
      <div className="bg-white dark:bg-black min-h-screen duration-150">
        <Routes>
          <Route path="/" element={<CenterImg title="Nick Yozov" />} />
          <Route path="/projects" element={<Projects title="Projects" />} />
          <Route path="/contact" element={<Contact title="Contact" />} />
          <Route path="/bio" element={<Biography title="Biography" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
