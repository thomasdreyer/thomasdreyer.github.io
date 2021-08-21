import { useState, useRef } from 'react';
import './App.css';
import Footer from './Footer';
import Content from './Content';
import LightDarkSwitch from './LightDarkSwitch';

export default function App() {
  const [lightMode, setLightMode] = useState(true);
  const workRef = useRef(null);
  const storyRef = useRef(null);

  return (
    <div className={lightMode === true ? 'AppLight' : 'AppDark'}>
      <div className="header">

        <span className="navButton" onClick={() => workRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>My work</span>
        <span className="navButton" onClick={() => storyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>My story</span>
        <LightDarkSwitch lightMode={lightMode} setLightMode={setLightMode} />

      </div>
      <Content workRef={workRef} storyRef={storyRef}></Content>
      <Footer />
    </div>
  );
}