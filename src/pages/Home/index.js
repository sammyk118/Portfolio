import React from "react";

function Home() {
    return (
        <div className=" small-up-2 off-canvas position-left reveal-for-large is-transition-push is-closed" id="my-info" data-off-canvas=""
            aria-hidden="true" data-e="sxdx0q-e">
            <div className="grid-y grid-padding-x" id="sideBar">
                <br />
                <div className="cell shrink">
                    <img className="thumbnail" src="https://raw.githubusercontent.com/sammyk118/Portfolio/main/public/assets/Profile.jpg" alt="profile" />
                </div>
                
                <section id="hero" className="d-flex align-items-center">
                    <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                        <h1>Kelly Adams</h1>
                        <h2>I'm a professional illustrator from San Francisco</h2>
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