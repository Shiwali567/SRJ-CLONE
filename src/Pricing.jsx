import { useState } from "react";

function Pricing() {
  const categories = [
    "Website",
    "Mobile App",
    "Dashboard",
    "ERP/CRM",
    "SEO",
    "Graphics",
    "WordPress",
    "Shopify",
    "Bulk",
    "Ads",
    "Gaming",
  ];

  const plans = [
    {
      name: "Basic",
      price: 14999,
      features: ["4–5 pages", "Contact form", "Responsive", "Basic SEO"],
    },
    {
      name: "Standard",
      price: 24999,
      features: ["7–10 pages", "WhatsApp + Map", "Dynamic sections"],
    },
    {
      name: "Advanced",
      price: 39999,
      features: ["UI/UX", "Animations", "Blog", "Chatbot", "Domain + Hosting"],
    },
    {
      name: "Premium",
      price: 69999,
      features: ["E-commerce/Booking", "Admin Panel", "Analytics"],
    },
  ];

  const addOns = [
    { name: "Chatbot (Web/App)", price: 2999 },
    { name: "WhatsApp Automation", price: 2499 },
    { name: "Payment Gateway Integration", price: 3999 },
    { name: "Admin Panel", price: 5999 },
    { name: "Hosting + Domain (1 yr)", price: 2999 },
    { name: "Content Writing (per page)", price: 1299 },
    { name: "Email Setup + SMTP", price: 1999 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Website");
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [days, setDays] = useState(7);

  const toggleAddon = (addon) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const addonTotal = selectedAddons.reduce((acc, item) => acc + item.price, 0);

  let total = selectedPlan.price + addonTotal;

  if (days < 5) {
    total += total * 0.2;
  }

  return (
    <>
      <style>{`
      *{
        box-sizing:border-box;
      }

      .pricingContainer{
        min-height:100vh;
        background:linear-gradient(135deg,#f7f7f7 0%, #ffffff 50%, #eef4ff 100%);
        padding:35px;
        font-family:'Poppins',sans-serif;
      }

      .searchBox{
        display:flex;
        width:700px;
        background:white;
        border-radius:60px;
        overflow:hidden;
        border:1px solid #e5e7eb;
        box-shadow:0px 8px 25px rgba(0,0,0,0.06);
      }

      .mainBox{
        background:white;
        border-radius:35px;
        padding:50px;
        box-shadow:0px 10px 40px rgba(0,0,0,0.08);
      }

      .pricingTitle{
        font-size:45px;
        line-height:70px;
        color:#4f46e5;
        font-weight:800;
      }

      .totalPrice{
        font-size:72px;
        color:#00a63e;
      }

      @media(max-width:768px){

        .pricingContainer{
          padding:20px;
        }

        .searchBox{
          width:100%;
        }

        .mainBox{
          padding:25px;
        }

        .pricingTitle{
          font-size:30px;
          line-height:42px;
        }

        .totalPrice{
          font-size:42px;
        }
      }

      @media(max-width:500px){

        .pricingContainer{
          padding:12px;
        }

        .searchBox{
          flex-direction:column;
          width:100%;
          border-radius:20px;
        }

        .pricingTitle{
          font-size:24px;
          line-height:34px;
        }

        .totalPrice{
          font-size:34px;
        }
      }
    `}</style>
      <div
        className="pricingContainer"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#f7f7f7 0%, #ffffff 50%, #eef4ff 100%)",
          padding: "35px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* SEARCH */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <div
            className="searchBox"
            style={{
              display: "flex",
              width: "700px",
              background: "white",
              borderRadius: "60px",
              overflow: "hidden",
              border: "1px solid #e5e7eb",
              boxShadow: "0px 8px 25px rgba(0,0,0,0.06)",
            }}
          >
            <input
              type="text"
              placeholder="🔍 Search service, tier or feature..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: "20px 25px",
                fontSize: "16px",
                background: "transparent",
              }}
            />

            <button
              className="searchBtn"
              style={{
                border: "none",
                padding: "0 35px",
                background: "linear-gradient(90deg,#4f46e5,#4338ca)",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>
        </div>
        {/* MAIN BOX */}
        <div
          className="mainBox"
          style={{
            background: "white",
            borderRadius: "35px",
            padding: "50px",
            boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
          }}
        >
          {/* TITLE */}
          <div style={{ textAlign: "center" }}>
            <h1
              className="pricingTitle"
              style={{
                fontSize: "45px",
                lineHeight: "85px",
                color: "#4f46e5",
                fontWeight: "800",
                marginBottom: "20px",
              }}
            >
              SRJ Software Company – Pricing Chart 2025
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#64748b",
                maxWidth: "900px",
                margin: "auto",
                lineHeight: "38px",
              }}
            >
              🚀 Smart pricing, premium quality — tailored tech & marketing
              packages for startups, MSMEs, and local brands.
            </p>
          </div>

          {/* CATEGORY BUTTONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "5px",
              marginTop: "45px",
              marginBottom: "55px",
            }}
          >
            {categories.map((item, index) => (
              <button
                key={index}
                className="categoryBtn"
                onClick={() => setSelectedCategory(item)}
                style={{
                  padding: "14px 28px",
                  borderRadius: "40px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "0.4s",
                  transform:
                    selectedCategory === item ? "scale(1.08)" : "scale(1)",
                  background:
                    selectedCategory === item
                      ? "linear-gradient(90deg,#4f46e5,#4338ca)"
                      : "#f1f5f9",
                  color: selectedCategory === item ? "white" : "#4338ca",
                  boxShadow:
                    selectedCategory === item
                      ? "0px 10px 25px rgba(79,70,229,0.35)"
                      : "0px 4px 12px rgba(0,0,0,0.06)",
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* PRICING CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
              marginBottom: "45px",
            }}
          >
            {plans.map((plan, index) => (
              <div
                key={index}
                onClick={() => setSelectedPlan(plan)}
                style={{
                  background:
                    selectedPlan.name === plan.name
                      ? "linear-gradient(180deg,#eef2ff,#dbeafe)"
                      : "white",
                  border:
                    selectedPlan.name === plan.name
                      ? "2px solid #4f46e5"
                      : "1px solid #e5e7eb",
                  borderRadius: "25px",
                  padding: "32px",
                  cursor: "pointer",
                  transition: "0.4s",
                  transform:
                    selectedPlan.name === plan.name
                      ? "translateY(-8px)"
                      : "translateY(0px)",
                  boxShadow:
                    selectedPlan.name === plan.name
                      ? "0px 15px 35px rgba(79,70,229,0.18)"
                      : "0px 8px 18px rgba(0,0,0,0.05)",
                }}
              >
                <h2
                  style={{
                    fontSize: "32px",
                    color: "#4338ca",
                    marginBottom: "15px",
                  }}
                >
                  {plan.name}
                </h2>

                <h1
                  style={{
                    fontSize: "28px",
                    color: "#2563eb",
                    marginBottom: "22px",
                  }}
                >
                  ₹{plan.price.toLocaleString()}+
                </h1>

                {plan.features.map((feature, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "18px",
                      color: "#334155",
                      marginBottom: "12px",
                    }}
                  >
                    ✔ {feature}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div
            style={{
              marginBottom: "50px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <label
              style={{
                fontSize: "22px",
                color: "#4338ca",
                fontWeight: "600",
              }}
            >
              ⏱ Delivery Timeline (days):
            </label>

            <input
              type="number"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              style={{
                width: "120px",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                fontSize: "18px",
                textAlign: "center",
              }}
            />
          </div>

          {/* ADDONS */}
          <div style={{ marginBottom: "55px" }}>
            <h2
              style={{
                fontSize: "24px",
                color: "#4338ca",
                marginBottom: "25px",
              }}
            >
              Add-On Services
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                gap: "15px",
              }}
            >
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  onClick={() => toggleAddon(addon)}
                  style={{
                    background: selectedAddons.includes(addon)
                      ? "#eef2ff"
                      : "white",
                    border: selectedAddons.includes(addon)
                      ? "2px solid #4f46e5"
                      : "1px solid #d1d5db",
                    borderRadius: "18px",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedAddons.includes(addon)}
                      readOnly
                    />

                    <span
                      style={{
                        fontSize: "16px",
                        color: "#1e293b",
                      }}
                    >
                      {addon.name}
                    </span>
                  </div>

                  <span
                    style={{
                      color: "#2563eb",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                  >
                    ₹{addon.price.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* TOTAL */}
          <div
            style={{
              background: "linear-gradient(90deg,#d1fae5,#dbeafe)",
              borderRadius: "30px",
              padding: "45px",
              textAlign: "center",
              marginBottom: "60px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            <h2
              style={{
                color: "#16a34a",
                fontSize: "24px",
                marginBottom: "15px",
              }}
            >
              💰 Total Price
            </h2>

            <h1
              className="totalPrice"
              style={{
                fontSize: "33px",
                color: "#00a63e",
                marginBottom: "12px",
              }}
            >
              ₹{Math.round(total).toLocaleString()}
            </h1>

            <p
              style={{
                color: "#475569",
                fontSize: "14px",
              }}
            >
              *Final price may vary for custom/enterprise requests
            </p>
          </div>

          {/* POLICY */}
          <div>
            <h2
              style={{
                fontSize: "24px",
                color: "#4338ca",
                marginBottom: "25px",
              }}
            >
              Dynamic Pricing Policy
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
                gap: "20px",
              }}
            >
              {[
                ["Urgent Timeline (< 5 days)", "+20–30%"],
                ["Bulk Orders (3+ Services)", "10–20% Discount"],
                ["Weekend/Holiday Delivery", "+15%"],
                ["Custom/Enterprise Request", "Custom Quote"],
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "#f8fafc",
                    borderRadius: "18px",
                    padding: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <span
                    style={{
                      color: "#334155",
                      fontSize: "16px",
                    }}
                  >
                    {item[0]}
                  </span>

                  <span
                    style={{
                      color: "#4f46e5",
                      fontWeight: "700",
                      fontSize: "16px",
                    }}
                  >
                    {item[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#f8fbff",
            border: "1px solid #dbeafe",
            borderRadius: "30px",
            padding: "40px",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              color: "#2563eb",
              marginBottom: "25px",
              fontWeight: "800",
            }}
          >
            Why Choose This Service?
          </h3>

          <ul
            style={{
              paddingLeft: "25px",
              color: "#475569",
              lineHeight: "2.2",
              fontSize: "16px",
            }}
          >
            <li>Modern and scalable solutions</li>
            <li>Professional expert support</li>
            <li>Fast and secure implementation</li>
            <li>Premium user experience</li>
            <li>Business-focused strategy</li>
            <li>Long-term growth focused development</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Pricing;
