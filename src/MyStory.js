import { FaWhatsapp,FaSkype,FaGithub, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";

export default function MyStory() {
    return (
    <div className="details">
      <p>
        Hello,
        I'm Thomas , a self taught full stack engineer and mobile applications
        developer based in Johannesburg South Africa.
      </p>
      <p>
        I've been building web and mobile based software applications for 12 years
        and have worked with both native applications as well as cross platform hybrid
        framweorks like IoNIC, rEACT NATIVE , XAMARIN and Flutter.
      </p>
      <p>
        Hello,
        I'm Thomas , a self taught full stack engineer and mobile applications
        developer based in Johannesburg South Africa.
      </p>
      <p>
        I've been building web and mobile based software applications for 12 years
        and have worked with both native applications as well as cross platform hybrid
        framweorks like IoNIC, rEACT NATIVE , XAMARIN and Flutter.
      </p>
  
  
        <p>
        For work opportunities and/or consultations, please feel free to reach out to me via:
       </p>

        <div className="divRow">
                <IconContext.Provider value={{ color: "lightblue", size:35, className: "icons"}}>
  
                                <FaWhatsapp  onClick={()=> window.open('https://wa.me/0027784879775')} />

                                <FaSkype onClick={()=> window.open('skype:tdreyer62?chat')} />
                                
                                <MdEmail onClick={()=> window.open('mailto:thomas@fsdev.co.za')} />
                </IconContext.Provider>
                      
                </div>
  
  
    </div>);
  } 