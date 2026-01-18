// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import AdminLogin from "./pages/AdminLogin";
// import Home from "./pages/Home";
// import Portfolio from "./pages/Portfolio";
// import AdminUpload from "./pages/AdminUpload";
// import AdminPortfolio from "./pages/AdminPortfolio";
// import ProjectDetail from "./pages/ProjectDetail";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-white text-zinc-900">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/portfolio/:id" element={<ProjectDetail />} />
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/upload" element={<AdminUpload />} />
//         <Route path="/admin/portfolio" element={<AdminPortfolio />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import AdminUpload from "./pages/AdminUpload";
import AdminPortfolio from "./pages/AdminPortfolio";
import ProjectDetail from "./pages/ProjectDetail";

// New: The Conversion Booster
import WhatsAppBubble from "./components/WhatsAppBubble";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500/30">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/upload" element={<AdminUpload />} />
          <Route path="/admin/portfolio" element={<AdminPortfolio />} />
        </Routes>
      </main>

      <Footer />

      {/* This stays fixed on every page */}
      <WhatsAppBubble />
    </div>
  );
}
