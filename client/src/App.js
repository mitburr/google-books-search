import React from "react";
import Nav from "./Components/components/Nav"
import Form from "./Components/Pages/Form";
import Saved from "./Components/Pages/Saved"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
