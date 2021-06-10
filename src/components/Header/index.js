import React from "react";
import { Link } from "react-router-dom";
import '../../style.css'

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
                            <a href="https://drive.google.com/file/d/1FY1dSijmBhU4WaGxFWOkdxTDZbosI5Q2/view?usp=sharing" className="nav-link" target="_blank" rel="noreferrer">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    //     <div className="container-fluid d-flex justify-content-between align-items-center navTop">

    //         <h1 className="logo me-auto me-lg-0"><a href="index.html">Sammy</a></h1>
    //         {/* <!-- Uncomment below if you prefer to use an image logo -->
    //   <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

    //         <nav id="navbar" className="navbar order-last order-lg-0 fixed">
    //             <ul>
    //                 <li><a className="active" href="index.html">Home</a></li>
    //                 <li><a href="about.html">About</a></li>
    //                 <li><a href="resume.html">Resume</a></li>
    //                 <li><a href="portfolio.html">Portfolio</a></li>
    //                 <li><a href="contact.html">Contact</a></li>
    //             </ul>
    //             <i className="bi bi-list mobile-nav-toggle"></i>
    //         </nav>

    //         <div className="header-social-links">
    //             <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
    //             <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
    //             <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
    //             <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
    //         </div>
    //     </div>



    )
}

export default Header;