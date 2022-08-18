import './App.css';
import Nbar from "./Components/Nbar";
import Home from "./Pages/HomePage"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
  <Nbar />
  <Switch>
    <Route path= "/" exact component = {}/>
  </Switch>
  </Router>
    </div>
  );
}

export default App;
