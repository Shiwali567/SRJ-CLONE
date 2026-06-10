import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/Services" },
    { name: "ABOUT", path: "/About" },
    { name: "INDUSTRIES", path: "/Industries" },
    { name: "BLOG", path: "/Blog" },
    { name: "PRICING", path: "/Pricing" },
    { name: "LOGIN", path: "/login" },
    { name: "REGISTER", path: "/register" },
  ];

  return (
    <>
      <nav
        style={{
          width: "100%",
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 6px 30px rgba(0,0,0,0.08)",
          borderBottom: "1px solid #ececec",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      >
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              minHeight: "95px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
            {/* LOGO */}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: "95px",
                  height: "95px",
                  objectFit: "contain",
                }}
              />

              <div>
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "900",
                    margin: 0,
                    lineHeight: 1.1,
                    letterSpacing: "0.5px",
                  }}
                >
                  <span style={{ color: "#111827" }}>SRJ </span>

                  <span
                    style={{
                      color: "#ff8a00",
                      // background: "linear-gradient(to right,#ff8a00,#ffb347)",
                      // WebkitBackgroundClip: "text",
                      // WebkitTextFillColor: "transparent",
                    }}
                  >
                    GLOBAL
                  </span>
                </h1>

                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "900",
                    color: "#111827",
                    margin: "0px",
                    lineHeight: "1.1",
                  }}
                >
                  TECHNOLOGIES
                </h2>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="desktopMenu">
              {navLinks.map((item, index) => {
                const active = location.pathname === item.path;

                return (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.target.style.background = "#f3f4f6";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.target.style.background = "transparent";
                      }
                    }}
                    style={{
                      position: "relative",
                      color: active ? "#1452ff" : "#4b5563",
                      fontSize: "17px",
                      fontWeight: "700",
                      textDecoration: "none",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      background: active
                        ? "rgba(20,82,255,0.12)"
                        : "transparent",
                      border: active
                        ? "1px solid #1452ff"
                        : "1px solid transparent",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* CONTACT BUTTON */}
            <div className="desktopBtn">
              <Link
                to="/contact"
                style={{
                  background: "linear-gradient(90deg,#1452ff,#2468ff)",
                  // "linear-gradient(to right,#1452ff,#4f7cff,#7b61ff)",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "700",
                  padding: "14px 30px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  boxShadow: "0 8px 20px rgba(20,82,255,0.25)",
                }}
              >
                CONTACT US
              </Link>
            </div>

            {/* MOBILE ICON */}
            <button
              className="mobileIcon"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                fontSize: "30px",
                cursor: "pointer",
              }}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            style={{
              background: "white",
              borderTop: "1px solid #e5e7eb",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {navLinks.map((item, index) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.target.style.background = "#f3f4f6";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.target.style.background = "transparent";
                    }
                  }}
                  style={{
                    position: "relative",
                    color: active ? "#1452ff" : "#4b5563",
                    fontSize: "17px",
                    fontWeight: "700",
                    textDecoration: "none",
                    padding: "12px 20px",
                    borderRadius: "10px",
                    background: active ? "rgba(20,82,255,0.12)" : "transparent",
                    border: active
                      ? "1px solid #1452ff"
                      : "1px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}

        {/* RESPONSIVE CSS */}
        <style>
          {`
            .desktopMenu{
              display:flex;
              align-items:center;
              gap:15px;
            }

            @media(max-width:1000px){

              .desktopMenu{
                display:none;
              }

              .desktopBtn{
                display:none;
              }

              .mobileIcon{
                display:block !important;
              }
            }

            @media(max-width:600px){

              nav h1{
                font-size:24px !important;
              }

              nav h2{
                font-size:14px !important;
              }

              nav img{
                width:55px !important;
                height:55px !important;
              }
            }
          `}
        </style>
      </nav>
    </>
  );
}

export default Navbar;
