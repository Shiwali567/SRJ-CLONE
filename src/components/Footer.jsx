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

import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";

function Footer() {
  return (
    <footer
      style={{
        background: "#020226",
        color: "white",
        padding: "75px 40px 25px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* MAIN CONTAINER */}
      <div
        className="footerGrid"
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1.3fr 1fr 1fr",
          gap: "55px",
        }}
      >
        {/* LEFT SIDE */}
        <div>
          {/* LOGO */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              marginBottom: "30px",
            }}
          >
            <img
              src={Logo}
              alt="logo"
              style={{
                width: "130px",
                objectFit: "contain",
              }}
            />

            <div>
              <h1
                style={{
                  margin: 0,
                  lineHeight: "1.1",
                  fontSize: "34px",
                  fontWeight: "800",
                }}
              >
                <span style={{ color: "white" }}>SRJ </span>

                <span style={{ color: "#1452ff" }}>GLOBAL</span>
              </h1>

              <h2
                style={{
                  marginTop: "8px",
                  fontSize: "28px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  color: "white",
                }}
              >
                TECHNOLOGIES
              </h2>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p
            style={{
              color: "#c9cfdd",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "540px",
              marginBottom: "35px",
            }}
          >
            Innovative digital solutions: we build high-quality websites, mobile
            apps, and e-commerce platforms for growing brands.
          </p>

          {/* SOCIAL ICONS */}
          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            {[
              <FaInstagram />,
              <FaPinterestP />,
              <FaYoutube />,
              <FaFacebookF />,
              <FaXTwitter />,
              <FaLinkedinIn />,
            ].map((icon, index) => (
              <div
                key={index}
                className="socialIcon"
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1452ff",
                  fontSize: "32px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "28px",
              fontWeight: "700",
            }}
          >
            Quick Links
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* SERVICES */}
            <Link
              to="/Services"
              className="footerLink"
              style={{
                color: "#d4d8e7",
                textDecoration: "none",
                fontSize: "18px",
                transition: "0.3s",
              }}
            >
              Services
            </Link>

            {/* ABOUT */}
            <Link
              to="/About"
              className="footerLink"
              style={{
                color: "#d4d8e7",
                textDecoration: "none",
                fontSize: "18px",
                transition: "0.3s",
              }}
            >
              About Us
            </Link>

            {/* CONTACT */}
            <Link
              to="/Contact"
              className="footerLink"
              style={{
                color: "#d4d8e7",
                textDecoration: "none",
                fontSize: "18px",
                transition: "0.3s",
              }}
            >
              Contact
            </Link>

            {/* REVIEW */}
            <Link
              to="/Review"
              className="footerLink"
              style={{
                color: "#d4d8e7",
                textDecoration: "none",
                fontSize: "18px",
                transition: "0.3s",
              }}
            >
              Review Us
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "28px",
              fontWeight: "700",
            }}
          >
            Get In Touch
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* EMAIL */}
            <div>
              <p
                style={{
                  fontSize: "17px",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FaEnvelope />
                Email:
              </p>

              <a
                href="mailto:srjglobaltechnology@gmail.com"
                style={{
                  color: "#11b8ff",
                  textDecoration: "none",
                  fontSize: "17px",
                  lineHeight: "1.7",
                }}
              >
                srjglobaltechnology@gmail.com
              </a>
            </div>

            {/* PHONE */}
            <div>
              <p
                style={{
                  fontSize: "17px",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FaPhoneAlt />
                Phone:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <a
                  href="tel:+919625190448"
                  style={{
                    color: "#11b8ff",
                    textDecoration: "none",
                    fontSize: "17px",
                  }}
                >
                  +91 96251 90448
                </a>

                <a
                  href="tel:+919266706599"
                  style={{
                    color: "#11b8ff",
                    textDecoration: "none",
                    fontSize: "17px",
                  }}
                >
                  +91 92667 06599
                </a>
              </div>
            </div>

            {/* OFFICE */}
            <div>
              <p
                style={{
                  fontSize: "17px",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FaMapMarkerAlt />
                Office:
              </p>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#11b8ff",
                  textDecoration: "none",
                  fontSize: "17px",
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
          </div>
        </div>

        {/* LEGAL */}
        <div>
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "28px",
              fontWeight: "700",
            }}
          >
            Legal
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Link
              to="/PrivacyPolicy"
              className="footerLink"
              style={{
                color: "#d4d8e7",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Privacy Policy
            </Link>

            <Link
              to="/Terms"
              className="footerLink"
              style={{
                color: "#d4d8e7",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Terms of Service
            </Link>

            <Link
              to="/Cookies"
              className="footerLink"
              style={{
                color: "#d4d8e7",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Cookies Policy
            </Link>
          </div>
        </div>

        {/* REVIEW */}
        <div>
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "28px",
              fontWeight: "700",
            }}
          >
            Review Us
          </h2>

          <p
            style={{
              color: "#cfd3e1",
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "30px",
            }}
          >
            Your feedback helps us improve and grow.
          </p>

          <button
            className="reviewBtn"
            style={{
              background: "#1452ff",
              border: "none",
              color: "white",
              padding: "18px 28px",
              borderRadius: "16px",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              transition: "0.3s",
            }}
          >
            <FaGoogle />
            Review us on Google
          </button>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: "55px",
          paddingTop: "28px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#bfc4d4",
            fontSize: "17px",
            letterSpacing: "0.5px",
          }}
        >
          © 2026 SRJ Global Technologies. All rights reserved.
        </p>
      </div>

      {/* CSS */}
      <style>
        {`
          .socialIcon:hover{
            transform:translateY(-6px);
            background:#1452ff;
            color:white !important;
          }

          .footerLink:hover{
            color:#11b8ff !important;
            transform:translateX(5px);
          }

          .reviewBtn:hover{
            background:#2563ff;
            transform:translateY(-4px);
          }

          @media(max-width:1300px){

            .footerGrid{
              grid-template-columns:1fr 1fr !important;
            }
          }

          @media(max-width:768px){

            footer{
              padding:60px 22px 25px !important;
            }

            .footerGrid{
              grid-template-columns:1fr !important;
              gap:45px !important;
            }

            footer h1{
              font-size:28px !important;
            }

            footer h2{
              font-size:24px !important;
            }

            footer p,
            footer a,
            footer button{
              font-size:16px !important;
            }

            footer img{
              width:90px !important;
            }

            .socialIcon{
              width:58px !important;
              height:58px !important;
              font-size:26px !important;
            }
          }

          @media(max-width:500px){

            footer{
              padding:50px 18px 25px !important;
            }

            footer h1{
              font-size:24px !important;
            }

            footer h2{
              font-size:21px !important;
            }

            footer img{
              width:75px !important;
            }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
