import { useState } from "react";
import axios from "axios";

function StandardPlan() {
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
        plan_name: "Standard Plan",
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
          Standard Website Package
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
          }}
        >
          Ideal for growing businesses looking for a professional and dynamic
          online presence.
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
          <h2
            style={{
              color: "#2563eb",
              marginBottom: "20px",
            }}
          >
            Package Details
          </h2>

          <h1
            style={{
              color: "#16a34a",
              fontSize: "40px",
              marginBottom: "25px",
            }}
          >
            ₹24,999
          </h1>

          <ul
            style={{
              lineHeight: "2.5",
              color: "#334155",
              fontSize: "16px",
            }}
          >
            <li>✔ 7-10 Pages Website</li>
            <li>✔ Responsive Design</li>
            <li>✔ Dynamic Sections</li>
            <li>✔ Contact Form</li>
            <li>✔ WhatsApp Integration</li>
            <li>✔ Google Maps Integration</li>
            <li>✔ Social Media Integration</li>
            <li>✔ Basic Admin Panel</li>
            <li>✔ Blog Section</li>
            <li>✔ SEO Optimization</li>
            <li>✔ SSL Security</li>
            <li>✔ Performance Optimization</li>
            <li>✔ Domain & Hosting Setup</li>
            <li>✔ 2 Months Support</li>
          </ul>

          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              borderRadius: "15px",
              background: "#eef2ff",
            }}
          >
            <strong style={{ color: "#4338ca" }}>Delivery Time:</strong> 7-12
            Working Days
          </div>
        </div>

        {/* Requirement Form */}
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
              <option value="Business Website">Business Website</option>
              <option value="Corporate Website">Corporate Website</option>
              <option value="Portfolio Website">Portfolio Website</option>
              <option value="Blog Website">Blog Website</option>
              <option value="Dynamic Website">Dynamic Website</option>

              <option value="E-Commerce Website">E-Commerce Website</option>
              <option value="Web Application">Web Application</option>
              <option value="Custom Software">Custom Software</option>
              <option value="Mobile App Devolopment">
                Mobile App Devolopment
              </option>
              <option value="Cloud computing">Cloud computing</option>
              <option value="UI/UX Designing">UI/UX Designing</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Designing ">Graphic Designing </option>
              <option value="AI Automation">AI Automation</option>
            </select>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Budget</option>
              <option value="₹24,000 - ₹40,000">₹24,000 - ₹40,000</option>
              <option value="₹40,000 - ₹60,000">₹40,000 - ₹60,000</option>
              <option value="₹60,000+">₹60,000+</option>
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
                marginTop: "10px",
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

export default StandardPlan;
