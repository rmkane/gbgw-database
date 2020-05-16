import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPilot from "./components/add-pilot.component";
import Pilot from "./components/pilot.component";
import PilotList from "./components/pilot-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/pilots" className="navbar-brand">
              GBGW API
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/pilots"} className="nav-link">
                  Pilots
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/pilots"]} component={PilotList} />
              <Route exact path="/add" component={AddPilot} />
              <Route path="/pilots/:id" component={Pilot} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
