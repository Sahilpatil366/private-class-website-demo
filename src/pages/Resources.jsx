import { motion } from "framer-motion"; // <-- NEW import
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const resources = [
  { icon: "📄", title: "Mathematics Formula Sheet", desc: "Comprehensive formula reference covering all key maths topics for 10th and 12th standard.", tag: "PDF Download", color: "var(--teal)" },
  { icon: "📋", title: "Previous Year Question Papers", desc: "SSC, HSC, JEE, NEET & CET past papers for effective exam revision and pattern understanding.", tag: "Question Papers", color: "#5c6bc0" },
  { icon: "📝", title: "Science Notes (7th – 10th)", desc: "Concise printed-style notes for Physics, Chemistry, and Biology tailored to the SSC curriculum.", tag: "Study Notes", color: "#f57c00" },
  { icon: "🎯", title: "Mock Test Series", desc: "Practice with simulated full-length exams designed to build speed, accuracy, and confidence.", tag: "Practice Tests", color: "#2d6a4f" },
  { icon: "📖", title: "Grammar & Comprehension Guide", desc: "A structured guide to English grammar, comprehension, and essay writing for board exams.", tag: "Language", color: "#7b1fa2" },
  { icon: "💡", title: "Exam Strategy Handbook", desc: "Tips, time management tricks, and revision plans from our top-scoring students and faculty.", tag: "Study Tips", color: "#c62828" },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function Resources() {
  return (
    <PageTransition>
      <div style={{ background: "var(--off-white)", minHeight: "100vh" }}>
        <Navbar />

        {/* Hero */}
        <motion.section
          className="contact-hero"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="container">
            <div className="section-badge" style={{ display: "none", background: "rgba(255,255,255,0.18)", borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
              📁 Study Resources
            </div>
            <h1 style={{ marginTop: 10 }}>Resources</h1>
            <p>
              Download notes, question papers, formula sheets and more — everything
              you need to excel in your exams.
            </p>
          </div>
        </motion.section>

        {/* Resources Grid */}
        <motion.section
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="container">
            <div className="section-header">
              <div className="section-badge">📚 Study Materials</div>
              <h2>Free Learning Resources</h2>
              <p>All resources are curated by our faculty to complement classroom learning at Suyash Classes.</p>
            </div>

            <div className="features-grid">
              {resources.map((res, i) => (
                <motion.div
                  key={i}
                  className="feature-card"
                  style={{ cursor: "pointer" }}
                  variants={fadeInUp}
                >
                  <div className="feature-icon" style={{ background: `${res.color}18`, fontSize: "1.6rem" }}>
                    {res.icon}
                  </div>
                  <div style={{
                    display: "inline-block", background: `${res.color}15`,
                    color: res.color, borderRadius: 999,
                    padding: "2px 10px", fontSize: "0.68rem", fontWeight: 700,
                    marginBottom: 10, letterSpacing: "0.06em",
                  }}>
                    {res.tag}
                  </div>
                  <h3 style={{ color: "var(--text-dark)", marginBottom: 8 }}>{res.title}</h3>
                  <p style={{ fontSize: "0.87rem", color: "var(--text-light)", lineHeight: 1.7, marginBottom: 16 }}>{res.desc}</p>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    color: "var(--teal)", fontSize: "0.82rem", fontWeight: 600,
                  }}>
                    <span>⬇</span> Download Resource
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Community Strip */}
        <motion.div
          className="community-strip"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container">
            <h3>Get Notified About New Resources</h3>
            <p>Subscribe and we'll send new study materials and batch updates directly to your inbox.</p>
            <div className="community-form">
              <input className="community-input" type="email" placeholder="Enter your email" />
              <button className="community-btn">Subscribe</button>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.section
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Ready to Start Learning?</h2>
          <p>Enroll in Suyash Classes and gain access to all study materials, tests, and personal guidance.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-large">Enroll Now</Link>
            <Link to="/syllabus" className="btn btn-outline-white btn-large">View All Courses</Link>
          </div>
        </motion.section>

        <Footer />
      </div>
    </PageTransition>
  );
}

export default Resources;