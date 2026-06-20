import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/hero.png";

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
            <span className="hero-eyebrow">On-demand training for school and entrance exams</span>
            <h1 className="hero-title">Build skills that build your future.</h1>
            <p className="hero-text">
              Yash Classes helps students from 7th to 12th standard prepare with confidence.
              We also offer dedicated coaching for JEE, NEET, and CET with live doubt clearing,
              curated study plans, and exam-focused practice.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Learning
              </Link>
              <Link to="/syllabus" className="btn btn-secondary">
                See Courses
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <strong>7th - 12th</strong>
                <span>School foundation programs</span>
              </div>
              <div className="stat-card">
                <strong>JEE / NEET / CET</strong>
                <span>Exam-ready coaching with mock tests</span>
              </div>
              <div className="stat-card">
                <strong>Live doubt support</strong>
                <span>Fast answers from expert faculty</span>
              </div>
            </div>
          </div>

            <div className="hero-image">
              <img src={heroImage} alt="Students learning" />
            </div>
          </div>
        </section>

        <section id="courses" className="section programs container">
          <div className="section-header">
            <h2>Programs for Every Student</h2>
            <p>
              Whether you want strong board exam scores or focused competitive exam preparation,
              our programs are designed for consistent progress and long-term confidence.
            </p>
          </div>

          <div className="program-list">
            <article className="program-item">
              <h3>School Success</h3>
              <p>Complete support for 7th through 10th standard with strong concept clarity and practice.</p>
            </article>
            <article className="program-item">
              <h3>Higher Secondary</h3>
              <p>11th and 12th coaching balanced for board exams plus JEE/NEET/CET readiness.</p>
            </article>
            <article className="program-item">
              <h3>Competitive Edge</h3>
              <p>Targeted JEE, NEET, and CET preparation with full syllabus revision and mock testing.</p>
            </article>
          </div>
        </section>

        <section id="about" className="section about-section container">
          <div className="about-grid">
            <div className="about-copy">
              <h2>What We're All About</h2>
              <p>
                We help students build strong fundamentals through clear teaching, practical examples,
                and a supportive coaching environment. Our mission is to make learning simple,
                confidence-building, and results-driven for every student.
              </p>
            </div>
            <div className="about-highlights">
              <div className="about-card">
                <h3>Student-centered learning</h3>
                <p>Interactive lessons designed around student progress and exam readiness.</p>
              </div>
              <div className="about-card">
                <h3>Trusted support</h3>
                <p>Experienced faculty and doubt-clearing sessions for every topic.</p>
              </div>
              <div className="about-card">
                <h3>Exam-ready guidance</h3>
                <p>Focused JEE, NEET, and CET training that complements school board preparation.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="instructors" className="section instructors-section container">
          <div className="section-header">
            <h2>Meet Our Expert Team</h2>
            <p>
              Our instructors combine rigorous exam experience with approachable teaching so students
              learn faster and feel more confident in every subject.
            </p>
          </div>
          <div className="feature-grid instructors-grid">
            <article className="feature-card">
              <h3>Physics Mentor</h3>
              <p>Expert coaching for conceptual clarity and problem-solving speed.</p>
            </article>
            <article className="feature-card">
              <h3>Chemistry Coach</h3>
              <p>Focuses on reaction-based recall and exam pattern mastery.</p>
            </article>
            <article className="feature-card">
              <h3>Math Specialist</h3>
              <p>Practice-driven lessons for algebra, geometry, and competitive math.</p>
            </article>
          </div>
        </section>

        <section id="pricing" className="section pricing-section container">
          <div className="section-header">
            <h2>Pricing & FAQ</h2>
            <p>
              Flexible plans for school and competitive exam coaching, with clear support options and
              fast communication.
            </p>
          </div>
          <div className="pricing-grid">
            <article className="feature-card">
              <h3>School Plan</h3>
              <p>7th-10th and 11th-12th board-focused classes with regular tests.</p>
            </article>
            <article className="feature-card">
              <h3>Exam Plan</h3>
              <p>JEE/NEET/CET targeted training with mock exams and doubt sessions.</p>
            </article>
            <article className="feature-card">
              <h3>Need Help?</h3>
              <p>Contact us directly to customize a study plan for your goals.</p>
            </article>
          </div>
        </section>

        <section className="section why-us container">
          <div className="section-header">
            <h2>Why Choose Yash Classes?</h2>
            <p>
              Learn with a trusted coaching institute that focuses on foundation, exam strategy, and
              one-on-one support to help every student advance.
            </p>
          </div>

          <div className="features-grid">
            <article className="feature-card">
              <h3>Structured Lessons</h3>
              <p>Clear, step-by-step classes that connect school fundamentals with competitive exam strategies.</p>
            </article>
            <article className="feature-card">
              <h3>Expert Faculty</h3>
              <p>Experienced teachers with proven results across boards and entrance exams.</p>
            </article>
            <article className="feature-card">
              <h3>Regular Practice</h3>
              <p>Daily worksheets, topic tests, and sample papers to build speed and accuracy.</p>
            </article>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <h2>Ready to begin your learning journey?</h2>
            <p>
              Join Yash Classes today and get the guidance, structure, and motivation you need for school and competitive success.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Enroll Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
