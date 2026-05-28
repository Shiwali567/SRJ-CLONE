import { useNavigate } from "react-router-dom";
import blogHero1 from "./assets/about.jpg";
function About() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#f8f8f8",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
        color: "#111",
      }}
    >
      {/* CSS ANIMATION */}
      <style>
        {`
          *{
            box-sizing:border-box;
          }

          html{
            scroll-behavior:smooth;
          }

          @keyframes fadeUp{
            from{
              opacity:0;
              transform:translateY(60px);
            }
            to{
              opacity:1;
              transform:translateY(0);
            }
          }

          @keyframes zoomIn{
            from{
              opacity:0;
              transform:scale(0.8);
            }
            to{
              opacity:1;
              transform:scale(1);
            }
          }

          @keyframes float{
            0%{
              transform:translateY(0px);
            }
            50%{
              transform:translateY(-15px);
            }
            100%{
              transform:translateY(0px);
            }
          }

          @keyframes glow{
            0%{
              box-shadow:0px 0px 20px rgba(0,140,255,0.2);
            }
            50%{
              box-shadow:0px 0px 70px rgba(0,140,255,0.45);
            }
            100%{
              box-shadow:0px 0px 20px rgba(0,140,255,0.2);
            }
          }

          @keyframes videoFloatLeft{
            0%{
              transform:translateX(0px) translateY(0px);
            }

            25%{
              transform:translateX(-18px) translateY(-12px);
            }

            50%{
              transform:translateX(0px) translateY(-20px);
            }

            75%{
              transform:translateX(18px) translateY(-12px);
            }

            100%{
              transform:translateX(0px) translateY(0px);
            }
          }

          @keyframes videoFloatRight{
            0%{
              transform:translateX(0px) translateY(0px);
            }

            25%{
              transform:translateX(18px) translateY(-12px);
            }

            50%{
              transform:translateX(0px) translateY(-20px);
            }

            75%{
              transform:translateX(-18px) translateY(-12px);
            }

            100%{
              transform:translateX(0px) translateY(0px);
            }
          }

          @keyframes pulse{
            0%{
              transform:scale(1);
            }

            50%{
              transform:scale(1.08);
            }

            100%{
              transform:scale(1);
            }
          }

          .fadeUp{
            animation:fadeUp 1s ease forwards;
          }

          .zoomIn{
            animation:zoomIn 1.2s ease forwards;
          }

          .floating{
            animation:float 4s ease-in-out infinite;
          }

          .glow{
            animation:glow 3s ease-in-out infinite;
          }

          .videoLeft{
            animation:videoFloatLeft 6s ease-in-out infinite;
          }

          .videoRight{
            animation:videoFloatRight 6s ease-in-out infinite;
          }

          .pulse{
            animation:pulse 4s ease-in-out infinite;
          }

          .hoverCard{
            transition:0.4s;
          }

          .hoverCard:hover{
            transform:translateY(-12px) scale(1.03);
            box-shadow:0px 20px 40px rgba(0,0,0,0.12);
          }

          .heroBtn{
            transition:0.4s;
          }

          .heroBtn:hover{
            transform:scale(1.08);
            box-shadow:0px 15px 35px rgba(0,102,255,0.4);
          }

          @media(max-width:1200px){

            .aboutGrid{
              grid-template-columns:1fr !important;
            }

            .whyGrid{
              grid-template-columns:1fr !important;
            }

            .centerCircle{
              margin:50px auto;
            }
          }

          @media(max-width:768px){

            .heroHeading{
              font-size:42px !important;
              line-height:58px !important;
            }

            .heroText{
              font-size:18px !important;
              line-height:34px !important;
            }

            .sectionHeading{
              font-size:42px !important;
              line-height:58px !important;
            }

            .sectionText{
              font-size:18px !important;
              line-height:34px !important;
            }

            .statsBox h2{
              font-size:40px !important;
            }

            .statsBox p{
              font-size:18px !important;
            }

            .circleText{
              font-size:30px !important;
            }
          }

          @media(max-width:500px){

            .heroHeading{
              font-size:34px !important;
              line-height:48px !important;
            }

            .sectionHeading{
              font-size:34px !important;
              line-height:48px !important;
            }

            .centerCircle{
              width:260px !important;
              height:260px !important;
            }

            .circleText{
              font-size:24px !important;
            }
          }
        `}
      </style>

      {/* HERO SECTION */}
      <section
        className="fadeUp"
        style={{
          padding: "90px 8% 60px",
          textAlign: "center",
          background:
            "radial-gradient(circle at top left, rgba(0,255,170,0.18), transparent 30%)",
        }}
      >
        <h1
          className="heroHeading"
          style={{
            fontSize: "58px",
            fontWeight: "700",
            lineHeight: "78px",
            marginBottom: "25px",
            color: "#0b49d8",
          }}
        >
          Empowering Your Growth Through{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#00d084,#7d5cff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Innovation & Strategy
          </span>
        </h1>

        <p
          className="heroText"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            color: "#555",
            fontSize: "24px",
            lineHeight: "42px",
          }}
        >
          At SRJ Global Technologies, we deliver digital solutions — from
          websites and apps to branding and SEO — helping you grow in the modern
          world.
        </p>

        {/* CONTACT BUTTON */}
        <button
          className="heroBtn"
          onClick={() => navigate("/contact")}
          style={{
            marginTop: "40px",
            padding: "16px 38px",
            border: "none",
            borderRadius: "50px",
            background: "linear-gradient(90deg,#0052ff,#19b6ff)",
            color: "white",
            fontSize: "20px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0px 10px 25px rgba(0,102,255,0.3)",
          }}
        >
          Contact Us
        </button>

        {/* STATS */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "90px",
            gap: "40px",
          }}
        >
          {[
            ["850+", "Clients Worldwide"],
            ["1252+", "Successful Projects"],
            ["10+", "Years Experience"],
            ["24/7", "Support Available"],
          ].map((item, index) => (
            <div
              key={index}
              className={`statsBox hoverCard fadeUp ${
                index % 2 === 0 ? "videoLeft" : "videoRight"
              }`}
              style={{
                flex: "1",
                minWidth: "180px",
                background: "white",
                padding: "30px",
                borderRadius: "25px",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <h2
                style={{
                  fontSize: "55px",
                  color: "#0b49d8",
                  marginBottom: "10px",
                }}
              >
                {item[0]}
              </h2>

              <p
                style={{
                  fontSize: "22px",
                  color: "#555",
                }}
              >
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECOND SECTION */}
      <section
        className="aboutGrid"
        style={{
          padding: "100px 8%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {/* LEFT */}
        <div className="fadeUp">
          <h2
            className="sectionHeading"
            style={{
              fontSize: "68px",
              lineHeight: "85px",
              color: "#0b49d8",
              marginBottom: "35px",
              fontWeight: "700",
            }}
          >
            Leading Website <br />
            Development Agency in <br />
            Noida, India
          </h2>

          <p
            className="sectionText"
            style={{
              fontSize: "24px",
              lineHeight: "45px",
              color: "#555",
            }}
          >
            Our site developers give master web application advancement and
            website architecture administrations to our clients.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="zoomIn videoRight"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="hoverCard"
            style={{
              background: "white",
              borderRadius: "25px",
              padding: "30px",
              boxShadow: "0px 15px 35px rgba(0,0,0,0.1)",
              width: "500px",
              maxWidth: "100%",
            }}
          >
            <img
              src={blogHero1}
              alt="developer"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
