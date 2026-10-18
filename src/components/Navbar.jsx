import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ theme, onThemeChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-left">
        <h2 className="logo">Marwa</h2>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMobileOpen(s => !s)}
      >
        ☰
      </button>

      <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/graphics" className={({ isActive }) => isActive ? "active" : ""}>Graphics</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/feedback" className={({ isActive }) => isActive ? "active" : ""}>Feedback</NavLink>
        </li>
      </ul>

      <div className="theme-buttons">
        <button
          onClick={() => onThemeChange("light")}
          className={theme==="light" ? "selected" : ""}
          aria-label="Switch to light theme"
        >☀️</button>
        <button
          onClick={() => onThemeChange("dark")}
          className={theme==="dark" ? "selected" : ""}
          aria-label="Switch to dark theme"
        >🌙</button>
        <button
          onClick={() => onThemeChange("ocean")}
          className={theme==="ocean" ? "selected" : ""}
          aria-label="Switch to ocean theme"
        >🌊</button>
      </div>
    </nav>
  );
}

export default Navbar;
