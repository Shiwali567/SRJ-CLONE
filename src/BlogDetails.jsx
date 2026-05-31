import { useLocation, useNavigate } from "react-router-dom";

function BlogDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const blog = location.state;

  if (!blog) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          fontFamily: "'Poppins', sans-serif",
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
        padding: "clamp(20px,4vw,50px)",
      }}
    >
      <style>
        {`
          *{
            box-sizing:border-box;
          }

          .blogCard{
            max-width:1100px;
            margin:auto;
            background:white;
            border-radius:25px;
            overflow:hidden;
            box-shadow:0 10px 30px rgba(0,0,0,0.1);
          }

          .blogImage{
            width:100%;
            height:450px;
            object-fit:cover;
          }

          .blogContent{
            padding:40px;
          }

          .backBtn{
            padding:12px 24px;
            border:none;
            border-radius:40px;
            background:#2563ff;
            color:white;
            cursor:pointer;
            margin-bottom:30px;
            font-size:16px;
            font-weight:600;
            transition:.3s;
          }

          .backBtn:hover{
            transform:translateY(-3px);
          }

          .blogTitle{
            font-size:45px;
            line-height:60px;
            color:#1e293b;
            margin-bottom:20px;
            word-break:break-word;
          }

          .blogSubtitle{
            color:#2563eb;
            font-size:22px;
            line-height:38px;
            margin-bottom:25px;
            font-style:italic;
          }

          .blogDesc{
            color:#475569;
            font-size:18px;
            line-height:34px;
            white-space:pre-line;
          }

          @media(max-width:768px){

            .blogCard{
              border-radius:18px;
            }

            .blogImage{
              height:260px;
            }

            .blogContent{
              padding:25px;
            }

            .backBtn{
              width:100%;
            }

            .blogTitle{
              font-size:32px;
              line-height:44px;
            }

            .blogSubtitle{
              font-size:18px;
              line-height:30px;
            }

            .blogDesc{
              font-size:16px;
              line-height:28px;
            }
          }

          @media(max-width:500px){

            .blogImage{
              height:200px;
            }

            .blogContent{
              padding:18px;
            }

            .blogTitle{
              font-size:26px;
              line-height:36px;
            }

            .blogSubtitle{
              font-size:16px;
              line-height:28px;
            }

            .blogDesc{
              font-size:15px;
              line-height:26px;
            }
          }
        `}
      </style>

      <div className="blogCard">
        <img src={blog.image} alt={blog.title} className="blogImage" />

        <div className="blogContent">
          <button onClick={() => navigate(-1)} className="backBtn">
            ← Back
          </button>

          <h1 className="blogTitle">{blog.title}</h1>

          <p className="blogSubtitle">{blog.subtitle}</p>

          <p className="blogDesc">{blog.fullDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
