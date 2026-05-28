import { useLocation, useNavigate } from "react-router-dom";

function BlogDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const blog = location.state;

  // AGAR DATA NA MILE
  if (!blog) {
    return (
      <div
        style={{
          padding: "100px",
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        No Blog Data Found
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef4fb",
        fontFamily: "'Poppins', sans-serif",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          background: "white",
          borderRadius: "25px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={blog.image}
          alt="blog"
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "40px",
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: "12px 24px",
              border: "none",
              borderRadius: "40px",
              background: "#2563ff",
              color: "white",
              cursor: "pointer",
              marginBottom: "30px",
            }}
          >
            ← Back
          </button>

          <h1
            style={{
              fontSize: "45px",
              lineHeight: "65px",
              color: "#1e293b",
              marginBottom: "20px",
            }}
          >
            {blog.title}
          </h1>

          <p
            style={{
              color: "#2563eb",
              fontSize: "22px",
              lineHeight: "40px",
              marginBottom: "25px",
              fontStyle: "italic",
            }}
          >
            {blog.subtitle}
          </p>

          <p
            style={{
              color: "#475569",
              fontSize: "20px",
              lineHeight: "38px",
            }}
          >
            {blog.fullDesc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
