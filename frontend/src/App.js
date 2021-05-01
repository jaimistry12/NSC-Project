import logo from "./logo.svg";
import "./Styles/App.css";
import { Home } from "./Pages/Home";
import Calculator from "./Pages/Calculator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calculator" exact component={Calculator} />
      </Switch>
    </Router>
  );
}

export default App;
