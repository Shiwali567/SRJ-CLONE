import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Industries from "./Industries";
import Home from "./Home";
import Pricing from "./Pricing";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";

function App() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        background: "#f5f7fb",
      }}
    >
      <Navbar />

      <main
        style={{
          flex: 1,
          width: "100%",
          margin: "0 auto",
          marginTop: "105px",

          maxWidth: isHome ? "100%" : "1400px",

          padding: isHome ? "0" : "40px 20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/Industries" element={<Industries />} />

          <Route path="/Blog" element={<Blog />} />

          <Route path="/blog-details" element={<BlogDetails />} />

          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
