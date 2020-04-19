import React from "react";
import "./App.css";
import Main from "./components/creation/main.js";
import ScheduleMain from "./components/schedule/schedulemain.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" render={(props) => <Main />} />
      <Route exact path="/schedule" render={(props) => <ScheduleMain />} />
    </Router>
  );
}

export default App;
