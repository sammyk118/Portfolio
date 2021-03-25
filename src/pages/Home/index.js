import React from "react";
import profile from "../../assets/Profile.jpg"

function Home() {
    console.log(profile)
    return (
        <div className=" small-up-2 off-canvas position-left reveal-for-large is-transition-push is-closed" id="my-info" data-off-canvas=""
            aria-hidden="true" data-e="sxdx0q-e">
            <div className="grid-y grid-padding-x" id="sideBar">
                <br />
                <div className="cell shrink">
                    <img className="thumbnail" src={profile} alt="profile"/>
                </div>
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