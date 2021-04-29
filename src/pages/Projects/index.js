import React, { useState, useEffect } from "react";
import projectData from "../../utils/projects.json";
import Project from "../../components/Project"

function Projects() {
    const [projObj, setProjObj] = useState({
        
    })

    useEffect(() => {
        
    })
    return (
        <div className="container">
            <div className="row">
                {projectData.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            name={project.name}
                            img={project.img}
                            git={project.git}
                            site={project.site} />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Projects;