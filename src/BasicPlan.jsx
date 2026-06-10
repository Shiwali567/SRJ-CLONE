import { useState } from "react";
import axios from "axios";

function BasicPlan() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    project_type: "",
    budget: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/plans", {
        ...formData,
        plan_name: "Basic Plan",
      });

      alert("Requirement Submitted Successfully");

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        company_name: "",
        project_type: "",
        budget: "",
        requirements: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            color: "#4338ca",
            marginBottom: "10px",
          }}
        >
          Basic Website Package
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
          }}
        >
          Perfect package for startups, local businesses and personal websites.
        </p>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "30px",
        }}
      >
        {/* Package Details */}
        <div
          style={{
            background: "#fff",
            borderRadius: "25px",
            padding: "35px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#2563eb", marginBottom: "20px" }}>
            Package Details
          </h2>

          <h1
            style={{
              color: "#16a34a",
              fontSize: "40px",
              marginBottom: "25px",
            }}
          >
            ₹14,999
          </h1>

          <ul
            style={{
              lineHeight: "2.5",
              color: "#334155",
              fontSize: "16px",
            }}
          >
            <li>✔ 4-5 Pages Website</li>
            <li>✔ Responsive Design</li>
            <li>✔ Contact Form</li>
            <li>✔ Basic SEO Setup</li>
            <li>✔ Mobile Friendly Design</li>
            <li>✔ WhatsApp Integration</li>
            <li>✔ Google Map Integration</li>
            <li>✔ Social Media Links</li>
            <li>✔ SSL Support</li>
            <li>✔ 1 Month Support</li>
          </ul>

          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              borderRadius: "15px",
              background: "#eef2ff",
            }}
          >
            <strong style={{ color: "#4338ca" }}>Delivery Time:</strong> 5-7
            Working Days
          </div>
        </div>

        {/* Form */}
        <div
          style={{
            background: "#fff",
            borderRadius: "25px",
            padding: "35px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#4338ca",
              marginBottom: "25px",
            }}
          >
            Request This Package
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Full Name"
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              style={inputStyle}
            />

            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="Company / Business Name"
              style={inputStyle}
            />

            <select
              name="project_type"
              value={formData.project_type}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Project Type</option>
              <option>Business Website</option>
              <option>Portfolio Website</option>
              <option>Landing Page</option>
              <option>Mobile App Devolopment</option>
              <option>Cloud computing</option>
              <option>UI/UX Designing</option>
              <option>SEO Optimization</option>
              <option>Cyber Security</option>
              <option>Digital Marketing</option>
              <option>Graphic Designing </option>
              <option>E-Comerce Development</option>
              <option>AI Automation</option>
            </select>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Budget</option>
              <option>₹10,000 - ₹20,000</option>
              <option>₹20,000 - ₹30,000</option>
            </select>

            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows="6"
              placeholder="Describe Your Project Requirements"
              style={{
                ...inputStyle,
                resize: "none",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                border: "none",
                padding: "16px",
                borderRadius: "12px",
                background: "linear-gradient(90deg,#4f46e5,#4338ca)",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Submit Requirement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

export default BasicPlan;
