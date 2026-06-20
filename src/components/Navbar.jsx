import { Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand */}
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <img src={logoImg} alt="Suyash Classes Logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-name">Suyash Classes</span>
            <span className="brand-tagline">Since 1990 · Wadala</span>
          </div>
        </Link>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Menu</span>
          <div className={`hamburger ${open ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Nav links */}
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
          <Link className="nav-link" to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link className="nav-link" to="/syllabus" onClick={() => setOpen(false)}>All Courses</Link>
          <a className="nav-link" href="/#about" onClick={() => setOpen(false)}>About Us</a>
          <Link className="nav-link" to="/events" onClick={() => setOpen(false)}>Instructors</Link>
          <Link className="nav-link" to="/resources" onClick={() => setOpen(false)}>Resources</Link>
          <Link className="nav-link" to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
          Enroll Now
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
