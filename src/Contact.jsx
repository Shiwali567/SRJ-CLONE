import { useState } from "react";
import axios from "axios";
import FloatingButtons from "./FloatingButtons";
import {
  FaAddressBook,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  // =========================
  // STATES
  // =========================

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // HANDLE SUBMIT
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );
      alert(response.data.message);

      // RESET FORM
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setLoading(false);
    } catch (error) {
      console.log(error);

      alert("Something went wrong");

      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6fb",
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px 120px",
        color: "#111827",
      }}
    >
      <style>
        {`

/* ==========================
   LAPTOP
========================== */

@media (max-width:1200px){

  .contactFormBox{
    padding:40px !important;
  }

}

/* ==========================
   TABLET
========================== */

@media (max-width:992px){

  .contactTitle{
    font-size:54px !important;
  }

  .contactSubTitle{
    font-size:24px !important;
  }

  .contactFormBox{
    padding:30px !important;
    border-radius:25px !important;
  }

  .contactGrid{
    grid-template-columns:1fr !important;
  }

}

/* ==========================
   MOBILE
========================== */

@media (max-width:768px){

  .contactTitle{
    font-size:38px !important;
    line-height:1.3 !important;
  }

  .contactSubTitle{
    font-size:20px !important;
  }

  .contactFormBox{
    padding:20px !important;
  }

  .contactGrid{
    gap:25px !important;
  }

  .mapBox iframe{
    height:350px !important;
  }

}

/* ==========================
   SMALL MOBILE
========================== */

@media (max-width:480px){

  .contactTitle{
    font-size:30px !important;
  }

  .contactSubTitle{
    font-size:18px !important;
  }

  .contactFormBox{
    padding:16px !important;
    border-radius:20px !important;
  }

  .contactGrid{
    grid-template-columns:1fr !important;
  }

  .mapBox iframe{
    height:280px !important;
    border-radius:18px !important;
  }

}

/* ==========================
   FIX OVERFLOW
========================== */

@media (max-width:768px){

  input,
  select,
  textarea{
    font-size:15px !important;
  }
.submitBtn{
  width:auto;
}

@media(max-width:768px){
  .submitBtn{
    width:100%;
  }

  .mapBox iframe{
    height:350px !important;
  }
}

        `}
      </style>
      {/* TOP HEADING */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            width: "110px",
            height: "110px",
            margin: "0 auto 25px",
            borderRadius: "25px",
            background: "linear-gradient(135deg,#1d4ed8,#38bdf8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "55px",
            color: "white",
            boxShadow: "0 10px 30px rgba(37,99,235,0.3)",
          }}
        >
          <FaAddressBook />
        </div>

        <h1
          className="contactTitle"
          style={{
            fontSize: "72px",
            color: "#1d4ed8",
            marginBottom: "15px",
            fontWeight: "800",
          }}
        >
          Get in Touch
        </h1>

        <h3
          className="contactSubTitle"
          style={{
            color: "#4b5563",
            fontSize: "30px",
            marginBottom: "20px",
            fontWeight: "500",
          }}
        >
          Let's Chat, Contact with Us
        </h3>

        <p
          style={{
            color: "#6b7280",
            maxWidth: "950px",
            margin: "0 auto",
            lineHeight: "34px",
            fontSize: "19px",
          }}
        >
          Have any questions or feedback? We're here to help.
        </p>
      </div>

      {/* MAIN BOX */}
      <form onSubmit={handleSubmit}>
        <div
          className="contactFormBox"
          style={{
            maxWidth: "1200px",
            margin: "auto",
            background: "#ffffff",
            padding: "50px",
            borderRadius: "35px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            marginBottom: "70px",
          }}
        >
          {/* FORM GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "25px",
              marginBottom: "25px",
            }}
          >
            {/* FIRST NAME */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
                style={{
                  width: "100%",
                  padding: "17px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  background: "#f9fafb",
                  outline: "none",
                  fontSize: "16px",
                }}
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
                style={{
                  width: "100%",
                  padding: "17px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  background: "#f9fafb",
                  outline: "none",
                  fontSize: "16px",
                }}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                style={{
                  width: "100%",
                  padding: "17px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  background: "#f9fafb",
                  outline: "none",
                  fontSize: "16px",
                }}
              />
            </div>

            {/* PHONE */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Phone
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                style={{
                  width: "100%",
                  padding: "17px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  background: "#f9fafb",
                  outline: "none",
                  fontSize: "16px",
                }}
              />
            </div>
          </div>

          {/* SERVICE */}
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "600",
              }}
            >
              Select Service
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "17px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                background: "#f9fafb",
                outline: "none",
                fontSize: "16px",
              }}
            >
              <option value="">Select a service</option>
              <option>Website Development</option>
              <option>Mobile App Development</option>
              <option>SEO Services</option>
              <option>Digital Marketing</option>
              <option>UI/UX Design</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div style={{ marginBottom: "40px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "600",
              }}
            >
              Type Your Message
            </label>

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              style={{
                width: "100%",
                padding: "18px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                background: "#f9fafb",
                outline: "none",
                resize: "none",
                fontSize: "16px",
              }}
            />
          </div>

          {/* BUTTON */}
          <div style={{ textAlign: "center" }}>
            <button
              className="submitBtn"
              type="submit"
              disabled={loading}
              style={{
                padding: "16px 50px",
                border: "none",
                borderRadius: "50px",
                background: "linear-gradient(90deg,#2563eb,#38bdf8)",
                color: "white",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(37,99,235,0.3)",
              }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>

      {/* CONTACT INFO + MAP */}
      <div
        className="contactGrid"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}
        <div>
          {/* PHONE */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "22px",
              marginBottom: "25px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "18px",
              }}
            >
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "18px",
                  background: "linear-gradient(135deg,#2563eb,#38bdf8)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "28px",
                }}
              >
                <FaPhoneAlt />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "10px",
                  }}
                >
                  Phone
                </h3>

                <a
                  href="tel:+919625190448"
                  style={{
                    display: "block",
                    color: "#2563eb",
                    textDecoration: "none",
                    marginBottom: "10px",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  📞 Call: +91 96251 90448
                </a>

                <a
                  href="https://wa.me/919625190448"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#16a34a",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  <FaWhatsapp />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "22px",
              marginBottom: "25px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "18px",
              }}
            >
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "18px",
                  background: "linear-gradient(135deg,#2563eb,#38bdf8)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "28px",
                }}
              >
                <FaEnvelope />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "10px",
                  }}
                >
                  Email
                </h3>

                <a
                  href="mailto:srjglobaltechnology@gmail.com"
                  style={{
                    color: "#2563eb",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  srjglobaltechnology@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* ADDRESS */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "22px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "18px",
              }}
            >
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "18px",
                  background: "linear-gradient(135deg,#2563eb,#38bdf8)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "28px",
                }}
              >
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "10px",
                  }}
                >
                  Office
                </h3>

                <a
                  href="https://maps.google.com/?q=Urbtech Trade Center Tower Noida Sector 132"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#2563eb",
                    textDecoration: "none",
                    lineHeight: "34px",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Urbtech Trade Center Tower,
                  <br />
                  C-1101 Noida Sector-132,
                  <br />
                  Uttar Pradesh 201304
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="mapBox">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Urbtech+Trade+Center+Tower+Noida+Sector+132&output=embed"
            width="100%"
            height="500"
            style={{
              border: "0",
              borderRadius: "25px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.1)",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <FloatingButtons />
    </div>
  );
}

export default Contact;
