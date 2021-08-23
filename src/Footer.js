import { FaGithub, FaLinkedin, FaTwitterSquare, FaJsfiddle } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
  return (<div className="footer">
    <section>
      <IconContext.Provider value={{
        color: "azure",
        size: 35,
        className: "icons"
      }}>
        <FaJsfiddle onClick={() => window.open('https://jsfiddle.net/user/fsdevCOZA/fiddles/')} />
        <FaGithub onClick={() => window.open('https://github.com/thomasdreyer')} />
        <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/thomas-dreyer')} />
        <FaTwitterSquare onClick={() => window.open('https://twitter.com/fsdevCOZA')} />
      </IconContext.Provider>
    </section>

    <span>Thomas Dreyer &copy; 2021</span>
  </div>);
}