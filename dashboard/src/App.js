import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import ScanResultForm from "./ScanResultForm";
import ScanResults from "./ScanResults";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/results">
            <ScanResults />
          </Route>
          <Route exact path="/">
            <ScanResultForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
