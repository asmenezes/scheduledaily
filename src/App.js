import React from "react";
import "./App.css";
import Main from "./components/creation/main.js";
import ScheduleMain from "./components/schedule/schedulemain.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dayschedule">
          <ScheduleMain />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
// <Router>
//   <Route exact path="/" render={(props) => <Main />} />
//   <Route exact path="/schedule" render={(props) => <ScheduleMain />} />
// </Router>
