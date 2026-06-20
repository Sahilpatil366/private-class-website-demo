import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const instructors = [
  { initial: "D", name: "Dinesh Patil", role: "Mathematics Instructor", specialty: "JEE · CET", desc: "Over 20 years of experience teaching Mathematics for competitive and board exams. Known for making complex topics simple." },
  { initial: "S", name: "Sunita Sharma", role: "Science Instructor", specialty: "NEET · SSC", desc: "Expert in Physics and Chemistry with a track record of NEET qualifiers. Passionate about hands-on learning." },
  { initial: "R", name: "Ramesh Kulkarni", role: "English & Hindi Instructor", specialty: "HSC · SSC", desc: "Helps students excel in languages with clarity and confidence. Specialises in grammar, writing, and comprehension." },
  { initial: "M", name: "Meena Joshi", role: "Biology Instructor", specialty: "NEET · 12th Board", desc: "Experienced biology teacher with deep subject expertise. Guides NEET aspirants with focused preparation strategies." },
  { initial: "A", name: "Anand Desai", role: "Commerce Instructor", specialty: "11th–12th Commerce", desc: "Teaches Accounts and Economics with a practical approach. Helps students score high in board examinations." },
  { initial: "P", name: "Pradeep Mehta", role: "Computer Science", specialty: "10th–12th IT", desc: "Combines industry experience with academic teaching to make technology subjects easy and engaging for students." },
];

function Events() {
  return (
    <div style={{ background: "var(--off-white)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="section-badge" style={{ background: "rgba(255,255,255,0.18)", borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
            👨‍🏫 Our Team
          </div>
          <h1 style={{ marginTop: 10 }}>Instructors</h1>
          <p>
            Meet our dedicated team of experienced educators who are committed to
            helping every student reach their full academic potential.
          </p>
        </div>
      </section>

      {/* About Vision */}
      <section className="section" style={{ background: "var(--white)", paddingBottom: 48 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="section-badge">🎯 Our Vision</div>
              <h2 style={{ fontSize: "clamp(1.6rem,2.8vw,2.2rem)", fontWeight: 800, color: "var(--text-dark)", marginTop: 8, marginBottom: 14, lineHeight: 1.2 }}>
                Your Success Is<br />Our True Vision
              </h2>
              <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                At Suyash Classes, our instructors bring decades of combined expertise in teaching
                school and competitive exam subjects. Each educator is personally selected for their
                deep knowledge, teaching skills, and dedication to student growth.
              </p>
            </div>
            <div style={{
              background: "linear-gradient(135deg, var(--teal-dark), var(--teal-light))",
              borderRadius: "var(--radius-xl)",
              padding: "40px 32px",
              color: "white",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, opacity: 0.8, marginBottom: 8 }}>Learn Something Every Day</div>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, opacity: 0.9, marginBottom: 20 }}>
                "It is impossible for a man to learn what he thinks he already knows."
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 16, fontSize: "0.82rem", opacity: 0.7 }}>— Epictetus, Philosopher</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">👥 Total Hire Vision</div>
            <h2>Our Instructors</h2>
            <p>Our passionate and qualified educators are the backbone of Suyash Classes.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {instructors.map((inst, i) => (
              <div key={i} style={{
                background: "var(--white)",
                borderRadius: "var(--radius-md)",
                padding: "28px 24px",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
              >
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--teal-dark), var(--teal-light))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.8rem", fontWeight: 800, color: "white",
                  marginBottom: 16, border: "3px solid var(--teal-pale)",
                }}>{inst.initial}</div>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--teal)", marginBottom: 4 }}>{inst.role}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: 8 }}>{inst.name}</h3>
                <p style={{ fontSize: "0.84rem", color: "var(--text-light)", lineHeight: 1.65, marginBottom: 14 }}>{inst.desc}</p>
                <div style={{
                  display: "inline-flex", alignItems: "center",
                  background: "var(--teal-pale)", borderRadius: 999,
                  padding: "3px 12px", fontSize: "0.72rem", fontWeight: 600, color: "var(--teal-dark)",
                }}>✓ {inst.specialty}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Learn from the Best?</h2>
        <p>Join Suyash Classes and get guided by our expert instructors toward your academic goals.</p>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-primary btn-large">Enroll Now</Link>
          <Link to="/syllabus" className="btn btn-outline-white btn-large">View Courses</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Events;