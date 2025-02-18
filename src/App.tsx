/**
 * Main component for the application.
 * Renders the header, content, and footer.
 * Allows switching between light and dark mode.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 */
import { useState, useRef } from 'react';
import './App.css';
import Footer from './Footer';
import Content from './Content';
import LightDarkSwitch from './LightDarkSwitch';
import me from './images/me.png';
import { FaFileAlt } from "react-icons/fa";

export default function App() {
  const [lightMode, setLightMode] = useState(true);
  const workRef: any  = useRef(null);
  const storyRef : any  = useRef(null);


  return (
    <div className={lightMode === true ? 'AppLight' : 'AppDark'}>
      <div className="header">
        <img src={me} className="image" alt="Thomas Dreyer" onClick={() => window.open('https://docs.google.com/document/d/1WLwzWn_-NsS7mZZIwO4rq5sIEBpnzObbSwE53-4taVU/edit?usp=sharing')} />
        <span className="navButton" onClick={() => window.open('https://docs.google.com/document/d/1WLwzWn_-NsS7mZZIwO4rq5sIEBpnzObbSwE53-4taVU/edit?usp=sharing')} style={{ cursor: "pointer" }}><FaFileAlt />My Resume</span>
        <span className="navButton" onClick={() => workRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>My work</span>
        <span className="navButton" onClick={() => storyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>My story</span>
       
        <LightDarkSwitch lightMode={lightMode} setLightMode={setLightMode} />
      </div>
    
      <Content workRef={workRef} storyRef={storyRef}></Content>
   
      <Footer />
    </div>
  );
}