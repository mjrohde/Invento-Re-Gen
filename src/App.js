import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="whatwedo" element={<WhatWeDo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
