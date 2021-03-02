import React from "react"
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Project from "./components/Project"
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import projectData from "./utils/projects.json";


function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Route exact path={["/", "/home"]}>
            <Home />
          </ Route>  
          <Route exact path="/projects">
            {projectData.map(project => {
              <Project
                img={project.img}
                git={project.git}
                site={project.site} />
            })}
          </Route>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
