import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #f26522, #ff8c42)",
          color: "#fff",
          padding: "90px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: "clamp(2.5rem,5vw,4rem)",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            About Suyash Classes
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            Empowering students through quality education,
            expert guidance, and academic excellence since 1990.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">
              <h2
                style={{
                  fontWeight: "800",
                  marginBottom: "20px",
                  color: "#1a1a2e",
                }}
              >
                Our Story
              </h2>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.9",
                  marginBottom: "20px",
                }}
              >
                Founded in 1990, Suyash Classes has been a trusted name
                in education for students across Wadala and nearby areas.
                Our goal has always been to provide high-quality education,
                build confidence, and help students achieve academic success.
              </p>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.9",
                }}
              >
                Through personalized attention, experienced faculty,
                regular assessments, and a student-centric approach,
                we have guided thousands of students toward their
                academic goals and successful careers.
              </p>
            </div>

            <div className="col-lg-6">
              <div
                style={{
                  background: "#fff",
                  padding: "40px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <h3
                  style={{
                    color: "#f26522",
                    fontWeight: "700",
                    marginBottom: "20px",
                  }}
                >
                  Why Choose Us?
                </h3>

                <ul
                  style={{
                    lineHeight: "2",
                    color: "#555",
                    paddingLeft: "20px",
                  }}
                >
                  <li>30+ Years of Teaching Excellence</li>
                  <li>Experienced & Dedicated Faculty</li>
                  <li>Small Batch Sizes</li>
                  <li>Regular Tests & Assessments</li>
                  <li>Personal Attention to Every Student</li>
                  <li>Strong Track Record of Results</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section
        style={{
          background: "#fff",
          padding: "70px 0",
        }}
      >
        <div className="container">

          <div className="row text-center g-4">

            <div className="col-md-3">
              <h2 style={{ color: "#f26522", fontWeight: "800" }}>
                30+
              </h2>
              <p>Years of Excellence</p>
            </div>

            <div className="col-md-3">
              <h2 style={{ color: "#f26522", fontWeight: "800" }}>
                5000+
              </h2>
              <p>Students Guided</p>
            </div>

            <div className="col-md-3">
              <h2 style={{ color: "#f26522", fontWeight: "800" }}>
                100%
              </h2>
              <p>Commitment to Success</p>
            </div>

            <div className="col-md-3">
              <h2 style={{ color: "#f26522", fontWeight: "800" }}>
                Expert
              </h2>
              <p>Faculty Team</p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;