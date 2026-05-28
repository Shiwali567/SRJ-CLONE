import { useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaPaintBrush,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Website Designing",
      icon: <FaLaptopCode />,
      desc: "We create stunning, responsive websites that reflect your brand’s personality and engage your visitors effectively.",
    },

    {
      title: "Mobile App Development",
      icon: <FaMobileAlt />,
      desc: "High-performance Android & iOS applications with modern UI and smooth functionality.",
    },

    {
      title: "Cloud Computing",
      icon: <FaCloud />,
      desc: "Secure cloud solutions with scalable infrastructure for modern businesses.",
    },

    {
      title: "UI/UX Designing",
      icon: <FaPaintBrush />,
      desc: "Our creative designs turn ideas into impactful visuals that speak directly to your target audience.",
    },

    {
      title: "SEO Optimization",
      icon: <FaSearch />,
      desc: "Boost rankings and increase organic traffic using advanced SEO strategies.",
    },

    {
      title: "Cyber Security",
      icon: <FaShieldAlt />,
      desc: "Protect your business with strong security systems and data protection solutions.",
    },

    {
      title: "Digital Marketing",
      icon: "📈",
      desc: "Grow your brand through powerful social media and advertising campaigns.",
    },

    {
      title: "Graphic Designing",
      icon: "🎨",
      desc: "Creative logo, branding, and graphic solutions for modern businesses.",
    },

    {
      title: "E-Commerce Development",
      icon: "🛒",
      desc: "Professional online stores with secure payments and modern shopping experience.",
    },

    {
      title: "AI Automation",
      icon: "🤖",
      desc: "Smart AI-powered solutions to automate and improve business operations.",
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(to right,#eaf6ff,#ffffff)",
        padding: "120px 20px 80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADING */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(40px,5vw,80px)",
            fontWeight: "900",
            background: "linear-gradient(to right,#009dff,#2563eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "15px",
          }}
        >
          Our Services
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#475569",
            maxWidth: "800px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Explore our professional IT and digital services tailored for modern
          businesses.
        </p>
      </div>

      {/* MAIN SECTION */}

      <div
        className="servicesGrid"
        style={{
          display: "grid",
          gridTemplateColumns: "380px 1fr",
          gap: "40px",
          alignItems: "start",
          maxWidth: "1700px",
          margin: "auto",
        }}
      >
        {/* LEFT SCROLLING CARDS */}

        <div
          className="leftScroll"
          style={{
            height: "1000px",
            overflowY: "auto",
            paddingRight: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                style={{
                  background: "#ffffff",
                  borderRadius: "30px",
                  padding: "28px",
                  cursor: "pointer",
                  border:
                    selectedService.title === service.title
                      ? "2px solid #3b82f6"
                      : "1px solid #dbeafe",

                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                }}
              >
                {/* ICON */}

                <div
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "22px",
                    background: "linear-gradient(to right,#00b7ff,#2563eb)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "30px",
                    marginBottom: "22px",
                  }}
                >
                  {service.icon}
                </div>

                {/* TITLE */}

                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "#0f172a",
                    lineHeight: "1.4",
                    marginBottom: "15px",
                  }}
                >
                  {service.title}
                </h2>

                {/* DESC */}

                <p
                  style={{
                    fontSize: "17px",
                    color: "#475569",
                    lineHeight: "1.9",
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}

        <div
          className="rightPanel"
          style={{
            background: "#ffffff",
            borderRadius: "40px",
            padding: "70px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
            position: "sticky",
            top: "120px",
          }}
        >
          {/* BIG ICON */}

          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "35px",
              background: "linear-gradient(to right,#00b7ff,#2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "60px",
              marginBottom: "35px",
            }}
          >
            {selectedService.icon}
          </div>

          {/* TITLE */}

          <h1
            style={{
              fontSize: "clamp(40px,4vw,70px)",
              color: "#0f172a",
              fontWeight: "900",
              marginBottom: "25px",
              lineHeight: "1.2",
            }}
          >
            {selectedService.title}
          </h1>

          {/* DESC */}

          <p
            style={{
              fontSize: "22px",
              color: "#475569",
              lineHeight: "2",
              marginBottom: "45px",
            }}
          >
            {selectedService.desc}
          </p>

          {/* BOX */}

          <div
            style={{
              background: "#f8fbff",
              border: "1px solid #dbeafe",
              borderRadius: "30px",
              padding: "40px",
            }}
          >
            <h3
              style={{
                fontSize: "32px",
                color: "#2563eb",
                marginBottom: "25px",
                fontWeight: "800",
              }}
            >
              Why Choose This Service?
            </h3>

            <ul
              style={{
                paddingLeft: "25px",
                color: "#475569",
                lineHeight: "2.2",
                fontSize: "20px",
              }}
            >
              <li>Modern and scalable solutions</li>
              <li>Professional expert support</li>
              <li>Fast and secure implementation</li>
              <li>Premium user experience</li>
              <li>Business-focused strategy</li>
              <li>Long-term growth focused development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CSS */}

      <style>
        {`
          *{
            box-sizing:border-box;
          }

          .leftScroll::-webkit-scrollbar{
            width:8px;
          }

          .leftScroll::-webkit-scrollbar-thumb{
            background:#3b82f6;
            border-radius:20px;
          }

          .leftScroll::-webkit-scrollbar-track{
            background:#dbeafe;
            border-radius:20px;
          }

          @media(max-width:1200px){

            .servicesGrid{
              grid-template-columns:1fr !important;
            }

            .leftScroll{
              height:auto !important;
              overflow:visible !important;
            }

            .rightPanel{
              position:relative !important;
              top:0 !important;
              padding:40px !important;
            }
          }

          @media(max-width:768px){

            .rightPanel{
              padding:25px !important;
              border-radius:25px !important;
            }

            .rightPanel ul{
              font-size:17px !important;
            }

            .rightPanel p{
              font-size:18px !important;
            }
          }

          @media(max-width:500px){

            .leftScroll div{
              border-radius:22px !important;
            }

            .rightPanel{
              padding:20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Services;
