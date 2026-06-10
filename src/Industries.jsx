import { useState } from "react";
import FloatingButtons from "./FloatingButtons";
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
  const [showDetails, setShowDetails] = useState(false);
  const services = [
    {
      title: "Business Startup",
      desc: "Launch your startup with confidence.",
      icon: <FaRocket />,
      details:
        "We help entrepreneurs transform innovative ideas into successful businesses through technology, branding, and strategic planning.",

      features: [
        "Startup Strategy Planning",
        "MVP Development",
        "Business Automation",
        "Cloud Integration",
        "Technology Consulting",
      ],
      benefits: [
        "Faster Market Entry",
        "Lower Development Cost",
        "Scalable Infrastructure",
        "Improved Brand Presence",
        "Better Customer Acquisition",
      ],

      services: [
        "Startup Website Development",
        "Mobile App Development",
        "Brand Identity Design",
        "Digital Marketing",
        "Business Consultation",
      ],
    },
    {
      title: "Enterprise Service",
      desc: "Robust, scalable enterprise solutions.",
      icon: <FaBuilding />,
      details:
        "Enterprise solutions designed to streamline operations, improve efficiency, and support large-scale business growth.",

      features: [
        "ERP Integration",
        "CRM Solutions",
        "Cloud Infrastructure",
        "Business Intelligence",
        "Data Analytics",
      ],

      benefits: [
        "Improved Productivity",
        "Centralized Operations",
        "Better Decision Making",
        "Enhanced Security",
        "Reduced Operational Costs",
      ],
      services: [
        "ERP Development",
        "CRM Systems",
        "Enterprise Portals",
        "Workflow Automation",
        "Data Management",
      ],
    },
    {
      title: "Education & Learning",
      desc: "Smart solutions for smart learners.",
      icon: <FaGraduationCap />,
      details:
        "Modern educational platforms that enhance online learning experiences for students, teachers, and institutions.",

      features: [
        "E-Learning Platforms",
        "Student Management",
        "Live Classes",
        "Online Assessments",
        "Learning Analytics",
      ],

      benefits: [
        "Better Student Engagement",
        "Remote Learning Support",
        "Improved Learning Outcomes",
        "Easy Administration",
        "Scalable Education Systems",
      ],
      services: [
        "LMS Development",
        "Virtual Classroom Solutions",
        "Exam Portals",
        "Student Apps",
        "Educational Websites",
      ],
    },
    {
      title: "Ecommerce & Retail",
      desc: "Scalable retail solutions.",
      icon: <FaShoppingCart />,
      details:
        "Comprehensive ecommerce platforms that help businesses sell products online and manage operations efficiently.",

      features: [
        "Online Store Setup",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking",
        "Customer Dashboard",
      ],

      benefits: [
        "Increased Sales",
        "Global Reach",
        "Improved Customer Experience",
        "Easy Inventory Control",
        "Higher Revenue",
      ],
      services: [
        "Ecommerce Website Development",
        "Marketplace Solutions",
        "Retail Management Software",
        "Mobile Shopping Apps",
        "Payment Integration",
      ],
    },
    {
      title: "Digital Marketing",
      desc: "Drive visibility and leads.",
      icon: <FaBullhorn />,
      details:
        "Digital marketing solutions focused on increasing brand awareness, customer engagement, and business growth.",

      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Email Campaigns",
        "Content Marketing",
        "Performance Analytics",
      ],

      benefits: [
        "Higher Brand Visibility",
        "Quality Lead Generation",
        "Improved Conversion Rates",
        "Better ROI",
        "Customer Retention",
      ],
      services: [
        "SEO Services",
        "Social Media Management",
        "Google Ads",
        "Email Marketing",
        "Content Creation",
      ],
    },
    {
      title: "Social Networking",
      desc: "Connect your audience.",
      icon: <FaUsers />,
      details:
        "Build powerful online communities and social networking platforms with modern engagement features.",

      features: [
        "User Profiles",
        "Real-Time Chat",
        "Media Sharing",
        "Groups & Communities",
        "Notifications",
      ],

      benefits: [
        "Stronger User Engagement",
        "Community Building",
        "Increased Retention",
        "Real-Time Communication",
        "Network Growth",
      ],
      services: [
        "Social Media Platforms",
        "Community Portals",
        "Messaging Systems",
        "Networking Apps",
        "User Management",
      ],
    },
    {
      title: "Healthcare & Fitness",
      desc: "Build wellness with tech.",
      icon: <FaHeartbeat />,
      details:
        "Technology-driven healthcare and fitness solutions that improve patient care and wellness management.",

      features: [
        "Appointment Scheduling",
        "Health Tracking",
        "Telemedicine",
        "Fitness Monitoring",
        "Patient Records",
      ],

      benefits: [
        "Improved Patient Care",
        "Better Accessibility",
        "Efficient Management",
        "Health Insights",
        "Enhanced User Experience",
      ],
      services: [
        "Healthcare Portals",
        "Fitness Apps",
        "Telemedicine Platforms",
        "Patient Management Systems",
        "Wellness Solutions",
      ],
    },
    {
      title: "Event & Ticket",
      desc: "Manage your events seamlessly.",
      icon: <FaCalendarAlt />,
      details:
        "Complete event management solutions for planning, promotion, ticketing, and attendee engagement.",

      features: [
        "Online Registration",
        "Ticket Booking",
        "Event Scheduling",
        "QR Verification",
        "Analytics Dashboard",
      ],

      benefits: [
        "Simplified Event Management",
        "Improved Attendance",
        "Automated Ticketing",
        "Real-Time Monitoring",
        "Better User Experience",
      ],
      services: [
        "Event Websites",
        "Ticket Booking Platforms",
        "Conference Management",
        "Event Apps",
        "Registration Systems",
      ],
    },
    {
      title: "Food & Beverage",
      desc: "Digitizing dining experiences.",
      icon: <FaUtensils />,
      details:
        "Technology solutions for restaurants, cafes, and food businesses to improve customer experience and operations.",

      features: [
        "Online Ordering",
        "Table Reservation",
        "Menu Management",
        "Delivery Tracking",
        "Customer Feedback",
      ],

      benefits: [
        "Increased Orders",
        "Faster Service",
        "Improved Customer Satisfaction",
        "Operational Efficiency",
        "Revenue Growth",
      ],
      services: [
        "Restaurant Websites",
        "Food Delivery Apps",
        "POS Systems",
        "Reservation Platforms",
        "Menu Management Solutions",
      ],
    },
    {
      title: "Ticketing & Booking",
      desc: "Power travel and leisure.",
      icon: <FaTicketAlt />,
      details:
        "Advanced booking and reservation platforms for travel, hospitality, and entertainment businesses.",

      features: [
        "Online Reservations",
        "Payment Integration",
        "Booking Management",
        "Customer Accounts",
        "Reporting Tools",
      ],

      benefits: [
        "Easy Booking Process",
        "Higher Customer Satisfaction",
        "Automated Operations",
        "Increased Revenue",
        "Better Resource Utilization",
      ],
      services: [
        "Travel Booking Portals",
        "Hotel Reservation Systems",
        "Tour Management Solutions",
        "Online Ticketing Platforms",
        "Booking Mobile Apps",
      ],
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
              
.detailsBox::-webkit-scrollbar {
  width: 6px;
}

.detailsBox::-webkit-scrollbar-thumb {
  background: #2563ff;
  border-radius: 20px;
}
  .rightPanel::-webkit-scrollbar {
  width: 8px;
}
  .rightPanel::-webkit-scrollbar-thumb {
  background: linear-gradient(#0ea5ff, #2563ff);
  border-radius: 20px;
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

.rightPanel::-webkit-scrollbar-track {
  background: transparent;
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
                  fontSize: "30px",
                  marginBottom: "12px",
                  color: active?.title === service.title ? "white" : "#0ea5ff",
                }}
              >
                {service.icon}
              </div>

              <h3
                className="serviceTitle"
                style={{
                  fontSize: "24px",
                  marginBottom: "8px",
                  fontWeight: "700",
                }}
              >
                {service.title}
              </h3>

              <p
                className="serviceDesc"
                style={{
                  fontSize: "18px",
                  lineHeight: "26px",
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
            height: "850px",
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(12px)",
            borderRadius: "35px",
            padding: "70px",
            position: "relative",
            overflowX: "hidden",
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
              onClick={() => setShowDetails(!showDetails)}
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
              {showDetails ? "Hide Details" : "Explore More"}
            </button>
            {showDetails && (
              <div
                className="detailsBox"
                style={{
                  marginTop: "40px",
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  maxHeight: "400px",
                  overflowY: "auto",
                }}
              >
                <h3
                  style={{
                    color: "#2563ff",
                    marginBottom: "15px",
                    fontSize: "28px",
                  }}
                >
                  About This Service
                </h3>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "30px",
                    marginBottom: "25px",
                  }}
                >
                  {active.details}
                </p>

                {/* Features */}
                <h3 style={{ color: "#2563ff" }}>Key Features</h3>

                <ul style={{ marginBottom: "25px" }}>
                  {active.features?.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "10px",
                        color: "#444",
                      }}
                    >
                      ✓ {item}
                    </li>
                  ))}
                </ul>

                {/* Benefits */}
                <h3 style={{ color: "#2563ff" }}>Benefits</h3>

                <ul style={{ marginBottom: "25px" }}>
                  {active.benefits?.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "10px",
                        color: "#444",
                      }}
                    >
                      ★ {item}
                    </li>
                  ))}
                </ul>

                {/* Services */}
                <h3 style={{ color: "#2563ff" }}>Services Included</h3>

                <ul>
                  {active.services?.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "10px",
                        color: "#444",
                      }}
                    >
                      ➜ {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <FloatingButtons />
    </div>
  );
}

export default Industries;
