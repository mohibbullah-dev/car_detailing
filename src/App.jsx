import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import AdminUpload from "./pages/AdminUpload";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/upload" element={<AdminUpload />} />
      </Routes>
      <Footer />
    </div>
  );
}

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Portfolio from "./pages/Portfolio";
// import AdminUpload from "./pages/AdminUpload";
// import AdminLogin from "./pages/AdminLogin";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/portfolio" element={<Portfolio />} />
//       <Route path="/admin/login" element={<AdminLogin />} />
//       <Route path="/admin/upload" element={<AdminUpload />} />
//     </Routes>
//   );
// }
