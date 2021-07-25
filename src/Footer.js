import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
    return (<div className="footer">
      <IconContext.Provider value={{
        color: "blue",
        size: 35,
        className: "icons"
      }}>
        <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/thomas-dreyer')} />
        <FaTwitterSquare onClick={() => window.open('https://twitter.com/fsdevCOZA')} />
      </IconContext.Provider>
      <span>Thomas Dreyer &copy; 2021</span>
    </div>);
  }