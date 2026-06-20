import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const courses = [
  {
    icon: "📗",
    badge: "SSC BOARD",
    color: "linear-gradient(135deg, #00695c, #009688)",
    title: "School Foundation (7th – 10th)",
    desc: "Complete subject coaching with concept clarity, practice sheets and regular tests to build a rock-solid academic base.",
    tag: "SSC Board",
  },
  {
    icon: "📘",
    badge: "HSC BOARD",
    color: "linear-gradient(135deg, #005f73, #0a9396)",
    title: "Higher Secondary (11th – 12th)",
    desc: "Comprehensive 11th & 12th coaching balanced across board exams and competitive entrance readiness simultaneously.",
    tag: "HSC Board",
  },
  {
    icon: "🎯",
    badge: "JEE · NEET · CET",
    color: "linear-gradient(135deg, #1b4332, #2d6a4f)",
    title: "JEE / NEET / CET Preparation",
    desc: "Targeted coaching with full syllabus coverage, mock tests, and focused doubt-clearing sessions for competitive exams.",
    tag: "Competitive Exams",
  },
  {
    icon: "📐",
    badge: "MATHEMATICS",
    color: "linear-gradient(135deg, #1a237e, #3949ab)",
    title: "Mathematics Mastery",
    desc: "In-depth mathematics coaching from basic to advanced. Builds strong problem-solving skills for boards and entrance tests.",
    tag: "All Levels",
  },
  {
    icon: "🔬",
    badge: "SCIENCE",
    color: "linear-gradient(135deg, #4a148c, #7b1fa2)",
    title: "Science (Physics, Chemistry, Biology)",
    desc: "Conceptual and practical science coaching tailored for SSC, HSC, and NEET aspirants with regular practicals.",
    tag: "Science Stream",
  },
  {
    icon: "📊",
    badge: "COMMERCE",
    color: "linear-gradient(135deg, #e65100, #f57c00)",
    title: "Commerce (Accounts & Economics)",
    desc: "Structured commerce coaching with a focus on practical understanding of Accounts and Economics for HSC students.",
    tag: "Commerce Stream",
  },
];

const faqs = [
  { q: "Who Should Take an Online Course?", a: "Our coaching is ideal for students from 7th to 12th standard, as well as those preparing for competitive exams like JEE, NEET, and CET. Anyone looking for structured, guided preparation will benefit from our programs." },
  { q: "How Do I Begin Study?", a: "Simply contact us through our inquiry form or call our numbers. Our counsellors will guide you through the enrollment process, batch selection, and fees structure." },
  { q: "Are There Prerequisites for Language Subjects?", a: "No prerequisites are required. We start from the basics and build up systematically. All language subjects are handled with beginner-friendly methods." },
];

function Syllabus() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: "var(--off-white)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="section-badge" style={{ background: "rgba(255,255,255,0.18)", borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
            📚 Course Catalogue
          </div>
          <h1 style={{ marginTop: 10 }}>All Courses</h1>
          <p>
            Explore our complete range of programs designed to help students excel
            in board exams and competitive entrance tests.
          </p>
        </div>
      </section>

      {/* Courses grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">🎓 Course Programs</div>
            <h2>Popular Courses</h2>
            <p>Choose from our expertly crafted programs and take the first step toward academic excellence.</p>
          </div>

          <div className="program-list">
            {courses.map((c, i) => (
              <article key={i} className="program-item">
                <div className="program-img-placeholder" style={{ background: c.color, position: "relative" }}>
                  <span className="program-img-badge">{c.badge}</span>
                  <span style={{ fontSize: "3.5rem", position: "relative", zIndex: 1 }}>{c.icon}</span>
                </div>
                <div className="program-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="program-footer">
                    <span className="program-tag">✓ {c.tag}</span>
                    <Link to="/contact" className="program-enroll-btn">Enroll Now</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community Strip */}
      <div className="community-strip">
        <div className="container">
          <h3>Join Our Community</h3>
          <p>Enter your email address to get notified about new batches and updates.</p>
          <div className="community-form">
            <input className="community-input" type="email" placeholder="Enter your email" />
            <button className="community-btn">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Pricing & FAQ */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            {/* Pricing */}
            <div>
              <div className="section-badge">💳 Membership</div>
              <h2 style={{ fontSize: "clamp(1.6rem,2.6vw,2.2rem)", fontWeight: 800, color: "var(--text-dark)", marginTop: 8, marginBottom: 14 }}>
                Membership
              </h2>
              <p style={{ color: "var(--text-light)", lineHeight: 1.75, fontSize: "0.93rem", marginBottom: 36 }}>
                Choose the plan that suits you best. All plans include access to notes, tests, and personal mentoring.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                {[
                  { label: "Monthly", price: "₹2,000", period: "/month", features: ["Weekly Tests", "Printed Notes", "Doubt Sessions"], featured: false },
                  { label: "Annual", price: "₹18,000", period: "/year", features: ["Guided Learning", "All Printed Notes", "Mock Tests", "Offline Timing", "Certificate of Completion"], featured: true },
                  { label: "Extended", price: "₹5,000", period: "/month", features: ["Priority Access", "1-on-1 Mentoring"], featured: false },
                ].map((plan, i) => (
                  <div key={i} style={{
                    background: plan.featured ? "linear-gradient(135deg, var(--teal-dark), var(--teal))" : "var(--white)",
                    border: `1px solid ${plan.featured ? "transparent" : "var(--border)"}`,
                    borderRadius: "var(--radius-md)",
                    padding: "24px 18px",
                    boxShadow: plan.featured ? "0 8px 32px rgba(0,150,136,0.25)" : "var(--shadow-sm)",
                    color: plan.featured ? "white" : "var(--text-dark)",
                    textAlign: "center",
                    position: "relative",
                    transform: plan.featured ? "scale(1.04)" : "none",
                  }}>
                    {plan.featured && (
                      <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: "var(--orange)", color: "white", borderRadius: 999, padding: "2px 12px", fontSize: "0.65rem", fontWeight: 700, whiteSpace: "nowrap" }}>POPULAR</div>
                    )}
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.7, marginBottom: 8 }}>{plan.label}</div>
                    <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 2 }}>{plan.price}</div>
                    <div style={{ fontSize: "0.72rem", opacity: 0.65, marginBottom: 20 }}>{plan.period}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, textAlign: "left", marginBottom: 20 }}>
                      {plan.features.map((f, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.78rem", opacity: 0.9 }}>
                          <span style={{ color: plan.featured ? "rgba(255,255,255,0.7)" : "var(--teal)" }}>✓</span> {f}
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" style={{
                      display: "block", background: plan.featured ? "var(--orange)" : "var(--teal-pale)",
                      color: plan.featured ? "white" : "var(--teal-dark)",
                      borderRadius: 999, padding: "8px 0",
                      fontSize: "0.8rem", fontWeight: 700, textAlign: "center", textDecoration: "none",
                    }}>Enroll Now</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className="section-badge">❓ Have any Questions?</div>
              <h2 style={{ fontSize: "clamp(1.6rem,2.6vw,2.2rem)", fontWeight: 800, color: "var(--text-dark)", marginTop: 8, marginBottom: 28 }}>
                FAQ's
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    marginBottom: 10,
                    overflow: "hidden",
                    background: "var(--white)",
                  }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%", textAlign: "left",
                        background: "none", border: "none",
                        padding: "16px 18px", cursor: "pointer",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        fontFamily: "var(--font)", fontWeight: 600,
                        fontSize: "0.9rem", color: "var(--text-dark)",
                      }}
                    >
                      {faq.q}
                      <span style={{ color: "var(--teal)", fontSize: "1.2rem", flexShrink: 0, marginLeft: 8 }}>
                        {openFaq === i ? "−" : "+"}
                      </span>
                    </button>
                    {openFaq === i && (
                      <div style={{
                        padding: "0 18px 16px",
                        fontSize: "0.87rem",
                        color: "var(--text-light)",
                        lineHeight: 1.75,
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Syllabus;