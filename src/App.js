import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Babylon from "./components/babylon/Babylon";
import Bar from "./components/bar/Bar";
import Cv from "./components/cv/Cv";
import Home from "./components/home/Home";
import Nasa from "./components/nasa/Nasa";
import NoMatch from "./components/nomatch/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Bar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cv" component={Cv} />
        <Route path="/nasa" component={Nasa} />
        <Route path="/babylon" component={Babylon} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
