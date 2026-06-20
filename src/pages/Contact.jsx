import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

const STORAGE_KEY = "yash-classes-consultations";
const inquiryOptions = [
  "Select an option",
  "7th - 10th School Support",
  "11th - 12th Board Coaching",
  "JEE Preparation",
  "NEET Preparation",
  "CET Preparation",
  "Other",
];

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    inquiryType: inquiryOptions[0],
    message: "",
  });
  const [entries, setEntries] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (error) {
        console.error("Invalid consultation data", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.fullName || !formData.mobile || formData.inquiryType === inquiryOptions[0]) {
      return;
    }

    const newEntry = {
      "Full Name": formData.fullName,
      "Mobile Number": formData.mobile,
      "Email Address": formData.email,
      "Inquiry Type": formData.inquiryType,
      Message: formData.message,
      Submitted: new Date().toLocaleString(),
    };

    setEntries((prev) => [newEntry, ...prev]);
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      inquiryType: inquiryOptions[0],
      message: "",
    });
    setSuccess(true);
  };

  const downloadExcel = () => {
    if (!entries.length) {
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(entries);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Consultations");
    XLSX.writeFile(workbook, "yash-classes-consultations.xlsx");
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div>
            <h1>Contact Us</h1>
            <p>
              We’re here to answer your questions and guide you through your learning journey.
              Reach out anytime and our team will respond with the support you need.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-card container">
        <div className="contact-card-inner">
          <div className="contact-heading">
            <h1>Schedule a Consultation</h1>
            <p>
              Share your details and a brief description of your study requirements. Yash Classes will
              review your inquiry and respond personally.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row split">
              <label>
                <span>Full Name</span>
                <input
                  className="input-field"
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <span>Mobile Number</span>
                <input
                  className="input-field"
                  type="tel"
                  name="mobile"
                  placeholder="98XXX XXXXX"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-row split">
              <label>
                <span>
                  Email Address <small>(optional)</small>
                </span>
                <input
                  className="input-field"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Inquiry Type</span>
                <select
                  className="input-field"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                >
                  {inquiryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="form-row full">
              <span>Message</span>
              <textarea
                className="input-field textarea"
                name="message"
                rows="5"
                placeholder="Briefly describe your requirements..."
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary btn-large">
                Request Consultation
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={downloadExcel}
                disabled={!entries.length}
              >
                Download Excel
              </button>
            </div>

            {success && <div className="success-message">Consultation request saved successfully.</div>}
          </form>

          <div className="contact-summary">
            <p>{entries.length} consultation request(s) available for download.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
