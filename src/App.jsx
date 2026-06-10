import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogAdmin from "./BlogAdmin";
import UsersAdmin from "./UsersAdmin";
import BasicPlan from "./BasicPlan";
import PlanInquiries from "./PlanInquiries";
import StandardPlan from "./StandardPlan";
import AdvancedPlan from "./AdvancedPlan";
import PremiumPlan from "./PremiumPlan";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Industries from "./Industries";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Pricing from "./Pricing";
import ContactAdmin from "./ContactAdmin";
import CookiesPolicy from "./CookiesPolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import Login from "./Login";
import Register from "./Register";

import AdminDashboard from "./AdminDashboard";
import AdminRoute from "./AdminRoute";
import TermsConditionss from "./TermsConditions";
function App() {
  const location = useLocation();
  // const isHome = location.pathname === "/";
  const fullWidthPages = [
    "/",
    "/cookies-policy",
    "/PrivacyPolicy",
    "/TermsConditions",
  ].includes(location.pathname);

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
          maxWidth: fullWidthPages ? "100%" : "1400px",
          margin: "105px auto 0",
          padding: fullWidthPages ? "0" : "40px 20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing/basic" element={<BasicPlan />} />
          <Route path="/pricing/standard" element={<StandardPlan />} />
          <Route path="/pricing/advanced" element={<AdvancedPlan />} />
          <Route path="/pricing/premium" element={<PremiumPlan />} />
          <Route path="/pricing/ PlanInquiries" element={<PlanInquiries />} />

          <Route
            path="/admin/contacts"
            element={
              <AdminRoute>
                <ContactAdmin />
              </AdminRoute>
            }
          />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsConditions" element={<TermsConditionss />} />
          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <UsersAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/blogs"
            element={
              <AdminRoute>
                <BlogAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/plans"
            element={
              <AdminRoute>
                <PlanInquiries />
              </AdminRoute>
            }
          />
          {/* ADMIN ROUTE FIXED */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
