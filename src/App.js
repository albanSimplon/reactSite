import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bar from "./components/bar/Bar";
import Cv from "./components/cv/Cv";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nasa from "./components/nasa/Nasa";
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
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
