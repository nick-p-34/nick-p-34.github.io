import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
