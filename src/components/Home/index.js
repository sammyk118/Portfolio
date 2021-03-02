import React from "react";

function Home() {
    return (
        <div className=" small-up-2 off-canvas position-left reveal-for-large is-transition-push is-closed" id="my-info" data-off-canvas=""
            aria-hidden="true" data-e="sxdx0q-e">
            <div className="grid-y grid-padding-x" id="sideBar">
                <br />
                <div className="cell shrink">
                    <img className="thumbnail" src="./assets/images/Profile.jpg" />
                </div>
                <div className="cell auto">
                    <p>Sammy is an aspiring web designer with a degree in computer science, and experience in JavaScript, C++, HTML,
              CSS, jQuery, and Server Side APIs.</p>
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