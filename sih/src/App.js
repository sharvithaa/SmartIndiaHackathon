import logo from './logo.svg';
import './App.css';
import Temple from './components/Temple1';
import Music from './components/music';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React,{useState} from 'react';
function App() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div>
      {showAbout ? (
        <Music/>
      ) : (
        <Temple showAbout={showAbout} setShowAbout={setShowAbout} />
      )}
    </div>
  )
}

export default App;
