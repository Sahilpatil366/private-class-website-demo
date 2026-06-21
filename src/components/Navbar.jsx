import { Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">

        {/* Logo */}
        <Link
          className="brand"
          to="/"
          onClick={() => setOpen(false)}
        >
          <img
            src={logoImg}
            alt="Suyash Classes Logo"
            className="brand-logo"
          />

          <div className="brand-text">
            <span className="brand-name">Suyash Classes</span>
            <span className="brand-tagline">SINCE 1990 • WADALA</span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className={`hamburger ${open ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navigation */}
        <nav
          className={`nav-links ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
         <Link className="nav-link" to="/" onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link
          className="nav-link"
          to="/about"
          onClick={() => setOpen(false)}
        >
          About Us
        </Link>

        <Link className="nav-link" to="/syllabus" onClick={() => setOpen(false)}>
          Courses
        </Link>

        <Link className="nav-link" to="/events" onClick={() => setOpen(false)}>
          Results
        </Link>

        <Link className="nav-link" to="/resources" onClick={() => setOpen(false)}>
          Resources
        </Link>

        <Link className="nav-link" to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
        </nav>

        {/* CTA */}
        <Link
          className="nav-cta"
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Enroll Now
        </Link>

      </div>
    </header>
  );
}

export default Navbar;