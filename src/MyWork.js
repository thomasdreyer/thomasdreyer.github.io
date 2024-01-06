import { FaGithub, FaJsfiddle  } from "react-icons/fa";
import { IconContext } from "react-icons";
import { portfolio_data } from './portfolio_data';


export default function MyWork() {


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
            <p> I write software with Javascript,Typescript,Kotlin,Swift, C# and Rust </p>
           
            <IconContext.Provider value={{ color: "lightblue", size: 35, className: "icons" }}>
                <FaGithub onClick={() => window.open('https://github.com/thomasdreyer')} />
                <FaJsfiddle onClick={() => window.open('https://jsfiddle.net/user/fsdevCOZA/fiddles/')} />
     
            </IconContext.Provider>
            {portfolio}

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