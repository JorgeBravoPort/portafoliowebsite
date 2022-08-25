import React from "react";
import "/Users/jorgeandresbravo/portafoliowebsite/frontend/src/styles/components/layout/Nav.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBookOpenReader, faHouse, faNewspaper, } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
    return (
        <div className="nav-bar">
            <nav>
                <NavLink
                    exact="true"
                    activeClassName="active"
                    to="/">
                    <FontAwesomeIcon icon={faHouse} color="#fffff0" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeClassName="active"
                    className="contact-link"
                    to="/ContactMe">
                    <FontAwesomeIcon icon={faAddressBook} color="#fffff0" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeClassName="active"
                    className="about-link"
                    to="/AboutMe">
                    <FontAwesomeIcon icon={faBookOpenReader} color="#fffff0" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeClassName="active"
                    className="blog-link"
                    to="/Blog">
                    <FontAwesomeIcon icon={faNewspaper} color="#fffff0" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/jorgeabravop">
                        <FontAwesomeIcon icon={faLinkedin} color="#fffff0" />
                    </a>
                </li>
            </ul>

        </div>
    );
}

export default Nav;
