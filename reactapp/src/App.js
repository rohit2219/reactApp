import React from 'react';
import './App.css';
import 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import RouterComponentDash from "./components/RouterComponentDash/RouterComponentDash";
import AboutComponent from "./components/AboutComponent/AboutComponent";

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/about" component={AboutComponent} />
          <Route path="/dashboard" component={RouterComponentDash} />
        </Switch>
      </Router>
    </div>
//       <!--<Route path="/Dashboard" component="RouterComponentDash"/>-->
 
   );
}

export default App;
