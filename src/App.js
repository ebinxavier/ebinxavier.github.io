import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer/index";
import Home from "./screens/Home";
import About from "./screens/About";
import Resume from "./screens/Resume";
import Contact from "./screens/Contacts";
import Projects from "./screens/Projects";

const App = () => {
  return (
    <Router>
      <div style={{ position: "sticky", top: 0, zIndex: 999 }}>
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
