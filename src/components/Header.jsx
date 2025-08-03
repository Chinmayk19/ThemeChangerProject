import React, { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const themeOptions = [
  { value: "theme1", label: "Theme 1" },
  { value: "theme2", label: "Theme 2" },
  { value: "theme3", label: "Theme 3" },
];

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false); // mobile menu
  const [dropdownOpenDesktop, setDropdownOpenDesktop] = useState(false);
  const [dropdownOpenMobile, setDropdownOpenMobile] = useState(false);
  const desktopRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const current = themeOptions.find((t) => t.value === theme) || themeOptions[0];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (desktopRef.current && !desktopRef.current.contains(e.target)) {
        setDropdownOpenDesktop(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target)) {
        setDropdownOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      <nav className="custom-navbar fixed-top shadow-sm">
        <div className="d-flex align-items-center justify-content-between w-100 navbar-inner">
          <div className="d-flex align-items-center gap-3">
            <span className="navbar-brand fw-bold mb-0">ThemeApp</span>
          </div>

          {/* Desktop Links */}
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

            {/* Desktop Dropdown */}
            <div ref={desktopRef} className="dropdown-wrapper">
              <div
                className="dropdown-trigger"
                onClick={() => setDropdownOpenDesktop((o) => !o)}
              >
                <span>{current.label}</span>
                <span
                  className={`dropdown-arrow ${dropdownOpenDesktop ? "open" : ""}`}
                >
                  ▾
                </span>
              </div>
              {dropdownOpenDesktop && (
                <div className="dropdown-panel">
                  {themeOptions.map((opt) => (
                    <div
                      key={opt.value}
                      onClick={() => {
                        setTheme(opt.value);
                        setDropdownOpenDesktop(false);
                      }}
                      className={`dropdown-option ${
                        theme === opt.value ? "selected" : ""
                      }`}
                    >
                      <p className="option-label">{opt.label}</p>
                      {theme === opt.value && <span className="checkmark">✓</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="btn d-lg-none hamburger-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-links">
          <Link to="/" className="nav-link" onClick={handleNavClick}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={handleNavClick}>
            About
          </Link>
          <Link to="/contact" className="nav-link" onClick={handleNavClick}>
            Contact
          </Link>

          {/* Mobile Dropdown */}
          <div
            className="mobile-dropdown-wrapper"
            ref={mobileDropdownRef}
          >
            <label className="form-label small mb-1 mobile-dropdown-label">Theme</label>
            <div
              className="dropdown-trigger"
              onClick={() => setDropdownOpenMobile((o) => !o)}
            >
              <span>{current.label}</span>
              <span
                className={`dropdown-arrow ${dropdownOpenMobile ? "open" : ""}`}
              >
                ▾
              </span>
            </div>
            {dropdownOpenMobile && (
              <div className="dropdown-panel">
                {themeOptions.map((opt) => (
                  <div
                    key={opt.value}
                    onClick={() => {
                      setTheme(opt.value);
                      setDropdownOpenMobile(false);
                      setOpen(false);
                    }}
                    className={`dropdown-option ${
                      theme === opt.value ? "selected" : ""
                    }`}
                  >
                    <p className="option-label">{opt.label}</p>
                    {theme === opt.value && <span className="checkmark">✓</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
