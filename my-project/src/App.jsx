import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Documentaries from "./components/Documentaries";
import DocumenterisFilter from "./Pages/documenterisFilter";
import SeriesFilter from "./Pages/SeriesFilter";
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
          path="/documentaries/:id"
          element={<Documentaries isDarkMode={isDarkMode} />}
        />

        <Route
          path="/DocumenterisFilter"
          element={<DocumenterisFilter isDarkMode={isDarkMode} />}
        />
        <Route path="/Series" element={<Series isDarkMode={isDarkMode} />} />
        <Route
          path="/SeriesFilter"
          element={<SeriesFilter isDarkMode={isDarkMode} />}
        />
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
