import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Syllabus from "./pages/Syllabus";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919987714003?text=Hi%20Suyash%20Classes,%20I%20want%20to%20know%20more%20about%20your%20courses."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <FaWhatsapp />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;