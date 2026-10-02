import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Demos from "./pages/Demos";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import SalonDemo from "./pages/SalonDemo";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/demos/salon" element={<SalonDemo/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;