import "./App.css";
import { Home } from "./components/Home";

import { Reoffer } from "./components/Reoffer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/reoffer">
          <Reoffer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
