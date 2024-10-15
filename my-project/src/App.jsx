import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <>
   
      <div className={`h-[100vh] w-full ${darkMode? 'bg-purple-950': 'bg-purple-400'} `}>
        <BrowserRouter>
        <Navbar darkMode={darkMode} toggleMode={toggleMode}  />
        <Routes>
          <Route path="/" element={<Body darkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ToastContainer/>
        </BrowserRouter>
      </div>
     
     
    </>
  );
}

export default App;

