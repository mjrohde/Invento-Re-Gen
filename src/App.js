import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import Footer from "./components/Footer/Footer";
import Resources from "./pages/Resources/Resources";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
