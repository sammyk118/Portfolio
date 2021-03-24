import React from "react";

function Project(props) {
    return (
        <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.img} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                   <a href={props.git} target="_blank" rel="noreferrer">Github</a>
                    <li className="list-group-item"><a href={props.site } target="_blank" rel="noreferrer">Website</a></li>

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