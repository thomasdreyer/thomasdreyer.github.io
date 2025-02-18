import React from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function MyStory() {
  return (
    <div className="divColumn">
    <div className="details">
      <h1>Hello, I'm Thomas</h1>
      <p>
        I'm a self-taught Full-Stack Engineer, Mobile Applications Developer,
        and Entrepreneur based in the vibrant city of Johannesburg, South Africa.
      </p>
      <p>
        With over 15 years of experience in crafting seamless, scalable,
        and high-performance digital solutions, my journey began with
        building web applications using HTML and JavaScript.
        Over the last 12 years, I've expanded my expertise into mobile app
          development—working on projects ranging from restaurant apps
          and service platforms to sports applications and internal business tools.
      </p>
      <p>
        I thrive on solving complex problems through innovative code and
          continuous learning. My entrepreneurial spirit drives me to
          explore and implement creative ways to automate processes
          and optimize performance, ensuring that every solution is
          not only technically robust but also aligned with business goals.
      </p>

      <h3>My Expertise</h3>
      <ul>
        <li>
          <strong>Responsive Design:</strong> Crafting adaptive and fluid
          user interfaces that ensure a seamless experience across all devices.
        </li>
        <li>
          <strong>Performance Optimization:</strong> Enhancing code efficiency
          and architecture to deliver lightning-fast, high-performance applications.
        </li>
        <li>
          <strong>Scalability Solutions:</strong> Designing systems that grow
          with your business, keeping your applications future-ready.
        </li>
        <li>
          <strong>Reliability:</strong> Developing robust, dependable
          software that instills confidence in both users and stakeholders.
        </li>
        <li>
          <strong>Adaptability:</strong> Embracing new tools and
          methodologies to stay ahead in a rapidly evolving tech landscape.
        </li>
      </ul>

      <p>
        <strong>Technological Stack:</strong> JavaScript, TypeScript,
        Kotlin, Swift, React Native, and DevOps.
      </p>

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
