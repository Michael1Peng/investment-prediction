import React from "react";
import Strategies from './pages/Strategies'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {

  return <Router>
    <div>
      <Switch>
        <Route path='/'>
          <Strategies/>
        </Route>
      </Switch>
    </div>
  </Router>
}

export default App
