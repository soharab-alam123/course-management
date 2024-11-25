import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseManagementScreen from "./components/CourseManagementScreen";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Course Management</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/courses" element={<CourseManagementScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
