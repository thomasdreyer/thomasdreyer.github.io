import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { portfolio_data } from './portfolio_data';



export default function MyWork() {

    const portfolio = portfolio_data.map((p, i) => {

        return (
            <div className="divRow" key={i}>
                <img src={p.images[0]} alt="project description" style={{ width: '50%', height: '50%' }} />
                <div>
                    <ul>
                        <li>Name : {p.name}</li>
                        <li>Language : {p.language}</li>
                        <li>Stack : {p.stack}</li>
                    </ul>
                    <span>{p.summary}</span>
                </div>

            </div>
        )
    })


    return (
        <div className="details">
            <p> I write software with javascript, typescript,dart,kotlin,java,c++ and swift.</p>
            <IconContext.Provider value={{ color: "lightblue", size: 35, className: "icons" }}>
                <FaGithub onClick={() => window.open('https://github.com/thomasdreyer')} />
            </IconContext.Provider>
            {portfolio}






        </div>
    );
}