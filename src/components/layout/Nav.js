import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                </ul>
            </div>
        </nav>

    );
}

export default Nav;
