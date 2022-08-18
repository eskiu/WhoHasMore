import './App.scss';
import Start from './Start';
import Navbar from './Navbar';
import FlagContainer from './FlagContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FunctionProvider from './context/FunctionContext'

function App() {

  const [isDark, setIsDark] = useState(true);

  const handleDarkMode = () => { setIsDark(!isDark) }

  return (
    <div className={isDark ? "dark-mode-bckg dark-mode-text" : "light-mode-bckg light-mode-text"}>
      <FunctionProvider>
        <BrowserRouter>
          <Navbar isDark={isDark} handleDarkMode={handleDarkMode} />
          <Routes>
            <Route path="/" element={<Start isDark={isDark} />} />
            <Route path="/game/:region" element={<FlagContainer isDark={isDark} />} />
          </Routes>
        </BrowserRouter>
      </FunctionProvider>
    </div>
  );
}

export default App;