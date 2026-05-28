import { useState } from "react";
import {
  FaRocket,
  FaBuilding,
  FaGraduationCap,
  FaShoppingCart,
  FaBullhorn,
  FaUsers,
  FaHeartbeat,
  FaCalendarAlt,
  FaUtensils,
  FaTicketAlt,
} from "react-icons/fa";

function Industries() {
  const services = [
    {
      title: "Business Startup",
      desc: "Launch your startup with confidence.",
      icon: <FaRocket />,
    },
    {
      title: "Enterprise Service",
      desc: "Robust, scalable enterprise solutions.",
      icon: <FaBuilding />,
    },
    {
      title: "Education & Learning",
      desc: "Smart solutions for smart learners.",
      icon: <FaGraduationCap />,
    },
    {
      title: "Ecommerce & Retail",
      desc: "Scalable retail solutions.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Digital Marketing",
      desc: "Drive visibility and leads.",
      icon: <FaBullhorn />,
    },
    {
      title: "Social Networking",
      desc: "Connect your audience.",
      icon: <FaUsers />,
    },
    {
      title: "Healthcare & Fitness",
      desc: "Build wellness with tech.",
      icon: <FaHeartbeat />,
    },
    {
      title: "Event & Ticket",
      desc: "Manage your events seamlessly.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Food & Beverage",
      desc: "Digitizing dining experiences.",
      icon: <FaUtensils />,
    },
    {
      title: "Ticketing & Booking",
      desc: "Power travel and leisure.",
      icon: <FaTicketAlt />,
    },
  ];

  const [active, setActive] = useState(services[0]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#eef8ff 0%, #ffffff 50%, #f3f0ff 100%)",
        padding: "70px 5%",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* CSS */}
      <style>
        {`
          *{
            box-sizing:border-box;
          }

          html{
            scroll-behavior:smooth;
          }

          /* SCROLLBAR */
          .serviceScroll::-webkit-scrollbar{
            width:8px;
          }

          .serviceScroll::-webkit-scrollbar-track{
            background:transparent;
          }

          .serviceScroll::-webkit-scrollbar-thumb{
            background:linear-gradient(#38bdf8,#2563ff);
            border-radius:20px;
          }

          /* CARD ANIMATION */
          @keyframes fadeUp{
            0%{
              opacity:0;
              transform:translateY(40px);
            }

            100%{
              opacity:1;
              transform:translateY(0);
            }
          }

          @keyframes floatCard{
            0%{
              transform:translateY(0px);
            }

            50%{
              transform:translateY(-8px);
            }

            100%{
              transform:translateY(0px);
            }
          }

          .fadeUp{
            animation:fadeUp 0.8s ease forwards;
          }

          .floatCard{
            animation:floatCard 5s ease-in-out infinite;
          }

          .serviceCard{
            transition:0.4s;
          }

          .serviceCard:hover{
            transform:translateY(-8px) scale(1.02);
            box-shadow:0px 18px 35px rgba(0,0,0,0.12);
          }

          .exploreBtn{
            transition:0.4s;
          }

          .exploreBtn:hover{
            transform:scale(1.06);
            box-shadow:0px 15px 35px rgba(37,99,255,0.35);
          }

          @media(max-width:1200px){

            .mainSection{
              flex-direction:column;
            }

            .leftPanel{
              width:100% !important;
              max-height:500px;
            }

            .rightPanel{
              width:100%;
            }
          }

          @media(max-width:768px){

            .heading{
              font-size:42px !important;
              line-height:55px !important;
            }

            .subHeading{
              font-size:18px !important;
              line-height:32px !important;
            }

            .serviceTitle{
              font-size:24px !important;
            }

            .serviceDesc{
              font-size:16px !important;
              line-height:28px !important;
            }

            .detailTitle{
              font-size:42px !important;
              line-height:55px !important;
            }

            .detailText{
              font-size:18px !important;
              line-height:34px !important;
            }

            .rightPanel{
              padding:40px !important;
            }
          }

          @media(max-width:500px){

            .heading{
              font-size:34px !important;
              line-height:46px !important;
            }

            .detailTitle{
              font-size:34px !important;
              line-height:46px !important;
            }

            .rightPanel{
              padding:30px !important;
            }
          }
        `}
      </style>

      {/* TOP GLOW */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "450px",
          height: "450px",
          background: "rgba(0,174,255,0.18)",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      />

      {/* HEADING */}
      <div
        className="fadeUp"
        style={{
          textAlign: "center",
          marginBottom: "60px",
          position: "relative",
          zIndex: "2",
        }}
      >
        <h1
          className="heading"
          style={{
            fontSize: "72px",
            color: "#0b6ddf",
            marginBottom: "15px",
            fontWeight: "700",
          }}
        >
          Our Industrial Services
        </h1>

        <p
          className="subHeading"
          style={{
            color: "#555",
            fontSize: "24px",
          }}
        >
          Explore our wide range of offerings tailored to modern businesses.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div
        className="mainSection"
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
          position: "relative",
          zIndex: "2",
        }}
      >
        {/* LEFT SIDE SCROLL */}
        <div
          className="leftPanel serviceScroll"
          style={{
            width: "420px",
            maxHeight: "900px",
            overflowY: "auto",
            paddingRight: "18px",
            position: "relative",
          }}
        >
          {/* BLUE LINE */}
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              width: "5px",
              height: "100%",
              background: "linear-gradient(to bottom,#38bdf8,#2563ff,#7c3aed)",
              borderRadius: "20px",
            }}
          />

          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActive(service)}
              className="serviceCard fadeUp floatCard"
              style={{
                background:
                  active?.title === service.title
                    ? "linear-gradient(135deg,#0ea5ff,#2563ff)"
                    : "#ffffff",
                color: active?.title === service.title ? "white" : "#111",
                borderRadius: "30px",
                padding: "32px",
                marginBottom: "25px",
                cursor: "pointer",
                transition: "0.4s",
                boxShadow:
                  active?.title === service.title
                    ? "0px 15px 35px rgba(37,99,255,0.35)"
                    : "0px 8px 20px rgba(0,0,0,0.08)",
                border:
                  active?.title === service.title
                    ? "none"
                    : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  marginBottom: "18px",
                  color: active?.title === service.title ? "white" : "#0ea5ff",
                }}
              >
                {service.icon}
              </div>

              <h3
                className="serviceTitle"
                style={{
                  fontSize: "36px",
                  marginBottom: "12px",
                  fontWeight: "700",
                }}
              >
                {service.title}
              </h3>

              <p
                className="serviceDesc"
                style={{
                  fontSize: "20px",
                  lineHeight: "34px",
                  color:
                    active?.title === service.title
                      ? "rgba(255,255,255,0.92)"
                      : "#666",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div
          className="rightPanel fadeUp"
          style={{
            flex: "1",
            minHeight: "850px",
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(12px)",
            borderRadius: "35px",
            padding: "70px",
            position: "relative",
            overflow: "hidden",
            minWidth: "320px",
            boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
            border: "1px solid rgba(255,255,255,0.6)",
          }}
        >
          {/* GLOW */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "350px",
              height: "350px",
              background: "rgba(0,170,255,0.15)",
              borderRadius: "50%",
              filter: "blur(90px)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: "2",
            }}
          >
            <div
              className="floatCard"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "30px",
                background: "linear-gradient(135deg,#0ea5ff,#2563ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "55px",
                marginBottom: "35px",
                boxShadow: "0px 15px 35px rgba(37,99,255,0.35)",
              }}
            >
              {active.icon}
            </div>

            <h2
              className="detailTitle"
              style={{
                fontSize: "64px",
                color: "#0f172a",
                marginBottom: "25px",
                fontWeight: "700",
              }}
            >
              {active.title}
            </h2>

            <p
              className="detailText"
              style={{
                fontSize: "24px",
                lineHeight: "44px",
                color: "#475569",
                maxWidth: "900px",
              }}
            >
              {active.desc} We provide advanced and innovative technology
              solutions designed to help businesses scale faster, improve
              customer experience, and maximize growth in the digital world.
            </p>

            <button
              className="exploreBtn"
              style={{
                marginTop: "45px",
                padding: "18px 38px",
                border: "none",
                borderRadius: "50px",
                background: "linear-gradient(90deg,#0ea5ff,#2563ff)",
                color: "white",
                fontSize: "20px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0px 12px 30px rgba(37,99,255,0.3)",
              }}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
