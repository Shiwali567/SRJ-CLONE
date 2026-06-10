import { useNavigate } from "react-router-dom";
import blogHero from "./blimg-DYk7VQn2.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import FloatingButtons from "./FloatingButtons";
function Blog() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

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
                  {blog.category}
                </p>

                <p
                  style={{
                    color: "#475569",
                    fontSize: "18px",
                    lineHeight: "32px",
                  }}
                >
                  {blog.description}
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
      <FloatingButtons />
    </div>
  );
}

export default Blog;
