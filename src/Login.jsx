import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import loginImg from "./assets/image.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ FIXED LOGIN FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // save token
      localStorage.setItem("token", res.data.token);

      // save user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      className="mainContainer"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexWrap: "wrap",
        background: "#fff",
      }}
    >
      {/* LEFT IMAGE */}
      <div
        style={{
          flex: 1,
          minWidth: "50%",
          height: "100vh",
          background: "#f5f7ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={loginImg}
          alt="login"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </div>

      {/* RIGHT FORM */}
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <h1 style={{ textAlign: "center" }}>Login</h1>

          <p style={{ textAlign: "center", marginBottom: "20px" }}>
            Welcome Back
          </p>

          {/* ✅ FORM WRAPPED */}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />

            <button type="submit" style={buttonStyle}>
              Login
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#1452ff" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#1452ff",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default Login;
