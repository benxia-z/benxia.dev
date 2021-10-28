import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Footer, Nav } from "./components";
import Home from "./pages/index";
import About from "./pages/about";
import Projects from "./pages/projects";
import "./styles/global.css";

const App = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <Router>
      <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home setActiveLink={setActiveLink} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
