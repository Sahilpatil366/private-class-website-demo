import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Yash Classes</div>

        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className={`hamburger ${open ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          <Link className="nav-link" to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link className="nav-link" to="/syllabus" onClick={() => setOpen(false)}>
            All Courses
          </Link>
          <a className="nav-link" href="#about" onClick={() => setOpen(false)}>
            About Us
          </a>
          <a className="nav-link" href="#instructors" onClick={() => setOpen(false)}>
            Instructors
          </a>
          <a className="nav-link" href="#pricing" onClick={() => setOpen(false)}>
            Pricing & FAQ
          </a>
          <Link className="nav-link" to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>

        <Link className="nav-cta" to="/contact">
          Start Learning
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
