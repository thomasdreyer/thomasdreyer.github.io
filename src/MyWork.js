import { FaGithub, FaJsfiddle  } from "react-icons/fa";
import { IconContext } from "react-icons";
import { portfolio_data } from './portfolio_data';
import GitHubRepos from './GitHubRepos';

export default function MyWork() {
  const githubUsername = 'thomasdreyer';
  const githubToken = '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';
  const githubOrganization = 'fsdev-studio';
    const getRepo = () => {
        const username = 'thomasdreyer';
    const repoName = 'EatsEase';
    
    // Fetch repository information from GitHub API
    fetch(`https://api.github.com/repos/${username}/${repoName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch repository information: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(repoInfo => {
        // Handle the repository information
        console.log('Repository Information:', repoInfo);
      })
      .catch(error => {
        console.error('Error fetching repository information:', error);
      });
        
    }
    getRepo();
    


    const portfolio = portfolio_data.map((p, i) => {

        return (
            <div className="divRow" key={i}>
                <img src={p.images[0]} alt="project description" style={{ width: '45%', height: '45%',margin:15 }} />
                <div>
                    <ul>
                        <li>Name : {p.name}</li>
                        <li>Link : {p.link}</li>
                    </ul>
                    <span>{p.summary}</span>
                </div>

            </div>
        )
    })


    return (
        <div className="details">
            <p> I develop software using JavaScript to create dynamic and interactive web applications.
               My expertise includes leveraging the power of JavaScript to enhance user experiences 
               and ensure seamless functionality. Through coding and debugging in JavaScript,
                I bring innovative solutions to life in the digital realm.  </p>
           
                <div className="divRow">
                <IconContext.Provider value={{ color: "lightblue", size: 65, className: "icons" }}>
                <FaGithub onClick={() => window.open('https://github.com/thomasdreyer')} />
              
     
            </IconContext.Provider>
</div>
            {/* <GitHubRepos username={githubUsername} token={githubToken} organization={githubOrganization} /> */}
            {
            //portfolio
            }

        </div>
    );
}

// export default function MyWork() {

//     const portfolio = portfolio_data.map((p, i) => {

//         return (
//             <div className="divRow" key={i}>
//                 <img src={p.images[0]} alt="project description" style={{ width: '50%', height: '50%' }} />
//                 <div>
//                     <ul>
//                         <li>Name : {p.name}</li>
//                         <li>Language : {p.language}</li>
//                         <li>Stack : {p.stack}</li>
//                     </ul>
//                     <span>{p.summary}</span>
//                 </div>

//             </div>
//         )
//     })


//     return (
//         <div className="details">
//             <p> I write software with javascript, typescript,dart,kotlin,java,c++ and swift.</p>
//             <IconContext.Provider value={{ color: "lightblue", size: 35, className: "icons" }}>
//                 <FaGithub onClick={() => window.open('https://github.com/thomasdreyer')} />
//             </IconContext.Provider>
//             {portfolio}






//         </div>
//     );
// }