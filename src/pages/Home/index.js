import React from "react";

function Home() {
    return (
        <div className=" small-up-2 off-canvas position-left reveal-for-large is-transition-push is-closed" id="my-info" data-off-canvas=""
            aria-hidden="true" data-e="sxdx0q-e">
            <div className="grid-y grid-padding-x" id="sideBar">
                <br />
                
                <section id="hero" className="d-flex align-items-center">
                    <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                        <h1>Sammy Kroner</h1>
                        <h2>Is a Web Developer from San Francisco with a degree in Computer Science</h2>
                        <a href="about.html" className="btn-about">About Me</a>
                    </div>
                </section>
                <div className="cell auto">
                    <p>Sammy is an aspiring web developer with a degree in computer science, and experience in JavaScript, C++, React, express, HTML, SQL, and Server Side APIs.</p>
                    <p></p>
                </div>
                <footer className="cell">
                    <p>Sammy Kroner</p>
                    <p>sammyk118@gmail.com</p>
                    <p>415-306-6325</p>
                </footer>
            </div>
        </div>
    )
}

export default Home;