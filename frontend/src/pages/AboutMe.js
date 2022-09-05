import { faCss3, faHtml5, faJava, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "/Users/jorgeandresbravo/portafoliowebsite/frontend/src/styles/components/pages/AboutMe.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const AboutMe = (props) => {
    return (
        <div className="sobremi">
            <h1>About Me</h1>
            <p className="sobremi1">I am Jorge Bravo, born in Venezuela and raised throughout Panama, Argentina, and Venezuela. It has been a motivational experience to forge my attitude, personality and the most important my determination since a young age.</p>
            <p className="sobremi2">I've developed myself across several workspaces but i got hooked and obsessed with the IT world in general, my most recent role has been Software QA Tester in a startup company based in Argentina.</p>
            <p className="sobremi3">I consider myself an inquisitive, proactive, and adaptable team-player and future graduate with exceptional communication skills, a self-driven work ethic, and humble commitment.</p>
            <p className="sobremi4">Skills:</p>
            <ul className="logos-skills">
                <li>
                    <FontAwesomeIcon icon={faReact} color="#fffff0" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faJsSquare} color="#fffff0" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faHtml5} color="#fffff0" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faJava} color="#fffff0" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faCss3} color="#fffff0" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faNodeJs} color="#fffff0" />
                </li>
            </ul>
        </div>
    );
}

export default AboutMe;