import './App.css';
import Start from './Start';
import Navbar from './Navbar';
import FlagContainer from './FlagContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const [isDark, setIsDark] = useState(true);

  const handleDarkMode = () => { setIsDark(!isDark) }

  return (
    <div className={isDark ? "dark-mode-bckg dark-mode-text" : "light-mode-bckg light-mode-text"}>
      <BrowserRouter>
        <Navbar isDark={isDark} handleDarkMode={handleDarkMode} />
        <Routes>
          <Route path="/" element={<Start isDark={isDark} />} />
          <Route path="/game" element={<FlagContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;