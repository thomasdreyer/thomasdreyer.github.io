import { FaWhatsapp, FaSkype, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";

export default function MyStory() {
  return (
    <div className="details">
    <p> Hello, I'm Thomas, a self-taught full-stack engineer and mobile applications developer
       based in the vibrant city of Johannesburg, South Africa.</p>

<p>With a rich experience spanning 12 years, I am a self-taught software engineer passionate about building 
both frontend and backend software applications.</p>

<p>I find joy in solving problems through code and derive immense satisfaction from bringing new software products to life.</p>

<p>My journey in software development began with web-based applications using HTML and JavaScript.
 Along this path of self-discovery, I delved into structuring and building web applications,
  captivated by the idea of creating tangible solutions. This led me to venture into mobile application development,
   where I've spent the last 7 years contributing to a diverse array of projects,
    including restaurant apps, service platforms, sports applications, and internal business tools.</p>

<p>My enthusiasm for entrepreneurship is deeply rooted, and my keen interest in computers and software
 extends to exploring how processes can be automated.</p>

<p>My passion for software development is matched only by my commitment to producing high-quality work.</p>

<h3>My Expertise:</h3>
<ul>
<li>Responsive Design:
 I specialize in creating fluid and adaptive user interfaces that seamlessly scale across a variety of devices,
  ensuring an optimal user experience.</li>
<li>Performance Optimization:
 I thrive on enhancing code efficiency and architecture to deliver high-performance applications that exceed expectations.</li>
<li>Scalability Solutions:
 My skills extend to designing scalable solutions that effortlessly accommodate growth, making your applications future-ready.</li>
<li>Reliability:
 I pride myself on developing robust and reliable software applications, instilling confidence in users and stakeholders alike.</li>
<li>Adaptability:
 Constantly staying at the forefront of technological advancements, I embrace new tools and methodologies to stay ahead of the curve.
Technological Stack: Proficient in JavaScript, TypeScript, Kotlin, Swift, React Native, and DevOps,
 I bring a comprehensive skill set to every project.</li>

</ul>

<h3>Connect with Me:</h3>
<p>For exciting work opportunities or insightful consultations, I invite you to reach out.
 Let's collaborate and bring your digital ideas to life!</p>


      <div className="divRow">
        <IconContext.Provider value={{ color: "lightblue", size: 55, className: "icons" }}>

          <FaWhatsapp onClick={() => window.open('https://wa.me/0027606782623')} />

          <FaSkype onClick={() => window.open('skype:tdreyer62?chat')} />

          
        </IconContext.Provider>

      </div>


    </div>);
}