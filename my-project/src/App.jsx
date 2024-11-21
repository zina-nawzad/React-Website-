import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Documentaries from "./components/Documentaries";
import Series from "./components/Series";
import Translators from "./components/Translators";

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
    <div className={isDarkMode ? "dark" : "light"}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Documentaries isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Series isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Translators isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
