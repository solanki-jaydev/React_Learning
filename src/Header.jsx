import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HeaderStyle.css";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle mode function
  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply/remove dark-mode class to body on change
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg shadow-sm fixed-top bg-body-dark">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fs-3 mx-4" href="#">
          <span id="name-hover" className={darkMode ? "text-light" : "text-dark"}>
            i$hushi
          </span>
          <i className="fas fa-chess-knight d-inline-block align-text-top m-1 text-secondary"></i>
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Search Form */}
          <form className="d-flex mx-auto w-50" role="search">
            <input
              className="form-control w-100"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                backgroundColor: darkMode ? "#333" : "#f8f9fa",
                color: darkMode ? "#fff" : "#000",
                borderColor: darkMode ? "#555" : "#ccc",
              }}
            />
            <button className="btn btn-outline-primary ms-2" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>

          {/* Nav Links */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Featured <i className="fas fa-star"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Album <i className="fas fa-images"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-user"></i> Profile
              </a>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-cog"></i> Settings
              </a>
              <ul className={`dropdown-menu ${darkMode ? "dropdown-dark" : ""}`}>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-envelope"></i> Messages
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-question-circle"></i> Help
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-phone"></i> Contact
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-info-circle"></i> About
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-sign-in-alt"></i> Login
                  </a>
                </li>
              </ul>
            </li>

            {/* Mode Toggle */}
            <li className="nav-item">
              <button
                onClick={toggleMode}
                className={`btn nav-link border-0 toggle-btn ${
                  darkMode ? "btn-light text-dark" : "btn-dark text-light"
                }`}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
                <i className={`ms-2 fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
