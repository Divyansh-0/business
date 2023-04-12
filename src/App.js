import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

import Plans from "./pages/plans/Plans";

import NotFound from "./pages/notFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import { useState } from "react";
function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  function handleToggle() {
    setIsLightMode(!isLightMode);
    document.body.style.background = isLightMode
      ? "black"
      : "hsl(var(--gray-hue), 48%, 15%)";
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.style.background = isLightMode ? "#525252" : "var(--color-gray-500)";
    });
  }
  return (
    <div className="App">
      <Navbar isLightMode={isLightMode} />
      <button onClick={handleToggle}>Dark Mode</button>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="plans" element={<Plans />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
