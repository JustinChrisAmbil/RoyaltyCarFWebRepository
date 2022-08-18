import './App.css';
import Nbar from "./Components/Nbar";
import Fpage from "./Components/Fpage";
import HomePage from "./Pages/HomePage";
import Catalog   from "./Pages/Catalog";
import Inquire from "./Pages/Inquire"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
  <Nbar />
  <Routes>
    <Route path= "/" element = {<HomePage/>} />
    <Route path= "/Catalog" element = {<Catalog/>} />
    <Route path= "/Inquire" element = {<Inquire/>} />
    </Routes>

    <Fpage />
  </Router>
    </div>
  );
}

export default App;
