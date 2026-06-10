import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/");
      return;
    }

    if (user.role !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  const [contacts, setContacts] = useState([]);

  const [users, setUsers] = useState([]);
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/auth/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/plans")
      .then((res) => setPlans(res.data))
      .catch((err) => console.log(err));
  }, []);

  const cards = [
    {
      title: "Contacts",
      desc: "Manage contact form submissions",
      link: "/admin/contacts",
      icon: "📩",
    },
    {
      title: "Users",
      desc: "Manage registered users",
      link: "/admin/users",
      icon: "👥",
    },
    {
      title: "Plan Inquiries",
      desc: "Manage website package inquiries",
      link: "/admin/plans",
      icon: "💼",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "30px 20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#1e293b",
            fontSize: "32px",
          }}
        >
          Admin Dashboard
        </h1>

        <p
          style={{
            marginTop: "10px",
            color: "#64748b",
          }}
        >
          Welcome to SRJ Global Technologies Admin Panel
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.link}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "25px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                transition: "0.3s",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "15px",
                }}
              >
                {card.icon}
              </div>

              <h2
                style={{
                  margin: 0,
                  color: "#0f172a",
                  fontSize: "24px",
                }}
              >
                {card.title}
              </h2>

              <p
                style={{
                  marginTop: "10px",
                  color: "#64748b",
                  lineHeight: "1.6",
                }}
              >
                {card.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Stats Section */}
      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1452ff",
            color: "#fff",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>Total Contacts</h3>
          <h1>{contacts.length}</h1>
        </div>

        <div
          style={{
            background: "#f59e0b",
            color: "#fff",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>Total Users</h3>
          <h1>{users.length}</h1>
        </div>

        <div
          style={{
            background: "#8b5cf6",
            color: "#fff",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>Total Plan Inquiries</h3>
          <h1>{plans.length}</h1>
        </div>
      </div>
      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          overflowX: "auto",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#1e293b",
          }}
        >
          Recent Plan Inquiries
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#f1f5f9",
              }}
            >
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Plan</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Company</th>
              <th style={thStyle}>Project</th>
              <th style={thStyle}>Budget</th>
            </tr>
          </thead>

          <tbody>
            {plans.map((item) => (
              <tr key={item.id}>
                <td style={tdStyle}>{item.full_name}</td>
                <td style={tdStyle}>{item.plan_name}</td>
                <td style={tdStyle}>{item.email}</td>
                <td style={tdStyle}>{item.phone}</td>
                <td style={tdStyle}>{item.company_name}</td>
                <td style={tdStyle}>{item.project_type}</td>
                <td style={tdStyle}>{item.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "left",
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ddd",
};
export default AdminDashboard;
