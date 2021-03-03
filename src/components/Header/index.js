import React from "react";
import { Link } from "react-router-dom"; 

function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand" href="#">Sammy Kroner</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" >Projects</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://drive.google.com/file/d/18AwA8QswSWKHv44ujMSJDww_o72pU1lc/view?usp=sharing" className="nav-link" target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;