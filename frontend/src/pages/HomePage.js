import React from "react";
import { Link } from "react-router-dom";
import "/Users/jorgeandresbravo/portafoliowebsite/frontend/src/styles/components/pages/HomePage.scss";


const HomePage = (props) => {
    return (
        <div className="container-maintitle">
            <h1 className="page-header">Jorge Andrés Bravo Portillo</h1>
            <h2 className="page-subheader">Software QA Tester / Full Stack Developer</h2>
            <Link to='/ContactMe' className="flat-button">CONTACT ME</Link>
        </div>
    );
}

export default HomePage;