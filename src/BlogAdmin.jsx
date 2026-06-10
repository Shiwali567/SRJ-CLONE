import { useEffect, useState } from "react";
import axios from "axios";

function BlogAdmin() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>📝 Blog Admin Panel</h1>
        <p style={styles.subTitle}>Manage all your blogs here</p>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Description</th>
            </tr>
          </thead>

          <tbody>
            {blogs.length === 0 ? (
              <tr>
                <td colSpan="3" style={styles.noData}>
                  No Blogs Found
                </td>
              </tr>
            ) : (
              blogs.map((b) => (
                <tr key={b.id} style={styles.tr}>
                  <td style={styles.td}>{b.id}</td>
                  <td style={styles.tdTitle}>{b.title}</td>
                  <td style={styles.td}>{b.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#f4f7fb",
    minHeight: "100vh",
    fontFamily: "Arial",
  },

  header: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },

  title: {
    margin: 0,
    fontSize: "28px",
    color: "#111827",
  },

  subTitle: {
    marginTop: "5px",
    color: "#6b7280",
  },

  tableWrapper: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },

  th: {
    background: "#1452ff",
    color: "#fff",
    padding: "14px",
    textAlign: "left",
    fontSize: "15px",
  },

  tr: {
    borderBottom: "1px solid #eee",
  },

  td: {
    padding: "14px",
    color: "#374151",
  },

  tdTitle: {
    padding: "14px",
    fontWeight: "600",
    color: "#111827",
  },

  noData: {
    textAlign: "center",
    padding: "20px",
    color: "#6b7280",
  },
};

export default BlogAdmin;
