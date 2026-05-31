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
        color: "#111",
      }}
    >
      {/* GLOBAL CSS */}
      <style>
        {`
          *{ box-sizing:border-box; }
          html{ scroll-behavior:smooth; }

          /* ANIMATIONS */
          @keyframes fadeUp {
            from { opacity:0; transform:translateY(40px); }
            to { opacity:1; transform:translateY(0); }
          }

          @keyframes float {
            0% { transform:translateY(0); }
            50% { transform:translateY(-12px); }
            100% { transform:translateY(0); }
          }

          .fadeUp { animation:fadeUp 0.8s ease forwards; }
          .floating { animation:float 4s ease-in-out infinite; }

          .hoverCard{
            transition:0.3s ease;
          }

          .hoverCard:hover{
            transform:translateY(-8px);
            box-shadow:0 15px 35px rgba(0,0,0,0.12);
          }

          .heroBtn{
            transition:0.3s ease;
          }

          .heroBtn:hover{
            transform:scale(1.05);
            box-shadow:0 12px 30px rgba(0,102,255,0.35);
          }

          /* TABLET */
          @media(max-width: 1024px){
            .aboutGrid{
              grid-template-columns:1fr !important;
            }

            .whyGrid{
              grid-template-columns:1fr !important;
              gap:30px !important;
            }

            .statsRow{
              flex-wrap:wrap !important;
              justify-content:center !important;
            }

            .statsBox{
              min-width:45% !important;
            }
          }

          /* MOBILE */
          @media(max-width: 768px){

            .heroHeading{
              font-size:28px !important;
              line-height:40px !important;
            }

            .heroText{
              font-size:16px !important;
              line-height:26px !important;
            }

            .sectionHeading{
              font-size:26px !important;
              line-height:38px !important;
            }

            .sectionText{
              font-size:15px !important;
              line-height:26px !important;
            }

            .statsBox{
              min-width:100% !important;
            }

            .statsBox h2{
              font-size:34px !important;
            }

            .centerCircle{
              width:240px !important;
              height:240px !important;
            }

            .circleText{
              font-size:20px !important;
              line-height:28px !important;
            }
          }
        `}
      </style>

      {/* HERO */}
      <section
        className="fadeUp"
        style={{
          padding: "70px 6%",
          textAlign: "center",
        }}
      >
        <h1
          className="heroHeading"
          style={{
            fontSize: "42px",
            fontWeight: "700",
            lineHeight: "58px",
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
            margin: "20px auto",
            fontSize: "18px",
            lineHeight: "28px",
            color: "#555",
          }}
        >
          At SRJ Global Technologies we deliver websites, apps, SEO and branding
          solutions.
        </p>

        <button
          className="heroBtn"
          onClick={() => navigate("/contact")}
          style={{
            marginTop: "25px",
            padding: "14px 30px",
            borderRadius: "40px",
            border: "none",
            background: "linear-gradient(90deg,#0052ff,#19b6ff)",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Contact Us
        </button>

        {/* STATS */}
        <div
          className="statsRow"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "60px",
          }}
        >
          {[
            ["850+", "Clients"],
            ["1252+", "Projects"],
            ["10+", "Years"],
            ["24/7", "Support"],
          ].map((item, i) => (
            <div
              key={i}
              className="statsBox hoverCard"
              style={{
                flex: 1,
                background: "#fff",
                padding: "20px",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "#0b49d8", fontSize: "40px" }}>{item[0]}</h2>
              <p style={{ fontSize: "16px", color: "#555" }}>{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        className="aboutGrid"
        style={{
          padding: "80px 6%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            className="sectionHeading"
            style={{
              fontSize: "32px",
              color: "#0b49d8",
              marginBottom: "20px",
            }}
          >
            Leading Web Development Agency in Noida, India
          </h2>

          <p
            className="sectionText"
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "#555",
            }}
          >
            Our site developers give master web application advancement and
            website architecture administrations to our clients. SRJ Global
            Technologies offers an assortment of web composition and improvement
            administrations, from making portable web advancement arrangements
            and responsive web architectures, to building custom web based
            business and intranet encounters utilizing the most recent and
            demonstrated web technologies.
            <br /> With up to 85% of customers visiting a company’s or service
            provider’s site before making a purchase, more buyers now make
            decisions based on their online experience: the appearance,
            usability, and accessibility of your website matter more than
            ever—especially in an increasingly competitive market.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src={blogHero1}
            alt="about"
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section
        className="whyGrid"
        style={{
          padding: "80px 6%",
          display: "grid",
          gridTemplateColumns: "1fr 300px 1fr",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* LEFT */}
        <div>
          {[
            ["🏆", "High Quality"],
            ["⏰", "On Time Delivery"],
          ].map((item, i) => (
            <div
              key={i}
              className="hoverCard"
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "18px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "40px" }}>{item[0]}</div>
              <h3 style={{ fontSize: "20px" }}>{item[1]}</h3>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div
          className="centerCircle"
          style={{
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "linear-gradient(135deg,#00bfff,#4f46e5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <div className="circleText" style={{ fontSize: "18px" }}>
            Why Choose SRJ Global
          </div>
        </div>

        {/* RIGHT */}
        <div>
          {[
            ["🎧", "Support"],
            ["🤝", "Trusted Team"],
          ].map((item, i) => (
            <div
              key={i}
              className="hoverCard"
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "18px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "40px" }}>{item[0]}</div>
              <h3 style={{ fontSize: "20px" }}>{item[1]}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
