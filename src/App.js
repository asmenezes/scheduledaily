import React from "react";
import "./App.css";
import Main from "./components/creation/main.js";
import ScheduleMain from "./components/schedule/schedulemain.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScheduleContextProvider from "./contexts/ScheduleContext";

function App() {
  return (
    <Router baseline="{process.env.PUBLIC_URL + '/'}">
      <Switch>
        <Route path="/dayschedule">
          <ScheduleContextProvider>
            <ScheduleMain />
          </ScheduleContextProvider>
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
