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
function Footer() {
  const iconStyle = {
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.08)",
    color: "#1452ff",
    fontSize: "22px",
    cursor: "pointer",
    transition: "0.3s",
  };

  const linkStyle = {
    color: "#cfd3e1",
    textDecoration: "none",
    fontSize: "18px",
    marginBottom: "18px",
    display: "block",
  };

  const buttonStyle = {
    marginTop: "18px",
    background: "#1452ff",
    border: "none",
    padding: "16px 28px",
    borderRadius: "10px",
    color: "white",
    ontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
    display: "flex",
    gap: "12px",
    alignItems: "center",
  };

  return (
    <footer
      style={{
        width: "100%",
        // boxSizing: "border-box",
        background: "#020226",
        color: "white",
        padding: "75px 30px 25px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* GRID */}
      <div
        style={{
          maxWidth: "1800px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2.3fr 1fr 1.8fr 1fr 1.2fr",
          alignItems: "start",
          gap: "80px",
        }}
      >
        {/* LEFT */}
        <div style={{ flex: "1 1 250px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={Logo}
              alt="logo"
              style={{ width: "110px", objectFit: "contain" }}
            />
            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: "26px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                SRJ <span style={{ color: "#1452ff" }}>GLOBAL</span>
              </h1>
              <h2
                style={{
                  margin: "2px 0 0",
                  fontSize: "26px",
                  fontWeight: "700",
                }}
              >
                TECHNOLOGIES
              </h2>
            </div>
          </div>

          <p
            style={{
              color: "#c9cfdd",
              fontSize: "18px",
              marginTop: "28px",
              lineHeight: "1.7",
              maxWidth: "450px",
            }}
          >
            Innovative digital solutions: we build high-quality websites, mobile
            apps, and e-commerce platforms for growing brands.
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
            {/* {`
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
             `} */}
            {[
              { Icon: FaInstagram, link: "https://www.instagram.com/" },
              { Icon: FaPinterestP, link: "https://www.pinterest.com/" },
              { Icon: FaYoutube, link: "https://www.youtube.com/" },
              { Icon: FaFacebookF, link: "https://www.facebook.com/" },
              { Icon: FaXTwitter, link: "https://twitter.com/" },
              { Icon: FaLinkedinIn, link: "https://www.linkedin.com/" },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={iconStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Icon />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div style={{ flex: "1 1 200px" }}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginBottom: "28px",
            }}
          >
            Quick Links
          </h2>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            color: "#cfd3e1",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginBottom: "25px",
              marginTop: "0",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              color: "#ffffff",
              fontSize: "16px",
              marginBottom: "8px",
            }}
          >
            Email:
          </p>

          <a
            href="mailto:srjglobaltechnology@gmail.com"
            style={{
              color: "#19b5ff",
              textDecoration: "none",
              fontSize: "16px",
              display: "block",
              marginBottom: "20px",
            }}
          >
            srjglobaltechnology@gmail.com
          </a>

          <p
            style={{
              color: "#ffffff",
              fontSize: "16px",
              marginBottom: "8px",
            }}
          >
            Phone:
          </p>

          <a
            href="tel:+919625190448"
            style={{
              color: "#19b5ff",
              textDecoration: "none",
              fontSize: "16px",
              display: "block",
              marginBottom: "6px",
            }}
          >
            +91 96251 90448
          </a>
          <a
            href="https://wa.me/919625190448"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#19b5ff",
              textDecoration: "none",
              fontSize: "16px",
              display: "block",
              marginBottom: "20px",
            }}
          >
            +91 92667 06599
          </a>

          <p
            style={{
              color: "#ffffff",
              fontSize: "16px",
              marginBottom: "8px",
            }}
          >
            Office:
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Urbtech+Trade+Center+Tower+C-1101+Noida+Sector+132"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#19b5ff",
              textDecoration: "none",
              fontSize: "16px",
              lineHeight: "1.8",
            }}
          >
            Urbtech Trade Center Tower,
            <br />
            C-1101 Noida Sector-132,
            <br />
            Uttar Pradesh 201304
          </a>
        </div>

        {/* LEGAL */}
        <div style={{ flex: "1 1 200px" }}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginBottom: "28px",
            }}
          >
            Legal
          </h2>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/PrivacyPolicy"
              style={{
                textDecoration: "none",
                color: "#19b5ff",
                fontWeight: "500",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookies-policy"
              style={{
                textDecoration: "none",
                color: "#19b5ff",
                fontWeight: "500",
              }}
            >
              Cookies Policy
            </Link>

            <Link
              to="/TermsConditions"
              style={{
                textDecoration: "none",
                color: "#19b5ff",
                fontWeight: "500",
              }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* REVIEW */}
        <div style={{ flex: "1 1 220px" }}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginBottom: "28px",
            }}
          >
            Review Us
          </h2>
          <p style={{ color: "#cfd3e1" }}>Your feedback helps us grow.</p>

          <a
            href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button style={buttonStyle}>
              <FaGoogle />
              Google Review
            </button>
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          marginTop: "60px",
          paddingTop: "25px",
          textAlign: "center",
          fontSize: "18px",
          color: "#bfc4d4",
        }}
      >
        © 2026 SRJ Global Technologies. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
