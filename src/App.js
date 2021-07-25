import { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
import './App.css';
import Footer from './Footer';
import Content from './Content';
import LightDarkSwitch from './LightDarkSwitch';

export default function App() {
  const workRef = useRef(null);
  const storyRef = useRef(null);
  const [lightMode, setLightMode] = useState(true);
  return (
    <div className={lightMode === true ? 'AppLight' : 'AppDark'}>
      <div className="header">
        <div className="divRow">
        <IconContext.Provider value={{
        color: "blue",
        size: 35,
        className: "icons"
      }}>
        <FaGithub onClick={()=> window.open('https://github.com/thomasdreyer')} />
      </IconContext.Provider>
      <IconContext.Provider value={{
        color: "blue",
        size: 35,
        className: "icons"
      }}>
        
        <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/thomas-dreyer')} />
      </IconContext.Provider>
          <span className="navButton" onClick={() => workRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>My work</span>
          <span className="navButton" onClick={() => storyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>My story</span>
          <LightDarkSwitch lightMode={lightMode} setLightMode={setLightMode}/>
        </div>
      </div>
      <Content workRef={workRef} storyRef={storyRef}></Content>
      <Footer />
    </div>
  );
}