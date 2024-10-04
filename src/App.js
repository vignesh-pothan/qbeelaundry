import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";

import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

import Ourservice from "./components/Ourservice";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/OurService" element={<Ourservice />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            {/* Service routes */}
            <Route path="/OurService" element={<Ourservice />} />
            <Route path="/OurService" element={<Ourservice />} />
            <Route path="/OurService" element={<Ourservice />} />
            <Route path="/OurService" element={<Ourservice />} />
            <Route path="/OurService" element={<Ourservice />} />
            <Route path="/OurService" element={<Ourservice />} />
            <Route path="/OurService" element={<Ourservice />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
