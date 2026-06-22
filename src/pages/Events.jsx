import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────────────────────
   EVENTS DATA
   Drop your images/videos in /public/events/<filename>
   ───────────────────────────────────────────────────────────── */

const featuredEvents = [
  {
    id: "annual-day",
    title: "Annual Function 2024",
    date: "January 15, 2024",
    desc: "A spectacular evening of dance, drama, and awards celebrating our students' non-academic talents.",
    img: "/events/annual-day.jpg",
    color: "#f26522",
  },
  {
    id: "science-exhibition",
    title: "Science & Innovation Fair",
    date: "March 10, 2024",
    desc: "Students presented incredible working models, robotics projects, and science experiments.",
    img: "/events/science-fair.jpg",
    color: "#009688",
  },
];

const galleryImages = [
  { id: 1, img: "/events/gallery-1.jpg", span: "row-span-2 col-span-2" },
  { id: 2, img: "/events/gallery-2.jpg", span: "row-span-1 col-span-1" },
  { id: 3, img: "/events/gallery-3.jpg", span: "row-span-1 col-span-1" },
  { id: 4, img: "/events/gallery-4.jpg", span: "row-span-2 col-span-1" },
  { id: 5, img: "/events/gallery-5.jpg", span: "row-span-1 col-span-2" },
  { id: 6, img: "/events/gallery-6.jpg", span: "row-span-1 col-span-1" },
];

const timelineEvents = [
  {
    year: "August",
    title: "Independence Day Celebration",
    desc: "Flag hoisting, patriotic performances, and interactive speeches by our students.",
  },
  {
    year: "September",
    title: "Teacher's Day & Career Guidance",
    desc: "Students organized events for teachers, followed by an expert career seminar.",
  },
  {
    year: "November",
    title: "Educational Trip to Science Center",
    desc: "A full day exploring interactive physics and space exhibits.",
  },
  {
    year: "December",
    title: "Winter Sports Meet",
    desc: "Inter-batch cricket and badminton tournaments building team spirit.",
  },
];

function Events() {
  return (
    <PageTransition>
      <div style={{ background: "#f8f9fa", minHeight: "100vh" }}>
        <Navbar />

        {/* ── 1. Hero Section ── */}
        <section className="events-hero">
          <div className="container events-hero-inner">
            <div className="section-badge" style={{ display: "none", background: "rgba(255,255,255,0.2)", color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>
              🎉 Beyond the Classroom
            </div>
            <h1 className="events-hero-title">Events & Activities</h1>
            <p className="events-hero-subtitle">
              At Suyash Classes, we believe true growth happens when academic excellence meets memorable, real-world experiences.
            </p>

            <div className="events-hero-stats">
              <div className="events-stat">
                <h3>50+</h3>
                <p>Events Organized</p>
              </div>
              <div className="events-stat">
                <h3>20+</h3>
                <p>Educational Trips</p>
              </div>
              <div className="events-stat">
                <h3>100%</h3>
                <p>Student Engagement</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Featured Events ── */}
        <section className="section" style={{ background: "#fff" }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: "center" }}>
              <div className="section-badge">🌟 Highlights</div>
              <h2>Featured Events</h2>
              <p style={{ maxWidth: 600, margin: "0 auto" }}>
                Our biggest celebrations and activities that bring the whole institute together.
              </p>
            </div>

            <div className="featured-events-grid">
              {featuredEvents.map((evt) => (
                <div key={evt.id} className="featured-card">
                  <div className="featured-card__img-wrap" style={{ background: evt.color }}>
                    <img
                      src={evt.img}
                      alt={evt.title}
                      className="featured-card__img"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="placeholder-overlay">
                      <span className="placeholder-icon">📸</span>
                      <span>Add {evt.title} Image</span>
                    </div>
                  </div>
                  <div className="featured-card__body">
                    <span className="featured-card__date">{evt.date}</span>
                    <h3 className="featured-card__title">{evt.title}</h3>
                    <p className="featured-card__desc">{evt.desc}</p>
                    <button className="featured-card__btn">View Gallery →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Educational Trips ── */}
        <section className="section trips-section">
          <div className="container">
            <div className="trips-grid">
              <div className="trips-content">
                <div className="section-badge" style={{ background: "rgba(255,255,255,0.2)", color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>
                  🚌 Learning Outside
                </div>
                <h2 className="trips-title">Educational Trips</h2>
                <p className="trips-desc">
                  We frequently organize trips to science centers, historical sites, and nature parks. These outings allow students to observe practical applications of what they learn in class, fostering curiosity and teamwork.
                </p>
                <ul className="trips-list">
                  <li>✓ Nehru Science Centre Visits</li>
                  <li>✓ Botanical Garden Tours</li>
                  <li>✓ Historical Museum Excursions</li>
                </ul>
              </div>
              <div className="trips-image-wrap">
                <img
                  src="/events/educational-trip.jpg"
                  alt="Educational Trip"
                  className="trips-image"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <div className="placeholder-overlay" style={{ background: "#005f73" }}>
                  <span className="placeholder-icon">🚌</span>
                  <span>Add Trip Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Events Timeline ── */}
        <section className="section" style={{ background: "#fff" }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: "center" }}>
              <div className="section-badge">📅 Yearly Calendar</div>
              <h2>A Year at Suyash Classes</h2>
              <p style={{ maxWidth: 600, margin: "0 auto" }}>
                Our academic year is packed with activities designed to develop confidence and creativity.
              </p>
            </div>

            <div className="timeline">
              {timelineEvents.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Video Highlights ── */}
        <section className="section" style={{ background: "#f8f9fa" }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: "center" }}>
              <div className="section-badge">🎥 Watch Us</div>
              <h2>Video Highlights</h2>
            </div>

            <div className="video-grid">
              {[1, 2, 3].map((num) => (
                <div key={num} className="video-card">
                  <div className="video-placeholder" style={{ background: "#1a1a2e" }}>
                    <div className="play-button">▶</div>
                    <span>Add Video {num}</span>
                  </div>
                  <div className="video-title">Event Highlight {num}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Photo Gallery (Masonry style) ── */}
        <section className="section" style={{ background: "#fff", paddingBottom: 80 }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: "center" }}>
              <div className="section-badge">📷 Memories</div>
              <h2>Event Gallery</h2>
              <p style={{ maxWidth: 600, margin: "0 auto" }}>
                Glimpses of smiles, achievements, and fun moments.
              </p>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((img) => (
                <div key={img.id} className={`gallery-item ${img.span}`}>
                  <img
                    src={img.img}
                    alt={`Gallery ${img.id}`}
                    className="gallery-img"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="placeholder-overlay" style={{ background: "#e8e8e8", color: "#888" }}>
                    <span className="placeholder-icon" style={{ fontSize: "1.5rem" }}>📷</span>
                  </div>
                  <div className="gallery-hover">
                    <span>View Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA Section ── */}
        <section className="cta-section" style={{ background: "linear-gradient(135deg, #f26522, #ff8c42)" }}>
          <h2>Experience Learning with Us</h2>
          <p>
            Be a part of an environment that combines academic excellence with memorable life experiences.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-outline-white btn-large" style={{ background: "#fff", color: "#f26522", border: "none" }}>
              Enroll Today
            </Link>
            <Link to="/syllabus" className="btn btn-outline-white btn-large">
              Explore Courses
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}

export default Events;