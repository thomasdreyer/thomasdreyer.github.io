import React, { useEffect, useState } from "react";
import { FaGithub, FaFileAlt, FaJsfiddle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { portfolio_data } from "./portfolio_data";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Define the Project interface
interface Project {
  name: string;
  link: string;
  images: string[];
  summary: string;
}

export default function MyWork() {
  const [repoInfo, setRepoInfo] = useState(null);

  useEffect(() => {
    fetchRepoData("thomasdreyer", "EatsEase", setRepoInfo);
  }, []);
  // Function to Fetch GitHub Repository Information
  const fetchRepoData = async (username: string, repoName: string, setRepoInfo: React.Dispatch<React.SetStateAction<any>>) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch repository: ${response.status} ${response.statusText}`);
      }

      const repoData = await response.json();
      setRepoInfo(repoData);
    } catch (error) {
      console.error("Error fetching repository information:", error);
    }
  };

  return (
    <div className="divColumn">
    
    <div className="details">
      <h2>My Work</h2>
      <p>
      I develop software to create dynamic and interactive digital experiences.
      My expertise spans multiple programming languages, 
      including JavaScript, TypeScript, Kotlin, and Swift, enabling me
      to build high-performance, scalable applications across various platforms.
      I focus on crafting seamless user experiences and efficient
      system architectures.
      </p>
    </div>
    

      <div className="details"  style={{margin:'10px'}}>
        <IconContext.Provider value={{ color: "lightblue", size: '45', className: "icons" }}>
          <FaGithub onClick={() => window.open("https://github.com/thomasdreyer")} style={{ cursor: "pointer" }} />
        <FaJsfiddle onClick={() => window.open('https://jsfiddle.net/u/fsdevCOZA/fiddles/')} style={{ cursor: "pointer" }} />
        <FaFileAlt onClick={() => window.open('https://docs.google.com/document/d/1WLwzWn_-NsS7mZZIwO4rq5sIEBpnzObbSwE53-4taVU/edit?usp=sharing')} style={{ cursor: "pointer" }} />
        </IconContext.Provider>
      </div>
    
      {portfolio_data.map((project: any, index: number) => (
        <div className="details" key={index} style={{margin:'10px'}}>
        <ul style={{alignSelf:'left'}}>
        <li><strong> {project.name}</strong></li>
        <li><strong><a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></strong> </li>
      </ul>
          <div>
          <img
            src={project.images[0]}
            alt={project.name}
            style={{ width: "100%", height: "auto", margin: 15 }}
          />
            <p>{project.summary}</p>
          </div>
         
         
        </div>
      ))}

<div className="details">
          <h3>Let's Connect</h3>
      <p>
        If you're looking for a tech partner who combines deep software
        engineering expertise with a keen entrepreneurial vision, let's
        collaborate to bring your digital ideas to life.
      </p>

      <div className="divRow">
        <IconContext.Provider value={{ color: "lightblue", size: '55', 
          className: "icons" }}>
          <FaWhatsapp
            onClick={() => window.open("https://wa.me/0027640248276")}
            style={{ cursor: "pointer" }}
          />
          <FaEnvelope
            onClick={() => window.open("mailto:tdreyer62@gmail.com")}
            style={{ cursor: "pointer" }}
          />
          <FaLinkedin
            onClick={() => window.open("https://www.linkedin.com/in/thomas-dreyer")}
            style={{ cursor: "pointer" }}
          />
          <FaXTwitter
            onClick={() => window.open("https://twitter.com/fsdevCOZA")}
            style={{ cursor: "pointer" }}
          />
        </IconContext.Provider>
      </div>
      </div>
    
    </div>
  );
}
