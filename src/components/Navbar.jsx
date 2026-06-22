import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logoImg from "../assets/logo.png";

const navItems = [
  { label: "Home",      to: "/" },
  { label: "About Us",  to: "/about" },
  { label: "Courses",   to: "/syllabus" },
  { label: "Events",    to: "/events" },
  { label: "Resources", to: "/resources" },
  { label: "Contact",   to: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="site-header" ref={navRef}>
      <div className="container header-inner">

        {/* Logo */}
        <Link
          className="brand"
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Suyash Classes — go to homepage"
        >
          <img
            src={logoImg}
            alt="Suyash Classes Logo"
            className="brand-logo"
          />
          <div className="brand-text">
            <span className="brand-name">Suyash Classes</span>
            <span className="brand-tagline">SINCE 1990 · WADALA</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className={`nav-links${open ? " open" : ""}`}
          aria-label="Main navigation"
          id="main-nav"
        >
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              className="nav-link"
              to={to}
              onClick={() => setOpen(false)}
              aria-current={location.pathname === to ? "page" : undefined}
            >
              {label}
            </Link>
          ))}

          {/* Enroll Now — visible inside mobile menu */}
          <Link
            className="nav-links-cta-mobile"
            to="/contact"
            onClick={() => setOpen(false)}
            aria-label="Enroll Now"
          >
            Enroll Now
          </Link>
        </nav>

        {/* Desktop CTA — hidden on mobile */}
        <Link
          className="nav-cta"
          to="/contact"
          onClick={() => setOpen(false)}
          aria-label="Enroll Now"
        >
          Enroll Now
        </Link>

        {/* Hamburger button — visible on mobile only */}
        <button
          className="mobile-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className={`hamburger${open ? " open" : ""}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

      </div>
    </header>
  );
}

export default Navbar;