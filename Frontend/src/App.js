import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profiles from "./components/profiles/Profiles";
import Edit from "./components/edit/Edit";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Router>
          <Routes>
            <Route path="/profiles/:username" element={<Profiles />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
