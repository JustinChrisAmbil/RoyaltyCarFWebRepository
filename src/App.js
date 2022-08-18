import './App.css';
import Nbar from "./Components/Nbar";
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
  </Router>
    </div>
  );
}

export default App;
