import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import registerImg from "./assets/register.jpg";

const ADMIN_EMAIL = "admin@gmail.com"; // 👈 yaha apni admin id lock karo

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    try {
      // 👇 role auto decide
      const payload = {
        ...form,
        role: form.email === ADMIN_EMAIL ? "admin" : "user",
      };

      await axios.post("http://localhost:5000/api/auth/register", payload);

      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexWrap: "wrap" }}>
      {/* LEFT IMAGE */}
      <div style={{ flex: 1, minWidth: "50%", height: "100vh" }}>
        <img
          src={registerImg}
          alt="register"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
      </div>

      {/* RIGHT FORM */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "420px" }}>
          <h1 style={{ textAlign: "center" }}>Register</h1>

          <input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={inputStyle}
          />

          {/* ❌ ROLE HIDDEN */}

          <button onClick={submit} style={buttonStyle}>
            Register
          </button>

          <p style={{ textAlign: "center" }}>
            Already have account? <Link to="/login">Login</Link>
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
};

export default Register;
