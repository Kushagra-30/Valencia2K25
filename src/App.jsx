import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Registration from "./Pages/Registration";

function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
