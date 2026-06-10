import { useEffect, useState } from "react";
import axios from "axios";

function ContactAdmin() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setContacts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      fetchContacts();
    } catch (err) {
      console.log(err);
    }
  };

  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Arial",
      background: "#f4f6f8",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      background: "#fff",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
    th: {
      background: "#2c3e50",
      color: "white",
      padding: "12px",
      textAlign: "left",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
    },
    rowHover: {
      cursor: "pointer",
    },
    deleteBtn: {
      background: "red",
      color: "white",
      padding: "6px 12px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📩 Contact Admin Panel</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Service</th>
            <th style={styles.th}>Message</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td style={styles.td}>{c.id}</td>
              <td style={styles.td}>
                {c.first_name} {c.last_name}
              </td>
              <td style={styles.td}>{c.email}</td>
              <td style={styles.td}>{c.phone}</td>
              <td style={styles.td}>{c.service}</td>
              <td style={styles.td}>{c.message}</td>
              <td style={styles.td}>
                <button
                  style={styles.deleteBtn}
                  onClick={() => deleteContact(c.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactAdmin;
