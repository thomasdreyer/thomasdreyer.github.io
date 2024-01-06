import { FaGithub, FaLinkedin, FaJsfiddle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function Footer() {
  return (<div className="footer">
    <section>
      <IconContext.Provider value={{
        color: "azure",
        size: 35,
        className: "icons"
      }}>
       
        <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/thomas-dreyer')} />
        <FaXTwitter onClick={() => window.open('https://twitter.com/fsdevCOZA')} />
      </IconContext.Provider>
    </section>

    <span>Thomas Dreyer &copy; {new Date().getFullYear()}</span>
  </div>);
}