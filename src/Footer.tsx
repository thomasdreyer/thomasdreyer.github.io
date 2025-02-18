import { FaGithub, FaLinkedin, FaJsfiddle } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
  return (<div className="footer">
    <section>
     <span><a href="privacypolicy.html">Privacy Policy</a></span>
     </section>
     <section>
     <span>Thomas Dreyer &copy; {new Date().getFullYear()}</span>
     </section>
   
  </div>);
}