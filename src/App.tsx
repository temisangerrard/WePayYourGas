import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import StudioGuide from "./pages/StudioGuide";

export default function App() {
  return (
    <Routes>
      <Route path="/studio-guide" element={<StudioGuide />} />
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/print/:id" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
