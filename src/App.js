import React from "react";
import "./App.css";
import Main from "./components/creation/main.js";
import ScheduleMain from "./components/schedule/schedulemain.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScheduleContextProvider from "./contexts/schedulecontext";

function App() {
  return (
    <ScheduleContextProvider>
    <Router baseline="{process.env.PUBLIC_URL + '/'}">
      <Routes>
        <Route path="/dayschedule" element={  <ScheduleMain />}/>
          <Route path="/" element={<Main />}/>
      </Routes>
    </Router>
    </ScheduleContextProvider>
  );
}

export default App;
// <Router>
//   <Route exact path="/" render={(props) => <Main />} />
//   <Route exact path="/schedule" render={(props) => <ScheduleMain />} />
// </Router>
