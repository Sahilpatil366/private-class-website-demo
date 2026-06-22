import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logoImg from "../assets/logo.png";
import heroBg from "../assets/results-bg.png";


function Home() {
  return (
    <div>
      <Navbar />

      {/* ─────────────────────────────────────────
          HERO — Logo + Name + Story + CTA
      ───────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 245, 235, 0.65) 100%), url(${heroBg}) center/cover no-repeat`,
        padding: "80px 0 64px",
      }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20 }}>

          <img src={logoImg} alt="Suyash Classes" style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: "4px solid #f26522", boxShadow: "0 4px 20px rgba(242,101,34,0.15)" }} />

          <div>
            <h1 style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, color: "#1a1a2e", margin: 0, lineHeight: 1.15 }}>
              Suyash Classes
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#f26522", fontWeight: 700, margin: "8px 0 0", letterSpacing: "0.06em" }}>
              Wadala's Trusted Coaching Family · Since 1990
            </p>
          </div>

          <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: 1.85, maxWidth: 640, margin: "10px 0 0" }}>
            For over <strong style={{ color: "#1a1a2e" }}>30 years</strong>, we've helped students from <strong style={{ color: "#1a1a2e" }}>5th Standard to Degree College</strong> not just score marks, but actually understand what they're learning and build real confidence.
          </p>

          <p style={{ fontSize: "0.95rem", color: "#666", fontStyle: "italic", margin: 0 }}>
            "विद्या विनयेन शोभते" — True knowledge makes us humble.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
            <Link to="/contact" style={{ background: "#f26522", color: "#fff", padding: "14px 36px", borderRadius: 6, fontWeight: 700, fontSize: "1rem", textDecoration: "none", boxShadow: "0 4px 15px rgba(242,101,34,0.2)" }}>
              Talk to a Teacher
            </Link>
            <a href="tel:9987714003" style={{ background: "rgba(255,255,255,0.8)", color: "#1a1a2e", padding: "14px 32px", borderRadius: 6, fontWeight: 600, fontSize: "1rem", border: "1.5px solid rgba(0,0,0,0.1)", textDecoration: "none", backdropFilter: "blur(4px)" }}>
              📞 9987714003
            </a>
          </div>

          {/* Quick facts in one row */}
          <div style={{ display: "flex", gap: 36, flexWrap: "wrap", justifyContent: "center", marginTop: 24, padding: "20px 32px", background: "rgba(255,255,255,0.6)", borderRadius: 12, backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.5)", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
            {[
              ["30+", "Years of coaching"],
              ["V–X", "State Board"],
              ["XI–XII", "Science / Commerce"],
              ["FY–TY", "Commerce Degree"],
            ].map(([val, label]) => (
              <div key={val} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "#1a1a2e" }}>{val}</div>
                <div style={{ fontSize: "0.8rem", color: "#555" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          STATS SECTION
      ───────────────────────────────────────── */}
      <section className="stats-section" style={{ padding: "60px 0", background: "#ffffff" }}>
        <div className="container">
          <div className="stats-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}>
            <div className="stat-card" style={{ textAlign: "center", padding: "20px", background: "#fdf8f4", borderRadius: "12px", border: "1px solid #ffebe0" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f26522", margin: 0 }}>5000+</h2>
              <p style={{ margin: "8px 0 0", fontWeight: 600, color: "#1a1a2e" }}>Students Trained</p>
            </div>

            <div className="stat-card" style={{ textAlign: "center", padding: "20px", background: "#fdf8f4", borderRadius: "12px", border: "1px solid #ffebe0" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f26522", margin: 0 }}>30+</h2>
              <p style={{ margin: "8px 0 0", fontWeight: 600, color: "#1a1a2e" }}>Years Experience</p>
            </div>

            <div className="stat-card" style={{ textAlign: "center", padding: "20px", background: "#fdf8f4", borderRadius: "12px", border: "1px solid #ffebe0" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f26522", margin: 0 }}>100%</h2>
              <p style={{ margin: "8px 0 0", fontWeight: 600, color: "#1a1a2e" }}>Pass Rate</p>
            </div>

            <div className="stat-card" style={{ textAlign: "center", padding: "20px", background: "#fdf8f4", borderRadius: "12px", border: "1px solid #ffebe0" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f26522", margin: 0 }}>50+</h2>
              <p style={{ margin: "8px 0 0", fontWeight: 600, color: "#1a1a2e" }}>State Toppers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          OUR RESULTS — Light Theme
      ───────────────────────────────────────── */}
      <section style={{
        background: "#fff9f5",
        padding: "80px 0",
        position: "relative",
        borderBottom: "1px solid #eee",
      }}>
        {/* Subtle top glow */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "500px", pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 0%, rgba(242,101,34,0.06) 0%, transparent 70%)",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#f26522", marginBottom: 8 }}>
              🏆 We're so proud of our kids
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 800, color: "#1a1a2e", margin: 0, lineHeight: 1.2 }}>
              Meet Our 2024 Top Scorers
            </h2>
            <p style={{ color: "#666", fontSize: "0.95rem", marginTop: 10 }}>
              100% Pass Rate Across Both SSC &amp; HSC Boards!
            </p>
          </div>

          {/* ── SSC Board Results ── */}
          <div style={{ marginBottom: 50 }}>
            <div style={{
              display: "inline-block", background: "rgba(242,101,34,0.1)",
              border: "1px solid rgba(242,101,34,0.2)",
              borderRadius: 6, padding: "6px 20px", marginBottom: 30,
              fontSize: "0.8rem", fontWeight: 700, color: "#f26522",
              textTransform: "uppercase", letterSpacing: "0.1em",
            }}>
              SSC Board (10th Std) — 2024
            </div>

            <div className="home-results-grid">
              {[
                { rank: "1st", name: "Pari Gade",    pct: "92.20%", school: "Auxilium School",    big: true  },
                { rank: "2nd", name: "Om Panchal",    pct: "90.40%", school: "Auxilium School",    big: false },
                { rank: "3rd", name: "Siddhi Sawant", pct: "87%",    school: "Auxilium School",    big: false },
                { rank: "4th", name: "Arya Bhalekar", pct: "86%",    school: "Auxilium School",    big: false },
                { rank: "5th", name: "Maithili Kamble", pct: "85%",    school: "Auxilium School",    big: false },
                { rank: "6th", name: "Aleena Shaikh", pct: "80%",    school: "Auxilium School",    big: false },
              ].map(({ rank, name, pct, school, big }) => (
                <div key={name} className={`home-result-card${big ? " home-result-card-big" : ""}`} style={{
                  background: "#fff",
                  border: big ? "2px solid #f26522" : "1px solid #ffebe0",
                  padding: big ? "28px 18px" : "22px 16px",
                  boxShadow: big ? "0 8px 24px rgba(242,101,34,0.12)" : "0 4px 16px rgba(0,0,0,0.03)",
                }}>
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: big ? "#f26522" : "#fff",
                    color: big ? "#fff" : "#f26522",
                    fontWeight: 800, fontSize: "0.7rem",
                    padding: "4px 12px", borderRadius: 999,
                    whiteSpace: "nowrap",
                    border: big ? "2px solid #fff" : "1px solid #ffebe0",
                  }}>{rank} Rank</div>

                  <div style={{
                    width: big ? 80 : 68,
                    height: big ? 80 : 68,
                    borderRadius: "50%",
                    background: "#fff5ee",
                    border: "2px dashed #fcd3c1",
                    margin: "12px auto 16px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.6rem",
                  }}>👤</div>

                  <div style={{
                    fontSize: big ? "1.5rem" : "1.3rem",
                    fontWeight: 900, color: big ? "#1a1a2e" : "#333",
                    marginBottom: 6, lineHeight: 1,
                  }}>{pct}</div>

                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#444", marginBottom: 4 }}>{name}</div>
                  <div style={{ fontSize: "0.7rem", color: "#888" }}>{school}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── HSC / Other Results ── */}
          <div>
            <div style={{
              display: "inline-block", background: "rgba(242,101,34,0.1)",
              border: "1px solid rgba(242,101,34,0.2)",
              borderRadius: 6, padding: "6px 20px", marginBottom: 30,
              fontSize: "0.8rem", fontWeight: 700, color: "#f26522",
              textTransform: "uppercase", letterSpacing: "0.1em",
            }}>
              HSC Board (12th Std) — 2024
            </div>

            <div className="home-results-grid">
              {[
                { rank: "Topper",  name: "Vibhuti Patil",     pct: "96.20%", stream: "SSC · Auxilium School",  big: true  },
                { rank: "Commerce",name: "Apurva Rajadhyaksha", pct: "80%",    stream: "XII Commerce · Eco 90/100",big: false },
              ].map(({ rank, name, pct, stream, big }) => (
                <div key={name} className={`home-result-card${big ? " home-result-card-big" : ""}`} style={{
                  background: "#fff",
                  border: big ? "2px solid #f26522" : "1px solid #ffebe0",
                  padding: "24px 16px",
                  boxShadow: big ? "0 8px 24px rgba(242,101,34,0.12)" : "0 4px 16px rgba(0,0,0,0.03)",
                }}>
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: big ? "#f26522" : "#fff",
                    color: big ? "#fff" : "#f26522",
                    fontWeight: 800, fontSize: "0.7rem",
                    padding: "4px 12px", borderRadius: 999,
                    whiteSpace: "nowrap",
                    border: big ? "2px solid #fff" : "1px solid #ffebe0",
                  }}>{rank}</div>

                  <div style={{
                    width: 84, height: 84, borderRadius: "50%",
                    background: "#fff5ee",
                    border: "2px dashed #fcd3c1",
                    margin: "12px auto 16px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.8rem",
                  }}>👤</div>

                  <div style={{ fontSize: "1.6rem", fontWeight: 900, color: big ? "#1a1a2e" : "#333", marginBottom: 6, lineHeight: 1 }}>{pct}</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#444", marginBottom: 4 }}>{name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#888" }}>{stream}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <div style={{ textAlign: "center", marginTop: 50, borderTop: "1px solid #eee", paddingTop: 30 }}>
            <p style={{ color: "#777", fontSize: "0.9rem", margin: 0 }}>
              🎉 We are currently taking admissions for the new batch.{" "}
              <Link to="/contact" style={{ color: "#f26522", fontWeight: 700, textDecoration: "none" }}>
                Come visit us and secure a seat →
              </Link>
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          WHAT WE OFFER — simple horizontal list
      ───────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "52px 0", borderBottom: "1px solid #eee" }}>
        <div className="container">
          <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#f26522", marginBottom: 10 }}>How We Can Help</p>
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 800, color: "#1a1a2e", marginBottom: 32, lineHeight: 1.25 }}>
            Classes we teach
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { icon: "📗", title: "V to X", sub: "State Board", bg: "#e8f5e9" },
              { icon: "📘", title: "XI to XII", sub: "Science & Commerce", bg: "#e3f2fd" },
              { icon: "🎓", title: "FY to TY", sub: "Commerce Degree", bg: "#f3e5f5" },
            ].map(({ icon, title, sub, bg }) => (
              <div key={title} style={{
                background: bg,
                borderRadius: 10,
                padding: "18px 20px",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}>
                <span style={{ fontSize: "1.7rem", flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.93rem", color: "#1a1a2e", marginBottom: 3 }}>{title}</div>
                  <div style={{ fontSize: "0.78rem", color: "#777" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, textAlign: "center" }}>
            <Link to="/syllabus" style={{ color: "#f26522", fontWeight: 600, fontSize: "0.9rem", textDecoration: "underline" }}>
              See detailed syllabus & timings →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          5 THINGS THAT MAKE US DIFFERENT
      ───────────────────────────────────────── */}
      <section style={{ background: "#f9f9f9", padding: "52px 0" }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#f26522", marginBottom: 10 }}>Why Kids (And Parents) Like Us</p>
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 800, color: "#1a1a2e", marginBottom: 28, lineHeight: 1.25 }}>
            5 things that make us feel like home
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              ["01", "Teachers who actually know you", "We keep our batches small on purpose. Your teacher will know exactly where you struggle, and will make sure you don't stay stuck for long."],
              ["02", "Ready-to-read printed notes", "No more frantic copying from the blackboard. We give you clear, easy-to-read printed notes for every single chapter."],
              ["03", "Consistent practice all year", "We don't just wait for the finals. Weekly tests and full prelims mean our students walk into the board exams feeling completely relaxed."],
              ["04", "Batches that fit your schedule", "Whether you have morning school or afternoon college, we have batches that fit perfectly around your day."],
              ["05", "Fair and honest pricing", "We try to keep our fees as accessible as possible, and we even offer helpful discounts if you enroll early."],
            ].map(([num, title, desc]) => (
              <div key={num} style={{
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                padding: "20px 0",
                borderBottom: "1px solid #e8e8e8",
              }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#e0e0e0", minWidth: 28, flexShrink: 0, lineHeight: 1.6 }}>{num}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.97rem", color: "#1a1a2e", marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: "0.86rem", color: "#666", lineHeight: 1.7 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          STUDENT VOICES — 2 testimonials, inline
      ───────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "52px 0" }}>
        <div className="container">
          <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#f26522", marginBottom: 10 }}>Student Stories</p>
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 800, color: "#1a1a2e", marginBottom: 28, lineHeight: 1.25 }}>
            Don't just take our word for it
          </h2>

          <div className="home-testimonials-grid">
            {[
              { text: "The teachers here actually care. When I was struggling with math, my teacher sat with me after class until I completely understood it. It didn't feel like a normal coaching class.", name: "Aditya Sharma", detail: "CET Qualifier, 12th Std" },
              { text: "The printed notes saved my life before the exams. And because we had so many weekly tests, by the time the boards came around, I wasn't even nervous. I ended up topping my school!", name: "Priya Patil", detail: "SSC Topper, 10th Std" },
              { text: "I joined the evening batch because of my college timings. The flexibility was great, but the best part was how approachable the teachers were. No question was ever considered a 'dumb' question.", name: "Rahul Desai", detail: "NEET Aspirant, 12th Std" },
            ].map(({ text, name, detail }) => (
              <div key={name} style={{ background: "#fef3e8", borderRadius: 10, padding: "24px 22px", borderLeft: "4px solid #f26522" }}>
                <p style={{ fontSize: "0.9rem", color: "#444", lineHeight: 1.8, marginBottom: 18, fontStyle: "italic" }}>"{text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#f26522", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.9rem", flexShrink: 0 }}>{name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#1a1a2e" }}>{name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#999" }}>{detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CONTACT + LOCATION — simple block
      ───────────────────────────────────────── */}
      <section style={{ background: "#1a1a2e", padding: "52px 0" }}>
        <div className="container">
          <div className="home-contact-grid">
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#f26522", marginBottom: 10 }}>Find Us</p>
            <h2 style={{ fontSize: "clamp(1.3rem,2.2vw,1.7rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
              Come visit us in Wadala
            </h2>
            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: 24 }}>
              Ground Floor, Shree Dattasai Tower,<br />
              Near Wadala Post Office,<br />
              Wadala West, Mumbai 400 033
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["📞", "9987714003 / 8451011123 / 7208581418"],
                ["📧", "suyashclasseswadala@gmail.com"],
                ["📸", "@Suyash_classes_wadala"],
              ].map(([icon, text]) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.87rem", color: "rgba(255,255,255,0.65)" }}>
                  <span>{icon}</span><span>{text}</span>
                </div>
              ))}
            </div>
          </div>

            <div style={{ textAlign: "center" }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.93rem", lineHeight: 1.85, marginBottom: 24 }}>
                New academic year enrollments are open. Seats fill up fast — don't wait.
              </p>
              <Link to="/contact" style={{
                display: "inline-block",
                background: "#f26522", color: "#fff",
                padding: "14px 36px", borderRadius: 6,
                fontWeight: 700, fontSize: "1rem",
                textDecoration: "none",
              }}>
                Book a Free Consultation
              </Link>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginTop: 12 }}>
                Or call us directly — we'll guide you through enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;

