import './App.css';
import Nbar from "./Components/Nbar";
import Fpage from "./Components/Fpage";
import HomePage from "./Pages/HomePage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
  <Nbar />
  <Routes>
    <Route path= "/" element = {<HomePage/>} />
    </Routes>

    <Fpage />
  </Router>
    </div>
  );
}

export default App;
