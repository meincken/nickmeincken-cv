import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./../02-Template/Resume/Index";
import Site from "./../02-Template/Home/Index";

function Home() {
  return <Site />;
}

function Content() {
  return <Resume />;
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/resume" exact component={Content}></Route>
      </Switch>
    </Router>
  );
}
