import React from "react";

function Project(props) {
    return (
        <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.image} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href={props.git}>Github</a></li>
                    <li className="list-group-item"><a href={props.site }>Website</a></li>

                </ul>
                <div className="card-body">
                    {/* <link href="#" className="card-link">Card link</link>
                <link href="#" className="card-link">Another link</link> */}
                </div>
            </div>
        </div>
    )
};

export default Project;