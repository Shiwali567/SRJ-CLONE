import { useEffect, useState } from "react";
import axios from "axios";

function PlanInquiries() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/plans")
      .then((res) => setPlans(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={container}>
      {/* Header */}
      <div style={headerBox}>
        <h1 style={title}>Plan Inquiries</h1>
        <p style={subtitle}>All website package requests submitted by users</p>
      </div>

      {/* Table Box */}
      <div style={tableBox}>
        <table style={table}>
          <thead>
            <tr style={theadRow}>
              <th style={th}>ID</th>
              <th style={th}>Name</th>
              <th style={th}>Plan</th>
              <th style={th}>Email</th>
              <th style={th}>Phone</th>
              <th style={th}>Company</th>
              <th style={th}>Project</th>
              <th style={th}>Budget</th>
            </tr>
          </thead>

          <tbody>
            {plans.length > 0 ? (
              plans.map((item, index) => (
                <tr key={index} style={tr}>
                  <td style={td}>{item.id}</td>
                  <td style={td}>{item.full_name}</td>
                  <td style={tdBadge}>{item.plan_name}</td>
                  <td style={td}>{item.email}</td>
                  <td style={td}>{item.phone}</td>
                  <td style={td}>{item.company_name}</td>
                  <td style={td}>{item.project_type}</td>
                  <td style={td}>{item.budget}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={td} colSpan="8">
                  No inquiries found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlanInquiries;

/* ================= INLINE CSS ================= */

const container = {
  minHeight: "100vh",
  background: "#f4f7fc",
  padding: "30px",
  fontFamily: "Arial",
};

const headerBox = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "20px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};

const title = {
  margin: 0,
  fontSize: "28px",
  color: "#1e293b",
};

const subtitle = {
  marginTop: "8px",
  color: "#64748b",
};

const tableBox = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  overflowX: "auto",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const theadRow = {
  background: "#e2e8f0",
};

const th = {
  padding: "12px",
  textAlign: "left",
  fontSize: "14px",
  color: "#0f172a",
};

const tr = {
  borderBottom: "1px solid #e5e7eb",
};

const td = {
  padding: "12px",
  fontSize: "14px",
  color: "#334155",
};

const tdBadge = {
  padding: "12px",
  fontSize: "13px",
  fontWeight: "bold",
  color: "#fff",
  background: "#4f46e5",
  borderRadius: "6px",
};
