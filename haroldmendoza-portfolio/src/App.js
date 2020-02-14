import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//Import Components
import Button from "./components/layout/Button";
import Title from "./components/layout/Title";
import Menu from "./components/layout/Menu";

//Import Pages
import Portfolio from "./pages/Portfolio";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/portfolio" exact component={Portfolio} />
      </Switch>
    </Router>
  );
};

export default App;
