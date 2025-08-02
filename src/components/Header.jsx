import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  // close mobile menu on navigation
  const handleNavClick = () => setOpen(false);

  return (
    <>
      <nav
        className="navbar fixed-top shadow-sm"
        style={{
          background:
            theme === "theme2"
              ? "#1f2230"
              : theme === "theme3"
              ? "#fff8f3"
              : "#f8f9fa",
          color: theme === "theme2" ? "#f0f5ff" : "#212529",
          transition: "all .3s ease",
          padding:0,
          zIndex: 50,
        }}
      >
        <div className="d-flex align-items-center justify-content-between w-100" style={{padding:"10px"}}>
          <div className="d-flex align-items-center gap-3">
            <span className="navbar-brand fw-bold mb-0">ThemeApp</span>
          </div>

          {/* desktop links */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <Link to="/" className="nav-link" onClick={handleNavClick}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={handleNavClick}>
              About
            </Link>
            <Link to="/contact" className="nav-link" onClick={handleNavClick}>
              Contact
            </Link>
            <select
              className="form-select form-select-sm"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              style={{ width: "140px" }}
            >
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>
          </div>

          {/* hamburger for mobile */}
          <button
            className="btn d-lg-none"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              color: theme === "theme2" ? "#f0f5ff" : "#212529",
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* mobile dropdown menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          paddingTop:0,
          background:
            theme === "theme2"
              ? "#1f2230"
              : theme === "theme3"
              ? "#fff8f3"
              : "#f8f9fa",
          color: theme === "theme2" ? "#f0f5ff" : "#212529",
          transition: "max-height .3s ease",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxHeight: open ? "300px" : "0",
          zIndex: 40,
        }}
      >
        <div className="d-flex flex-column align-items-start p-3 gap-2">
          <Link to="/" className="nav-link p-0" onClick={handleNavClick}>
            Home
          </Link>
          <Link to="/about" className="nav-link p-0" onClick={handleNavClick}>
            About
          </Link>
          <Link to="/contact" className="nav-link p-0" onClick={handleNavClick}>
            Contact
          </Link>
          <div className="w-100 mt-2">
            <label className="form-label small mb-1">Theme</label>
            <select
              className="form-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
