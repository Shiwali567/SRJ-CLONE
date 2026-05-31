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
  ];

  return (
    <>
      <nav
        style={{
          width: "100%",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(18px)",
          boxShadow: "0 4px 25px rgba(0,0,0,0.05)",
          borderBottom: "1px solid #edf2f7",
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
                  width: "70px",
                  height: "70px",
                  objectFit: "contain",
                }}
              />

              <div>
                <h1
                  style={{
                    fontSize: "18px",
                    fontWeight: "900",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  <span style={{ color: "#111827" }}>SRJ </span>

                  <span
                    style={{
                      background: "linear-gradient(to right,#ff8a00,#ffb347)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    GLOBAL
                  </span>
                </h1>

                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#111827",
                    marginTop: "2px",
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
                    style={{
                      position: "relative",
                      color: active ? "#1452ff" : "#374151",
                      fontSize: "18px", // SIZE BADA KIYA
                      fontWeight: "800",
                      textDecoration: "none",
                      paddingBottom: "8px",
                      transition: "0.3s",
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
                  background:
                    "linear-gradient(to right,#1452ff,#4f7cff,#7b61ff)",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "700",
                  padding: "15px 28px",
                  borderRadius: "14px",
                  textDecoration: "none",
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
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  color:
                    location.pathname === item.path ? "#1452ff" : "#111827",
                  fontSize: "19px", // MOBILE SIZE BADA
                  fontWeight: "700",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* RESPONSIVE CSS */}
        <style>
          {`
            .desktopMenu{
              display:flex;
              align-items:center;
              gap:35px;
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
