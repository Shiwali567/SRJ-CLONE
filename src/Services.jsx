import { useState } from "react";
import FloatingButtons from "./FloatingButtons";
import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaPaintBrush,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";

function Services() {
  const navigate = useNavigate();
  const services = [
    {
      title: "Website Designing",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      icon: <FaLaptopCode />,
      desc: "We create stunning, responsive websites that reflect your brand’s personality and engage your visitors effectively.",

      fullDescription:
        "Our website designing service focuses on creating visually appealing, user-friendly, and responsive websites. We ensure every website is optimized for performance, SEO, and user experience.Website designing involves planning, conceptualizing, and arranging content intended for the Internet. It is not only about aesthetics but also about usability, navigation, and user experience. Designers focus on how a website looks and how it works, ensuring it meets both business objectives and user needs.",

      features: [
        "Responsive Design",
        "SEO Friendly Structure",
        "Fast Loading Speed",
        "Modern UI/UX",
        "Cross Browser Compatibility",
        "Mobile Friendly Layout",
      ],
      technologies: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
      ],

      benefits: [
        "Increase online presence",
        "Better customer engagement",
        "Professional brand image",
        "Higher conversion rates",
      ],
    },

    {
      title: "Mobile App Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      icon: <FaMobileAlt />,
      desc: "High-performance Android & iOS applications with modern UI and smooth functionality.",

      fullDescription:
        "Mobile app development is the process of designing, building, testing, and deploying software applications for mobile devices, encompassing native, cross-platform, and web-based apps.Mobile app development involves creating software applications that run on smartphones, tablets, and other mobile devices. These apps can be native (built for a specific platform like iOS or Android), cross-platform (using frameworks like React Native to run on multiple platforms), or progressive web apps (PWAs) that provide app-like experiences in web browsers.Developers must consider hardware constraints such as CPU architecture, RAM, storage, screen size, resolution, and input methods like touchscreens or keyboards.",
      features: [
        "Android Apps",
        "iOS Apps",
        "Cross Platform Apps",
        "Flutter Development",
        "API Integration",
        "Push Notifications",
        "App Store Deployment",
      ],
      technologies: [
        "Flutter",
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDB",
        "Java",
      ],

      benefits: [
        "Wider reach",
        "Better customer engagement",
        "Higher revenue",
        "Reach mobile users",
        "Increase customer engagement",
        "Improve brand visibility",
        "Generate more revenue",
      ],
    },

    {
      title: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

      icon: <FaCloud />,
      desc: "Secure cloud solutions with scalable infrastructure for modern businesses.",
      fullDescription:
        "Our cloud computing services help businesses migrate, manage, and optimize cloud infrastructure while ensuring security, scalability, and cost efficiency.Cloud computing is the on-demand delivery of computing resources over the internet, enabling scalable, flexible, and cost-efficient access to infrastructure, platforms, and software without owning physical hardware.Cloud computing allows users to access computing resources such as servers, storage, networking, and applications remotely over the internet, eliminating the need for on-premises infrastructure and large upfront investments in hardware.Resources are provided on a pay-as-you-go basis, allowing organizations to scale efficiently and only pay for what they use .The cloud enables platform independence, mobility, and collaborative access to applications and data.",

      features: [
        "Cloud Migration",
        "Cloud Security",
        "Data Backup",
        "Server Management",
        "Scalable Infrastructure",
        "24/7 Monitoring",
      ],

      technologies: [
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Linux",
      ],

      benefits: [
        "Reduce IT costs",
        "Improve scalability",
        "Enhance security",
        "Increase operational efficiency",
      ],
    },

    {
      title: "UI/UX Designing",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
      icon: <FaPaintBrush />,
      desc: "Our creative designs turn ideas into impactful visuals that speak directly to your target audience.",
      fullDescription:
        "We design intuitive and visually appealing interfaces that enhance user satisfaction and improve engagement across websites and mobile applications.In today's digital landscape, understanding the principles of UI and UX design is essential for creating products that resonate with users. Whether you are a designer, developer, or product manager, mastering these concepts will help you contribute to better product outcomes and enhance user satisfaction. For those looking to delve deeper into UI/UX design, structured learning paths and resources are available to guide your journey",

      features: [
        "Wireframing",
        "Prototyping",
        "User Research",
        "Interactive Design",
        "Responsive Layouts",
        "Brand Consistency",
      ],
      technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"],

      benefits: [
        "Better user experience",
        "Higher engagement",
        "Improved usability",
        "Stronger brand identity",
      ],
    },
    {
      title: "SEO Optimization",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
      icon: <FaSearch />,
      desc: "Boost rankings and increase organic traffic using advanced SEO strategies.",
      fullDescription:
        "Our SEO services help improve search engine rankings, drive organic traffic, and increase visibility for your business online.SEO stands for Search Engine Optimization. It involves a series of strategies and techniques aimed at improving a website's position in search engine results pages (SERPs) for relevant queries. The ultimate goal of SEO is to attract more visitors to a website through unpaid (organic) search results, which can lead to increased conversions, sales, or sign-ups",

      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Link Building",
        "Content Optimization",
        "SEO Audits",
      ],
      technologies: [
        "Google Search Console",
        "Google Analytics",
        "Ahrefs",
        "SEMrush",
        "Yoast SEO",
      ],

      benefits: [
        "Higher Google rankings",
        "More organic traffic",
        "Increased leads",
        "Better online visibility",
      ],
    },

    {
      title: "Cyber Security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      icon: <FaShieldAlt />,
      desc: "Protect your business with strong security systems and data protection solutions.",
      fullDescription:
        "We provide advanced cybersecurity solutions to safeguard your digital assets, prevent cyber threats, and ensure business continuity.As cyber threats continue to evolve, organizations and individuals must adopt a proactive approach to cybersecurity. This includes investing in technology, training, and developing comprehensive security policies to protect against the growing landscape of cyber threats. By understanding the risks and implementing effective cybersecurity measures, we can safeguard our digital lives and maintain trust in our systems and data.",

      features: [
        "Network Security",
        "Threat Detection",
        "Data Encryption",
        "Security Audits",
        "Firewall Protection",
        "Risk Assessment",
      ],

      technologies: [
        "Kali Linux",
        "Wireshark",
        "Nmap",
        "Burp Suite",
        "SIEM Tools",
      ],
      benefits: [
        "Protect sensitive data",
        "Reduce security risks",
        "Maintain compliance",
        "Increase customer trust",
      ],
    },

    {
      title: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      icon: "📈",
      desc: "Grow your brand through powerful social media and advertising campaigns.",
      fullDescription:
        "Our digital marketing strategies help businesses increase brand awareness, generate leads, and drive conversions through multiple online channels.Digital marketing continues to evolve with AI-driven personalization, generative content, voice search optimization, and advanced analytics. Businesses increasingly leverage these technologies to enhance targeting, improve customer experience, and maximize ROI.In summary, digital marketing is a dynamic, data-driven approach that integrates multiple online channels and strategies to reach, engage, and convert audiences efficiently, making it a critical component of modern business growth and brand development.",

      features: [
        "Social Media Marketing",
        "Google Ads",
        "Facebook Ads",
        "Content Marketing",
        "Email Campaigns",
        "Performance Tracking",
      ],

      technologies: [
        "Google Ads",
        "Meta Ads Manager",
        "Mailchimp",
        "Google Analytics",
      ],
      benefits: [
        "Increase brand awareness",
        "Generate quality leads",
        "Boost sales",
        "Improve customer engagement",
      ],
    },
    {
      title: "Graphic Designing",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      icon: "🎨",
      desc: "Creative logo, branding, and graphic solutions for modern businesses.",
      fullDescription:
        "Our graphic design services create visually compelling branding materials that help businesses establish a strong and memorable identity.Graphic design is a form of visual communication that combines text, images, colors, shapes, and layouts to convey messages effectively and influence perception or emotion. It is often referred to as communication design, as it aims to inform, persuade, or engage viewers through visual storytelling. Graphic design can range from small-scale assets like logos and app icons to large-scale projects such as websites, billboards, and packaging.",

      features: [
        "Logo Design",
        "Brand Identity",
        "Social Media Graphics",
        "Brochure Design",
        "Business Cards",
        "Marketing Materials",
      ],

      technologies: ["Photoshop", "Illustrator", "CorelDRAW", "Canva"],
      benefits: [
        "Professional branding",
        "Stronger visual identity",
        "Better customer perception",
        "Increased brand recognition",
      ],
    },

    {
      title: "E-Commerce Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      icon: "🛒",
      desc: "Professional online stores with secure payments and modern shopping experience.",

      fullDescription:
        "We develop powerful e-commerce platforms that provide seamless shopping experiences, secure transactions, and scalable business growth.E-commerce development is the process of creating, designing, and maintaining online platforms that enable businesses to sell products or services digitally, integrating secure transactions, inventory management, and user-friendly interfaces.",

      features: [
        "Online Store Setup",
        "Payment Gateway Integration",
        "Product Management",
        "Order Tracking",
        "Mobile Friendly Design",
        "Inventory Management",
      ],

      technologies: [
        "Shopify",
        "WooCommerce",
        "React.js",
        "Node.js",
        "MongoDB",
      ],

      benefits: [
        "Sell products online",
        "Increase revenue",
        "Expand customer reach",
        "Automate business processes",
      ],
    },

    {
      title: "AI Automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      icon: "🤖",
      desc: "Smart AI-powered solutions to automate and improve business operations.",
      fullDescription:
        "We create AI-driven automation systems that reduce manual work, improve productivity, and provide intelligent business insights. AI automation represents a transformative approach to business operations, bridging traditional RPA and intelligent AI systems. By combining AI technologies with automation tools, organizations can streamline workflows, reduce errors, enhance productivity, and enable employees to focus on higher-value tasks, ultimately driving innovation and growth across industries.",

      features: [
        "AI Chatbots",
        "Process Automation",
        "Predictive Analytics",
        "Data Analysis",
        "Machine Learning Models",
        "Workflow Automation",
      ],

      technologies: [
        "Python",
        "TensorFlow",
        "OpenAI API",
        "LangChain",
        "PyTorch",
      ],
      benefits: [
        "Save time",
        "Reduce operational costs",
        "Improve productivity",
        "Make data-driven decisions",
      ],
    },
  ];
  const techLinks = {
    "React.js": "https://react.dev",
    HTML5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    CSS3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    Bootstrap: "https://getbootstrap.com",
    "Tailwind CSS": "https://tailwindcss.com",
    AWS: "https://aws.amazon.com",
    Flutter: "https://flutter.dev",
    Firebase: "https://firebase.google.com",
    MongoDB: "https://www.mongodb.com",
  };

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
            fontSize: "clamp(30px,5vw,48px)",
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
            fontSize: "16px",
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
          // gridTemplateColumns: "380px 1fr",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
          alignItems: "stretch",
          maxWidth: "1700px",
          margin: "auto",
        }}
      >
        {/* LEFT SCROLLING CARDS */}
        <div
          className="leftScroll"
          style={{
            maxHeight: "calc(100vh - 140px)",
            overflowY: "auto",
            paddingRight: "10px",
            position: "sticky",
            top: "120px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
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
                {/* <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "20px",
                    marginBottom: "20px",
                  }}
                /> */}
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
                    fontSize: "25px",
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
                    fontSize: "14px",
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
            height: "calc(100vh - 140px)",
            overflowY: "auto",
          }}
        >
          {/* BIG ICON */}
          {/* <div
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
          </div> */}

          <h1
            style={{
              textAlign: "center",
              fontSize: "clamp(38px,5vw,60px)",
              fontWeight: "900",
              marginBottom: "30px",

              background: "linear-gradient(90deg, #00A6FF, #2563EB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",

              textShadow: "0 3px 10px rgba(37,99,235,0.15)",
            }}
          >
            {selectedService.title}
          </h1>

          <img
            src={selectedService.image}
            alt={selectedService.title}
            style={{
              width: "100%",
              maxWidth: "900px",
              height: "320px",
              objectFit: "cover",
              borderRadius: "25px",
              display: "block",
              margin: "0 auto 30px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            }}
          />

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

          {/* Overview */}
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "800",
              color: "#0f172a",
              marginBottom: "15px",
            }}
          >
            Overview
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#475569",
              lineHeight: "1.9",
              marginBottom: "35px",
            }}
          >
            {selectedService.fullDescription ||
              "Detailed information coming soon."}
          </p>

          {/* Features */}
          {selectedService.features && (
            <>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: "#0f172a",
                  marginBottom: "15px",
                }}
              >
                Key Features
              </h2>

              <ul
                style={{
                  paddingLeft: "25px",
                  lineHeight: "2",
                  color: "#475569",
                  fontSize: "18px",
                  marginBottom: "35px",
                }}
              >
                {selectedService.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {/* Technologies */}
          {selectedService.technologies && (
            <>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: "#0f172a",
                  marginBottom: "15px",
                }}
              >
                Technologies We Use
              </h2>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "35px",
                }}
              >
                {selectedService.technologies.map((tech, index) => (
                  <a
                    key={index}
                    href={
                      techLinks[tech] ||
                      `https://www.google.com/search?q=${encodeURIComponent(tech)}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#dbeafe",
                      color: "#2563eb",
                      padding: "10px 16px",
                      borderRadius: "30px",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "inline-block",
                      cursor: "pointer",
                    }}
                  >
                    {tech}
                  </a>
                ))}
              </div>
            </>
          )}

          {/* Benefits */}
          {selectedService.benefits && (
            <>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: "#0f172a",
                  marginBottom: "15px",
                }}
              >
                Benefits
              </h2>
              <ul
                style={{
                  paddingLeft: "25px",
                  lineHeight: "2",
                  color: "#475569",
                  fontSize: "18px",
                }}
              >
                {selectedService.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Explore Pricing Button */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "40px",
                }}
              >
                <button
                  onClick={() => navigate("/Pricing")}
                  style={{
                    background: "linear-gradient(to right,#00b7ff,#2563eb)",
                    color: "#fff",
                    border: "none",
                    padding: "15px 30px",
                    borderRadius: "50px",
                    fontSize: "16px",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 10px 25px rgba(37,99,235,0.3)",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Explore Pricing →
                </button>
              </div>
            </>
          )}
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
              .rightPanel::-webkit-scrollbar {
  width: 8px;
}
  .rightPanel::-webkit-scrollbar-thumb {
  background: #2563eb;
  border-radius: 20px;
}
  .rightPanel::-webkit-scrollbar-track {
  background: #dbeafe;
  border-radius: 20px;
}
  .rightPanel {
  scrollbar-width: thin;
}
          }
            @media (max-width:1200px){
  .rightPanel{
  height:auto !important;
  overflow: visible !important;
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
            .servicesGrid {
  display: grid !important;
  grid-template-columns: 380px 1fr !important;
  gap: 30px !important;
  align-items: stretch !important;
}

.leftScroll {
  scrollbar-width: thin;
}

.leftScroll::-webkit-scrollbar {
  width: 8px;
}

.leftScroll::-webkit-scrollbar-thumb {
  background: #2563eb;
  border-radius: 20px;
}
/* =========================
   LARGE DESKTOP
========================= */
@media (min-width: 1600px) {
  .servicesGrid {
    grid-template-columns: 420px 1fr !important;
  }
}

/* =========================
   LAPTOP
========================= */
@media (max-width: 1200px) {
  .servicesGrid {
    grid-template-columns: 1fr !important;
  }

  .leftScroll {
    position: relative !important;
    top: 0 !important;
    max-height: unset !important;
    overflow: visible !important;
    padding-right: 0 !important;
  }

  .rightPanel {
    position: relative !important;
    top: 0 !important;
    min-height: auto !important;
    margin-top: 20px !important;
  }
}

/* =========================
   TABLET
========================= */
@media (max-width: 992px) {
  .rightPanel {
    padding: 40px !important;
  }
}

/* =========================
   MOBILE
========================= */
@media (max-width: 768px) {

  .servicesGrid {
    gap: 20px !important;
  }

  .leftScroll > div {
    gap: 12px !important;
  }

  .leftScroll > div > div {
    padding: 22px !important;
  }

  .rightPanel {
    padding: 25px !important;
    border-radius: 25px !important;
  }

  .rightPanel h1 {
    font-size: 32px !important;
  }

  .rightPanel p {
    font-size: 17px !important;
    line-height: 1.8 !important;
  }
}

/* =========================
   SMALL MOBILE
========================= */
@media (max-width: 480px) {

  .leftScroll > div > div {
    padding: 18px !important;
    border-radius: 20px !important;
  }

  .rightPanel {
    padding: 18px !important;
  }

  .rightPanel h1 {
    font-size: 28px !important;
  }

  .rightPanel p {
    font-size: 16px !important;
  }
}
  @media (max-width:768px){

  .rightPanel > div:first-child{
    width:100px !important;
    height:100px !important;
    font-size:40px !important;
    border-radius:25px !important;
  }

}
        `}
      </style>
      <FloatingButtons />
    </div>
  );
}

export default Services;
