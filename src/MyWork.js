import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { portfolio_data } from "./portfolio_data";

export default function MyWork() {
  const [repoInfo, setRepoInfo] = useState(null);

  useEffect(() => {
    fetchRepoData("thomasdreyer", "EatsEase", setRepoInfo);
  }, []);

  // Function to Fetch GitHub Repository Information
  const fetchRepoData = async (username, repoName, setRepoInfo) => {
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
    <div className="details">
      <h2>My Work</h2>
      <p>
        I develop software using JavaScript to create 
        dynamic and interactive web applications. 
        My expertise includes leveraging JavaScript, TypeScript, Kotlin, Swift, 
        and other technologies to build seamless, high-performance digital
         experiences.
      </p>

      {/* Display GitHub Repository Info */}
      {repoInfo && (
        <div className="repo-info">
          <h3>Featured GitHub Repo: {repoInfo.name}</h3>
          <p>{repoInfo.description}</p>
          <a href={repoInfo.html_url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      )}

      {/* Portfolio Projects */}
    
      {portfolio_data.map((project, index) => (
        <div className="divRow" key={index}>
       <ul>
              <li><strong>Name:</strong> {project.name}</li>
              <li><strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></li>
      </ul>
          <img
            src={project.images[0]}
            alt={project.name}
            style={{ width: "95%", height: "95%", margin: 15 }}
          />
          <div>
            
            <p>{project.summary}</p>
          </div>
        </div>
      ))}

      {/* GitHub Profile Link */}
      <div className="divRow">
        <IconContext.Provider value={{ color: "lightblue", size: 65, className: "icons" }}>
          <FaGithub onClick={() => window.open("https://github.com/thomasdreyer")} style={{ cursor: "pointer" }} />
        </IconContext.Provider>
      </div>
    </div>
  );
}
