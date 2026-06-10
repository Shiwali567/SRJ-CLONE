import { useState } from "react";
import { FaWhatsapp, FaRobot, FaFacebookMessenger } from "react-icons/fa";
import { Link } from "react-router-dom";

function FloatingButtons() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to SRJ Global Technologies. How can I assist you today?",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const currentMessage = message;

    // user message add
    setMessages((prev) => [...prev, { sender: "user", text: currentMessage }]);

    setMessage("");

    // loading start
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chatbot/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentMessage }),
      });

      // ❗ check response
      if (!response.ok) {
        throw new Error("Server response not OK");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "No reply received" },
      ]);
    } catch (error) {
      console.log("Chatbot Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Server not connected or API failed",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* Chat Box */}
      {open && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "90px",
            width: "350px",
            height: "500px",
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,.2)",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#1d4ed8",
              color: "#fff",
              padding: "18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ margin: 0 }}>SRJ Chatbot</h3>

            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              height: "370px",
              overflowY: "auto",
              padding: "15px",
              background: "#f8fafc",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    maxWidth: "75%",
                    padding: "10px 15px",
                    borderRadius: "15px",
                    background: msg.sender === "user" ? "#1d4ed8" : "#e5e7eb",
                    color: msg.sender === "user" ? "#fff" : "#000",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  padding: "10px 15px",
                  borderRadius: "15px",
                  background: "#e5e7eb",
                }}
              >
                Typing...
              </div>
            </div>
          )}

          {/* Input */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              gap: "10px",
              borderTop: "1px solid #ddd",
            }}
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "25px",
                border: "1px solid #ddd",
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                padding: "12px 18px",
                borderRadius: "25px",
                border: "none",
                background: "#1d4ed8",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 9999,
        }}
      >
        {/* AI Bot */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            border: "none",
            background: "#7c3aed",
            color: "#fff",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          <FaRobot />
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            background: "#25D366",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
          }}
        >
          <FaWhatsapp />
        </a>

        {/* Messenger */}
        <Link
          to="/contact"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            background: "#2563eb",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            textDecoration: "none",
          }}
        >
          <FaFacebookMessenger />
        </Link>
      </div>
    </>
  );
}

export default FloatingButtons;
