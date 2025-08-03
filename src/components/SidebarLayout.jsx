import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";


const SidebarLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  if (theme === "theme2") {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div className="d-lg-none mt-4">
          <button
            className="btn btn-sm btn-outline-light m-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
            aria-controls="mobileSidebar"
          >
            ☰ Menu
          </button>
        </div>

        <div className="d-flex">
          <aside
            className="d-none d-lg-block p-3"
            style={{
              width: "256px",
              background: "#1e233d",
              color: "#fff",
              position: "fixed",
              top: "56px",
              left: 0,
              bottom: 0,
              overflowY: "auto",
            }}
          >
            <div className="mb-4">
              <div className="fs-5 fw-bold">Navigation</div>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link className="nav-link text-white p-1" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-white p-1" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-white p-1" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </aside>

          <main
            className="flex-grow-1 p-4 with-sidebar"
          >
            {children}
          </main>
        </div>
        <div
          className="offcanvas offcanvas-start text-white"
          tabIndex="-1"
          id="mobileSidebar"
          aria-labelledby="mobileSidebarLabel"
          style={{ background: "#1e233d" }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="mobileSidebarLabel">
              Navigation
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link className="nav-link text-white p-1" to="/" data-bs-dismiss="offcanvas">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-white p-1" to="/about" data-bs-dismiss="offcanvas">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link text-white p-1" to="/contact" data-bs-dismiss="offcanvas">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Other themes: normal container
  return (
    <div className="container py-4 " style={{ marginTop: "56px" }}>
      {children}
    </div>
  );
};

export default SidebarLayout;
