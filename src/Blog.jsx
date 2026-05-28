import { useNavigate } from "react-router-dom";
import blogHero from "./blimg-DYk7VQn2.jpg";

function Blog() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
      title: "The Future of Online Shopping: Trends in E-Commerce Development",

      subtitle:
        "How innovations in E-commerce development are transforming online retail, from AI-driven personalization to scalable solutions.",

      desc: "The world of digital retail is evolving rapidly, with e-commerce development shaping the future of online shopping and customer experiences.",

      fullDesc:
        "E-commerce is growing rapidly with advanced AI systems, automation, personalized shopping experiences, and modern payment solutions. Businesses are investing heavily in scalable online stores to improve customer engagement and boost revenue. Technologies like AR shopping, AI chatbots, and voice commerce are becoming the future of online retail.",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

      title: "5 Reasons Your Small Business Needs a Professional Website",

      subtitle:
        "How investing in expert web design can transform your online presence and attract more customers.",

      desc: "A strong online presence is essential in today’s digital market. Professional websites help businesses grow faster and build trust.",

      fullDesc:
        "A professional website improves business credibility, attracts more customers, boosts SEO rankings, and increases online sales. Modern responsive websites also improve user experience across all devices and help small businesses compete with larger brands in the digital marketplace.",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",

      title: "Why Your Business Needs a Professional App Development Partner",

      subtitle:
        "Discover how powerful branding and UI/UX design can strengthen your business identity.",

      desc: "Modern businesses require scalable applications and smooth digital experiences to improve customer engagement and productivity.",

      fullDesc:
        "Professional app development companies help businesses create scalable, secure, and high-performance mobile apps. They provide better UI/UX design, optimized performance, modern technologies, and long-term support that improve customer satisfaction and business growth.",
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",

      title:
        "Top 10 Benefits of Professional Website Design for Small Businesses",

      subtitle:
        "Learn how website designing services improve SEO, branding, and customer conversion.",

      desc: "A professionally designed website helps businesses establish credibility and stay ahead in competitive digital marketplaces.",

      fullDesc:
        "Professional website design improves branding, customer trust, SEO optimization, mobile responsiveness, and conversion rates. Businesses with attractive and user-friendly websites are more likely to generate leads and increase customer engagement in competitive markets.",
    },
  ];

  return (
    <div
      style={{
        background: "#dfeaf5",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* HERO IMAGE */}
      <div
        style={{
          width: "100%",
          height: "360px",
          overflow: "hidden",
        }}
      >
        <img
          src={blogHero}
          alt="blog"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* BLOG SECTION */}
      <div
        style={{
          padding: "60px 20px 100px",
          maxWidth: "1700px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
            gap: "40px",
          }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              style={{
                background: "white",
                borderRadius: "22px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  width: "100%",
                  height: "230px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={blog.image}
                  alt="blog"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div
                style={{
                  padding: "25px",
                }}
              >
                <h2
                  style={{
                    fontSize: "25px",
                    lineHeight: "40px",
                    color: "#1e293b",
                    marginBottom: "15px",
                    fontWeight: "700",
                  }}
                >
                  {blog.title}
                </h2>

                <p
                  style={{
                    color: "#2563eb",
                    fontSize: "18px",
                    lineHeight: "32px",
                    marginBottom: "18px",
                    fontStyle: "italic",
                  }}
                >
                  {blog.subtitle}
                </p>

                <p
                  style={{
                    color: "#475569",
                    fontSize: "18px",
                    lineHeight: "32px",
                  }}
                >
                  {blog.desc}
                </p>

                {/* READ MORE BUTTON */}
                <button
                  onClick={() =>
                    navigate("/blog-details", {
                      state: blog,
                    })
                  }
                  style={{
                    marginTop: "25px",
                    padding: "14px 28px",
                    border: "none",
                    borderRadius: "40px",
                    background: "#2563ff",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "600",
                    boxShadow: "0 10px 25px rgba(37,99,255,0.25)",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
