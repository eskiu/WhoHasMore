import './App.scss';
import Start from './Start';
import Navbar from './Navbar';
import FlagContainer from './FlagContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FunctionProvider from './context/FunctionContext'

function App() {


  return (
    <>
      <FunctionProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/game/:region" element={<FlagContainer />} />
          </Routes>
        </BrowserRouter>
      </FunctionProvider>
    </>
  );
}

export default App;