import { useRef } from "react";
import { motion } from "framer-motion";
import HeroImage from "./assets/hero.png";
import { Link } from "react-router-dom";

function Home() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -750,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 750,
      behavior: "smooth",
    });
  };
  const services = [
    {
      title: "Web Development",
      icon: "🌐",
      desc: "Modern responsive websites with fast performance and scalable architecture.",
    },
    {
      title: "App Development",
      icon: "📱",
      desc: "Professional Android & iOS apps designed for performance and user experience.",
    },
    {
      title: "SEO Optimization",
      icon: "🚀",
      desc: "Increase rankings and drive organic traffic with advanced SEO strategies.",
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      desc: "Creative and user-friendly interfaces with premium modern design.",
    },
    {
      title: "Cloud Solutions",
      icon: "☁️",
      desc: "Secure and scalable cloud infrastructure for modern businesses.",
    },
    {
      title: "Digital Marketing",
      icon: "📈",
      desc: "Boost your business reach with social media and marketing campaigns.",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        fontFamily: "Arial, sans-serif",
        background: "#f5f7fb",
      }}
    >
      <style>
        {`
::-webkit-scrollbar{
  height:8px;
}

::-webkit-scrollbar-thumb{
  background:#2563eb;
  border-radius:20px;
}

::-webkit-scrollbar-track{
  background:#e5e7eb;
}
`}
      </style>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 20px 140px",
          overflow: "hidden",
          background:
            "linear-gradient(135deg,#015b73 0%,#1b2678 50%,#5f47d6 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.45))",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "550px",
            height: "550px",
            background: "#00d4ff",
            filter: "blur(180px)",
            opacity: "0.15",
            top: "-120px",
            left: "-120px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background: "#9333ea",
            filter: "blur(180px)",
            opacity: "0.15",
            bottom: "-120px",
            right: "-120px",
          }}
        />

        <motion.img
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          src={HeroImage}
          alt="hero"
          style={{
            position: "absolute",
            width: "1000px",
            maxWidth: "85%",
            opacity: "0.12",
            zIndex: "1",
            objectFit: "contain",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: "2",
            maxWidth: "1500px",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              padding: "12px 24px",
              borderRadius: "999px",
              marginBottom: "35px",
              backdropFilter: "blur(10px)",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            ✨ Future-Ready Digital Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(46px,6vw,95px)",
              fontWeight: "900",
              color: "white",
              lineHeight: "1.1",
              marginBottom: "10px",
            }}
          >
            Building Future-Ready
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            style={{
              fontSize: "clamp(46px,7vw,110px)",
              fontWeight: "900",
              lineHeight: "1.1",
              marginBottom: "30px",
              background:
                "linear-gradient(to right,#00ff99,#47d7ff,#8f9fff,#d882ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Digital Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{
              color: "#e5e7eb",
              fontSize: "22px",
              lineHeight: "1.9",
              maxWidth: "1050px",
              margin: "0 auto",
            }}
          >
            Websites, SEO, Branding, App Development & Marketing — all tailored
            to grow your business, strengthen your online presence.
          </motion.p>

          <div
            style={{
              marginTop: "55px",
              display: "flex",
              gap: "22px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {/* SERVICES BUTTON */}
            <Link to="/services" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background:
                    "linear-gradient(to right,#008cff,#5b6cff,#9333ea)",
                  border: "none",
                  color: "white",
                  padding: "18px 42px",
                  borderRadius: "18px",
                  fontSize: "18px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.28)",
                }}
              >
                Explore our Services
              </motion.button>
            </Link>

            {/* CONTACT US BUTTON */}
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  padding: "18px 42px",
                  borderRadius: "18px",
                  fontSize: "18px",
                  fontWeight: "700",
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                }}
              >
                Get Free Quote
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      {/* STATS SECTION */}
      <section
        style={{
          marginTop: "-80px",
          position: "relative",
          zIndex: "20",
          padding: "0 20px 120px",
        }}
      >
        <div
          style={{
            maxWidth: "1450px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          {[
            ["850+", "Projects Completed"],
            ["1252+", "Happy Clients"],
            ["10+", "Years Experience"],
            ["24/7", "Support Available"],
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              style={{
                background: "rgba(255,255,255,0.96)",
                backdropFilter: "blur(18px)",
                padding: "50px 25px",
                borderRadius: "28px",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              <h1
                style={{
                  fontSize: "58px",
                  fontWeight: "900",
                  marginBottom: "10px",
                  background: "linear-gradient(to right,#2563eb,#9333ea)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item[0]}
              </h1>

              <p
                style={{
                  fontSize: "20px",
                  color: "#4b5563",
                  fontWeight: "600",
                }}
              >
                {item[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      ```jsx
      {/* SERVICES SECTION */}
      <section
        style={{
          padding: "100px 20px",
          background: "#f8f9fb",
        }}
      >
        <div
          style={{
            maxWidth: "1450px",
            margin: "0 auto",
          }}
        >
          {/* TOP AREA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "50px",
              flexWrap: "wrap",
              marginBottom: "60px",
            }}
          >
            {/* CIRCLE */}
            <div
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background: "linear-gradient(135deg,#0d6efd 0%,#38bdf8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "800",
                fontSize: "40px",
                textAlign: "center",
                boxShadow: "0 15px 40px rgba(13,110,253,.25)",
              }}
            >
              OUR
              <br />
              SERVICES
            </div>

            {/* RIGHT CONTENT */}
            <div
              style={{
                flex: 1,
                minWidth: "300px",
              }}
            >
              <h2
                style={{
                  color: "#0d47e8",
                  fontSize: "clamp(40px,4vw,48px)",
                  fontWeight: "800",
                  marginBottom: "20px",
                }}
              >
                Delivering Innovative Digital Solutions in India
              </h2>

              <p
                style={{
                  color: "#444",
                  fontSize: "16px",
                  lineHeight: "1.9",
                  maxWidth: "850px",
                }}
              >
                SRJ Global Technologies is your trusted partner in website
                development, UI/UX design, software solutions and online
                branding. We combine technology with creativity to help your
                business grow.
              </p>

              <button
                style={{
                  marginTop: "25px",
                  background: "linear-gradient(to right,#0d6efd,#38bdf8)",
                  border: "none",
                  color: "#fff",
                  padding: "15px 35px",
                  borderRadius: "40px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Enquire Now →
              </button>
            </div>
          </div>

          {/* SERVICE CARDS */}
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              paddingBottom: "15px",
              scrollBehavior: "smooth",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                style={{
                  minWidth: "700px",
                  background: "#fff",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    minHeight: "300px",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      padding: "40px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "20px",
                        marginBottom: "15px",
                      }}
                    >
                      {service.icon}
                    </div>

                    <h3
                      style={{
                        color: "#0d47e8",
                        fontSize: "24px",
                        marginBottom: "15px",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        color: "#555",
                        lineHeight: "1.8",
                        fontSize: "16px",
                      }}
                    >
                      {service.desc}
                    </p>

                    <div
                      style={{
                        marginTop: "20px",
                        color: "#0d6efd",
                        fontWeight: "600",
                      }}
                    >
                      Read More →
                    </div>
                  </div>

                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <img
                      src={HeroImage}
                      alt=""
                      style={{
                        width: "100%",
                        maxWidth: "250px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollLeft}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: "bold",
              color: "white",
              background: "linear-gradient(135deg,#2563eb,#3b82f6)",
              boxShadow: "0 10px 25px rgba(37,99,235,.25)",
            }}
          >
            ←
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollRight}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: "bold",
              color: "white",
              background: "linear-gradient(135deg,#2563eb,#3b82f6)",
              boxShadow: "0 10px 25px rgba(37,99,235,.25)",
            }}
          >
            →
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export default Home;
