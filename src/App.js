import React from "react";
import "./App.css";
import Main from "./components/creation/main.js";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" render={props => <Main />} />
    </Router>
  );
}

export default App;
