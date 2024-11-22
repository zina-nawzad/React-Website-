import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Documentaries from "./components/Documentaries";
import Series from "./components/Series";
import Translators from "./components/Translators";
import Footer from "./components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <BrowserRouter>
      {/* Navbar is outside Routes to show on all pages */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero isDarkMode={isDarkMode} />
              <Documentaries isDarkMode={isDarkMode} />
              <Series isDarkMode={isDarkMode} />
              <Translators isDarkMode={isDarkMode} />
            </>
          }
        />
        <Route
          path="/documentaries"
          element={<Documentaries isDarkMode={isDarkMode} />}
        />
        <Route path="/series" element={<Series isDarkMode={isDarkMode} />} />
        <Route
          path="/translators"
          element={<Translators isDarkMode={isDarkMode} />}
        />
      </Routes>
      <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </BrowserRouter>
  );
};

export default App;
