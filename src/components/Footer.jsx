import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa6";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
function Footer() {
  const iconStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.08)",
    color: "#1452ff",
    cursor: "pointer",
    transition: "0.3s",
  };

  const linkStyle = {
    color: "#cfd3e1",
    textDecoration: "none",
    fontSize: "14px",
    marginBottom: "10px",
    display: "block",
  };

  const buttonStyle = {
    marginTop: "15px",
    background: "#1452ff",
    border: "none",
    padding: "14px 20px",
    borderRadius: "12px",
    color: "white",
    cursor: "pointer",
    display: "flex",
    gap: "5px",
    alignItems: "center",
  };

  return (
    <footer
      style={{
        width: "100%",
        boxSizing: "border-box",
        background: "#020226",
        color: "white",
        padding: "75px 40px 25px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* GRID */}
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          alignItems: "start",
          gap: "20px",
        }}
      >
        {/* LEFT */}
        <div style={{ flex: "1 1 250px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={Logo} alt="logo" style={{ width: "85px" }} />
            <div>
              <h1 style={{ margin: 0, fontSize: "16px", fontWeight: "800" }}>
                SRJ <span style={{ color: "#1452ff" }}>GLOBAL</span>
              </h1>
              <h2 style={{ margin: 0, fontSize: "14px" }}>TECHNOLOGIES</h2>
            </div>
          </div>

          <p style={{ color: "#c9cfdd", fontSize: "14px", marginTop: "15px" }}>
            Innovative digital solutions for websites, apps & e-commerce
            platforms.
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* GLOBAL CSS */}
            {`
             .footerGrid{
 display:grid;
 grid-template-columns:
 repeat(4,1fr);
 gap:30px;
}

@media(max-width:992px){

.footerGrid{
 grid-template-columns:
 repeat(2,1fr);
}
}

@media(max-width:768px){

.footerGrid{
 grid-template-columns:1fr;
 text-align:center;
}
}

             `}
            {[
              FaInstagram,
              FaPinterestP,
              FaYoutube,
              FaFacebookF,
              FaXTwitter,
              FaLinkedinIn,
            ].map((Icon, i) => (
              <div key={i} style={iconStyle}>
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div style={{ flex: "1 1 200px" }}>
          <h2>Quick Links</h2>
          <Link to="/Services" style={linkStyle}>
            Services
          </Link>
          <Link to="/About" style={linkStyle}>
            About Us
          </Link>
          <Link to="/Contact" style={linkStyle}>
            Contact
          </Link>
          <Link to="/Review" style={linkStyle}>
            Review Us
          </Link>
        </div>

        {/* CONTACT */}
        <div style={{ flex: "1 1 250px" }}>
          <h2>Get In Touch</h2>

          <p>
            <FaEnvelope /> srjglobaltechnology@gmail.com
          </p>
          <p>
            <FaPhoneAlt /> +91 96251 90448
          </p>
          <p>
            <FaPhoneAlt /> +91 92667 06599
          </p>
          <p>
            <FaMapMarkerAlt /> Noida, UP
          </p>
        </div>

        {/* LEGAL */}
        <div style={{ flex: "1 1 200px" }}>
          <h2>Legal</h2>

          <Link to="/PrivacyPolicy" style={linkStyle}>
            Privacy Policy
          </Link>
          <Link to="/Terms" style={linkStyle}>
            Terms
          </Link>
          <Link to="/Cookies" style={linkStyle}>
            Cookies
          </Link>
        </div>

        {/* REVIEW */}
        <div style={{ flex: "1 1 220px" }}>
          <h2>Review Us</h2>
          <p style={{ color: "#cfd3e1" }}>Your feedback helps us grow.</p>

          <button style={buttonStyle}>
            <FaGoogle />
            Google Review
          </button>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: "50px",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "14px",
          color: "#bfc4d4",
        }}
      >
        © 2026 SRJ Global Technologies. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
