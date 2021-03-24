import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
      <Footer />

    </Router>

  )
}

export default App;
