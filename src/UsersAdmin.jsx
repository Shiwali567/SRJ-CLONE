import { useEffect, useState } from "react";
import axios from "axios";

function UsersAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👥 Users Admin Panel</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td style={styles.td}>{u.id}</td>
              <td style={styles.td}>{u.name}</td>
              <td style={styles.td}>{u.email}</td>
              <td style={styles.td}>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#f4f7fc",
    minHeight: "100vh",
  },
  title: {
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    background: "#fff",
    borderCollapse: "collapse",
  },
  th: {
    background: "#1452ff",
    color: "#fff",
    padding: "12px",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #eee",
  },
};

export default UsersAdmin;
